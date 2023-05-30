// reducers.js

const initialState = {
    data: [],
    filteredData: [],
    searchTerm: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          data: action.payload,
          filteredData: action.payload,
        };
      case 'SET_FILTERED_DATA':
        return {
          ...state,
          filteredData: action.payload,
        };
      case 'SET_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  