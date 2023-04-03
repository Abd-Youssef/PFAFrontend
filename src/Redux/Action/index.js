const SetUser = (data) => {
  return {
    type: "SET_USER",
    data: data,
  };
};
const updateData = (key, valeur) => {
  return {
    type: "UPDATE_DATA",
    key: key,
    valeur: valeur,
  };
};
const clearData = () => {
  return {
    type: "CLEAR_DATA",
  };
};
export { SetUser, updateData ,clearData};
