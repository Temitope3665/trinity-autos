import Input from "../Input/Input"
import SearchIcon from '../../icons/search-icon.svg'
import Button from "../Button/Button"
import './Search.css'

const Search = () => {
    return (
        <div className="search-wrapper">
            <img src={SearchIcon} className="search-icon ms-3" alt='search' />
            <input type='search' className='search-input' placeholder="Search for cars" />
            <Button style='search-btn' name='Search' />
        </div>
    )
}

export default Search