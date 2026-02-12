import Link from "@mui/material/Link"
import "./packages.scss"

const Package = ({name , amount , details}) => {
    return(
        <div className="packageCard">
            <h3>{name}</h3>
            <ul>{details.map((d, i) => <li key={i}>{d}</li>)}</ul>
            <Link className="subscribeBtn"  to="/userDashboard/packages">Subscribe</Link>
        </div>
    )
    
}


export default Package