/*import React, {useState} from 'react'
import Cookies from "js-cookie";
import {Loader} from "../components/loader.tsx";
import {AppRoutes, PrivateAppRoutes} from "../routes.tsx";
import {check} from "../api/auth.tsx";
interface PrivateRouteProps {
  element: React.ReactNode;
}
export const PrivateRoute: React.FC<PrivateRouteProps> = ({element}) => {
  const [loading, setLoading] = useState<boolean>(false);
  if(Cookies.get('Logged') == undefined){
    setLoading(true);
    check().then((data)=>{
      console.log(data)
      if(!data)window.location.href = AppRoutes.error;
      if(Cookies.get('Logged') == 'y')setLoading(false);
      else if(Cookies.get('Logged') == 'n')window.location.href = AppRoutes.home;
    })
  }else{
    if(Cookies.get('Logged') == 'y')setLoading(false);
    else if(Cookies.get('Logged') == 'n')window.location.href = AppRoutes.home;
  }
  return loading ? <Loader/> : element;
}
export const PublicRoute: React.FC<PrivateRouteProps> = ({element}) => {
  const [loading, setLoading] = useState<boolean>(false);
  if(Cookies.get('Logged') == undefined){
    setLoading(true);
    check().then((data)=>{
      console.log(data)
      if(!data)window.location.href = AppRoutes.error;
      if(Cookies.get('Logged') == 'y')window.location.href = PrivateAppRoutes.posts;
      else if(Cookies.get('Logged') == 'n')setLoading(false);
    })
  }else{
    if(Cookies.get('Logged') == 'y')window.location.href = PrivateAppRoutes.posts;
    else if(Cookies.get('Logged') == 'n')setLoading(false);
  }

  return loading ? <Loader/> : element;
}
*/
