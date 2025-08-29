const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')
const cron = require('node-cron')

const devicesRouter = express.Router()
const prisma = new PrismaClient()

devicesRouter.get('/getDevices', async (req, res) => {
  const { date } = req.query

  const devices = await prisma.device.findMany({ include: { sessions: { where: { date } } } })
  res.json(devices)
})

devicesRouter.post('/addSession', async (req, res) => {
  const { date, deviceId } = req.body

  try {
    const newSession = await prisma.deviseSesstions.create({
      data: {
        date,
        deviceId,
        startingTime: '',
        stoppingTime: ''
      }
    })

    res.json(newSession)
  } catch (e) {
    console.log(e)
  }
})

devicesRouter.delete('/deleteSession', async (req, res) => {
  const { id } = req.body

  try {
    const deleteSession = await prisma.deviseSesstions.delete({ where: { id } })

    res.json(deleteSession)
  } catch (e) {
    console.log(e)
  }
})

devicesRouter.put('/editSession', async (req, res) => {
  const { id, value, property } = req.body

  function addTwoHours(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number)

    // Create a date object (use any date, we only care about time)
    const date = new Date()
    date.setHours(hours + 2, minutes, 0, 0)

    // Format back to HH:MM
    const newHours = date.getHours().toString().padStart(2, '0')
    const newMinutes = date.getMinutes().toString().padStart(2, '0')

    return `${newHours}:${newMinutes}`
  }

  try {
    let EdittedData
    if (property === 'startingTime') {
      EdittedData = await prisma.deviseSesstions.update({
        where: { id },
        data: { startingTime: value, stoppingTime: addTwoHours(value) }
      })
    } else if (property === 'quantity') {
      EdittedData = await prisma.deviseSesstions.update({
        where: { id },
        data: { itemsQuantity: Number(value) }
      })
    }

    res.json(EdittedData)
  } catch (e) {
    console.log(e)
  }
})
module.exports = devicesRouter
