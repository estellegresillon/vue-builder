import type { PropType } from "vue";
import styled from "vue3-styled-components";

import { ISection } from "@/types";
import { getTextAlign } from "@/utils/helpers";

const props = { section: Object as PropType<ISection>, isInBuilder: Boolean };

export const TextBlockWrapper = styled("div", props)`
  display: flex;
  min-height: ${({ section }) => `${section?.attributes.height}px`};
  pointer-events: ${({ isInBuilder }) => (isInBuilder ? "none" : "")};
  width: 100%;
`;

export const TextBlockContent = styled("div", props)`
  align-items: ${({ section }) =>
    `${section?.attributes.alignment?.alignItems}`};
  background: ${({ section }) => `${section?.attributes.bgColor}`};
  color: ${({ section }) => `${section?.attributes.textColor}`};
  display: flex;
  flex-direction: column;
  justify-content: ${({ section }) =>
    `${section?.attributes.alignment?.justifyContent}`};
  margin: 5% 10%;
  text-align: ${({ section }) =>
    `${getTextAlign(section?.attributes.alignment?.alignItems)}`};
  width: 80%;

  h2 {
    font-size: 48px;
    margin: 20px !important;
    width: 100%;
  }

  p {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    margin: 10%;

    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }

  body#force-mobile & {
    margin: 10%;

    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }
`;
