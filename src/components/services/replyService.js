import axios from 'axios';
const BASE_URL = `http://localhost:5000/reply`

export const getPostReplyService = async (id) => {

    try {
        let response = await axios.get(BASE_URL + `/view/${id}`);

        return {
            ok: true,
            data: response.data.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}
export const addReplyService = async (newReply) => {

    try {
        let response = await axios.post(BASE_URL + '/add',newReply);

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

