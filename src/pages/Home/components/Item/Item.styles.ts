import { ListItem } from "global.styles";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 180px;
  margin: 10px 0;
`;

const Item = styled(ListItem)`
  font-size: 20px;
  font-weight: 600;
`;

export { Wrapper, Item };
