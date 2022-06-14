// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let allDirectors = arr.map( function(movie){
    return movie.director;
  });
  return allDirectors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergMovies = arr.filter( function(movie){
    return movie.director === "Steven Spielberg" && movie.genre.includes('Drama')
  });
  return spielbergMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0){
    return 0
  }
  let sum = arr.reduce( function(total, nextVal){
    return total + nextVal.score
  }, 0);
  return Number((sum/arr.length).toFixed(2))
}
// console.log(scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaArr = arr.filter( function(movie){
    return movie.genre.includes('Drama')
  });

  if (dramaArr.length === 0){
    return 0
  }

  let dramaScore = dramaArr.reduce( function(total, nextVal){
    return total + nextVal.score
  }, 0);

  return Number((dramaScore/dramaArr.length).toFixed(2))
}

// console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let sortedMovies = [...arr];
  sortedMovies.sort(function(a, b){
    if (a.year === b.year){
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  });
  return sortedMovies
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let alphabetical = [...arr]
  alphabetical.sort(function(a, b){
    return a.title.localeCompare(b.title)
  })
  return alphabetical.slice(0, 20).map(function(movie){
    return movie.title
  })
}

// console.log(orderAlphabetically(movies))

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically
  };
}
