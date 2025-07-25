const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')
const cron = require('node-cron')

const doctorsRouter = express.Router()
const prisma = new PrismaClient()

doctorsRouter.post('/addNewDoc', async (req, res) => {
  const data = req.body

  const existingClinic = await prisma.clinic.findUnique({ where: { name: data.clinic } })
  try {
    const newDoc = await prisma.doctor.create({
      data: {
        name: data.docName,
        clinicId: existingClinic.id
      }
    })
    res.json(newDoc)
  } catch (e) {
    res.status(200).json({ error: `Something went wrong!! Could not add this clinic.` })
  }
})

doctorsRouter.get('/getDoctors', async (req, res) => {
  const { clinic } = req.query
  try {
    const clinics = await prisma.clinic.findUnique({
      where: { name: clinic },
      include: { doctor: true }
    })

    res.json(clinics)
  } catch (e) {
    res.status(200).json({ error: `Something went wrong!! Could not find clinics.` })
  }
})

module.exports = doctorsRouter
