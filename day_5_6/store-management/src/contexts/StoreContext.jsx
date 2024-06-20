import React, { createContext, useReducer, useContext, useState } from "react";

// Define the initial state of the store
const initialState = {
  user: null,
  isAuthenticated: false,
};

// Define the reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

// Create the context
const StoreContext = createContext();

// Create a custom hook to use the store context
export const useStore = () => useContext(StoreContext);

// Create a provider component
export const StoreProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(reducer, initialState);

  const [state, setState] = useState("<context api>");

  return (
    <StoreContext.Provider value={{ state, setState }}>
      {children}
    </StoreContext.Provider>
  );
};
