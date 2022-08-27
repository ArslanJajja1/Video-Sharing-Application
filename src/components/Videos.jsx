import {Stack,Box} from '@mui/material'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {
console.log('Videos',videos)
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
        {
            videos.map((item,index)=>{
                return <Box key={index}>
                    {item.id.videoId&&<VideoCard video={item}/>}
                    {item.id.videoId&&<ChannelCard channelDetail={item}/>}
                </Box>
            })
        }
    </Stack>
  )
}

export default Videos