export const dataReducer = (data, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return (data = action.payload.articles);

    default:
      return data;
  }
};
