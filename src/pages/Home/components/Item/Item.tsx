import { useNavigate } from "react-router-dom";

import { Button } from "components/Button";

import { UserType } from "types/user.type";

import * as S from "./Item.styles";
// import { ReactModal } from "components/ReactModal";
// import { useState } from "react";
// import { Albums } from "pages/Albums";

type ItemProps = {
  data: UserType;
};

function ListItem(props: ItemProps): React.ReactElement {
  const {
    data: { id, name },
  } = { ...props };
  // const [isVisibleModal, setIsVisibleModal] = useState(false);
  const navigate = useNavigate();

  return (
    <S.Item key={id} isPosts>
      {name}
      <S.Wrapper>
        <Button
          motive="posts"
          // we can use navigate from useNavigate
          onClick={() => navigate(`/${id}/posts`)}
        >
          Posts
        </Button>
        <Button
          motive="albums"
          // or we can use button as link
          asLink
          to={`/${id}/albums`}
          // or we can set open modal window

          // onClick={() => setIsVisibleModal(true)}
        >
          Albums
        </Button>
      </S.Wrapper>

      {/* <ReactModal
        isOpen={isVisibleModal}
        closeModal={() => setIsVisibleModal(false)}
      >
        
        <Albums id={id} />
      </ReactModal> */}
    </S.Item>
  );
}

export { ListItem };
