import { productState } from './modules/products/type'
import { userState } from './modules/users/type'
import { Product } from '~/types/Product'
export interface rootState {
  products: Array<Product>
  userState?: userState
  productState?: productState
}
