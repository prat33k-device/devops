import React from "react";
import {Link} from "react-router-dom";

function OtherPage() {
    return (
        <div>
            I'm some other page!
            <Link to="/">Go back Home</Link>
        </div>
    );
};

export default OtherPage;