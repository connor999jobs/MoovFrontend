import {
    loadMoov
} from "@moovio/moov-js";

export const createMoovClient =
    async (token) => {

        return await loadMoov(
            token
        );
    };