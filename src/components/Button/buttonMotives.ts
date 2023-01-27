import { css } from "styled-components";

const motives = {
  m1: css`
    padding: 2px 4px;
    text-transform: uppercase;

    font-weight: 300;
    border: 1px solid #363636;
    border-radius: 5px;
    color: #363636;
  `,
  m2: css`
    padding: 2px 4px;
    text-transform: uppercase;

    font-weight: 300;
    border: 1px solid red;
    background-color: red;
    border-radius: 5px;
    color: #ffffff;
  `,
};

export type ButtonMotives = keyof typeof motives;

const pickMotive = (motive: ButtonMotives) => motives[motive];

export { pickMotive };
