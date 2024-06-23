import { NextResponse } from 'next/server';
import Github, { accessToken } from '../../services/github';

export async function POST(req) {
    console.log('\n\nEndpoint: /api/access_token');
    const formData = await req.formData();

    try {
        const { status, data } = await Github.accessToken({
            client_id: formData.get('client_id'),
            client_secret: formData.get('client_secret'),
            code: formData.get('code'),
        });

        // const token = params.get('access_token');

        // const response = NextResponse.json({ access_token: token }, { status: 200 });
        // response.cookies.set({
        //     name: "github_token",
        //     value: token,
        //     maxAge: (3600000 / 2), // 30 minutes
        //     path: "/"
        // });
        // return response;
    }
    catch (err) {
        console.log(err);
    }
}