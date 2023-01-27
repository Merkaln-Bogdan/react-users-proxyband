import { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch } from "redux/redux.hooks";

import { Post } from "./pages/Post";

import { Home } from "./pages/Home";
import { routes } from "./data/routes";
import { usersDataService } from "services";
import { setUsers } from "redux/slices/user.slice";
import { Albums } from "pages/Albums";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    usersDataService.getAllUsers().then((res) => dispatch(setUsers(res.data)));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.home} />} />
      <Route index path="/" element={<Home />} />

      <Route path="/:userId/posts" element={<Post />} />
      <Route path="/:userId/albums" element={<Albums />} />
    </Routes>
  );
}

export default App;
