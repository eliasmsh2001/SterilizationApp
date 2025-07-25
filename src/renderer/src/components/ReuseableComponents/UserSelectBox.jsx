import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '../../util/apis/UserAPIs'

export default function UserSelectBox({ selectedUser, setSelectedUser }) {
  const handleChange = (event) => {
    setSelectedUser(event.target.value)
  }

  const { data: users, isError } = useQuery({
    queryKey: ['user'],
    queryFn: getAllUsers
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
          value={selectedUser}
          label="العيادة"
          onChange={handleChange}
        >
          <MenuItem value={'الكل'}>الكل</MenuItem>
          {users &&
            users?.map((item) => <MenuItem value={item?.username}>{item?.username}</MenuItem>)}
          {isError && <MenuItem value={100}>حدث خطأ، لا يوجد مستخدمين</MenuItem>}
        </Select>
      </FormControl>
    </Box>
  )
}
