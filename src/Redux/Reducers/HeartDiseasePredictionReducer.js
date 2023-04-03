const initialState = {
  sex: "",
  age: "",
  smooker: "",
  nbCigerette: "",
  diabetes: "",
  prevalentHyp: "",
  prevalentStroke: "",
  BPMeds: "",
  totChol: "",
  sysBP: "",
  BMI: "",
  heartRate: "",
  glucose: "",
};
const HeartDiseasePredictionReducer = (
  state = initialState,
  { type, key, valeur }
) => {
  let dict = initialState;

  switch (type) {
    case "UPDATE_DATA":
      dict[key] = valeur;
      console.log("UPDATE_DATA:", dict);

      return {
        data: dict,
      };
    case "CLEAR_DATA":
      console.log("CLEAR_DATA:", dict);

      return {
        data: {
          sex: "",
          age: "",
          smooker: "",
          nbCigerette: "",
          diabetes: "",
          prevalentHyp: "",
          prevalentStroke: "",
          BPMeds: "",
          totChol: "",
          sysBP: "",
          BMI: "",
          heartRate: "",
          glucose: "",
        },
      };

    default:
      return state;
  }
};
export default HeartDiseasePredictionReducer;
