import { createReducer, on } from '@ngrx/store';
import { Product } from '../product';
import { ProductApiActions, ProductPageActions } from './actions';

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductPageActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(ProductPageActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId,
    };
  }),
  on(ProductPageActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null,
    };
  }),
  on(ProductPageActions.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: 0,
    };
  }),
  on(ProductApiActions.loadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
    };
  }),
  on(ProductApiActions.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  }),
  on(ProductApiActions.updateProductSuccess, (state, action) => {
    const updatedProducts = state.products.map((item) =>
      action.product.id === item.id ? action.product : item
    );
    return {
      ...state,
      products: updatedProducts,
      currentProductId: action.product.id,
      error: '',
    };
  }),
  on(ProductApiActions.updateProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductApiActions.createProductSuccess, (state, action) => {
    const newProducts = [...state.products, action.product];
    return {
      ...state,
      products: newProducts,
      currentProductId: action.product.id,
      error: '',
    };
  }),
  on(ProductApiActions.createProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProductApiActions.deleteProductSuccess, (state, action) => {
    return {
      ...state,
      products: state.products.filter((p) => p.id !== action.productId),
      currentProductId: null,
      error: '',
    };
  }),
  on(ProductApiActions.deleteProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
