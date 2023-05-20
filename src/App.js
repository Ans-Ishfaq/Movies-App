
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//APi key = 394a2592
//http://www.omdbapi.com/?i=tt3896198&apikey=394a2592

// const API_URl = "http://www.omdbapi.com/?i=tt3896198&apikey=394a2592";



const App =()=> {


  const [movies,setMovies] =useState([]);
  const [search,setSearch] = useState('');

  useEffect(()=>{
    searchMovies('Superman');
    },[]);

    const searchMovies = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=394a2592&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  return (  
  <div className="app">
     
     <h1>MovieWorld</h1>
     <div className='search'>
      <input 
        placeholder='Search For Movies'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}

      />
      <img 
       src={SearchIcon}
       alt="searchicon"
       onClick={()=>searchMovies(search)} 
       />
     </div>
    
    {
       movies.length > 0 ?      
       (
       <div className="container">
         {
          movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))
         }
       </div>
       )
       :
       (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
       )
    }
  </div>
  
  );
  }  
   
    

export default App;
