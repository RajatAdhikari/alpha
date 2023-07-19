import React, { useState, useEffect } from 'react';
import Firstpage from './Firstpage'
import Fullmoon from './Fullmoon';
import Halfmoon from './Halfmoon';

function Raj() {
    const [currentComponent, setCurrentComponent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentComponent((prevComponent) => (prevComponent + 1) % 4);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const renderComponent = () => {
        switch (currentComponent) {
            case 0:
                return <Firstpage />;
            case 1:
                return <Fullmoon />;
            case 2:
                return <Halfmoon />;
            default:
                return null;
        }
    };

    return (
        <div className='Raj'>
            <div className='content'>{renderComponent()}</div>
        </div>
    )
}

export default Raj