import React from 'react';
import Headline from '../Shared/Headline';

const Services = () => {
    const serviceHeadline = {
        superTitle: "Service",
        title: "Our Service Area",
        description: "This is the area where we run our business. This is the area where we run our business. This is the area where we run our business. This is the area where we run our business."
    }
    return (
        <div>
            <Headline headline={serviceHeadline} />
        </div>
    );
};

export default Services;