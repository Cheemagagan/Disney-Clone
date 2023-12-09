import React from 'react'
import GenresList from '../Constant/GenereList'
import MovieList from './MovieList'


function GenereMovieList() {
  return (
    <div>
        {GenresList.genere.map((item,index)=>index<=19&&(
            <div className='p-8 px-8 md:px-10'>
                <h2 className='text-[20px] text-white 
                font-bold'>{item.name}</h2> 
               <MovieList genereId={item.id}/>
            </div>
        ))}
    </div>
  )
}

export default GenereMovieList