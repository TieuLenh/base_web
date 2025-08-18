import React, {useState, useEffect} from "react";
import './header.scss'

const Header = ({className='header', ...props}) => {
    const [data, setData] = useState(null);
    useEffect(
        () => {
            async function getData(url) {
                // Example fetch usage
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            }
            getData('/api');
        },[]
    )
    console.log(data);
    return(
        <div
            className={className}
            {...props}
        >
            {(data||[]).map(val => `${val.name}: ${val.age}`)}
        </div>
    )
}

export default Header;