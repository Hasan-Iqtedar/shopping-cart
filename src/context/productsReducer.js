const productsReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE": {
      return {
        ...state,
        products: [...action.items],
      };
    }

    case "ADD_ITEM": {
      const isNew = state.productsInCart.findIndex(
        (element) => element.id === action.product.id
      );

      let updatedProducts;

      if (isNew === -1) {
        const newItem = {
          ...action.product,
          quantity: 1,
        };
        updatedProducts = [...state.productsInCart, newItem];
      } else {
        updatedProducts = [...state.productsInCart];
        updatedProducts[isNew].quantity++;
      }
      return {
        ...state,
        productsInCart: updatedProducts,
      };
    }

    case "REMOVE_ITEM": {
      const updatedProducts = state.productsInCart.filter(
        (element) => element.id !== action.id
      );
      return {
        ...state,
        productsInCart: updatedProducts,
      };
    }

    default: {
      return state;
    }
  }
};

export default productsReducer;
