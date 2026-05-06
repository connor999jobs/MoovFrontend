import { getMoovToken } from "@/api/moov.js";

let moov = null;

export const initMoov = async () => {

    /*
      TOKEN
    */

    const tokenResponse =
        await getMoovToken({
            type: "ONBOARDING"
        });

    /*
      INIT SDK
    */

    moov = window.Moov(
        tokenResponse.access_token
    );

    return moov;
};

export const getMoov = () => {

    if (!moov) {

        throw new Error(
            "Moov SDK not initialized"
        );
    }

    return moov;
};