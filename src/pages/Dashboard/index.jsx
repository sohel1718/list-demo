import { ReactComponent as Search } from "../../assets/images/search-black.svg";

const Dashboard = () => {
    return (
        <div className="dash">
            <div className="dash_search">
                <h1>Search Project</h1>
                <div className="dash_search_search-input">
                    <input type="text" placeholder="Search more projects" />
                    <Search />
                </div>
            </div>  
        </div>
    )
}

export default Dashboard