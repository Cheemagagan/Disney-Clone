import React, { useState } from 'react'
import Disney_logo from './../assets/Images/disney.png'
import HeaderItem from './HeaderItem'
import { HiHome, HiStar, HiPlayCircle, HiTv, HiMagnifyingGlass } from "react-icons/hi2"
import { HiPlus, HiDotsVertical } from "react-icons/hi"
import { MdSportsBaseball } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";

function Header() {
    const [toggle, setToggle] = useState(false);

    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'Search',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'TV',
            icon: HiTv
        },
        {
            name: 'SPORTS',
            icon: MdSportsBaseball
        },
        {
            name: 'CATEGORY',
            icon: TbCategoryPlus
        }



    ]
    return (
        <div className='flex items-center justify-between p-4  '>
            <div className='flex  gap-8 items-center'>

                <img src={Disney_logo} className='w-[40px] md:w-[60px] object-cover rounded-full' />
                <div className='hidden md:flex  gap-8'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex  md:hidden gap-4'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}
                </div>
                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical} />
                    {toggle ? <div className='absolute mt-3 bg-gradient-to-r from-blue-400  border-[1px] border-gray-600 px-5 py-3 rounded-lg p-2 '>
                        {menu.map((item, index) => index > 2 && (
                            <HeaderItem name={item.name} Icon={item.icon} />
                        ))}
                    </div> : null}
                </div>
            </div>
            <img src="https://www.w3schools.com/howto/img_avatar.png" className='w-[37px] rounded-full ' />
        </div>
    )
}

export default Header