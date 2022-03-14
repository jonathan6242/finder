class YouTube {
    constructor() {
        this.api_key = "AIzaSyAtyZSbh_cvYOg7_QxiqiyXS4OMi4eKQJU";
    }

    async getChannel(name) {
        ui.clearError();
        // https://www.youtube.com/results?search_query=cool&sp=EgIQAg%253D%253D
        document.body.classList.add('channel-loading');
        const nameFormatted = name.split(" ").join("+");
        const res = await 
        fetch(`https://api.codetabs.com/v1/proxy?quest=www.youtube.com/results?search_query=${nameFormatted}&sp=EgIQAg%253D%253D`)
        const data = await res.text();
        const index = data.indexOf(`"channelRenderer"`)
        const channelIDString = data.slice(index, index + 57);
        const channelID = 
        channelIDString.slice(channelIDString.indexOf(`"channelId":"`) + 13, channelIDString.lastIndexOf('"'));
        // Snippet
 
        let snippetRes = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=${this.api_key}&part=snippet&id=${channelID}`)
        let snippetData = await snippetRes.json();

        let statsRes = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=${this.api_key}&part=statistics&id=${channelID}`)
        let statsData = await statsRes.json();
        document.body.classList.remove('channel-loading')

        if(snippetData.pageInfo.totalResults === 0 || statsData.pageInfo.totalResults === 0) {
            const ui = new UI();
            ui.showError();
            return;
        }
      
        return {
            snippet: snippetData["items"][0]["snippet"],
            statistics: statsData["items"][0]["statistics"],
            channel_url: `https://www.youtube.com/channel/${channelID}`
        }
    }
}

/*
    TODO:
    - Dynamically display channels
    - Add loading state
    - Make input look like searchbar
*/

/*
    DATA TO DISPLAY:
    - Channel image (snippet.thumbnails.medium.url)
    - Channel link (from channelID variable)
    - Channel title (snippet.title)
    - Channel description (snippet.description)
    - Subscriber Count (statistics.subscriberCount)
    - View Count (statistics.viewCount)
    - Video Count (statistics.videoCount)
    - Country (snippet.country)
    - Published At (snippet.publishedAt)
*/

// const example1 = JSON.parse(`{"kind":"youtube#channelListResponse","etag":"K987ieq7y_OiK9sEU9b3N8X7QhE","pageInfo":{"totalResults":1,"resultsPerPage":5},"items":[{"kind":"youtube#channel","etag":"6kqGyA-OGNX9MkBqvLeKXLxTrzE","id":"UC29ju8bIPH5as8OGnQzwJyA","snippet":{"title":"Traversy Media","description":"Traversy Media features the best online web development and programming tutorials for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend frameworks like React and Vue to backend technologies like Node.js, Python and PHP","customUrl":"traversymedia","publishedAt":"2009-10-30T21:33:14Z","thumbnails":{"default":{"url":"https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s88-c-k-c0x00ffffff-no-rj","width":88,"height":88},"medium":{"url":"https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s240-c-k-c0x00ffffff-no-rj","width":240,"height":240},"high":{"url":"https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s800-c-k-c0x00ffffff-no-rj","width":800,"height":800}},"localized":{"title":"Traversy Media","description":"Traversy Media features the best online web development and programming tutorials for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend frameworks like React and Vue to backend technologies like Node.js, Python and PHP"},"country":"US"}}]}`)
// console.log(example1["items"][0]["snippet"])


