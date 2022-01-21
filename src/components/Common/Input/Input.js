import './Input.css'

const Input = ({ label, placeholder, type}) => {

    return (
        <div>
            <label className='fw-bold'>{label}</label>
            <input className="full-name-input mt-2" placeholder={placeholder} type={type} />
        </div>
    )
} 

export default Input