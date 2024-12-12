import React from "react";
import preloader from '../../../assets/preloader/lg.gif';

const Preloader = () => {
    return <div>
        <img src={preloader} alt={`Not found gif ${preloader}`} />
    </div>
};

export default Preloader;