import { useHome } from "./Home.hooks";

import { DefaultLayout } from "layouts/DefaultLayout";

import * as S from "./Home.styled";

function Home(): React.ReactElement {
  const { users } = useHome();
  return (
    <DefaultLayout>
      <S.Container>
        {!users ? (
          <>Loading...</>
        ) : (
          <S.List>
            {users.map((user) => (
              <S.ListItem key={user.id}>{user.name}</S.ListItem>
            ))}
          </S.List>
        )}
      </S.Container>
    </DefaultLayout>
  );
}

export { Home };
