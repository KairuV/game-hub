import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a7b534f537c540099b4a1ee0b729b881'
    }
})