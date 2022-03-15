class GitHub {
    constructor() {
        this.repo_count = 5;
        this.repos_sort = 'created: asc';
        this.client_id = "aabf08f0db448770a044";
        this.client_secret = "621acc6f7fac8dfc9152c5a39308eb63f0ba729c";
    }
    async getUser(name) {
        const res = await fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoRes = await fetch(`https://api.github.com/users/${name}/repos?&per_page=${this.repo_count}&sort=${this.repos_sort}
        &client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profileData = await res.json();
        const repoData = await repoRes.json();
        return {
            profileData,
            repoData
        };
    }
}
