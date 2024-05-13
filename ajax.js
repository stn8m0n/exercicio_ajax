document.addEventListener('DOMContentLoaded', function(){

            const nameElement = document.querySelector('#name');
            const usernameElement = document.querySelector('#username');
            const avatarElement = document.querySelector('#avatar');
            const reposElement = document.querySelector('#repos');
            const followersElement = document.querySelector('#followers');
            const followingElement = document.querySelector('#following');
            const linkElement = document.querySelector('#link');

            fetch('https://api.github.com/users/stn8m0n')
                .then(function(res){
                    return res.json();
                })
                .then(function(json){
                    nameElement.innerText = json.name;
                    usernameElement.innerText = json.login;
                    avatarElement.innerText = json.avatar_url;
                    followersElement.innerText = json.followers;
                    followingElement.innerText = json.following;
                    repos.innerText = json.public_repos;
                    linkElement.href = json.html_url;
                })

 })