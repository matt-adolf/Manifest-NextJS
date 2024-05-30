import { redirect } from 'next/navigation';

export default async function Page({ params }) {
    redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo&redirect_uri=${'http://localhost:3000/authorize'}`)
}