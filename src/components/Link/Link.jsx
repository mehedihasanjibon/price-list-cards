import React from 'react';

const Link = ({route}) => {
    return (
        <div className='mr-12 hover:bg-purple-600 hover:text-white'>
            <a href={route.category}> {route.name}</a>
        </div>
    );
};

export default Link;