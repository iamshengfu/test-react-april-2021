import axios from 'axios';
import url from '../config';

export async function fetchMovies(searchValue, pageNumber = 1) {
  var response = await axios(url.movieSearchUrlPrefix + searchValue + '&page=' + pageNumber);
  if (response.data.Error) {
    throw new Error(response.data.Error);
  }
  return response;
}
