import { useRef } from "react";
import { useClickAway, useLockBodyScroll } from "react-use";

import { Portal } from "components/Portal";

import * as S from "./Modal.styles";

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

const defaultProps: Partial<ModalProps> = {};

export function Modal(props: ModalProps): React.ReactElement {
  const { children, onClose } = { ...defaultProps, ...props };

  const ref = useRef(null);

  useClickAway(ref, onClose!);
  useLockBodyScroll(true);

  return (
    <Portal>
      <S.Container>
        <S.Box ref={ref}>
          <S.CloseButton onClick={onClose} motive="close">
            &#215;
          </S.CloseButton>

          <S.BoxInner>{children}</S.BoxInner>
        </S.Box>
      </S.Container>
    </Portal>
  );
}
