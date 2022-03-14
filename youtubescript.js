const yt = new YouTube();
const ui = new UI();

const search = document.querySelector('#search__input');

search.addEventListener('change', function(e) {
  
    const searchText = e.target.value;

    if(searchText !== "") {
        yt.getChannel(searchText)
            .then(data => {
                ui.showChannel(data.snippet, data.statistics, data.channel_url);
            })
    } else {
      ui.clearChannel();
    }
       
})

