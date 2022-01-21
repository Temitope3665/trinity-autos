import './ListOfCars.css'
import calendar from '../icons/calendar.svg'
import bookmark from '../icons/bookmark.svg'
import Button from '../Common/Button/Button'
import ListOfVehiclesData from '../ListOfVehiclesData'
import { Link } from 'react-router-dom'

const ListOfAllCars = () => {

    return (
        <div className="list-of-cars-wrapper">
            {ListOfVehiclesData.map((details) => (
                <div className='car-details-wrapper mt-3' key={details.id}>
                    <div>
                        <img className='car-img' src={details.displayImg} alt='car-img' />
                    </div>
                    <div className='bookmark'>
                        <img className='bookmark-icon' src={bookmark} alt='bookmark' />
                        <span className='bookmark-text ms-3'>Save to Wishlist</span>
                    </div>
                    <div className='mt-5'>
                        <p className='car-name'>{ details.carModel }</p>
                        <p className='car-model'>{ details.carName }</p>
                        <p className='car-price'>{ details.carPrice }</p>
                        <div className='car-date-wrapper'>
                            <img className='calendar-icon' src={calendar} alt='calendar' />
                            <span className='car-date ms-2'>{ details.carYear }</span>
                        </div>
                    </div>
                    <Link to={`/vehicleDetails/${details.id}`}><Button style='details-btn' name='See Vehicle Details' /></Link>
                </div>
            ))}
            
        </div>
    )
}

export default ListOfAllCars