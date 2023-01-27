import styled from "styled-components";

import { List } from "global.styles";

const ListModal = styled(List)`
  padding: 0 25px;

  @media (max-width: 540px) {
    padding: 0;
  }
`;

export { ListModal };
