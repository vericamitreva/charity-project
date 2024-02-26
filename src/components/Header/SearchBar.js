import { BiSearch } from "react-icons/bi"
import "./searchbar.css"


export default function SearchBar() {

    return (
        <div className="searchbar">
            <div className="search-items">
            <div>Search here</div>
            <div><BiSearch size={22}/></div>
            </div>
        </div>
    )

} 
