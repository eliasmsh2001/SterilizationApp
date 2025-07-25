const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')

const reportsRouter = express.Router()
const prisma = new PrismaClient()

const monthsNames = [
  'يناير', // January
  'فبراير', // February
  'مارس', // March
  'أبريل', // April
  'مايو', // May
  'يونيو', // June
  'يوليو', // July
  'أغسطس', // August
  'سبتمبر', // September
  'أكتوبر', // October
  'نوفمبر', // November
  'ديسمبر' // December
]

reportsRouter.get('/yearlyTotalReport', async (req, res) => {
  const { year } = req.query
  try {
    const appointments = await prisma.archivedappointment.findMany({})

    const month = new Date().getMonth()

    let reportValues = []
    for (let i = 0; i < monthsNames.length; i++) {
      reportValues.push({
        month: monthsNames[i],
        appointments: appointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(year) &&
            new Date(item.date).getMonth() === i
          // (item) => item.date.slice(0, 4) === year && Number(item.date.slice(5, 6)) === i + 1
        ).length,
        ذكر: appointments.filter(
          (item) =>
            item.gender === 'ذكر' &&
            new Date(item.date).getFullYear() === Number(year) &&
            // Number(item.date.slice(5, 6)) === i + 1
            new Date(item.date).getMonth() === i
        ).length,
        أنثى: appointments.filter(
          (item) =>
            item.gender === 'أنثى' &&
            new Date(item.date).getFullYear() === Number(year) &&
            // Number(item.date.slice(5, 6)) === i + 1
            new Date(item.date).getMonth() === i
        ).length
      })
    }

    res.json(reportValues)
  } catch (e) {
    // res.status(200).json({ error: `Something went wrong!! Could not fetch areas` })
    // console.log(e)
    res.status(200).json({ error: `Something went wrong!! Could not fetch data` })
  }
})

reportsRouter.get('/areas', async (req, res) => {
  const { year, month } = req.query

  try {
    const areas = await prisma.area.findMany({ include: { archivedAppointments: true } })
    const filteredArea = areas.map((item) => ({
      ...item,
      itemId: areas.indexOf(item),
      totalAppointments: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(year) &&
          new Date(item.date).getMonth() + 1 === Number(month)
      ).length,
      أنثى: item.archivedAppointments.filter(
        (item) =>
          item.gender === 'أنثى' &&
          new Date(item.date).getFullYear() === Number(year) &&
          new Date(item.date).getMonth() + 1 === Number(month)
      ).length,
      ذكر: item.archivedAppointments.filter(
        (item) =>
          item.gender === 'ذكر' &&
          new Date(item.date).getFullYear() === Number(year) &&
          new Date(item.date).getMonth() + 1 === Number(month)
      ).length
    }))
    res.json(filteredArea)
  } catch (e) {
    // console.log(e)
    res.status(200).json({ error: `Something went wrong!! Could not fetch data` })
  }
})

reportsRouter.get('/clinics', async (req, res) => {
  const { year, month } = req.query

  try {
    const clinics = await prisma.clinic.findMany({ include: { archivedAppointments: true } })
    const filteredArea = clinics.map((item) => ({
      ...item,
      totalAppointments: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(year) &&
          new Date(item.date).getMonth() + 1 === Number(month)
      ).length,
      أنثى: item.archivedAppointments.filter(
        (item) =>
          item.gender === 'أنثى' &&
          new Date(item.date).getFullYear() === Number(year) &&
          new Date(item.date).getMonth() + 1 === Number(month)
      ).length,
      ذكر: item.archivedAppointments.filter(
        (item) =>
          item.gender === 'ذكر' &&
          new Date(item.date).getFullYear() === Number(year) &&
          new Date(item.date).getMonth() + 1 === Number(month)
      ).length
    }))
    res.json(filteredArea)
  } catch (e) {
    // console.log(e)
    res.status(200).json({ error: `Something went wrong!! Could not fetch data` })
  }
})

reportsRouter.get('/getMonthlyGlobalReport', async (req, res) => {
  const { year: selectedYear, month: selectedMonth } = req.query

  const appointments = await prisma.archivedappointment.findMany({})

  const clinics = await prisma.clinic.findMany({ include: { archivedAppointments: true } })

  const areas = await prisma.area.findMany({ include: { archivedAppointments: true } })

  const weeklyFilter = (minDay, maxDay, gender, child, month, year) => {
    return appointments.filter(
      (item) =>
        new Date(item.date).getDate() >= minDay &&
        new Date(item.date).getDate() <= maxDay &&
        (gender ? item.gender === gender && Number(item.age) >= 18 : item) &&
        (child ? Number(item.age) < 18 : item) &&
        new Date(item.date).getFullYear() === Number(year) &&
        new Date(item.date).getMonth() + 1 === Number(month)
    )
  }

  try {
    const reportByWeeks = {
      week1: {
        total: weeklyFilter(1, 7, null, false, selectedMonth, selectedYear).length,
        male: weeklyFilter(1, 7, 'ذكر', false, selectedMonth, selectedYear).length,
        female: weeklyFilter(1, 7, 'أنثى', false, selectedMonth, selectedYear).length,
        children: weeklyFilter(1, 7, null, true, selectedMonth, selectedYear).length,
        previousMonth:
          Number(selectedMonth) > 1
            ? weeklyFilter(1, 7, null, false, Number(selectedMonth) - 1, selectedYear).length
            : weeklyFilter(1, 7, null, false, 12, Number(selectedYear) - 1).length,
        difference:
          Number(selectedMonth) > 1
            ? weeklyFilter(1, 7, null, false, selectedMonth, selectedYear).length -
              weeklyFilter(1, 7, null, false, Number(selectedMonth) - 1, selectedYear).length
            : weeklyFilter(1, 7, null, false, selectedMonth, selectedYear).length -
              weeklyFilter(1, 7, null, false, 12, Number(selectedYear) - 1).length
      },
      week2: {
        total: weeklyFilter(8, 14, null, false, selectedMonth, selectedYear).length,
        male: weeklyFilter(8, 14, 'ذكر', false, selectedMonth, selectedYear).length,
        female: weeklyFilter(8, 14, 'أنثى', false, selectedMonth, selectedYear).length,
        children: weeklyFilter(8, 14, null, true, selectedMonth, selectedYear).length,
        previousMonth:
          Number(selectedMonth) > 1
            ? weeklyFilter(8, 14, null, false, Number(selectedMonth) - 1, selectedYear).length
            : weeklyFilter(8, 14, null, false, 12, Number(selectedYear) - 1).length,
        difference:
          Number(selectedMonth) > 1
            ? weeklyFilter(8, 14, null, false, selectedMonth, selectedYear).length -
              weeklyFilter(8, 14, null, false, Number(selectedMonth) - 1, selectedYear).length
            : weeklyFilter(8, 14, null, false, selectedMonth, selectedYear).length -
              weeklyFilter(8, 14, null, false, 12, Number(selectedYear) - 1).length
      },
      week3: {
        total: weeklyFilter(15, 21, null, false, selectedMonth, selectedYear).length,
        male: weeklyFilter(15, 21, 'ذكر', false, selectedMonth, selectedYear).length,
        female: weeklyFilter(15, 21, 'أنثى', false, selectedMonth, selectedYear).length,
        children: weeklyFilter(15, 21, null, true, selectedMonth, selectedYear).length,
        previousMonth:
          Number(selectedMonth) > 1
            ? weeklyFilter(15, 21, null, false, Number(selectedMonth) - 1, selectedYear).length
            : weeklyFilter(15, 21, null, false, 12, Number(selectedYear) - 1).length,
        difference:
          Number(selectedMonth) > 1
            ? weeklyFilter(15, 21, null, false, selectedMonth, selectedYear).length -
              weeklyFilter(15, 21, null, false, Number(selectedMonth) - 1, selectedYear).length
            : weeklyFilter(15, 21, null, false, selectedMonth, selectedYear).length -
              weeklyFilter(15, 21, null, false, 12, Number(selectedYear) - 1).length
      },
      week4: {
        total: weeklyFilter(22, 31, null, false, selectedMonth, selectedYear).length,
        male: weeklyFilter(22, 31, 'ذكر', false, selectedMonth, selectedYear).length,
        female: weeklyFilter(22, 31, 'أنثى', false, selectedMonth, selectedYear).length,
        children: weeklyFilter(22, 31, null, true, selectedMonth, selectedYear).length,
        previousMonth:
          Number(selectedMonth) > 1
            ? weeklyFilter(22, 31, null, false, Number(selectedMonth) - 1, selectedYear).length
            : weeklyFilter(22, 31, null, false, 12, Number(selectedYear) - 1).length,
        difference:
          Number(selectedMonth) > 1
            ? weeklyFilter(22, 31, null, false, selectedMonth, selectedYear).length -
              weeklyFilter(22, 31, null, false, Number(selectedMonth) - 1, selectedYear).length
            : weeklyFilter(22, 31, null, false, selectedMonth, selectedYear).length -
              weeklyFilter(22, 31, null, false, 12, Number(selectedYear) - 1).length
      },
      total: {
        total: weeklyFilter(1, 31, null, false, selectedMonth, selectedYear).length,
        male: weeklyFilter(1, 31, 'ذكر', false, selectedMonth, selectedYear).length,
        female: weeklyFilter(1, 31, 'أنثى', false, selectedMonth, selectedYear).length,
        children: weeklyFilter(1, 31, null, true, selectedMonth, selectedYear).length,
        previousMonth:
          Number(selectedMonth) > 1
            ? weeklyFilter(1, 31, null, false, Number(selectedMonth) - 1, selectedYear).length
            : weeklyFilter(1, 31, null, false, 12, Number(selectedYear) - 1).length,
        difference:
          Number(selectedMonth) > 1
            ? weeklyFilter(1, 31, null, false, selectedMonth, selectedYear).length -
              weeklyFilter(1, 31, null, false, Number(selectedMonth) - 1, selectedYear).length
            : weeklyFilter(1, 31, null, false, selectedMonth, selectedYear).length -
              weeklyFilter(1, 31, null, false, 12, Number(selectedYear) - 1).length
      }
    }

    const ClinicsReport = clinics.map((item) => ({
      ...item,
      total: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
          new Date(item.date).getFullYear() === Number(selectedYear)
      ).length,
      morningShift: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) &&
          new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
          item.period === 'الفترة الصباحية'
      ).length,
      noonShift: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) &&
          new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
          item.period === 'الفترة المسائية'
      ).length,
      nightShift: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) &&
          new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
          item.period === 'الفترة الليلية'
      ).length,
      previousMonth: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) &&
          new Date(item.date).getMonth() + 1 === Number(selectedMonth) - 1
      ).length,
      difference:
        item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth)
        ).length -
        item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth) - 1
        ).length
    }))

    const areasReport = areas
      .map((item) => ({
        ...item,
        total: item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth)
        ).length,
        male: item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
            item.gender === 'ذكر'
        ).length,
        female: item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
            item.gender === 'أنثى'
        ).length,
        ageDist1: item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
            Number(item.age) > 0 &&
            Number(item.age) < 18
        ).length,
        ageDist2: item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
            Number(item.age) >= 18 &&
            Number(item.age) < 30
        ).length,
        ageDist3: item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
            Number(item.age) >= 31 &&
            Number(item.age) <= 40
        ).length,
        ageDist4: item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
            Number(item.age) >= 41 &&
            Number(item.age) <= 50
        ).length,
        ageDist5: item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
            Number(item.age) >= 51 &&
            Number(item.age) <= 60
        ).length,
        ageDist6: item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
            Number(item.age) >= 61
        ).length,
        previousMonth: item.archivedAppointments.filter(
          (item) =>
            new Date(item.date).getFullYear() === Number(selectedYear) &&
            new Date(item.date).getMonth() + 1 === Number(selectedMonth) - 1
        ).length,
        difference:
          item.archivedAppointments.filter(
            (item) =>
              new Date(item.date).getFullYear() === Number(selectedYear) &&
              new Date(item.date).getMonth() + 1 === Number(selectedMonth)
          ).length -
          item.archivedAppointments.filter(
            (item) =>
              new Date(item.date).getFullYear() === Number(selectedYear) &&
              new Date(item.date).getMonth() + 1 === Number(selectedMonth) - 1
          ).length
      }))
      .sort((a, b) => b.archivedAppointments?.length - a.archivedAppointments?.length)

    const zeroAge = appointments.filter(
      (item) =>
        new Date(item.date).getFullYear() === Number(selectedYear) &&
        new Date(item.date).getMonth() + 1 === Number(selectedMonth) &&
        Number(item.age) < 1
    ).length

    res.json({ reportByWeeks, ClinicsReport, areasReport, zeroAge })
  } catch (e) {
    res.status(200).json({ error: `Something went wrong!! Could not fetch areas` })
    // console.log(e)
  }
})

reportsRouter.get('/getYearlylyGlobalReport', async (req, res) => {
  const { year: selectedYear } = req.query

  const appointments = await prisma.archivedappointment.findMany({})

  const clinics = await prisma.clinic.findMany({
    include: { archivedAppointments: true, doctor: true }
  })

  const areas = await prisma.area.findMany({ include: { archivedAppointments: true } })

  const monthlyFilter = (month, year, gender, child) => {
    return appointments.filter(
      (item) =>
        new Date(item.date).getFullYear() === Number(year) &&
        (month ? new Date(item.date).getMonth() + 1 === month : item) &&
        (gender ? item.gender === gender && Number(item.age) >= 18 : item) &&
        (child && !gender ? Number(item.age) < 18 : item)
    ).length
  }

  const clinicsReportFilter = (year, period, name) => {
    return clinics
      .find((item) => item.name === name)
      .archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === year && (period ? item.period === period : item)
      )
  }

  let monthlyReport = []

  for (i = 0; i < monthsNames.length; i++) {
    monthlyReport.push({
      name: monthsNames[i],
      total: monthlyFilter(i + 1, selectedYear, null, false),
      male: monthlyFilter(i + 1, selectedYear, 'ذكر', false),
      female: monthlyFilter(i + 1, selectedYear, 'أنثى', false),
      children: monthlyFilter(i + 1, selectedYear, null, true),
      previousYear: monthlyFilter(i + 1, Number(selectedYear) - 1, null, false),
      difference:
        monthlyFilter(i + 1, selectedYear, null, false) -
        monthlyFilter(i + 1, Number(selectedYear) - 1, null, false)
    })
  }

  const monthlyGrandTotal = {
    maleTotal: monthlyFilter(null, selectedYear, 'ذكر', false),
    femaleTotal: monthlyFilter(null, selectedYear, 'أنثى', false),
    childrenTotal: monthlyFilter(null, selectedYear, null, true),
    overallTotal: monthlyFilter(null, selectedYear, null, false),
    preOverallTotal: monthlyFilter(null, Number(selectedYear) - 1, null, false),
    overAllDifference:
      monthlyFilter(null, selectedYear, null, false) -
      monthlyFilter(null, Number(selectedYear) - 1, null, false)
  }

  const clinicsReport = clinics.map((item) => ({
    ...item,
    total: clinicsReportFilter(Number(selectedYear), null, item.name).length,
    morningShift: clinicsReportFilter(Number(selectedYear), 'الفترة الصباحية', item.name).length,
    noonShift: clinicsReportFilter(Number(selectedYear), 'الفترة المسائية', item.name).length,
    nightShift: clinicsReportFilter(Number(selectedYear), 'الفترة الليلية', item.name).length,
    previousYear: clinicsReportFilter(Number(selectedYear) - 1, null, item.name).length,
    difference:
      clinicsReportFilter(Number(selectedYear), null, item.name).length -
      clinicsReportFilter(Number(selectedYear) - 1, null, item.name).length
  }))

  const areasReport = areas
    .map((item) => ({
      ...item,
      total: item.archivedAppointments.filter(
        (item) => new Date(item.date).getFullYear() === Number(selectedYear)
      ).length,
      male: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) && item.gender === 'ذكر'
      ).length,
      female: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) && item.gender === 'أنثى'
      ).length,
      ageDist1: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) &&
          Number(item.age) > 0 &&
          Number(item.age) < 18
      ).length,
      ageDist2: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) &&
          Number(item.age) >= 18 &&
          Number(item.age) < 30
      ).length,
      ageDist3: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) &&
          Number(item.age) >= 31 &&
          Number(item.age) <= 40
      ).length,
      ageDist4: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) &&
          Number(item.age) >= 41 &&
          Number(item.age) <= 50
      ).length,
      ageDist5: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) &&
          Number(item.age) >= 51 &&
          Number(item.age) <= 60
      ).length,
      ageDist6: item.archivedAppointments.filter(
        (item) =>
          new Date(item.date).getFullYear() === Number(selectedYear) && Number(item.age) >= 61
      ).length,
      previousYear: item.archivedAppointments.filter(
        (item) => new Date(item.date).getFullYear() === Number(selectedYear) - 1
      ).length,
      difference:
        item.archivedAppointments.filter(
          (item) => new Date(item.date).getFullYear() === Number(selectedYear)
        ).length -
        item.archivedAppointments.filter(
          (item) => new Date(item.date).getFullYear() === Number(selectedYear) - 1
        ).length
    }))
    .sort((a, b) => b.archivedAppointments?.length - a.archivedAppointments?.length)

  const zeroAge = appointments.filter(
    (item) => new Date(item.date).getFullYear() === Number(selectedYear) && Number(item.age) < 1
  ).length

  try {
    res.json({
      monthlyReport,
      monthlyGrandTotal,
      clinicsReport,
      areasReport,
      clinics
    })
  } catch (e) {
    res.status(200).json({ error: `Something went wrong!! Could not fetch data` })
  }
})

module.exports = reportsRouter
