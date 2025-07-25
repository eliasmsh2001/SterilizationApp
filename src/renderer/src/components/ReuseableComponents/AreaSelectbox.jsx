import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useQuery } from '@tanstack/react-query'
import { getEveryArea } from '../../util/apis/appointmentsApis'

export default function AreaSelectbox({ chosenArea, setChosenArea, editting }) {
  const handleChange = (event) => {
    setChosenArea(event.target.value)
  }

  const { data: areas, isError } = useQuery({
    queryKey: ['area'],
    queryFn: getEveryArea
  })

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
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
          value={chosenArea}
          label="العيادة"
          onChange={handleChange}
        >
          {!editting && <MenuItem value={'الكل'}>الكل</MenuItem>}
          {areas && areas?.map((item) => <MenuItem value={item?.name}>{item?.name}</MenuItem>)}
          {isError && <MenuItem value={100}>حدث خطأ، لا توجد مناطق</MenuItem>}
        </Select>
      </FormControl>
    </Box>
  )
}
