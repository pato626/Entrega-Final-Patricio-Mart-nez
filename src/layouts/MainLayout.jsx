import FooterComponent from "../components/FooterComponent";
import NavBarComponent from "../components/NavBarComponent";



const MainLayout = ({ children }) => {
    return (
        <div>
            <NavBarComponent />   
            {children}
            <FooterComponent />
        </div>
    )
}

export default MainLayout