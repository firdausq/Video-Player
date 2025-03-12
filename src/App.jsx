import { useState } from 'react';
import './App.css';
import Video from './Video'; 
import Menu from './Menu';

const VIDEOS = {
  fog: 'src/videos/fog.mp4',
  meadow: 'src/videos/meadow.mp4',
  flowers: 'src/videos/flowers.mp4',
  beach: 'src/videos/beach.mp4'
};

export default function App() {

  const [src, setSrc] = useState(VIDEOS.fog);

  function onSelectVideoHandler(newVideo) {
    setSrc(() => VIDEOS[newVideo])
  };

 return (
  <div>
    <h1>Video Player</h1>
    <Menu onSelectVideo={onSelectVideoHandler} />
    <Video src={src} />

  </div>
 )
};