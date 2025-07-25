import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function DoctorSelectionBox({ doctors, chosenDoctor, setChosenDoctor }) {
  const handleChange = (event) => {
    setChosenDoctor(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">الدكتور</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chosenDoctor}
          label="الدكتور"
          onChange={handleChange}
        >
          {doctors && doctors.map((item) => <MenuItem value={item.name}>{item.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  )
}
