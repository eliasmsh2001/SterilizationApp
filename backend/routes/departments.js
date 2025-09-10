const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')
const cron = require('node-cron')

const departmentsRouter = express.Router()
const prisma = new PrismaClient()

departmentsRouter.post('/newDepartment', async (req, res) => {
  const { name } = req.body
  if (!name || name.length < 1) {
    return
  }

  const existingDepartment = await prisma.department.findUnique({
    where: { name: name.trim() }
  })

  if (existingDepartment) {
    return
  }

  try {
    const newDepartment = await prisma.department.create({ data: { name: name.trim() } })
    res.json(newDepartment)
  } catch (e) {
    res.json('something went wrong!!')
  }
})

departmentsRouter.get('/getDepartments', async (req, res) => {
  try {
    const departments = await prisma.department.findMany({ include: { carts: true } })

    res.json(departments)
  } catch (e) {
    res.json('something went wrong!!')
  }
})

departmentsRouter.get('/getDepDetes', async (req, res) => {
  const { id } = req.query
  try {
    const department = await prisma.department.findUnique({
      where: { id },
      include: { carts: { include: { items: true } }, items: true }
    })
    res.json(department)
  } catch (e) {
    res.json('something went wrong!!')
  }
})

module.exports = departmentsRouter
