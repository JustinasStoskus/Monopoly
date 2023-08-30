import React from 'react';
const Property = ({ name, color }) => {
    return (
        <div className={`property ${color}`}>
            <p>{name}</p>
        </div>
    );
};

export default Property;
