import { Link } from "react-router-dom";

import * as S from "./Button.styles";

type ButtonProps = {
  onClick?: () => void;
  asLink?: boolean;
  to?: string;
  type?: "button" | "submit";
  className?: string;
  motive: "m1" | "m2";
  children: React.ReactNode;
};

const defaultProps: Partial<ButtonProps> = {
  motive: "m1",
  type: "button",
  className: undefined,
};

export function Button(props: ButtonProps): React.ReactElement {
  const { onClick, motive, to, children, asLink, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <S.Button
      className={className}
      to={to}
      as={asLink ? Link : "button"}
      onClick={onClick}
      motive={motive}
    >
      {children}
    </S.Button>
  );
}
