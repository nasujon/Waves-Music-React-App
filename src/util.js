import { v4 as uuidv4 } from 'uuid';


function Chilhop () {
  return [
    {
      name: 'Leaves covered by snow',
      artist: 'No Spirit',
      cover: 'https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg',
      color: ['#F7ABA8', '#F4F3F3'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8124',
      id: uuidv4(),
      active: true
    },
    {
      name: 'Zen',
      artist: 'Ian Ewing, chromonicc',
      cover: 'https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8084',
      color: ['#F7ABA8', '#F4F3F3'],
      id: uuidv4(),
      active: false
    },
    {
      name: 'Drifter',
      artist: 'Brock Berrigan,',
      cover: 'https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8261',
      color: ['#F7ABA8', '#F4F3F3'],
      id: uuidv4(),
      active: false
    },
    {
      name: 'me and my tiger',
      artist: 'Allem Iversom',
      cover: 'https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8051',
      color: ['#F7ABA8', '#F4F3F3'],
      id: uuidv4(),
      active: false
    },
    {
      name: 'me and my tiger',
      artist: 'Allem Iversom',
      cover: 'https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9061',
      color: ['#F7ABA8', '#F4F3F3'],
      id: uuidv4(),
      active: false
    }
  ]
}



export default Chilhop;