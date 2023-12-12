const profileAvatarElement = document.querySelector('.profile-avatar');
const profileNameElement = document.querySelector('.profile-name');
const profileNickElement = document.querySelector('.profile-username');

const reposElement = document.querySelector('.repos');
const followersElement = document.querySelector('.followers');
const followingElement = document.querySelector('.following');

const aTagElement = document.querySelector('.profile-link');


function getGithubInfo() {
  const URL = 'https://api.github.com/users/Arthur-Ferreira';

  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // Using dot notation for simple property names
      profileNameElement.innerHTML = res.name;
      profileNickElement.innerHTML = res.login;
      followersElement.innerHTML = res.followers;
      followingElement.innerHTML = res.following;
      
      // Using brcaket notation for complex property names
      reposElement.innerHTML = res["public_repos"];
      profileAvatarElement.setAttribute('src', res["avatar_url"]);
      aTagElement.setAttribute('href', res["html_url"]);
      
    })
    .catch((err) => {
      throw new Error(`Error fetching user info: ${err.message}`);
    })
    
    
}

getGithubInfo()