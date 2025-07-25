import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function GenderSelectbox({ gender, setGender }) {
  const handleChange = (event) => {
    setGender(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120, marginTop: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">الجنس</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="الجنس"
          onChange={handleChange}
        >
          <MenuItem value={'أنثى'}>أنثى</MenuItem>
          <MenuItem value={'ذكر'}>ذكر</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
