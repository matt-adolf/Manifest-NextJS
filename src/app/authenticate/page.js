import { redirect } from 'next/navigation';

export default async function Page() {
    redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=repo&redirect_uri=${'http://localhost:3000/authorize'}`)
}