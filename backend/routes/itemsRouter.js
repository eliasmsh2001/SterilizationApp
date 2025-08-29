const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')
const cron = require('node-cron')

const itemsRouter = express.Router()
const prisma = new PrismaClient()

itemsRouter.post('/newItem', async (req, res) => {
  const { name, departmentId } = req.body

  if (!name || name.length < 1) {
    return
  }

  const existingItem = await prisma.item.findFirst({
    where: { name, departmentId }
  })

  if (existingItem) {
    return
  }

  try {
    const newItem = await prisma.item.create({ data: { name, departmentId } })
    res.json(newItem)
  } catch (e) {
    res.json('something went wrong!!')
  }
})

itemsRouter.get('/getDepartments', async (req, res) => {
  try {
    const departments = await prisma.department.findMany({})

    res.json(departments)
  } catch (e) {
    res.json('something went wrong!!')
  }
})

itemsRouter.get('/getDepDetes', async (req, res) => {
  const { id } = req.query
  try {
    const department = await prisma.department.findUnique({
      where: { id },
      include: { carts: true, items: true }
    })
    res.json(department)
  } catch (e) {
    res.json('something went wrong!!')
  }
})

module.exports = itemsRouter
