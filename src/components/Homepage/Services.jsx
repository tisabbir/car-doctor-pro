import React from 'react';
import Headline from '../Shared/Headline';
import ServiceCard from '../Cards/ServiceCard';
import { services } from '@/lib/services';
const Services = () => {
    const serviceHeadline = {
        superTitle: "Service",
        title: "Our Service Area",
        description: "This is the area where we run our business. This is the area where we run our business. This is the area where we run our business. This is the area where we run our business."
    }
    return (
        <div>
            <Headline headline={serviceHeadline} />
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                services.map((service, id)=>
                <ServiceCard service={service} key={id}></ServiceCard>
                )
            }
            </div>
        </div>
    );
};

export default Services;