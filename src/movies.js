// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let allDirectors = arr.map(function (movie) {
    return movie.director;
  });
  console.log(allDirectors);
  return allDirectors;
}

// getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let filteredArr = arr.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  console.log(filteredArr);
  return filteredArr;
}

// howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  let sum = arr.reduce(function (total, nextVal) {
    return total + nextVal.score;
  }, 0);
  console.log(Number((sum / arr.length).toFixed(2)));
  return Number((sum / arr.length).toFixed(2));
}

// scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter(function (movie) {
    return movie.genre.includes('Drama');
  });

  return scoresAverage(dramaMovies);
}

// dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let sortedMovies = [...arr];
  sortedMovies.sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  console.log(sortedMovies);
  return sortedMovies;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
