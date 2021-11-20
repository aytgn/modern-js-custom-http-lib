class EasyHttp {
  //get(url) method will return promise
  get = async (url) => {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  };
  post = async (url, data) => {
    //create promise, so upon resolving use it async
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  };
  put = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  };
  delete = async (url) => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    const resData = await response.json();
    return resData;
  };
}
