import NavBarComponent from "../components/NavBarComponent";



const MainLayout = ({ children }) => {
    return (
        <div>
            <NavBarComponent />   
            {children}

        </div>
    )
}

export default MainLayout