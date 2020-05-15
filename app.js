// Init class
const github = new GitHub;
const ui = new UI;

// Input
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Input text
  const userText = e.target.value;

  if(userText !== '') {
    // HTTP call
    github.getUser(userText)
    .then(data => {
      console.log(data);
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User NOT Found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    }) 
  } else {
    // Clear 
    ui.clearProfile();
  }
});