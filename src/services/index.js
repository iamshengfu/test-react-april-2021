import axios from 'axios';
import url from '../config';

export async function fetchMovies(searchValue, pageNumber = 1) {
  var response = await axios(url.movieSearchUrlPrefix + searchValue + '&page=' + pageNumber);
  if (response.data.Error) {
    throw new Error(response.data.Error);
  }
  return response;
}

export async function fetchPosts() {
  var response = await axios(url.postsUrl);
  return response;
}

export async function fetchHistories() {
  var response = await axios(url.searchHistoryAPI);
  return response;
}

export async function fetchRecommendation(text) {
  var response = await axios(url.recommendationAPI + '?s=' + text);
  return response;
}

export async function deleteHisotry(id) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  var response = await axios.delete(
    url.searchHistoryAPI + '/' + id,
    {
      foo: 'bar',
    },
    config
  );
  return response;
}

export async function addHistory(data) {
  //headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  var response = await axios.post(url.searchHistoryAPI, data, config);
  return response;
}
