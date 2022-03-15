const github = new GitHub();
const ui = new UI();

const search = document.querySelector('#search__input');

search.addEventListener('change', function(e) {
  
    const searchText = e.target.value;

    if(searchText !== "") {
        github.getUser(searchText)
            .then((res) => {
                if(res.profileData.login) {
                    ui.showProfile(res.profileData);
                    ui.showRepos(res.repoData);
                } else {
                    ui.showError("User not found");
                }
            
            })
            .catch((err) => console.log(err));
    } else {
        ui.clearProfile()
    }
       
})
