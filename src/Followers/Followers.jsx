

import React from "react";

function Followers({ count }) {
    return (
        <div>
            <h2 className="items-center">{count} <br />
            Followers</h2>
        </div>
    );
}

export default Followers;