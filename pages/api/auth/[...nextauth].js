import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GitHub({
            clientId: 'c73a67131c3d6229694f',
            clientSecret: 'c39cefd41cb1e6af67549413c002b05073190887',
        }),
        Google({
            clientId: '505147569333-e1nd0q7ni0q202icu406mkm0jf6fe5er.apps.googleusercontent.com',
            clientSecret: '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',
        }),
    ],
})

 