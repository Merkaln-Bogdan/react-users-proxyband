import { useAppSelector } from "redux/redux.hooks";
import { usersSelector } from "redux/slices/user.slice";

const useHome = () => {
  const users = useAppSelector(usersSelector.selectAll);

  return {
    users,
  };
};
export { useHome };
