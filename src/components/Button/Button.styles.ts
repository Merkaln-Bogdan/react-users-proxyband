import styled from "styled-components";

import { pickMotive, ButtonMotives } from "./buttonMotives";

export type StyledButtonProps = {
  motive?: ButtonMotives;
};

const Button = styled.button<StyledButtonProps>`
  margin: 0;
  padding: 0;

  background-color: transparent;
  color: inherit;
  border: none;

  text-decoration: none;

  cursor: pointer;

  ${({ motive }) => motive && pickMotive(motive)};
`;

export { Button };
