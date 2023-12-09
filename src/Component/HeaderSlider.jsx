import React, { useEffect, useState,useRef } from 'react'
import Api from '../Services/Api'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";


const imageurl = "https://image.tmdb.org/t/p/w500";
const screenwidth=window.innerWidth;

function HeaderSlider() {
    const [movielist, setMovieList] = useState([]);
    const ElementRef=useRef();
    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        Api.getTrendingMovies.then(resp => {
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const sliderLeft=(element)=>{
        element.scrollLeft-=screenwidth-100
    }
    const sliderRight=(element)=>{
        element.scrollLeft+=screenwidth-100
    }
    return (
        <div>
            <HiOutlineChevronLeft className='text-[30px] absolute mx-8 mt-[150px] cursor-pointer hidden md:block  ' onClick={()=>sliderLeft(ElementRef.current)}/>
            <HiOutlineChevronRight className='text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 hidden md:block' onClick={()=>sliderRight(ElementRef.current)}/>
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={ElementRef}>
                {movielist.map((item, index) => (
                    <img src={imageurl + item.backdrop_path} alt={`Movie ${index}`} className='min-w-full md:h-[310px] object-left-top mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out' />
                ))}
            </div>
        </div>
        );

}

export default HeaderSlider