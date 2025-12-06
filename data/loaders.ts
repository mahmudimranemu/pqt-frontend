
import { fetchAPI } from "@/lib/fetchAPI";
import { getAPIURL } from "@/lib/getApiUrl";

export async function getGlobalSettings() {
    const token = process.env.PAYLOAD_API_TOKEN;
    const baseUrl = getAPIURL();
    const url = `${baseUrl}/api/globals/header?depth=2&draft=false&locale=undefined&trash=false`;

    const data = await fetchAPI(url, {
        method: "GET",
        authToken: token,
        next: { revalidate: 60 },
    });

    return data;
}
