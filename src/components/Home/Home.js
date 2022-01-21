import Button from "../Common/Button/Button"
import PageLayout from "../PageLayout"
import HeroCar from '../icons/hero-car.svg'
import HeroFloor from '../icons/hero-floor.svg'
import Chat from '../icons/chat.svg'
import './Home.css'
import Search from "../Common/Search/Search"
import ListOfCars from "../ListOfCars/ListOfCars"
import VehicleDealership from '../icons/car-dealer.svg'
import SecuredOnlineIcon from '../icons/clarity.svg'
import CustomerServiceIcon from '../icons/customer-service.svg'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <PageLayout>
            <div className="landing-page">
                <div className="landing-page-section-one">
                    <div className="landing-page-left-side">
                        <h1 className="landing-page-heading"><span>The best deals</span><span>For your dream car</span></h1>
                        <p className="landing-page-sub-heading"><span>Trinity Autos offers top quality deals on</span><span>Vehicle Purchase,
                        Maintenance and Hire.</span></p>
                        <Link to='/allVehicles'><Button style='landing-page-btn' name='See all Vehicles' /> </Link>
                    </div>
                    <div className="landing-page-right-side">
                        <img src={HeroCar} className="hero-car" alt='hero-car' />
                    </div>
                </div>
                <img className="hero-floor" src={HeroFloor} alt='hero-floor' />
                <img className="chat-btn" src={Chat} alt='chat' />

                <div className="landing-page-section-two">
                    <p className="list-cars-heading">Popular</p>
                    <Search />
                </div>
                <div>
                    <ListOfCars />
                </div>

                <Link to='/allVehicles'><Button style='more-btn mx-auto' name='See More' /> </Link>

                <div className="services-wrapper">
                    <div className="cards-wrapper">
                        <div className="wraps">
                            <div className="cards">
                                <img className="card-img" src={VehicleDealership} alt='vehicle-dealer' />
                            </div>
                            <div className="mt-3 text-center">
                                <p className="card-title">Vehicle Dealership</p>
                                <p className="card-subtitle"><span>Trinity Autos provides</span>
                                    <span>quality sales, maintenance</span>
                                    <span>and vehicle hire services.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cards-wrapper">
                        <div className="wraps">
                            <div className="cards">
                                <img className="card-img" src={SecuredOnlineIcon} alt='secured' />
                            </div>
                            <div className="mt-3 text-center">
                                <p className="card-title">Secure online payment</p>
                                <p className="card-subtitle"><span>Pay instantly online or </span>
                                    <span>book an appointment to inspect</span>
                                    <span>a vehicle before purchase.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cards-wrapper">
                        <div className="wraps">
                            <div className="cards">
                                <img className="card-img" src={CustomerServiceIcon} alt='customer-service' />
                            </div>
                            <div className="mt-3 text-center">
                                <p className="card-title">Customer Service</p>
                                <p className="card-subtitle"><span>Speak with a sales rep</span>
                                    <span>via real time messaging</span>
                                    <span>for enquiries or appointments.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Home