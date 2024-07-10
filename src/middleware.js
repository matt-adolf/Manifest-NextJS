import { NextResponse } from "next/server";

export function middleware(req) {
    //let response = NextResponse.next();
    //response.cookies.set("Name", "Matt");

    //const response = NextResponse.json({ authorized: true });

    // response.cookies.set({
    //     name: 'Name',
    //     value: 'Matt',
    //     path: '/',
    //     sameSite: 'lax',
    //     maxAge: (3600000 / 2), // 30 minutes
    // });

    console.log("MIDDLEWARE EXECUTED!!!")
    //return response;
}

export const config = {
    matcher: '/api/authenticate',
}

