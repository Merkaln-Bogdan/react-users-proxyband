import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "redux/redux.hooks";
import { albumsSelector, setAlbums } from "redux/slices/album.slice";

import { usersDataService } from "services";

const useAlbums = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  const albums = useAppSelector(albumsSelector.selectAll);

  useEffect(() => {
    usersDataService
      .getUserAlbums(userId!)
      .then((res) => dispatch(setAlbums(res.data)));
  }, [userId, dispatch]);

  return { albums };
};

export { useAlbums };
