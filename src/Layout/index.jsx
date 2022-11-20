import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children, handleNavigate,}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout