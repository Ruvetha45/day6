class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating || "PG";
    }
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
      }
      
  }
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);
  
  