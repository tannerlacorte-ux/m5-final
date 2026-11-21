// user.js code goes in here
localStorage.getItem("userId");

async function main() {
  const userId = localStorage.getItem("userId");
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const postsData = await posts.json();
  console.log(postsData);
}

main();