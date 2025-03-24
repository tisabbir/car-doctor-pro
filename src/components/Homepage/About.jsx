import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='flex gap-6 items-center'>
            <div>
                <Image src={'/public/assets/images/about_us/person.jpg'} width={400} height={400} alt='about image' />
                <Image src={'/public/assets/images/about_us/parts.jpg'} width={400} height={400} alt='about image' />
            </div>
            <div>
                <p>About Us</p>
                <h1>We are qualified and of experience in the field</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium asperiores, expedita harum magni libero. Neque provident voluptatibus in blanditiis voluptatem, incidunt, alias sit deleniti molestiae unde amet ipsum porro.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium asperiores, expedita harum magni libero. Neque provident voluptatibus in blanditiis voluptatem, incidunt, alias sit deleniti molestiae unde amet ipsum porro.</p>
                <button>Get for info</button>
            </div>
        </div>
    );
};

export default About;