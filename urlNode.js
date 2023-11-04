import url from "url"

const temp = new URL("www.google.com:3000")
temp.pathname = "/a/b/c"
temp.search = "?a55"
temp.hash = "#asd"

console.log(temp)

console.log(temp.href)