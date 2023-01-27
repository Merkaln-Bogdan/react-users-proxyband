import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "redux/redux.hooks";
import { setPosts, postsSelector } from "redux/slices/post.slice";

import { usersDataService } from "services";

const usePost = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();
  console.log(userId);
  const posts = useAppSelector(postsSelector.selectAll);

  useEffect(() => {
    usersDataService
      .getUserPosts(userId!)
      .then((res) => dispatch(setPosts(res.data)));
  }, [userId, dispatch]);

  return { posts };
};

export { usePost };
