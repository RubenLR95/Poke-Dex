import { baseURL } from "./config.js";

export async function callAPI(path, options ={}) {
    const url = `${baseURL}${path}`;


    try{
        const res = await fetch(url,{
            
           
            headers: {"Content-Type": "application/json"},
            ...options
        });
        if(!res.ok) throw new Error(`Error ${res.status}`);

        return await res.json();
    }catch (err){
        console.error("API Error: ",err);
        throw err;
    }

}