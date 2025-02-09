import axios from "axios";

interface AtlassianTokenResponse {
    access_token: string;
    expires_in: number;
    scope: string;
    token_type: string;
}

const requestToken = async (code:string): Promise<string | null> => {
    try {
        const response = await axios.post<AtlassianTokenResponse>(
            'https://auth.atlassian.com/oauth/token', {
                grant_type: process.env.AUTH_GRANT_TYPE,
                client_id: process.env.AUTH_CLIENT_ID,
                client_secret: process.env.AUTH_CLIENT_SECRET,
                code: code,
                redirect_uri: process.env.AUTH_REDIRECT_URI,
            }, {
                headers: {
                    'Content-Type': process.env.AUTH_CONTENT_TYPE,
                }
            }
        )
        return response.data.access_token
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching token:', error.response?.data || error.message)
        } else {
            console.error('Unexpected error:', error);
        }
        return null
    }
}

// TICKET METHODS
interface AtlassianCloudIdResponse {
    id: string;
    name: string;
    url: string;
    scopes: string[];
    avatarUrl: string;
}
const requestCloudIds = async (token: string): Promise<AtlassianCloudIdResponse[] | null> => {
    try {
        const response = await axios.get<AtlassianCloudIdResponse[]>(
            'https://api.atlassian.com/oauth/token/accessible-resources', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            }
        )
        return response.data as AtlassianCloudIdResponse[]
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching token:', error.response?.data || error.message)
        } else {
            console.error('Unexpected error:', error);
        }
        return null
    }
}

export {
    requestToken,
    requestCloudIds
}