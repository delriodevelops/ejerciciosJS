function removeHTMLTags(str) {
    const regEx = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g
    return str.replace(regEx,'')
}

module.exports=removeHTMLTags