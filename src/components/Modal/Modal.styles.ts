import styled from "styled-components";

import { Button } from "components/Button";

const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 9999999999;
`;

const Box = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  padding: 40px 10px;

  transform: translate(-50%, -50%);

  background-color: #ffffff;
  border-radius: 10px;
`;

const BoxInner = styled.div`
  position: relative;

  max-height: 55vh;
  padding: 30px 0;

  overflow-y: scroll;
`;

const CloseButton = styled(Button)`
  position: absolute;

  top: 10px;
  right: 20px;
`;

export { Container, CloseButton, Box, BoxInner };
