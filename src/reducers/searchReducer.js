export const searchReducer = (search, action) => {
  switch (action.type) {
    case "SEARCH":
      return (search = action.payload);
    case "OPTION":
      return (search = action.payload);

    default:
      return search;
  }
};
