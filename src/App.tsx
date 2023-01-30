import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
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
      <Route index path={routes.home} element={<Home />} />

      <Route path={routes.post} element={<Post />} />

      <Route path={routes.albums} element={<Albums />} />
    </Routes>
  );
}

export default App;
