import http from "@/api/http.js";

export const getMoovToken =
    async (body) => {

        const response =
            await http.post(

                "/moov/token/create",

                body
            );

        return response.data;
    };