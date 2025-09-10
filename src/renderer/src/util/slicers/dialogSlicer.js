import { createSlice } from '@reduxjs/toolkit'

const dialogSlicer = createSlice({
  name: 'dialog',
  initialState: {
    dialog: '',
    userId: null,
    connectionState: null,
    cartId: ''
  },
  reducers: {
    hadleOpenDialog(state, action) {
      state.dialog = action.payload
    },

    handleDeleteUser(state, action) {
      state.dialog = action.payload.dialog
      state.userId = action.payload.userId
    },
    handleAddNewUser(state, action) {
      state.dialog = action.payload
    },
    handleConnectionState(state, action) {
      state.connectionState === action.payload
    },
    handleOpenDialogDetails(state, action) {
      state.cartId = action.payload.id
      state.dialog = action.payload.dialog
    }
  }
})

export default dialogSlicer
export const dialogActions = dialogSlicer.actions
