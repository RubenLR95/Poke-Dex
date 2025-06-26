import { baseURL } from "./config.js";

export async function callAPI(path, option ={}) {
    const url = `${baseURL}${path}`;

    try{
        const res = await fetch(url,{
            headers: {"Content-Type": "application/json"},
            ...option
        });
        if(!res.ok) throw new Error(`Error ${res.status}`);
        return await res.json();
    }catch (err){
        console.error("APi Error: ", err);
        throw err;
    }

    
};