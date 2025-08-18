import React, {useEffect} from "react";
import './header.scss'

const Header = ({className='header', ...props}) => {
    useEffect(
        () => {
            fetch('/api')
                .then(res => res.json())
                .then(result => {

                })
                .catch(err => console.log(err));
        },[]
    )
    return(
        <div
            className={className}
            {...props}
        >
            
        </div>
    )
}

export default Header;