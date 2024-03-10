import axios from "axios";

const API_ENDPOINT = import.meta.env.API_ENDPOINT;

export const getTodos = async () => {
    try {
        const { data } = await axios.get(
            API_ENDPOINT
        );

        return data;
    } catch (err) {
        throw new Error(`Failed to fetch todos\n${err}`);
    }
};
