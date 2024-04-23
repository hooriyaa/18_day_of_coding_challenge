// QUESTION 52:
let smartphoneDetail = {
    brand: "iphone",
    model: "13pro",
    MoreDetails: {
        storage: "128GB",
        screenSize: "5.9inches",
        batteryTiming: "8 to 9"
    }
};
console.log(smartphoneDetail);
console.log(smartphoneDetail.MoreDetails);
console.log(smartphoneDetail.brand);
console.log(smartphoneDetail.MoreDetails.screenSize);
// QUESTION 53:
let programmersSkils = {
    codingLanguages: ["C++", "python", "Javasript", "C#"],
    tools: ["Github", "Trello", "Visual Code", "Stack"],
    Frameworks: ["Angular", "Flutter", "laravel"]
};
let { codingLanguages, tools, Frameworks } = programmersSkils;
console.log(`language:${codingLanguages[2]} \ntools:${tools[3]} \nFrameworks:${Frameworks[1]}`);
// QUESTION 54
function objectDynamicKey(key, value) {
    let dynamicObject = {}; //Empty object
    dynamicObject[key] = value;
    return dynamicObject;
}
let userRefernce = objectDynamicKey("theme", "Dark");
console.log(userRefernce);
export {};
