import PageLayout from "../PageLayout"
import './VehicleDetails.css'
import wishlistIcon from '../icons/wishlist-icon.svg'
import locationIcon from '../icons/location-icon.svg'
import AddCart from '../icons/add-cart.svg'
import Inspection from '../icons/inspection.svg'
import ListOfVehiclesData from '../ListOfVehiclesData'
import { Link, useParams } from 'react-router-dom'

const VehicleDetails = () => {
    const { id } = useParams()
    let [details] = ListOfVehiclesData.filter((item)=> item.id === id)
    console.log(item.id)

    return (
        <PageLayout >
            <div>
                    <div className="vehicle-details-wrapper" key={details.id}>
                        <p className="vehicle-routes">
                            <Link to='/'><span className="route-section-name me-3">Home</span> <span className="me-3">/</span></Link>
                            <Link to='/allVehicles'><span className="route-section-name me-3">All Vehicles</span> <span className="me-3">/</span></Link>
                            <span className="detail-section-name">{details.carName}</span>
                        </p>

                        <div className="vehicle-content">
                            <div className="vehicle-content-wrapper p-3">
                                <img className="car-details-img" src={details.detailImg} alt='car-img' />
                                <div className="car-details-texts">
                                    <div className="car-name-head-wrapper">
                                        <h3 className="car-name-heading">{details.carName}</h3>
                                        <img className="ms-5" src={wishlistIcon} alt="wishlist" />
                                        <span className="car-name-wishlist ms-2">Save to Wishlist</span>
                                    </div>
                                    <p className="car-model">{details.carModel}, {details.carYear}</p>
                                    <div className="location-wrapper">
                                        <img className="me-2" src={locationIcon} alt="location" />
                                        <span className="car-location">{details.location}</span>
                                    </div>
                                    <p className="car-price">{details.carPrice}</p>

                                    <div className="car-details-buttons">
                                        <button className="add-cart-btn">
                                            <img className="me-2" src={ AddCart } alt='add-cart' />
                                            Add to Cart
                                        </button>
                                        <button className="booked-btn">
                                            <img className="me-2" src={ Inspection } alt='inspection' />
                                            Book for Inspection
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="car-details-section-two">
                                <p className="picture-text">More Photos</p>
                                {details.moreImages.map((carDetails, index) => {
                                    return (
                                    <ul className="car-images">
                                        <li key={index}>
                                            <img src={carDetails} alt="car" key={index}/>
                                        </li>
                                    </ul>
                                    )
                                })}
                                <h4 className="car-desc">Description</h4>
                                <p className="desc-text">{details.desc}</p>
                            </div>
                        </div>

                    </div>
            </div>
        </PageLayout>
    )
}

export default VehicleDetails