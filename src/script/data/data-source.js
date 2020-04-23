class DataSource {
  static popularMovie() {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f797ad5241ac076500dbb4f18824eb4b&language=en-US&page=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`Errorr`);
        }
      })
      .catch((rejectedReason) => {
        console.log(rejectedReason);
      });
  }
  static searchMovie(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f797ad5241ac076500dbb4f18824eb4b&language=en-US&query=${keyword}&page=1&include_adult=false`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`Errorr`);
        }
      })
      .catch((rejectedReason) => {
        console.log(rejectedReason);
      });
  }
}

export default DataSource;
