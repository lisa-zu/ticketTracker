import { randomBytes} from 'crypto'

const authHostName: string = process.env.AUTH_HOSTNAME || 'https://auth.atlassian.com/'
const authPath: string = process.env.AUTH_PATH || 'authorize'
const authAudience: string = process.env.AUTH_AUDIENCE || 'api.atlassian.com'
const authClientId: string = process.env.AUTH_CLIENT_ID || ''
const authScope: string = process.env.AUTH_SCOPE || 'read:jira-work read:jira-user write:jira-work'
const authRedirectUri: string = process.env.AUTH_REDIRECT_URI || 'https://localhost:3000/api/oauth/callback'
const authResponseType: string = process.env.AUTH_RESPONSE_TYPE || 'code'
const authPrompt: string = process.env.AUTH_PROMPT || 'consent'

function buildAuthorizationUrl(sessionId: string) {
    return `${authHostName}/${authPath}?audience=${authAudience}&client_id=${authClientId}&scope=${authScope}&redirect_uri=${authRedirectUri}&response_type=${authResponseType}&prompt=${authPrompt}`
}

export default function getSessionState() {
    const sessionId: string = randomBytes(32).toString("hex")
    const authUrl: string = buildAuthorizationUrl(sessionId)
    return { sessionId, authUrl }
}