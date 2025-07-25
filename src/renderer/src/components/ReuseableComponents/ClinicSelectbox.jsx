import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function ClinicSelectbox({ clinics, chosenClinic, setChosenClinic, isArchive }) {
  const handleChange = (event) => {
    setChosenClinic(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        {!isArchive && <InputLabel id="demo-simple-select-label">العيادة</InputLabel>}
        <Select
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200
              }
            }
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chosenClinic}
          label="العيادة"
          onChange={handleChange}
        >
          {isArchive && <MenuItem value={'الكل'}>الكل</MenuItem>}
          {clinics && clinics?.map((item) => <MenuItem value={item?.name}>{item?.name}</MenuItem>)}
          {!clinics && <MenuItem value={100}>حدث خطأ، لا نوجد عيادات</MenuItem>}
        </Select>
      </FormControl>
    </Box>
  )
}
