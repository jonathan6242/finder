class UI {

    showChannel(snippet, statistics, url) {
        document.querySelector('.channel .row').innerHTML = `
        <div class="loading">
            <i class="fa-solid fa-circle-notch"></i>
            <p class="loading__message">Fetching data from API...</p>
        </div>
        <div class="channel__left">
            <img class="channel__img" src="${snippet.thumbnails.medium.url}">
            <a href="${url}" class="channel__link" target="blank">View channel</a>
        </div>
        <div class="channel__right">
            <h2 class="channel__title">${snippet.title}</h2>
            <p class="channel__description">
                ${snippet.description}
            </p>

            <ul class="channel__details">
                <li class="channel__detail">
                    <h3 class="channel__detail--title">UPLOADS</h3>
                    <p class="channel__detail--statistic">${statistics.videoCount}</p>
                </li>
                <li class="channel__detail">
                    <h3 class="channel__detail--title">SUBSCRIBERS</h3>
                    <p class="channel__detail--statistic">${this.formatSubscriberCount(statistics.subscriberCount)}</p>
                </li>
                <li class="channel__detail">
                    <h3 class="channel__detail--title">VIDEO VIEWS</h3>
                    <p class="channel__detail--statistic">${statistics.viewCount}</p>
                </li>
                <li class="channel__detail">
                    <h3 class="channel__detail--title">COUNTRY</h3>
                    <p class="channel__detail--statistic">${snippet.country}</p>
                </li>
                <li class="channel__detail">
                    <h3 class="channel__detail--title">USER CREATED</h3>
                    <p class="channel__detail--statistic">${snippet.publishedAt}</p>
                </li>

            </ul>
        </div>
        
        `
    }

    clearChannel() {
        console.log("Cleared")
        document.querySelector('.channel .row').innerHTML = "";
    }

    formatSubscriberCount(subscriberCount) {
        if(+subscriberCount >= 1000000) {
            return (+subscriberCount / 1000000) + "M"
        } else if (+subscriberCount >= 1000) {
            return (+subscriberCount / 1000000) + "K"
        }else {
            return subscriberCount;
        }
    }

    showError() {
        this.clearError();
        document.querySelector(".error").classList.add('visible');
        setTimeout(() => { 
            document.querySelector('.error').classList.remove('visible')
        }, 2000)
    }

    clearError() {
        if(document.querySelector('.error').classList.contains('visible')) {
            document.querySelector(".error").classList.remove('visible');
        }
    }
}