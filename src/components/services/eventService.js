import axios from 'axios';
const BASE_URL = `http://localhost:5000/event`

export const addEventsService = async (payload) => {
console.log('payload',payload);
    try {
        let response = await axios.post(BASE_URL + '/addEvent',payload);
console.log("eventRes",response);
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

export const getAllEventsService = async () => {

    try {
        let response = await axios.get(BASE_URL + '/view');

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

export const searchEventsService = async (payload) => {
    console.log('payload',payload);
        try {
            let response = await axios.post(BASE_URL + '/searchEvents',payload);
    console.log("eventRes",response);
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

    export const deleteEventsService = async (payload) => {
        console.log('payload',payload);
            try {
                let response = await axios.post(BASE_URL + '/deleteEvent',payload);
        console.log("eventRes",response);
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

        export const updateEventsService = async (payload) => {
            console.log('payload',payload);
                try {
                    let response = await axios.post(BASE_URL + '/updateEvent',payload);
            console.log("eventRes",response);
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
    export const filterEventsService = async (payload) => {
        console.log('payload',payload);
            try {
                let response = await axios.post(BASE_URL + '/filterEvents',payload);
        console.log("eventRes",response);
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

        export const singleEventsService = async (payload) => {
            console.log('payload',payload);
                try {
                    let response = await axios.post(BASE_URL + '/eventSingle',payload);
            console.log("eventRes",response);
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