import { combineReducers } from 'redux'
import { v4 } from 'node-uuid'

const initialState = [
	{ id: v4(), name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
	{ id: v4(), name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
	{ id: v4(), name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" }
]

const products = (state = initialState, { type, preload }) => {
	switch (type) {
		case 'PRODUCT_ADDED':
			return [
				...state,
				preload
			]
		default:
			return state
	}
}

export default combineReducers({
	products
})

export const getProducts = ({ products }) => products