class EasyHttp {
  //get(url) method will return promise
  get = (url) => {
    //this promise will fetch the url
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          //then get the appended json response, if response is okay
          if (res.status === 200) return res.json();
          else {
            throw new Error("error");
          }
        })
        .then((data) => {
          //say created promise upon resolve bring that json
          resolve(data);
        })
        .catch((err) => {
          //say created promise upon reject bring that error
          reject(err);
        });
    });
  };
  post = (url, data) => {
    //create promise, so upon resolving use it async
    return new Promise((resolve, reject) => {
      //fetch url with modified request options
      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          //if response is "created(201", return appended json
          if (res.status === 201) return res.json();
          else {
            throw new Error("error");
          }
        })
        .then((data) => {
          //returned data will be new promise's resolve effect!
          resolve(data);
        })
        .catch((err) => {
          //if any error catch meanwhile, that error will be new promise's reject effect!
          reject(data);
        });
    });
  };
  put = (url, data) => {
    //create a promise
    return new Promise((resolve, reject) => {
      //create a promise to url too
      fetch(url, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          //upon url's response is okay, return attached json to response
          if (res.status === 200) return res.json();
          else {
            throw new Error("error");
          }
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  delete = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          else {
            throw new Error("error");
          }
        })
        .then((res) => {
          resolve("deleteeed!");
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
