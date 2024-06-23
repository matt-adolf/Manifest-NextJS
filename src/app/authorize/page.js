'use client';
//import { redirect } from 'next/navigation';
import { hasCookie } from 'cookies-next';
import axios from 'axios';

export default async function Page({ searchParams }) {
    console.log(searchParams)
    const { code } = searchParams;
    const params = new URLSearchParams();
    params.append('client_id', process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID);
    params.append('client_secret', process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET);
    params.append('code', code);

    async function getToken() {
        try {
            const response = await axios({
                method: 'post',
                url: `http://localhost:3000/api/authenticate`,
                auth: {
                    username: process.env.NEXT_PUBLIC_AUTH_USERNAME,
                    password: process.env.NEXT_PUBLIC_AUTH_PASSWORD
                },
                withCredentials: true,
            });

            //console.log('AUTHORIZE: ', response)
            /*
            const token = response.data.token;
            console.log('Manifest Token: ', token);
            createCookie('manifest_token', token, 1);
            */

            //await getAccessToken();
        }
        catch (err) {
            console.log(err);
        }
    }

    async function getAccessToken() {
        try {
            const response = await axios({
                method: 'post',
                url: `http://localhost:3000/api/access_token`,
                headers: {
                    //Authorization: `Bearer ${token}`,
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: params,
                withCredentials: true
            });

            if (response.statusText == 'OK') {
                const accessToken = response.data.access_token;
                console.log('Github Access Token: ', accessToken);
                //createCookie('github_token', accessToken, 1);
                //cookies().set('github_token', accessToken, { maxAge: 3600000 });
                //setIsLoggedIn(true)                
            }
        }
        catch (err) {
            console.log(err);
        }
        //redirect("/");
    }
    //hasCookie('github_token') &&
    getToken()

    //navigate("/");    
    //redirect("/");

    return (
        <main className="container mx-auto">
            <h1 className="text-3xl mb-6">Authorize</h1>
            <div>Code: {code}</div>
        </main>
    )
}