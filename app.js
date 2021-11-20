//create a EasyHttp instance
const http = new EasyHttp();

//MAKE GET REQUEST
//get users and assign them to users
const users = http
  .get("https://jsonplaceholder.typicode.com/users") //http.get method returns promise from argument url
  .then((users) => {
    //when promise resolved, we get users json
    console.log("users", users);
  })
  .catch((err) => {
    console.log(err);
  });
//MAKE POST
const data = {
  name: "John Doe",
  username: "johnDoe",
  email: "jdoe@gmail.com",
};
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((user) => {
    console.log("user: ", user);
  })
  .catch((err) => {
    console.log(err);
  });
//MAKE HTTP PUT REQUEST
http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
//MAKE HTTP DELETE REQUEST
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
