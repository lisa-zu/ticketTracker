import { requestToken, requestCloudIds } from "~/services/jira_api";

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event);
        const code = query.code as string;
        let token: string = '';
        // request the access token based on the authorization code
        await requestToken(code)
            .then((_token) => {
                if (_token) {
                    token = _token;
                    setCookie(event, "jira_token", _token, { httpOnly: true, secure: true })
                } else {
                    console.error('no token provided')
                }
            })
        await requestCloudIds(token)
            .then((_cloudIds) => {
                if (_cloudIds) {
                    let cloudIdStrings: string[] = _cloudIds.map(item => item.id)
                    setCookie(event, "cloud_ids", cloudIdStrings.toString(), { httpOnly: true, secure: true })
                }
            })
        return sendRedirect(event, '/tickets')
    } catch (error) {
        console.error('OAuth Callback Error:', error);
        return sendRedirect(event, '/error')
    }
})
