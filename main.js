const linksSocialMedia = {
    github: 'patybnc',
    youtube: 'channel/UCd4MdcKLh5TGfEbwEG5Sclg',
    facebook: 'patybnc',
    instagram: 'patybnc',
    twitter: 'maykbrito'
}

function changesocialMediaLinks() {
   for (let li of socialLinks.children) {
     const social = li.getAttribute('class')
    
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
   }
}

changesocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()