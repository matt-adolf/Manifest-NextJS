import axios from 'axios';
import { Config } from '../config/config';

axios.defaults.baseURL = Config.GITHUB_API_URL;
axios.defaults.headers.common['Authorization'] = `token ${Config.GITHUB_AUTH_TOKEN}`;

/*
const search = async (query) => {
    console.log('Github.search()...');
    let response = null;
    try {
        response = await axios({
            method: 'get',
            url: `/search/code?q=${encodeURIComponent(`${query} language:markdown user:${Config.GITHUB_DOCS_OWNER} org:${Config.GITHUB_DOCS_REPO}`)}`,
            headers: {
                Accept: 'application/vnd.github.text-match+json'
            }
        });
        console.log('Github.search() - Response: ', response);
    }
    catch (err) {
        console.log(err);
        response = err.response;
    }
    finally {
        return response;
    }
}

const contents = async (data) => {
    console.log('Github.contents()...');
    const { filePath, queryString, body, method } = data;
    let response = null;
    try {
        if (method == 'GET') {
            console.log('Github.contents()[GET]...');
            response = await axios({
                method: 'get',
                url: `/repos/${Config.GITHUB_DOCS_OWNER}/${Config.GITHUB_DOCS_REPO}/contents/${filePath}`,
                headers: {
                    Accept: 'application/vnd.github+json'
                },
                params: {
                    ref: 'main',
                    ...queryString
                }
            });
        }
        else if (method == 'PUT') {
            console.log('Github.contents()[PUT]...');
            response = await axios({
                method: method,
                url: `/repos/${Config.GITHUB_DOCS_OWNER}/${Config.GITHUB_DOCS_REPO}/contents/${filePath}`,
                headers: {
                    Accept: 'application/vnd.github+json'
                },
                data: {
                    branch: 'main',
                    ...body
                }
            });
        }
        else if (method == 'DELETE') {
            console.log('Github.contents()[DELETE]...');
            response = await axios({
                method: method,
                url: `/repos/${Config.GITHUB_DOCS_OWNER}/${Config.GITHUB_DOCS_REPO}/contents/${filePath}`,
                headers: {
                    Accept: 'application/vnd.github+json'
                },
                data: {
                    branch: 'main',
                    ...body
                }
            });
        }
        console.log('Github.contents() - Response: ', response);
    }
    catch (err) {
        console.log(err);
        response = err.response;
    }
    finally {
        return response;
    }
}
*/
const accessToken = async (data) => {
    console.log('Github.accessToken()...');
    console.log(data)
    let response;
    const params = new URLSearchParams();
    params.append('client_id', data.client_id);
    params.append('client_secret', data.client_secret);
    params.append('code', data.code);
    try {
        response = await axios({
            method: 'post',
            url: `https://github.com/login/oauth/access_token`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: params
        });
    }
    catch (err) {
        console.log(err);
        response = err.response;
    }
    finally {
        return response;
    }
}

module.exports = {
    //search,
    //contents,
    accessToken
};