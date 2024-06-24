import { createContext, useReducer, useContext, useState } from "react";

// Define the initial state of the store
const initialState = {
  products: [],
  matchingProducts: [],
};

export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";

export const ADD_PRODUCT = "ADD_PRODUCT";

// Define the reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        matchingProducts: action.payload,
      };
    case SEARCH_PRODUCTS: {
      // state.products
      const searchText = action.payload;
      return {
        ...state,
        matchingProducts: state.products.filter((product) => {
          if (product.name.includes(searchText)) {
            return product;
          }
        }),
      };
    }
    case ADD_PRODUCT: {
      const product = action.payload;
      const newProductList = [...state.products, product];
      return {
        ...state,
        products: newProductList,
        matchingProducts: newProductList,
      };
    }
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
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [state, setState] = useState("nabin");

  const value = { state: state, dispatch: dispatch };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
