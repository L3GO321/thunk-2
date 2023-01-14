import { addImage } from "../../utils/store/images/imagesSlice"

import { useDispatch } from "react-redux"

export const ImageUpload = () => {
  const dispatch = useDispatch()

  const uploadImage = (e) => {
    const [file] = e.target.files
    if (file) {
      dispatch(addImage(URL.createObjectURL(file)))
    }
  }

  return (
    <label>
      <input
        type='file'
        accept='image/png, image/jpeg'
        onChange={uploadImage}
      />
    </label>
  )
}
