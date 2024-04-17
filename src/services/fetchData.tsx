import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default async function getData(url: string) {
  const inDev = (import.meta.env.VITE_ENVIROMENT)
  if (inDev !== "dev"){
    const { getToken } = useKindeAuth();
  
    try {
      const accessToken = await getToken();
      console.log(`access token: ${accessToken}`);
      
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`
          
        }
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }
  
      const data = await res.json();
      console.log(data)
      return data
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }else{
    const res = await fetch(url);
    const data = await res.json();
    return data
  }

  }