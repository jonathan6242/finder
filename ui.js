class UI {
    showProfile(profile) {
        console.log(profile);
        document.querySelector('.profile .row').innerHTML = `
            <div class="profile__left">
                <img class="profile__img" src="${profile.avatar_url}" alt="">
                <a href="${profile.html_url}" class="profile__link" target="blank">View Profile</a>
            </div>
            <div class="profile__right">
                <ul class="profile__badges">
                    <a class="profile__badge" href="https://github.com/${profile.login}?tab=repositories" target="_blank">
                        Public Repos: ${profile.public_repos}
                    </a>
                    <a class="profile__badge" href="https://gist.github.com/${profile.login}" target="_blank">
                        Public Gists: ${profile.public_gists}
                    </a>
                    <a class="profile__badge" href="https://github.com/${profile.login}?tab=followers" target="_blank">
                        Followers: ${profile.followers}
                    </a>
                    <a class="profile__badge" href="https://github.com/${profile.login}?tab=following" target="_blank">
                        Following: ${profile.following}
                    </a>
                </ul>
                <ul class="profile__details">
                    <li class="profile__detail">Company: ${profile.company}</li>
                    <li class="profile__detail">Website/Blog: ${profile.blog}</li>
                    <li class="profile__detail">Location: ${profile.location}</li>
                    <li class="profile__detail">Member Since: ${profile.created_at}</li>
                </ul>
            </div>
        
        `
    }

    showRepos(data) {
        let output = "";
        for(let repo of data) {
            output += `
            <li class="repo">
                <a href="${repo.html_url}" target="_blank" class="repo__link">${repo.name}</a>
                <ul class="profile__badges profile__badges--repo">
                    <li class="profile__badge">Stars: ${repo.stargazers_count}</li>
                    <li class="profile__badge">Watchers: ${repo.watchers_count}</li>
                    <li class="profile__badge">Forks: ${repo.forks_count}</li>
                </ul>

            </li>
            `
        }
        document.querySelector('.repos .row').innerHTML = `
            <h1>Latest Repos</h1>
            <ul class="repo-list">
                ${output}
            </ul>
        `
        // html_url, stargazers_count, watchers_count, forks_count
    }

    showError(message) {
        this.removeError();
        const div = document.createElement('div');
        const searchRow = document.querySelector('.search .row');
        const searchTitle = document.querySelector('.search__title');
        div.innerHTML = `<div class="error">
            ${message}
        </div>`
        searchRow.insertBefore(div, searchTitle);
        setTimeout(() => {
            div.remove();
        }, 1500)
    }

    removeError() {
        document.querySelector('.error') && document.querySelector('.error').remove();
    }

    clearProfile() {
        document.querySelector('.profile .row').innerHTML = "";
    }


}

// avatar_url public_repos public_gists followers following company blog location company