import React from "react";
import preloader from '../../../assets/preloader/amalie-steiness.gif';

const Preloader = () => {
    return <div style={{ backgroundColor: 'white' }}>
        <img src={preloader} alt={`Not found gif ${preloader}`} />
    </div>
};

export default Preloader;