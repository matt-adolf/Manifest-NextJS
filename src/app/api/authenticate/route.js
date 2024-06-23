import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { serialize } from 'cookie';

const jwt = require('jsonwebtoken');

export async function POST(Request) {
    console.log('\n\nEndpoint: /api/authenticate');

    try {
        const auth = { login: process.env.NEXT_PUBLIC_AUTH_USERNAME, password: process.env.NEXT_PUBLIC_AUTH_PASSWORD };
        // Get basic auth credsentials
        const authheader = headers().get("Authorization");
        const b64auth = (authheader || '').split(' ')[1] || '';
        const [login, password] = atob(b64auth).toString().split(':')

        if (!login || !password || login !== auth.login || password !== auth.password) {
            // console.log('Login failed')
            // console.log("Login: ", login);
            // console.log("Password: ", password);
            // console.log("Auth Login: ", auth.login);
            // console.log("Auth Password: ", auth.password);
            return Response.json({ authorized: false }, { status: 403 });
        }

        const response = NextResponse.json({ message: "Authenticated" }, { status: 200 });
        response.cookies.set({
            name: "MyName",
            value: "Test2",
            httpOnly: true,
            //secure: process.env.NODE_ENV == "production",
            //sameSite: "strict",
            maxAge: (3600000 / 2), // 30 minutes
            path: "/"
        });
        return response;

        //return Response.json({ authorized: true }, { status: 200 });;
    }
    catch (err) {
        //next(err);
        console.log(err);
        return Response.json(err);
    }
}