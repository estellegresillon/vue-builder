export const saveDocumentInLocalStorage = (json) => {
  localStorage.setItem("builderJson", JSON.stringify(json));
};

export const getDocumentFromLocalStorage = () => {
  const json = localStorage.getItem("builderJson");
  return json ? JSON.parse(json) : [];
};

export const saveDataInLocalStorage = (key, value) => {
  localStorage.setItem(`${key}-page-builder`, value);
};

export const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(`${key}-page-builder`);
};
