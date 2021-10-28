const LinksSocialMedia = {
    github:'antonioalmeidaa',
    youtube:'aaa',
    facebook:'antoniovictor',
    instagram:'antonioovictor',
    twitter: 'antonioovictor2'
}

function ChangeSocialMediaLinks () {
    for (li of socialLinks.children){
        const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}
ChangeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        username.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent =  data.login

    })
}

getGitHubProfileInfos()

