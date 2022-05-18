import styled from "vue3-styled-components";

export const ContactWrapper = styled.div`
  align-items: center;
  background-color: ${({ section }) => section.attributes.bgColor};
  display: flex;
  flex-direction: ${({ section }) =>
    section.attributes.reversed ? "row-reverse" : "row"};
  min-height: ${({ section }) => `${section.attributes.height}px`};
  justify-content: space-evenly;
  padding: 0 10%;
  pointer-events: ${({ isInBuilder }) => (isInBuilder ? "none" : "")};
  text-align: center;
  width: 80%;

  .photo-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 50%;

    img {
      border-radius: 50%;
      height: 200px;
      object-fit: cover;
      width: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: ${({ section }) =>
      section.attributes.reversed ? "column-reverse" : "column"};
    padding: 5% 10%;

    .photo-wrapper {
      padding: 10%;
      width: 100%;
    }
  }

  body#force-mobile & {
    flex-direction: ${({ section }) =>
      section.attributes.reversed ? "column-reverse" : "column"};
    padding: 20% 10%;

    .photo-wrapper {
      padding: 10%;
      width: 100%;
    }
  }
`;

export const TextWrapper = styled.div`
  color: ${({ section }) => section.attributes.textColor};
  padding: 5%;
  width: 40%;

  .contact-title {
    font-size: 36px;
    font-weight: bolder;
    margin-bottom: 20px;
  }

  .contact-content {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .contact-links {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    width: 100%;

    a {
      color: ${({ section }) => section.attributes.textColor};

      &:hover {
        opacity: 0.5;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 10% 5%;
  }

  body#force-mobile & {
    width: 90%;
    padding: 10% 5%;
  }
`;
