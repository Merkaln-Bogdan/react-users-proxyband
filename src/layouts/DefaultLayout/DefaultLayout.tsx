import { Headline } from "components/Headline";

import * as S from "./DefaultLayout.styled";

export type DefaultLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children, title } = { ...props };

  return (
    <S.Container>
      <Headline tag="h1">{title}</Headline>
      {children}
    </S.Container>
  );
};
