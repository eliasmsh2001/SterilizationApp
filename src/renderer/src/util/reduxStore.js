import { configureStore } from '@reduxjs/toolkit'
import MainSidebar from '../components/EssentialComponents/MainSidebar'
import sidebarSlicer from './slicers/sidebar.js'
import dialogSlicer from './slicers/dialogSlicer'
import cartSlicer from './slicers/cartSlicer.js'

const reduxStore = configureStore({
  reducer: {
    mainSidebar: sidebarSlicer.reducer,
    dialog: dialogSlicer.reducer,
    cart: cartSlicer.reducer
  }
})

export default reduxStore
