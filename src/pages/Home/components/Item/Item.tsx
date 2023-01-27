import { useNavigate } from "react-router-dom";

import { Button } from "components/Button";

import { UserType } from "types/user.type";

import * as SG from "global.styles";
import * as S from "./Item.styles";

type ItemProps = {
  data: UserType;
};

function ListItem(props: ItemProps): React.ReactElement {
  const {
    data: { id, name },
  } = { ...props };
  const navigate = useNavigate();
  return (
    <SG.ListItem key={id} isPosts>
      {name}
      <S.Wrapper>
        <Button
          motive="m1"
          // we can use navigate from useNavigate
          onClick={() => navigate(`/${id}/posts`)}
        >
          Posts
        </Button>
        <Button
          motive="m2"
          // or we can use button as link
          asLink
          to={`/${id}/albums`}
        >
          Albums
        </Button>
      </S.Wrapper>
    </SG.ListItem>
  );
}

export { ListItem };
