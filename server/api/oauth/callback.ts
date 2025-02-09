import requestToken from "~/services/jira_api";

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event);
        const code = query.code as string;
        // request the access token based on the authorization code
        await requestToken(code)
            .then((token) => {
                if (token) {
                    setCookie(event, "jira_token", token, { httpOnly: true, secure: true })
                    return sendRedirect(event, '/dashboard')
                } else {
                    console.error('no token provided')
                }
            })
    } catch (error) {
        console.error('OAuth Callback Error:', error);
        return sendRedirect(event, '/error')
    }
})
