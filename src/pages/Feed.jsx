import {useState,useEffect} from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Sidebar from '../components/Sidebar'
 const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:'columnn',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <Sidebar />
        <Typography className='copyright'
        variant='body2'
        sx={{mt:1.5,color:'#fff'}}
        >
          Build By <a style={{color:"#fff",fontStyle:'italic'}} target='_blank' href='https://github.com/arslanjajja1'>@Arslan Jajja</a>
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed