import styled from "vue3-styled-components";

import { getItemHeight, getItemWidth } from "@/utils/helpers";

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: ${({ section }) =>
    section.attributes.hasSectionGap ? `${section.attributes.colGap}% 0` : "0"};
  pointer-events: ${({ isInBuilder }) => (isInBuilder ? "none" : "")};
  width: 100%;

  img {
    &.img-1-col {
      height: ${({ section }) => getItemHeight(section.attributes.columns)};
      margin: ${({ section }) =>
        section.attributes.hasColGap
          ? `${
              section.attributes.colGap
                ? parseInt(section.attributes.colGap) / 2
                : 5
            }% ${section.attributes.colGap}%`
          : "0"};
      object-fit: cover;
      width: ${({ section }) => getItemWidth(section.attributes.columns)};
    }

    &.img-2-col {
      height: ${({ section }) => getItemHeight(section.attributes.columns)};
      margin: ${({ section }) =>
        section.attributes.hasColGap
          ? `${
              section.attributes.colGap
                ? parseInt(section.attributes.colGap) / 2
                : 5
            }% ${section.attributes.colGap}%`
          : "0"};
      object-fit: cover;
      width: ${({ section }) =>
        section.attributes.hasColGap
          ? `calc(${getItemWidth(section.attributes.columns)} - 1.5 * ${
              section.attributes.colGap
            }%)`
          : getItemWidth(section.attributes.columns)};

      &:nth-child(1n) {
        margin-right: 0%;
      }
    }

    &.img-3-col {
      height: ${({ section }) => getItemHeight(section.attributes.columns)};
      margin: ${({ section }) =>
        section.attributes.hasColGap
          ? `${
              section.attributes.colGap
                ? parseInt(section.attributes.colGap) / 2
                : 5
            }% ${section.attributes.colGap}%`
          : "0"};
      object-fit: cover;
      width: ${({ section }) =>
        section.attributes.hasColGap
          ? `calc(${getItemWidth(section.attributes.columns)} - 1.333334 * ${
              section.attributes.colGap
            }%)`
          : getItemWidth(section.attributes.columns)};

      &:nth-child(1n),
      &:nth-child(2n) {
        margin-right: 0%;
      }
    }

    &.img-4-col {
      height: ${({ section }) => getItemHeight(section.attributes.columns)};
      margin: ${({ section }) =>
        section.attributes.hasColGap
          ? `${
              section.attributes.colGap
                ? parseInt(section.attributes.colGap) / 2
                : 5
            }% ${section.attributes.colGap}%`
          : "0"};
      object-fit: cover;
      width: ${({ section }) =>
        section.attributes.hasColGap
          ? `calc(${getItemWidth(section.attributes.columns)} - 1.25 * ${
              section.attributes.colGap
            }%)`
          : getItemWidth(section.attributes.columns)};

      &:nth-child(1n),
      &:nth-child(2n),
      &:nth-child(3n) {
        margin-right: 0%;
      }
    }
  }

  body#force-mobile & {
    flex-wrap: nowrap;
    flex-direction: column;

    img {
      height: 50vh !important;
      width: ${({ section }) =>
        section.attributes.hasColGap ? "90%" : "100%"} !important;
    }
  }

  @media screen and (max-width: 768px), {
    flex-wrap: nowrap;
    flex-direction: column;

    img {
      height: 50vh !important;
      width: ${({ section }) =>
        section.attributes.hasColGap ? "90%" : "100%"} !important;
    }
  }
`;
