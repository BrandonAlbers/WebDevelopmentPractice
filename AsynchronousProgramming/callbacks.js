const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(function () {
    posts.forEach(function (post, index) {
      console.log(post.title);
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 3000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);
