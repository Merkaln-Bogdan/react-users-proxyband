import { css } from "styled-components";

const motives = {
  posts: css`
    border: 1px solid #363636;
    border-radius: 5px;
    background-color: #f5f3d7;
  `,
  albums: css`
    background-color: #197f7f;
    border-radius: 5px;
    color: #ffffff;
  `,
  close: css`
    background-color: #999999;
    border-radius: 5px;
    color: #ffffff;
  `,
};

export type ButtonMotives = keyof typeof motives;

const pickMotive = (motive: ButtonMotives) => motives[motive];

export { pickMotive };
