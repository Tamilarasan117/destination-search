// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destination-list-card">
      <img src={imgUrl} alt={name} className="img" />
      <p className="destination">{name}</p>
    </li>
  )
}

export default DestinationItem
