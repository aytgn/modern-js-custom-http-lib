function easyHTTP() {
  //our http prop is an xmr instance
  this.http = new XMLHttpRequest();
}
//Make an HTTP GET Request
//should take cb to wait response fully return (async)
easyHTTP.prototype.get = function (url, cb) {
  //"create a get request to url async"
  this.http.open("GET", url, true);
  //send that request
  this.http.send();
  //when response arrive to bellow
  //"this" keyword refers owner(parent,wrapper) class,object,function. wrapper of function bellow is http not easyHttp but XMLHHttpRequest! so pin easyHTTP with let self = this to "self" keyword
  let self = this;
  this.http.onload = function () {
    //if response is okay
    console.log(this);
    if (self.http.status === 200) {
      //since http onload async by default, methods will run async inside. cb will wait response done.
      cb(null, self.http.responseText);
    } else {
      cb("Error: " + self.http.status);
    }
  };
};
//Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, cb) {
  //Create post request, to url, async
  this.http.open("POST", url, true);
  //send that request
  this.http.send(JSON.stringify(data));
  let self = this;
  this.http.onload = function () {
    cb(null, self.http.responseText);
  };
  //define content type
  this.http.setRequestHeader("Content-type", "application/json");
};
