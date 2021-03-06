import { createAction, props } from '@ngrx/store';
import { Product } from '../../product';

export const loadProductsSuccess = createAction(
  '[Product Api] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product Api] Load Products Failure',
  props<{ error: string }>()
);

export const updateProductSuccess = createAction(
  '[Product Api] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Product Api] Update Product Failure',
  props<{ error: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product Api] Delete Product Success',
  props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
  '[Product Api] Delete Product Failure',
  props<{ error: string }>()
);

export const createProductSuccess = createAction(
  '[Product Api] Create Product Success',
  props<{ product: Product }>()
);

export const createProductFailure = createAction(
  '[Product Api] Create Product Failure',
  props<{ error: string }>()
);
