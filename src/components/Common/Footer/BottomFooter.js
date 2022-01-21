import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './Footer.css'

const arrowUp = <FontAwesomeIcon icon={faArrowUp} />;

const BottomFooter = () => {
    return (
        <div className="bottom-footer-wrapper d-flex justify-content-around">
            <p className="footer-text d-flex align-items-center">Trinity Autos 2020 All Rights Reserved</p>
            <div className='footer-arrow-up text-center'>
                <button className='arrow-up-btn'> <i className="arrow-up" aria-hidden="true">{arrowUp}</i> </button>
                <p className="arrow-up-text mt-2 mb-0">Back to Top</p>
            </div>
        </div>

    )
}

export default BottomFooter