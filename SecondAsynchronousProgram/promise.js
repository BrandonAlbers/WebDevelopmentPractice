//GIVES US THE RESULT OF A SUCCESFUL OR FAILURE ASYNC OPERATION

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve({ user: "ed" });\
    reject(new Error("User not logged in"));
  }, 2000);
});

promise
  .then(function (user) {
    console.log(user);
  })
  .catch(function (error) {
    console.log(error);
  });
