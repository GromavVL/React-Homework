import axios from 'axios';


export const loading = async (page = 1) => {
    try {
        const response = await axios.get(`https://randomuser.me/api`, {
            params: {
                results: 14,
                seed: 'pe2025',
                page: page,
            }
        });
        return response.data.results;
    } catch(err) {
        console.log('err :>> ', err);
    }
};