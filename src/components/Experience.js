import React from 'react'
import html from "../assets/html.png"
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import sqllan from '../assets/sqllogoo.png';
import Clang from '../assets/c-logo.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import pythonl from '../assets/pytholan.png'
import azure from '../assets/micro.png'

const Experience = () => {

    const techs=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },

        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },

        {
            id:3,
            src:javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        
        {
            id:6,
            src:github,
            title:'GitHub',
            style:'shadow-gray-400'
        },
        {
            id:7,
            src:Clang,
            title:'C/C++',
            style:'shadow-white-500'
        },
        {
            id:8,
            src:sqllan,
            title:'SQL',
            style:'shadow-pink-500'
        },
        {
            id:9,
            src:pythonl,
            title:'Python',
            style:'shadow-orange-500'
        },
        {
            id:10,
            src:azure,
            title:'AZ_900',
            style:'shadow-orange-500'
        },

    ]
  return (
    <div id='experience' className='bg-gradient-to-b from-gray-800 to-black w-full '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white '>

            <div >
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technology I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id,src,title,style})=>(
                        <div 
                        key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                    </div>
                
                    )
                )
            }
            
                
            </div>
        </div>
    </div>
  );
};

export default Experience;