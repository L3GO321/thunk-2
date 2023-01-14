import { useSelector } from "react-redux"

export const ImagesList = () => {
  const images = useSelector((store) => store)

  return (
    <div style={{ display: 'flex', columnGap: '20px', rowGap: '20px', marginTop: '30px' }}>
      {images.map((image, index) => <img key={index} src={image} width='200' height='200' />)}
    </div>
  )
}
