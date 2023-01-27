import { useHome } from "./Home.hooks";

import { DefaultLayout } from "layouts/DefaultLayout";

import { ListItem } from "./components/Item";
import * as S from "./Home.styles";
import * as SG from "global.styles";

function Home(): React.ReactElement {
  const { users } = useHome();

  return (
    <DefaultLayout>
      <S.Container>
        {!users ? (
          <>Loading...</>
        ) : (
          <SG.List>
            {users.map((user) => (
              <ListItem key={user.id} data={user} />
            ))}
          </SG.List>
        )}
      </S.Container>
    </DefaultLayout>
  );
}

export { Home };
