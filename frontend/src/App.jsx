import React, {useEffect} from "react";
import Header from "./components/header/header.jsx";
const App = () => {
    useEffect(
        () => {
            fetch('/api')
                .then(res => res.json())
                .then(result => {

                })
                .catch(err => console.log(err));
        },[]
    )
    return (
        <div>
            <Header title="header container" />
            test
        </div>
    )
}

export default App;