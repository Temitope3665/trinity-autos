import UpperFooter from "./Common/Footer/UpperFooter"
import Header from "./Common/Navbar/Header"

const PageLayout = ({ children}) => {
    return(
        <div style={{background: '#F5FCFF'}}>
            <Header />
            {children}
            <UpperFooter />
        </div>
    )
}

export default PageLayout;
