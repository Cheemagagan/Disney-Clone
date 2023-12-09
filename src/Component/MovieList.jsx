import React, { useEffect, useState, useRef } from 'react'
import Api from '../Services/Api'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({ genereId }) {
    const [movieList, setMovieList] = useState([])
    const ElementRef = useRef(null);
    useEffect(() => {
        getMovieByGenreId();
    }, [])

    const getMovieByGenreId = () => {
        Api.getMovieByGenreId(genereId).then(resp => {
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= 500
    }
    const sliderRight = (element) => {
        element.scrollLeft += 500
    }
    return (
        <div className=''>
            <IoChevronBackOutline onClick={() => sliderLeft(ElementRef.current)}
                className="text-[50px] text-white
                p-2 z-10 mt-[150px] cursor-pointer 
            hidden md:block absolute
            " />
            <IoChevronForwardOutline onClick={() => sliderRight(ElementRef.current)}
                className="text-[50px] text-white
                p-2 z-10 mr-12 mt-[150px] cursor-pointer 
            hidden md:block absolute right-0" />
            <div className='flex overflow-x-auto gap-8
     scrollbar-hide scroll-smooth pt-4 px-3 pb-4 'ref={ElementRef}>
                {

                    movieList.map((item, index) => (
                        <MovieCard movie={item} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default MovieList