import React from 'react';

export default props => {

    return (
        <ul className="nav nav-tabs justify-content-center py-3">
            {props.children}
        </ul>
    );
}
