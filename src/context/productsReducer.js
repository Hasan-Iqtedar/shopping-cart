const productsReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE": {
      return {
        products: [...action.items],
      };
    }

    case "ADD_ITEM": {
      console.log("Reducer ADD_ITEM__________");
      const updatedProducts = [...state.products, action.product];
      return {
        products: updatedProducts,
      };
    }

    case "REMOVE_ITEM": {
      const updatedProducts = state.products.filter(
        (element) => element.id !== action.id
      );
      return {
        products: updatedProducts,
      };
    }

    default: {
      return state;
    }
  }
};

export default productsReducer;
