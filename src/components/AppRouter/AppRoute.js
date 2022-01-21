import { Route, BrowserRouter, Routes, Router } from "react-router-dom"
import { render } from "react-dom"
import Home from "../Home/Home"
import CreateAccount from '../CreateAccForm/CreateAccount'
import Login from "../Login/Login"
import AllVehicles from "../AllVehicles/AllVehicles"
import VehicleDetails from "../VehicleDetails/VehicleDetails"

const AppRoute = () => {
    return (
        render(
            <BrowserRouter>
                <Routes>
                    <Route index path='/'  element={<Home />} />
                    <Route path='/register' element={<CreateAccount />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/allVehicles' element={<AllVehicles />} />
                    <Route path='/vehicleDetails/:id' element={<VehicleDetails />} />
                </Routes>
            </BrowserRouter>,
            document.getElementById("root")
        )
    )
}

export default AppRoute