import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * When used alongside data, it is automatically configured as an auth provider for data
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      signInWithApple: {
        clientId: secret('SIWA_CLIENT_ID'),
        keyId: secret('SIWA_KEY_ID'),
        privateKey: secret('SIWA_PRIVATE_KEY'),
        teamId: secret('SIWA_TEAM_ID'),
	scopes: ['email'],
      },
      callbackUrls: [
        'http://localhost:3000/profile',
        'https://main.devd8xbmv7r1p.amplifyapp.com/profile'
      ],
      logoutUrls: ['http://localhost:3000/', 'https://main.devd8xbmv7r1p.amplifyapp.com'],
      // This required value will be prepended to `.auth.us-west-2.amazoncognito.com` and used for your application's oauth url
      domainPrefix: 'riffhaus'
    }
  },
  /**
   * enable multifactor authentication
   * @see https://docs.amplify.aws/gen2/build-a-backend/auth/manage-mfa
   */
  // multifactor: {
  //   mode: 'OPTIONAL',
  //   sms: {
  //     smsMessage: (code) => `Your verification code is ${code}`,
  //   },
  // },
  userAttributes: {
    /** request additional attributes for your app's users */
    // profilePicture: {
    //   mutable: true,
    //   required: false,
    // },
  },
});
