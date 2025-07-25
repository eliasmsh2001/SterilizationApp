const express = require('express')
const bcrypt = require('bcrypt')
const { PrismaClient } = require('../generated/prisma/client')
const jwt = require('jsonwebtoken')

const userRoute = express.Router()
const prisma = new PrismaClient()

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '1h' })
}

userRoute.post('/signup', async (req, res) => {
  const data = req.body

  try {
    if (
      (!data.username, !data.username.length > 0 || !data.password || !data.password.length > 0)
    ) {
      throw Error('تأكد من تعبئة جميع الخانات')
    }

    const existingUser = await prisma.user.findMany({
      where: {
        username: data.username
      }
    })

    if (existingUser.length > 0) {
      throw Error('يوجد مستخدم اخر بهذا الاسم بالفعل، استخدم اسم مميز')
    } else {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(data.password, salt)

      const newuser = await prisma.user.create({
        data: {
          username: data.username,
          usersecret: hash,
          authority: data.authority
        }
      })

      const token = createToken(newuser.id)

      res.status(200).json({ newuser, token })
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

userRoute.post('/login', async (req, res) => {
  const data = req.body

  const admin = await prisma.user.findFirst({ where: { username: 'Admin' } })

  if (!admin) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash('admin1q2w3e', salt)

    const newuser = await prisma.user.create({
      data: {
        username: 'Admin',
        usersecret: hash,
        authority: 'admin'
      }
    })
  }

  try {
    if (!data.username || !data.password) {
      throw Error('تأكد من تعبئة جميع الخانات')
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        username: data.username
      }
    })

    if (!existingUser) {
      throw Error('لا يوجد مستخدم بهذا الاسم')
    }

    const match = await bcrypt.compare(data.password, existingUser.usersecret)

    if (!match) {
      throw Error('كلمة السر خاطئة')
    }

    const token = createToken(existingUser.id)
    res.status(200).json({ existingUser })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

userRoute.get('/getAllUsers', async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({ include: { archivedAppointments: true } })
    res.json(allUsers)
  } catch (e) {
    // console.log(e)
    res.status(400).json({ error: e.message })
  }
})

userRoute.delete('/deleteUser', async (req, res) => {
  const { id } = req.query
  const existingUser = await prisma.user.findUnique({ where: { id } })
  if (!existingUser) {
    return res.status(400).json({
      success: false
    })
  }
  try {
    const deletedUser = await prisma.user.delete({ where: { id: existingUser.id } })
    res.json(deletedUser)
  } catch (e) {
    // console.log(e)
    res.status(400).json({ error: e.message })
  }
})

userRoute.put('/editUser', async (req, res) => {
  const data = req.body
  try {
    const existingUser = await prisma.user.findUnique({ where: { id: data.userId } })
    if (existingUser.username === 'Admin') {
      return
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(data.password, salt)
    const updatedUser = await prisma.user.update({
      where: { id: data.userId },
      data: {
        username: data.username,
        usersecret: data.password && data.password.length > 0 ? hash : existingUser.usersecret,
        authority: data.authority
      }
    })

    res.json(updatedUser)
  } catch (e) {
    // console.log(e)
    res.status(400).json({ error: e.message })
  }
})

module.exports = userRoute
