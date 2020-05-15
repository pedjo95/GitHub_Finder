// Init class
const github = new GitHub;

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

      } else {

      }
    }) 
  } else {
    alert("Please fill in the spaces");
  }
});