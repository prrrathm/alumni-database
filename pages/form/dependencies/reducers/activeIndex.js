export const activeIndex = (state = 1, actions) => {
  switch (actions.type) {
    case "CHANGE_ACTIVE_INDEX":
      return state + actions.payload;
    default:
      return state;
  }
};
