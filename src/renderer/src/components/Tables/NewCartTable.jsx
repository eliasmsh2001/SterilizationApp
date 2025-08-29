import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../util/slicers/cartSlicer'
import DeleteIcon from '@mui/icons-material/Delete'

const NewCartTable = ({ data }) => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  return (
    <>
      <button
        onClick={() => dispatch(cartActions.handleEmptyCart())}
        className="bg-alert min-w-28 py-2 px-3 text-xs text-white font-bold"
      >
        إخلاء القائمة
      </button>
      <table dir="rtl" className="border-2 border-mainText">
        <thead className="bg-mainText text-white  ">
          <tr className="border-2 border-mainText">
            <th className="w-72 border-l-2">اسم الصنف</th>
            <th className="w-16 border-l-2">العدد</th>
            <th className="w-28 border-l-2">التاريخ</th>
            <th className="w-24 border-l-2">وقت التسليم</th>
            <th className="w-40 border-l-2">المستلم ق.التعقيم</th>
            <th className="w-40 border-l-2">المسلم ق.التعقيم</th>
            <th className="w-24">حالة الأداة</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll w-[30rem]">
          {cartItems &&
            cartItems.map((item, index) => (
              <tr
                key={item.id}
                className={clsx('border-b-2 border-mainText text-sm  text-mainText font-bold', {
                  ' bg-mainBlue/20': index % 2 === 0
                })}
              >
                <td className="w-72 border-l-2 border-mainText">{item.name}</td>
                <td className="w-16 border-l-2 border-mainText">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-0 px-2"
                    placeholder="الكمية..."
                    dir="rtl"
                    value={item.quantity}
                    onChange={(event) =>
                      dispatch(
                        cartActions.handleEditItem({
                          id: item.id,
                          quantity: event.target.value
                        })
                      )
                    }
                  />
                </td>
                <td className="w-28 border-l-2 border-mainText ">
                  <input
                    type="date"
                    className="w-full bg-transparent outline-0 text-xs"
                    placeholder="التاريخ..."
                    dir="rtl"
                    value={item.date}
                    onChange={(event) =>
                      dispatch(
                        cartActions.handleEditItem({
                          id: item.id,
                          date: event.target.value
                        })
                      )
                    }
                  />
                </td>
                <td className="w-24 border-l-2 border-mainText">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-0 text-xs px-2"
                    placeholder="وقت التسليم..."
                    dir="rtl"
                    value={item.deliveringTime}
                    onChange={(event) =>
                      dispatch(
                        cartActions.handleEditItem({
                          id: item.id,
                          deliveringTime: event.target.value
                        })
                      )
                    }
                  />
                </td>
                <td className="w-40 border-l-2 border-mainText">
                  <input
                    type="text"
                    className="w-full h-full bg-transparent outline-0 px-2"
                    placeholder="المستلم ق.التعقيم..."
                    dir="rtl"
                    value={item.preSterilizationClient}
                    onChange={(event) =>
                      dispatch(
                        cartActions.handleEditItem({
                          id: item.id,
                          preSterilizationClient: event.target.value
                        })
                      )
                    }
                  />
                </td>
                <td className="w-40 border-l-2 border-mainText">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-0 px-2"
                    placeholder="المسلم ق.التعقيم..."
                    dir="rtl"
                    value={item.preSterilazationProvidor}
                    onChange={(event) =>
                      dispatch(
                        cartActions.handleEditItem({
                          id: item.id,
                          preSterilazationProvidor: event.target.value
                        })
                      )
                    }
                  />
                </td>
                <td className="w-24 border-l-2 border-mainText">
                  <select
                    value={item.itemState}
                    onChange={(event) =>
                      dispatch(
                        cartActions.handleEditItem({
                          id: item.id,
                          toolState: event.target.value
                        })
                      )
                    }
                    className="w-fit text-right text-sm bg-transparent text-mainText font-bold p-2  outline-0 "
                  >
                    <option value="">اختر الحالة</option>
                    <option value="جيدة">جيدة</option>
                    <option value="ليست جيدة">ليست جيدة</option>
                  </select>
                </td>
                <td className="relative w-10">
                  <button
                    className="bg-alert top-[0.05rem] h-9 w-10 absolute"
                    onClick={() => dispatch(cartActions.handleDeleteItem(item.id))}
                  >
                    <DeleteIcon style={{ fill: 'white' }} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default NewCartTable
