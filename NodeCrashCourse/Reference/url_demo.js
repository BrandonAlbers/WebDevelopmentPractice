const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=10&status=active");

//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname
//hostname does not include port
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//add param
myUrl.searchParams.append("abc", "123");

//Params Obj
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
