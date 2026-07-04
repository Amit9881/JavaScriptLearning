//check the API statusCode

//Normal finction
function api(code) {
    if (code >= 200 && code <= 300) {
        console.log("API is fine");
    };
};
api(202);//API is fine

//Function with exp

const code = function (api) {
    if (api >= 200 && api <= 300) {
        console.log("api is Fine");
    };
};
code(204);//api is Fine

//Arrow function

const api1 = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("API IS FINE");
    };
};
api1(250);//API IS FINE