import type { PropType } from "vue";
import styled from "vue3-styled-components";

import { ISection } from "@/types";
import { getTextAlign } from "@/utils/helpers";

const props = { section: Object as PropType<ISection>, isInBuilder: Boolean };

export const SectionWrapper = styled("div", props)`
  align-items: center;
  background: ${({ section }) => `${section?.attributes.bgColor}`};
  display: flex;
  flex-direction: ${({ section }) =>
    section?.attributes.reversed ? "row-reverse" : "row"};
  height: 80vh;
  margin: ${({ section }) =>
    section?.attributes.hasSectionGap ? `5% 0` : "0"};
  pointer-events: ${({ isInBuilder }) => (isInBuilder ? "none" : "")};
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: ${({ section }) =>
      section?.attributes.reversed ? "column-reverse" : "column"};
    flex-wrap: nowrap;
    height: auto;

    img {
      height: 400px;
      width: 100% !important;
    }
  }

  body#force-mobile & {
    flex-direction: ${({ section }) =>
      section?.attributes.reversed ? "column-reverse" : "column"};
    flex-wrap: nowrap;
    height: auto;

    img {
      height: 400px;
      width: 100% !important;
    }
  }
`;

export const SectionContent = styled("div", props)`
  align-items: ${({ section }) =>
    `${section?.attributes.alignment?.alignItems}`};
  color: ${({ section }) => `${section?.attributes.textColor}`};
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: ${({ section }) =>
    `${section?.attributes.alignment?.justifyContent}`};
  margin: 20% 10%;
  text-align: ${({ section }) =>
    `${getTextAlign(section?.attributes.alignment?.alignItems)}`};
  width: 80%;

  h3 {
    font-size: 36px;
    margin: 0;
    margin-bottom: 20px !important;
    width: 80%;
  }

  p {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }

  body#force-mobile & {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }
`;
