import styled from "styled-components";

import { pickMotive, ButtonMotives } from "./buttonMotives";

export type StyledButtonProps = {
  motive?: ButtonMotives;
};

const Button = styled.button<StyledButtonProps>`
  margin: 0;
  padding: 5px 10px;

  background-color: transparent;
  color: inherit;
  border: none;

  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;

  ${({ motive }) => motive && pickMotive(motive)};
`;

export { Button };
