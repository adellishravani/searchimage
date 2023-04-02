import './index.css'

const DestinationItem = props => {
  const {destinationitem} = props
  const {name, imgUrl} = {destinationitem}
  return (
    <li className="item">
      <img src={imgUrl} className="imgg" alt="name" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
