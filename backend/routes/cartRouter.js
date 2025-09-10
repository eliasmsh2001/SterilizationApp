const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')

const cartsRouter = express.Router()
const prisma = new PrismaClient()

const arabicDays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']

cartsRouter.post('/newCart', async (req, res) => {
  const { cartData, cartItems, departmentId } = req.body

  const existingDepartment = await prisma.department.findUnique({ where: { id: departmentId } })

  if (!existingDepartment) {
    return
  }

  if (
    !cartData.date ||
    cartData.date === '' ||
    !cartData.machineEnteringTime ||
    cartData.machineEnteringTime === '' ||
    !cartData.machineLeavingTime ||
    cartData.machineLeavingTime === '' ||
    !cartData.sterilazationState ||
    cartData.sterilazationState === ''
  ) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed'
    })
  }

  const allPropertiesTruthyExceptZero = cartItems.every((obj) =>
    Object.values(obj).every(
      (value) =>
        value !== null &&
        value !== undefined &&
        value !== false &&
        value !== '' &&
        !Number.isNaN(value)
    )
  )

  if (!allPropertiesTruthyExceptZero) {
    return res.status(401).json({
      success: false,
      message: 'Validation failed'
    })
  }

  try {
    const newCart = await prisma.cart.create({
      data: {
        day: arabicDays[new Date(cartData.date).getDay()],
        departmentId,
        ...cartData
        // postSterilazationPrivdor: 'unknown',
        // postSterilizationClient: 'unknown'
      }
    })

    const newCartItems = await prisma.cartItem.createMany({
      data: cartItems.map(({ id, quantity, ...item }) => ({
        ...item,
        cartId: newCart.id,
        quantity: Number(quantity)
      }))
    })

    res.json(newCart, newCartItems)
  } catch (e) {
    res.json('something went wrong!!')
  }
})
cartsRouter.put('/editCart', async (req, res) => {
  const { cartData, cartItems, cartId } = req.body
  const { items, id, departmentId, department, ...filteredData } = cartData

  const existingCart = await prisma.cart.findUnique({ where: { id: Number(cartId) } })

  if (!existingCart) {
    return
  }

  if (
    !cartData.date ||
    cartData.date === '' ||
    !cartData.machineEnteringTime ||
    cartData.machineEnteringTime === '' ||
    !cartData.machineLeavingTime ||
    cartData.machineLeavingTime === '' ||
    !cartData.sterilazationState ||
    cartData.sterilazationState === ''
  ) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed'
    })
  }

  const allPropertiesTruthyExceptZero = cartItems.every((obj) =>
    Object.values(obj).every(
      (value) =>
        value !== null &&
        value !== undefined &&
        value !== false &&
        value !== '' &&
        !Number.isNaN(value)
    )
  )

  if (!allPropertiesTruthyExceptZero) {
    return res.status(401).json({
      success: false,
      message: 'Validation failed'
    })
  }

  try {
    const editedCart = await prisma.cart.update({
      where: { id: Number(cartId) },
      data: filteredData
      // postSterilazationPrivdor: 'unknown',
      // postSterilizationClient: 'unknown'
    })

    const deletedItems = await prisma.cartItem.deleteMany({ where: { cartId } })
    const updatedItems = await prisma.cartItem.createMany({
      data: cartItems.map(({ id, quantity, ...item }) => ({
        ...item,
        cartId,
        quantity: Number(quantity)
      }))
    })

    res.json(editedCart, updatedItems)
  } catch (e) {
    res.json('something went wrong!!')
  }
})

cartsRouter.get('/getCartDetes', async (req, res) => {
  const { id } = req.query

  if (!id) {
    return
  }

  try {
    const cart = await prisma.cart.findUnique({
      where: { id: Number(id) },
      include: { items: true }
    })

    const department = await prisma.department.findUnique({ where: { id: cart.departmentId } })

    res.json({ ...cart, department: department.name })
  } catch (e) {
    res.json('something went wrong!!')
  }
})

cartsRouter.delete('/deleteCart', async (req, res) => {
  const { id } = req.body
  if (!id) {
    return
  }

  try {
    const deletedCartItems = await prisma.cartItem.deleteMany({ where: { cartId: id } })
    const deletedCart = await prisma.cart.delete({ where: { id } })

    res.json(deletedCart, deletedCartItems)
  } catch (e) {
    res.json('something went wrong!!')
  }
})

module.exports = cartsRouter
