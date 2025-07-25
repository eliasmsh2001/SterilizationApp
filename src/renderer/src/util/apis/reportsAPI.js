import url from './httpUrl'

export const getYearlyTotoalAppointments = async ({ year }) => {
  const response = await fetch(`${url}/reports/yearlyTotalReport?year=${year}`)
  if (!response.ok) {
    throw Error('There was an issue while fetching reports')
  }

  const data = response.json()
  return data
}
export const getTotoalAppointmentsByArea = async ({ year, month }) => {
  const response = await fetch(`${url}/reports/areas?year=${year}&month=${month}`)
  if (!response.ok) {
    throw Error('There was an issue while fetching reports')
  }

  const data = response.json()
  return data
}

export const getTotoalAppointmentsByClinics = async ({ year, month }) => {
  const response = await fetch(`${url}/reports/clinics?year=${year}&month=${month}`)
  if (!response.ok) {
    throw Error('There was an issue while fetching reports')
  }

  const data = response.json()
  return data
}

export const getMonthlyGlobalReport = async ({ month, year }) => {
  const response = await fetch(`${url}/reports/getMonthlyGlobalReport?year=${year}&month=${month}`)
  if (!response.ok) {
    throw Error('There was an issue while fetching reports')
  }

  const data = response.json()
  return data
}

export const getYearlyGlobalReport = async ({ year }) => {
  const response = await fetch(`${url}/reports/getYearlylyGlobalReport?year=${year}`)
  if (!response.ok) {
    throw Error('There was an issue while fetching reports')
  }

  const data = response.json()
  return data
}
