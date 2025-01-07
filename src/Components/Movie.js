import React, {useState} from 'react'

const movieData = [
    {
      "title": "Inception",
      "year": 2010,
      "genre": ["Action", "Adventure", "Sci-Fi"],
      "director": "Christopher Nolan",
      "rating": 8.8,
      "cast": [
        "Leonardo DiCaprio",
        "Joseph Gordon-Levitt",
        "Elliot Page",
        "Tom Hardy"
      ],
      "duration": 148
    },
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": ["Drama"],
      "director": "Frank Darabont",
      "rating": 9.3,
      "cast": [
        "Tim Robbins",
        "Morgan Freeman",
        "Bob Gunton",
        "William Sadler"
      ],
      "duration": 142
    },
    {
      "title": "The Dark Knight",
      "year": 2008,
      "genre": ["Action", "Crime", "Drama"],
      "director": "Christopher Nolan",
      "rating": 9.0,
      "cast": [
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart",
        "Michael Caine"
      ],
      "duration": 152
    },
    {
      "title": "Forrest Gump",
      "year": 1994,
      "genre": ["Drama", "Romance"],
      "director": "Robert Zemeckis",
      "rating": 8.8,
      "cast": [
        "Tom Hanks",
        "Robin Wright",
        "Gary Sinise",
        "Sally Field"
      ],
      "duration": 142
    },
    {
      "title": "Parasite",
      "year": 2019,
      "genre": ["Comedy", "Drama", "Thriller"],
      "director": "Bong Joon Ho",
      "rating": 8.6,
      "cast": [
        "Kang-ho Song",
        "Sun-kyun Lee",
        "Yeo-jeong Cho",
        "Woo-sik Choi"
      ],
      "duration": 132
    }
  ]
  

const Movie = () => {
    const [selectedMovie, setSelectedMovie] = useState("")

// function showDetails(movie){
//     setSelectedMovie(movie)
//     // console.log(movie)
// }

  return (
    <div>


        <div className='movie-list'>
            {
                movieData.map((item) => (
                <p onClick={()=>setSelectedMovie(item)}>{item.title}</p>
             ))
        }

    </div>

    <div className='movie-display'>
        {
            selectedMovie!="" && (<div> 
            <h2>{selectedMovie.title}:</h2>
            <p>Cast: {selectedMovie.cast}</p>
            <p>Genre: {selectedMovie.genre}</p>
            <p>Director: {selectedMovie.director}</p>
            <p>Year: {selectedMovie.year}</p>
            <p>Rating: {selectedMovie.rating}</p>
            <p>Duration: { selectedMovie.duration}</p>
            </div>)

        }
    </div>

      
    </div>
  )
}

export default Movie
