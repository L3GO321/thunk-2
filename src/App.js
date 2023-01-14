import React, { useEffect } from 'react';

import { useSelector } from "react-redux"

import { ImageUpload, ImagesList } from './components'

function App() {
  const images = useSelector((store) => store)

  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(images))
  }, [images])

  return (
    <div>
      <ImageUpload />
      <ImagesList />
    </div>
  );
}

export default App;
