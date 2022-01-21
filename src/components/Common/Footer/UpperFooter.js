import logo from '../../icons/trinity-lg.svg'
import BottomFooter from './BottomFooter'

const UpperFooter = () => {
    return (
        <div>
            <div className="upper-footer-wrapper">
                <div>
                    <img className='' src={logo} alt="trinity-logo"/>
                </div>
                <div className='main-section'>
                    <p className='fw-bold'>Main</p>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='product-section'>
                <p className='fw-bold'>Product</p>
                    <ul>
                        <li>All Vehicles</li>
                        <li>Search</li>
                        <li>Popular Puchases</li>
                    </ul>
                </div>
                <div className='social-section'>
                <p className='fw-bold'>Social</p>
                    <ul>
                        <li>Sales Rep Live Chat</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>

            <BottomFooter />
        </div>
    )
}

export default UpperFooter