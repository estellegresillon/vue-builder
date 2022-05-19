import styled from "vue3-styled-components";

export const TopBarWrapper = styled.div`
  align-items: center;
  background-color: #252628;
  box-shadow: 0 1px 30px 0 rgb(0 0 0 / 30%);
  color: white;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  width: calc(100% - 40px);
  z-index: 2;

  a.desktop-link {
    margin: 0;
    margin-left: 2px;
  }

  .mobile-link,
  .desktop-link {
    &:hover {
      color: red;
    }
  }

  .demo-tag {
    background: #d40c0c;
    border-radius: 5px;
    font-size: 11px;
    font-weight: bolder;
    margin-left: 10px;
    padding: 3px 5px;
    text-transform: uppercase;
  }

  .routes,
  .actions {
    display: flex;
    position: relative;
  }

  .actions {
    font-weight: bolder;

    .action-button {
      background-color: #252628;
      border-radius: 5px;
      box-shadow: 0 1px 10px 0 rgb(0 0 0 / 50%);
      margin: 20px 10px;
      padding: 7px 10px;

      &:hover {
        background-color: #36383b;
      }
    }

    svg {
      color: white;
      height: 12px;
      margin-right: 5px;
      width: 12px;
    }
  }
`;

export const Item = styled.div`
  cursor: pointer;
  position: relative;
  text-align: center;

  a {
    color: white;
    margin: 20px;
    text-decoration: none;
  }
`;
