import { v4 } from 'node-uuid'

export const addCart = (product) => ({
    type: 'ADDED_CART',
    payload: {
      name: product.name,
      price: product.price,
      id: product.id
    }
})

export const removedCart = (id) => ({
  type: 'REMOVED_CART',
  payload:{
    id
  }
})


export const addProduct = (product) => ({
  type: 'PRODUCT_ADDED',
  payload:{
    ...product,
    id: v4()
  }
})
