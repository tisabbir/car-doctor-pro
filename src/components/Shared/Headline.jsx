import React from 'react';

const Headline = ({headline}) => {
    return (
        <div className='mx-auto text-center max-w-2xl space-y-4'>
            <p className='text-primary'>{headline.superTitle}</p>
            <h1 className='text-5xl font-semibold'>{headline.title}</h1>
            <p>{headline.description}</p>
        </div>
    );
};

export default Headline;