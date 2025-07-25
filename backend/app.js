const express = require('express')
const userRouter = require('./routes/user.js')
const appointmentRouter = require('./routes/appointmentRouter.js')
const clinicsRouter = require('./routes/clinicsRouter.js')
const doctorsRouter = require('./routes/doctorsRouter.js')
const reportsRouter = require('./routes/reportsRouter.js')
const { PrismaClient } = require('./generated/prisma/client.js')
const cron = require('node-cron')

const prisma = new PrismaClient()

const cors = require('cors')

const app = express()
app.use('/uploads', express.static('uploads'))
app.use(express.json()) // For JSON bodies
app.use(express.urlencoded({ extended: true })) // For form data
app.use(
  cors({
    origin: '*', // Allow all origins (for testing only)
    // For production, specify your frontend URL:
    // origin: ['http://localhost:3000', 'https://your-frontend.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)
app.use('/api/user', userRouter)
app.use('/appointments', appointmentRouter)
app.use('/clinics', clinicsRouter)
app.use('/doctors', doctorsRouter)
app.use('/reports', reportsRouter)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

cron.schedule('* * * * * *', async () => {
  const hour = new Date().getHours()
  const today = new Date().getDate()
  let currentPeriod

  if (hour >= 8 && hour < 14) {
    currentPeriod = 'الفترة الصباحية'
  } else if (hour >= 14 && hour < 20) {
    currentPeriod = 'الفترة المسائية'
  } else if ((hour >= 20 && hour <= 23) || (hour >= 0 && hour < 8)) {
    currentPeriod = 'الفترة الليلية'
  }

  try {
    const appointments = await prisma.appointment.findMany({})

    if (appointments[appointments.length - 1].period !== currentPeriod) {
      await prisma.appointment.deleteMany()
    }
  } catch (error) {}
})

app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1` // Test DB connection
    res.status(200).json({ status: 'healthy' })
  } catch (error) {
    res.status(503).json({ status: 'unhealthy' })
  }
})

// app.listen(8081, '0.0.0.0', () => console.log('hello'))
app.listen(3000, () => console.log('hello 3000'))
