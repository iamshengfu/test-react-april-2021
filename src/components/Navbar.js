import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{"display":"flex"}}>
            <Link to="/"> <h2>1. Original from Tutorial</h2>  </Link>
            <Link to="/modifiedapp"> <h2>2. Modified Version</h2>  </Link>
            <Link to="/appmock"> <h2>3. App with Mockjs</h2>  </Link>

            <style jsx>{`
                h2 {
                    margin-right: 2em;
                    margin-left: 1em;
                    font-color: blue;
                }
            `}</style>
        </div>
    )
}

export default Navbar
