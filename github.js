class GitHub {
    constructor() {
        this.repo_count = 5;
        this.repos_sort = 'created: asc';
        this.token = "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";
    }
    async getUser(name) {
        const res = await fetch(`https://api.github.com/users/${name}`,
        {
            headers: {
                authorization: `token ${this.token}`
            }
        })
        const repoRes = await fetch(`https://api.github.com/users/${name}/repos?&per_page=${this.repo_count}&sort=${this.repos_sort}`,
        {
            headers: {
                authorization: `token ${this.token}`
            }
        })
        const profileData = await res.json();
        const repoData = await repoRes.json();
        return {
            profileData,
            repoData
        };
    }
}
