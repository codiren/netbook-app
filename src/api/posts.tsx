import axios from 'axios';
import {postdto} from "../dto/post.tsx";

const headers = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
export const create = (text: string) => {
  axios.post('posts.php', {
    posts: "create",
    content: text
  }, headers);
    /*.then((r) => {
    alert(r.data);
  });*/
};
export const read = async (): Promise<postdto[]> => {
  return (await axios.post('posts.php', {
    posts: "read"
  }, headers)).data
};
