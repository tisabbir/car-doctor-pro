import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center my-24 gap-6 items-center '>
            <div className='relative'>
                <Image className='rounded-lg object-cover' src='/assets/images/about_us/person.jpg' width={460} height={480} alt='about image' />
                <Image className='absolute object-cover right-0 top-48 border-4 border-white rounded-lg' src='/assets/images/about_us/parts.jpg' width={320} height={380} alt='about image' />
            </div>
            <div className='space-y-6'>
                <p className='text-primary'>About Us</p>
                <h1 className='text-5xl font-semibold'>We are qualified and of experience in the field</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium asperiores, expedita harum magni libero. Neque provident voluptatibus in blanditiis voluptatem, incidunt, alias sit deleniti molestiae unde amet ipsum porro.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium asperiores, expedita harum magni libero. Neque provident voluptatibus in blanditiis voluptatem, incidunt, alias sit deleniti molestiae unde amet ipsum porro.</p>
                <button className='btn btn-primary text-white'>Get for info</button>
            </div>
        </div>
    );
};

export default About;