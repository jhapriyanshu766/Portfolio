import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { FaCode } from "react-icons/fa";


const SocialLinks = () => {
const links =[
    {
        id:1,
        child:(
            <>
                    LinkedIN<FaLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/priyanshu-jha-139057199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
                    Coding Profile<FaCode size={30}/>
            </>
        ),
        href:'https://codolio.com/profile/ZojiOwZk',
        
    },
    {
        id:3,
        child:(
            <>
                    Mail <HiOutlineMail size={30}/>
            </>
        ),
        href:'mailto:btech2021.priyanshujha@mphi.edu.in',
        
    },
    {
        id:4,
        child:(
            <>
                    Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:'/jhapriyanshuresume.pdf',
        style:'rounded-br-md',
        download:true,
    },
    {
        id:5,
        child:(
            <>
                    GitHub <FaGithub size={30}/>
            </>
        ),
        href:'https://github.com/jhapriyanshu766?tab=stars',
        
    },
]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style,download})=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]'+" "+style}>
                <a href={href} className='flex justify-between items-center w-full text-white'
                download={download} target='_blank'
                rel="noreferrer"
                >
                    {child}
                </a>
            </li>
            ))}


            
        </ul>
    </div>
  )
}

export default SocialLinks