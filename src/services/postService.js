import axios from 'axios';
import url from '../config';

export async function fetchPosts() {
  var response = await axios(url.postsUrl);
  return response;
}
