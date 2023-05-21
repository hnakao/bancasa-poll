import { createSlice } from "@reduxjs/toolkit";
import api from "../api/index";

export const slice = createSlice({
  name: "survey",
  initialState: {
    pending: false,
    surveys: [],
    survey: null,
    error: null,
  },
  reducers: {
    start: (state, action) => {
      state.pending = true;
    },
    stop: (state, action) => {
      state.pending = false;
    },
    addSurvey: (state, action) => {
      state.pending = false;
      state.surveys = [action.payload, ...state.surveys];
    },
    setSurveys: (state, action) => {
      state.pending = false;
      state.surveys = action.payload;
    },
    setError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export const { start, stop, addSurvey, setSurveys, setError } = slice.actions;

export const selectSurveys = (state) => state.survey.surveys;
export const getSurveyById = (id) => (state) =>
  state.survey.surveys.find((item) => item.id === id);

export const fetchSurveysAction = () => {
  return (dispatch) => {
    dispatch(start());
    api
      .get("/surveys")
      .then((response) => {
        dispatch(setSurveys(response.data));
        return response;
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};

export const addSurveyAction = (surveyDto, callback) => {
  return (dispatch) => {
    dispatch(start());
    api
      .post("/surveys", surveyDto)
      .then((response) => {
        dispatch(addSurvey(response.data));
        if (callback) {
          callback(response.data);
        }
        return response;
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};

export const updatePhoneAction = (phoneDto, callback) => {
  return (dispatch) => {
    dispatch(start());
    api
      .put("/surveys/phone", phoneDto)
      .then((response) => {
        dispatch(stop());
        if (callback) {
          callback();
        }
        return response;
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};

export const updateWishContactAction = (id, data, callback) => {
  return (dispatch) => {
    dispatch(start());
    api
      .patch(`/surveys/wish-contact/${id}`, data)
      .then((response) => {
        dispatch(stop());
        if (callback) {
          callback();
        }
        return response;
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};

export default slice.reducer;
