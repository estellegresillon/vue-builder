import type { PropType } from "vue";
import styled from "vue3-styled-components";

import { ISection } from "@/types";

const props = { section: Object as PropType<ISection>, isInBuilder: Boolean };

export const PartnersWrapper = styled("div", props)`
  display: flex;
  justify-content: space-evenly;
  min-height: ${({ section }) => `${section?.attributes.height}px`};
  opacity: 0.3;
  padding: 0 10%;
  pointer-events: ${({ isInBuilder }) => (isInBuilder ? "none" : "")};
  width: 80%;

  .image-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    width: ${({ section }) => `calc(100% / ${section?.attributes.itemCount})`};

    img {
      height: 80px;
      object-fit: contain;
      width: 80px;
    }
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    padding: 10%;

    img {
      margin-top: 40px;
    }
  }

  body#force-mobile & {
    align-items: center;
    flex-direction: column;
    min-height: auto;
    padding: 10%;

    img {
      margin-top: 40px;
    }
  }
`;
