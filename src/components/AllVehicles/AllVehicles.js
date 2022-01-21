import Search from '../Common/Search/Search'
import PageLayout from '../PageLayout'
import './AllVehicles.css'
import LeftArrow from '../icons/left-arrow.svg'
import RightArrow from '../icons/right-arrow.svg'
import ListOfAllCars from '../ListOfCars/ListOfAllCars'

const AllVehicles = () => {
    return (
        <PageLayout>
            <div>
                <div className='all-vehicle-wrapper'>

                    <p className="all-vehicle-header">All Vehicles</p>
                        <Search />
                    
                    <div className='filter-wrapper'>
                            <span className='filter-text'>Filter:</span>
                            <select className='select-option' name="location" id="location">
                                <option selected='true' disabled='disabled'>Location</option>
                                <option value="lagos">Lagos</option>
                                <option value="abuja">Abuja</option>
                                <option value="lokoja">Lokoja</option>
                            </select>

                            <select className='select-option' name="manufacturer" id="manufacturer">
                                <option selected='true' disabled='disabled'>Manufacturer</option>
                                <option value="audi">Audi</option>
                                <option value="toyota">Toyota</option>
                                <option value="benze">Benze</option>
                            </select>

                            <select className='select-option' name="year" id="year">
                                <option selected='true' disabled='disabled'>Year</option>
                                <option value="2017">2017</option>
                                <option value="2020">2020</option>
                                <option value="2009">2009</option>
                            </select>

                            <span className='sort-text'>Sort:</span>
                            <select className='select-option' name="year" id="sort">
                                <option selected='true' disabled='disabled'>Ascending Order </option>
                                <option value="2017">2017</option>
                                <option value="2020">2020</option>
                                <option value="2009">2009</option>
                            </select>
                    </div>
                </div>

                <div className='mt-4'>
                    <ListOfAllCars />
                </div>

                <div className='pagination-wrapper'>
                    <button className='arrow-btn'>
                        <img src={LeftArrow} alt='left-arrow' />
                    </button>
                    <span className='pagination-number p-4'>1    2    ...6</span>
                    <button className='arrow-btn'>
                        <img src={RightArrow} alt='rightt-arrow' />
                    </button>
                </div>
            </div>
        </PageLayout>
    )
}

export default AllVehicles