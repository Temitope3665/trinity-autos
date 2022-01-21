import Input from "../Common/Input/Input"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Button from "../Common/Button/Button";
import googleLogo from '../icons/Icon.svg'
import fbLogo from '../icons/fb-logo.svg'
import './CreateAccount.css'
import PageLayout from "../PageLayout";

const eye = <FontAwesomeIcon icon={faEye} />;

const CreateAccount = () => {

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <PageLayout>
            <div>
                <div className='create-acc-wrapper'>
                    <h1 className='create-acc-heading text-center mt-4'>Create an Account</h1>
                    <p className='create-acct-sub-heading text-center'>Set up your account instantly</p>

                    <div className='form-wrapper mt-4'>
                        <form className='bg-white'>
                            <div className='full-name ms-4 me-4'>
                                <Input placeholder='John Doe' type='text' label="First Name" />
                            </div>

                            <div className='full-name ms-4 me-4'>
                                <Input placeholder='johndoe@examplemail.com' type='email' label='Email' />
                            </div>

                            <div className='full-name ms-4 me-4'>
                                    <Input placeholder='***********' type={showPassword ? "text" : "password"} label='Password' />
                                    <i className="eye-toggle" onClick={togglePasswordVisibility}>{eye}</i>
                            </div>

                            <div className='create-acc-btn-wrapper bg-white'>
                                <Button style='create-acc-btn mt-4' name='Create Account' />
                            </div>
                        </form>

                        <p className="bg-white mt-4 fw-bold text-center or-text">OR</p>

                        <div className="sm-login bg-white">
                            <div className='sm-btn me-2'>
                                <img className='me-3' src={googleLogo} alt='google-logo' />
                                <span className="bg-white">Google</span>
                            </div>
                            <div className='sm-btn'>
                                <img className='me-2' src={fbLogo} alt='fb-logo' />
                                <span className="bg-white">Facebook</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default CreateAccount