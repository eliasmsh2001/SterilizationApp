import url from './httpUrl'

export const addNewCart = async ({ cartData, cartItems, departmentId }) => {
  const response = await fetch(`${url}/carts/newCart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cartData, cartItems, departmentId })
  })

  if (!response.ok) {
    if (response.status === 400) {
      throw Error('!تأكد من تعبئة جميع البيانات')
    }
    if (response.status === 401) {
      throw Error('!تأكد من تعبئة جميع بيانات الأصناف')
    }
  }

  const newData = await response.json()
  return newData
}

export const getCartDetes = async (id) => {
  const response = await fetch(`${url}/carts/getCartDetes?id=${id}`)

  if (!response.ok) {
  }

  const data = response.json()
  return data
}

export const editCart = async ({ cartData, cartItems, cartId }) => {
  const response = await fetch(`${url}/carts/editCart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cartData, cartItems, cartId })
  })

  if (!response.ok) {
    if (response.status === 400) {
      throw Error('!تأكد من تعبئة جميع البيانات')
    }
    if (response.status === 401) {
      throw Error('!تأكد من تعبئة جميع بيانات الأصناف')
    }
  }
}

export const deleteCart = async ({ id }) => {
  const response = await fetch(`${url}/carts/deleteCart`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })

  if (!response.ok) {
    if (response.status === 400) {
      throw Error('!تأكد من تعبئة جميع البيانات')
    }
  }
}
