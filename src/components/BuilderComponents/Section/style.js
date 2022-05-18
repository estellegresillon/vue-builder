import styled from "vue3-styled-components";

import { getTextAlign } from "@/utils/helpers";

export const SectionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ section }) =>
    section.attributes.reversed ? "row-reverse" : "row"};
  height: 80vh;
  margin: ${({ section }) => (section.attributes.hasSectionGap ? `5% 0` : "0")};
  pointer-events: ${({ isInBuilder }) => (isInBuilder ? "none" : "")};
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: ${({ section }) =>
      section.attributes.reversed ? "column-reverse" : "column"};
    height: auto;

    img {
      height: 400px;
      width: 100% !important;
    }
  }

  body#force-mobile & {
    flex-wrap: nowrap;
    flex-direction: ${({ section }) =>
      section.attributes.reversed ? "column-reverse" : "column"};
    height: auto;

    img {
      height: 400px;
      width: 100% !important;
    }
  }
`;

export const SectionContent = styled.div`
  align-items: ${({ section }) => section.attributes.alignment?.alignItems};
  background: ${({ section }) => section.attributes.bgColor};
  color: ${({ section }) => section.attributes.textColor};
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: ${({ section }) =>
    section.attributes.alignment?.justifyContent};
  text-align: ${({ section }) =>
    getTextAlign(section.attributes.alignment?.alignItems)};
  width: 80%;
  margin: 20% 10%;

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
