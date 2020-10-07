export const client = {
  client_id: 'MRMJitsi',
  redirect_uri: 'http://localhost:8080/callback',
  response_type: 'code',
  post_logout_redirect_uri: 'http://localhost:8080/',
  scope: 'openid profile',
  authority: 'https://idm.vivastack.com',
  silent_redirect_uri: 'http://localhost:8080/callback',
  automaticSilentRenew: true,
  loadUserInfo: true
}
