import './index.css'

const ImageItem = props => {
  const {data, onClickImageItem} = props
  const {thumbnailUrl, id} = data

  const onClickImage = () => {
    onClickImageItem(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
