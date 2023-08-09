import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWI0YzYwZTI2OGVkOTEyMzRjZDU5OTFjYjk3ZjI3MyIsInN1YiI6IjYzYmFjMzBlYzBhMzA4MDA5MzQzYjAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.__JNnKmvDBALRGwnOsCoH3zF1m3ornNXtLM6F0I4K-M'

const headers = {
    Authorization : 'Bearer ' + API_KEY
}


const fetchDataFromApi = async (url, params)=>{
    try{
        let {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data
        
    }catch (err){
        return err
    }

}

export default fetchDataFromApi;