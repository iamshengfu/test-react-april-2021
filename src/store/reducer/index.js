export const initialState = {
    loading: false,
    movies: [],
    errorMessage: null,
    totalPages:1,
    pageNumber:1,
    totalResults:0
  };
  
export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
        totalPages: action.payload.totalPages,
        pageNumber: action.payload.pageNumber,
        totalResults: action.payload.totalResults
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};