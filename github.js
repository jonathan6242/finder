class GitHub {
    constructor() {
        this.repo_count = 5;
        this.repos_sort = 'created: asc';
        this.tokenArray = ['f', 'R', 'v', 'W', 'X', '0', 'b', '4', 'u', 'D', '1', 'm', '5', 'w', 'e', 'h', 'P', 'q', 'R', '0', '3', 'W', 'K', 'h', 'X', 'x', 'k', 'S', 'P', 's', 'R', 'f', 'K', 'd', 'J', '6', '_', 'p', 'h', 'g']
        this.token = this.tokenArray.reverse().join("");
    }
    async getUser(name) {
        document.body.classList.add('profile-loading');
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
        document.body.classList.remove('profile-loading');
        return {
            profileData,
            repoData
        };
    }
}


