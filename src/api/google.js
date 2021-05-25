import axios from "axios";
import { KEY } from "../const/google";

//PAID API
//cloud.google.com/translate/docs
export default axios.create({
    baseURL: 'https://translation.googleapis.com/language/translate/v2',
    params: {
        key: KEY,
    }
})