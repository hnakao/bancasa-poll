import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "../reducers/survey-slice";

export default configureStore({
  reducer: {
    survey: surveyReducer,
  },
});
