const express = require('express')
const userRouter = require('./routes/user.js')
const departmentsRouter = require('./routes/departments.js')
const itemsRouter = require('./routes/itemsRouter.js')
const cartsRouter = require('./routes/cartRouter.js')
const devicesRouter = require('./routes/devicesRouter.js')
const { PrismaClient } = require('./generated/prisma/client.js')

const prisma = new PrismaClient()

const cors = require('cors')

const app = express()
app.use(express.json()) // For JSON bodies
app.use(express.urlencoded({ extended: true })) // For form data
app.use(cors())
app.use('/api/user', userRouter)
app.use('/departments', departmentsRouter)
app.use('/items', itemsRouter)
app.use('/carts', cartsRouter)
app.use('/devices', devicesRouter)

app.get('/', async (req, res) => {
  res.send('Hi I exist!')
})

app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1` // Test DB connection
    res.status(200).json({ status: 'healthy' })
  } catch (error) {
    res.status(503).json({ status: 'unhealthy' })
  }
})

const PORT = 3002
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err)
  app.exit(1)
})

app.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err)
  app.exit(1)
})

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`)
  } else {
    console.error('Server error:', err)
  }
  process.exit(1)
})
