import fetch from 'node-fetch';

// export const getRedditData = async () => {
//     try {
//         const response = await fetch(`https://www.reddit.com/r/webdev.json`);
//         const json = await response.json();
//         if (response.ok) {
//             // console.log('API call WORKED!');
//             // do redux stuff here...
//             // console.log(json);
//             return json;
//         } else {
//             console.log(response.status);
//         } 
//     } 
    
//     catch (err) {
//         console.log(err);
//         console.log("getting reddit data failed!");
//     }
// }

// console.log(await getRedditData());
// console.log(await getRedditData().data);



// let path = 'best.json';

// const redditData = await getRedditData();

// console.log(`Checking redditData: ${redditData.data}`);