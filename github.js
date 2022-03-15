class GitHub {
    constructor() {
        this.repo_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(name) {
        document.body.classList.add('profile-loading');
        const res = await fetch(`https://api.github.com/users/${name}`, 
        {
            headers: {
                authorization: `token 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`
            }
        })
        const repoRes = await fetch(`https://api.github.com/users/${name}/repos?&per_page=${this.repo_count}&sort=${this.repos_sort}`,
        {
            headers: {
                authorization: `token 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`
            }
        })
        const profileData = await res.json();
        const repoData = await repoRes.json();
        document.body.classList.remove('profile-loading');
        return {
            profileData,
            repoData
        };
    }
}
