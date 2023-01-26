import styled from "styled-components";
export type BoardStyledProps = {
  asAddCard?: boolean;
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListItem = styled.li`
  display: flex;
  margin: 5px 0;
`;

export { Container, List, ListItem };
