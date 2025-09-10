import { createSlice } from '@reduxjs/toolkit'

const cartSlicer = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartData: {
      date: '',
      machineEnteringTime: '',
      machineLeavingTime: '',
      sterilazationState: ''
    }
  },
  reducers: {
    handleAddItem(state, action) {
      const newItem = action.payload
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id || item.name === newItem.name
      )
      if (existingItem) {
        return
      }

      state.cartItems.push({
        id: newItem.id,
        name: newItem.name,
        quantity: '',
        date: '',
        deliveringTime: '',
        preSterilizationClient: '',
        preSterilazationProvidor: '',
        toolState: ''
      })
    },

    handleEditItem(state, action) {
      const newItem = action.payload

      function editMatchingProperties(obj1, obj2) {
        Object.keys(obj1).forEach((key) => {
          if (key in obj2) {
            // If the property exists in obj2
            obj2[key] = obj1[key] // Update obj2's property with obj1's value
          }
        })
        return obj2
      }

      state.cartItems[state.cartItems.findIndex((item) => item.id === newItem.id)] =
        editMatchingProperties(
          newItem,
          state.cartItems[state.cartItems.findIndex((item) => item.id === newItem.id)]
        )
    },
    handleEmptyCart(state) {
      state.cartItems = []
    },
    handleEditCartData(state, action) {
      const newCartData = action.payload
      function editMatchingProperties(obj1, obj2) {
        Object.keys(obj1).forEach((key) => {
          if (key in obj2) {
            // If the property exists in obj2
            obj2[key] = obj1[key] // Update obj2's property with obj1's value
          }
        })
        return obj2
      }

      state.cartData = editMatchingProperties(newCartData, state.cartData)
    },
    handleDeleteItem(state, action) {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    handleFinishingCart(state) {
      state.cartItems = []
      state.cartData = {
        date: '',
        machineEnteringTime: '',
        machineLeavingTime: '',
        sterilazationState: ''
      }
    },
    handleEditCart(state, action) {
      state.cartData = action.payload.data
      state.cartItems = action.payload.items
    }
  }
})

export default cartSlicer
export const cartActions = cartSlicer.actions
