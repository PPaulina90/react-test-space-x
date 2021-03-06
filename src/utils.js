export const boolToString = (b) => {
  if (b !== null) {
    return b.toString();
  } else {
    return (b = "No data provided");
  }
};
