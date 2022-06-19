//WE HAVE A DAISY CHAIN CALLBACK FUNCTIONS, THAT IS WHAT PROMISES ARE FOR

// console.log("Start");

// function loginUser(email, password, callback) {
//   setTimeout(function () {
//     console.log("Now we have the data");
//     callback({ userEmail: email });
//   }, 1500);
// }

// function getUserVideos(email, callback) {
//   setTimeout(function () {
//     callback(["video1", "video2", "video3"]);
//   }, 1000);
// }

// const user = loginUser("devedf@goomail.com", 123456, function (user) {
//   console.log(user);
//   getUserVideos(user.userEmail, function (videos) {
//     console.log(videos);
//   });
// });

// console.log("Finish");

//BUT WHAT IF WE HAVE AN ERROR? THEN WE CREATE TWO FUNCTION AN onFAILURE ONE AND AN onSUCCESS
//THAT IS WHAT PROMISES ARE FOR

console.log("Start");

function loginUser(email, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Now we have the data");
      resolve({ userEmail: email });
    }, 1500);
  });
}

function getUserVideos(email) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(["video1", "video2", "video3"]);
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Title Of Video");
    }, 1000);
  });
}

// const user = loginUser("devedf@goomail.com", 123456, function (user) {
//   console.log(user);
//   getUserVideos(user.userEmail, function (videos) {
//     console.log(videos);
//   });
// });

loginUser("ed@email.com", "Buddy12")
  .then(function (user) {
    getUserVideos(user.email).then(function (videos) {
      console.log(videos);
    });
  })
  .then(function (videos) {
    videoDetails(videos[0]);
  })
  .then(function (detail) {
    console.log(detail);
  });

console.log("Finish");

//MY UNDERSTANDING OF PROMISES: A CLASS THAT IS PREDEFINED BY THE JAVASCRIPT LANGUAGE. IT CONTAINS A CALLBACK FUNCTION TO BE EXECUTED IMMEDIATELY, A RESOLVE, AND A REJECT CALLBACK FUNCTION. SO IN THE CALLBACK FUNCTION TO BE CALLED IMMEDIATELY YOU HAVE TWO OUTCOMES: RESOLVE OR REJECT. WHEN YOU RESOLVE, YOU CAN PASS DATA. WHEN YOU REJECT, YOU CAN VIEW THE ERROR AND PASS DATA.
