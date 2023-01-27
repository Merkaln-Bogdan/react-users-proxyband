import styled from "styled-components";

type GlobalStyledProps = {
  isPosts?: boolean;
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListItem = styled.li<GlobalStyledProps>`
  display: flex;
  flex-direction: ${({ isPosts }) => isPosts && "column"};
  margin: 5px 0;
`;

export { List, ListItem };
