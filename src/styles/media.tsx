import { css, CSSObject } from "styled-components";

const sizes: { [key: string]: number } = {
    small: 616,
    medium:936,
    large: 1149,
    xlarge:1578,
};

type MediaQueries = { [key in keyof typeof sizes]: (...args: [TemplateStringsArray, ...CSSObject[]]) => ReturnType<typeof css> };

const media: MediaQueries = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args: [TemplateStringsArray, ...CSSObject[]]) => css`
       @media screen and (max-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `;
    return acc;
}, {} as MediaQueries);

export default media