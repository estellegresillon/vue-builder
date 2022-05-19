import styled from "vue3-styled-components";

import { getTextAlign } from "@/utils/helpers";

export const HeroWrapper = styled.div`
  align-items: ${({ section }) => section.attributes.alignment?.alignItems};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ section }) => section.attributes.textColor};
  display: flex;
  flex-direction: column;
  height: ${({ isInBuilder }) =>
    isInBuilder ? "calc(100vh - 70px)" : "100vh"};
  justify-content: ${({ section }) =>
    section.attributes.alignment?.justifyContent};
  pointer-events: ${({ isInBuilder }) => (isInBuilder ? "none" : "")};
  text-align: ${({ section }) =>
    getTextAlign(section.attributes.alignment?.alignItems)};
  width: 100%;

  h1 {
    font-size: 72px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 42px;
    }

    p {
      font-size: 16px;
    }
  }

  body#force-mobile & {
    height: auto;

    h1 {
      font-size: 42px;
    }

    p {
      font-size: 16px;
    }

    .content {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 536px;
      justify-content: center;
    }
  }
`;
