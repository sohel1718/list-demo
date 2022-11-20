const NotFound = ({ handleNavigate }) => {
    
    return (
        <div className="not_found_container">
            <b>404</b>
            <span>Oops! Page Not Found</span>
            <p>This page doesn't exist or was removed!</p>
            <p>We suggest you back to home</p>
            <button onClick={() => handleNavigate('/')} >Back To Home</button>
        </div>
    )
}

export default NotFound