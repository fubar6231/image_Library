import axios from "axios";


export function GetImages(page){
    return axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`)
}