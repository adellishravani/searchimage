import './index.css'

const DestinationItem = props => {
  const {destinationlist} = props
  const {name, imgUrl} = {destinationlist}
  return (
    <li className="item">
      <img src={imgUrl} className="imgg" alt="name" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
