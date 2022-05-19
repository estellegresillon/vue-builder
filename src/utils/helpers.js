export const getItemHeight = (columnCount) => {
  if (!columnCount) return;

  switch (columnCount) {
    case "1":
    case "2":
    case "3":
    default:
      return "50vh";
    case "4":
      return "30vh";
    case "5":
      return "20vh";
  }
};

export const getItemWidth = (columnCount) => {
  if (!columnCount) return;

  switch (columnCount) {
    case "1":
    default:
      return "100%";
    case "2":
      return "50%";
    case "3":
      return "33.333334%";
    case "4":
      return "25%";
    case "5":
      return "20%";
  }
};

export const getTextAlign = (alignment) => {
  if (!alignment) return;

  if (alignment === "flex-start") {
    return "left";
  }

  if (alignment === "flex-end") {
    return "right";
  }

  return "center";
};
