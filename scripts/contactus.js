const socialList = {
    instagram: 'https://www.instagram.com/anselmus_kevin/',
    facebook: 'https://web.facebook.com/anselmus.kevin.3',
    linkedin: 'https://www.linkedin.com/in/anselmus-kevin-90b85121b',
    twitter: 'https://twitter.com/anselmus_kevin',
}
const handleSocial = (socialName) => {
    const url = socialList[socialName]
    if(!url) return;
    return window.open(url, '_blank')
}