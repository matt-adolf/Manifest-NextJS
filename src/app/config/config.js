const Config = {
    GITHUB_API_URL: 'https://api.github.com',
    GITHUB_AUTH_TOKEN: process.env.GH_AUTH_TOKEN,
    GITHUB_DOCS_OWNER: process.env.GH_DOCS_OWNER,
    GITHUB_DOCS_REPO: process.env.GH_DOCS_REPO
}

module.exports = { Config };