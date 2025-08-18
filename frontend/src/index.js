import React,{ useEffect} from 'react';
import {createRoot} from 'react-dom/client';

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
            test
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />)