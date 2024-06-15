import axios from 'axios';
import Cookies from 'js-cookie';

const headers = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
export const register = (name: string,pass: string) => {
  axios.post('auth.php', {
    auth: "register",
    name: name,
    pass: pass,
  }, headers).then((r) => {
    alert(r.data.status);
  });
};
export const check = () => {
  axios.post('auth.php', {
    auth: "check"
  }, headers).then((r) => {
    if(r.data.status == "y"){
      Cookies.set('Logged', "y");
      return true;
    }
    else {
      Cookies.set('Logged', "n");
      return true;
    }
  }).catch(()=> {return false});
  return false;
};
export const logout = () => {
  axios.post('auth.php', {
    auth: "logout"
  }, headers).then(()=>{Cookies.set('Logged', "n");window.location.reload();});
};
export const login = (name: string,pass: string) => {
  axios.post('auth.php', {
    auth: "login",
    name: name,
    pass: pass,
  }, headers).then((r) => {
    if(r.data.status == "y"){
      Cookies.set('Logged', "y");
      window.location.reload();
    }
    else {
      alert(r.data.status);
      Cookies.set('Logged', "n");
    }
  });
};