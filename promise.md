**Fetch API in JS** is used to make network requests, return a promise that resolves to the Response to that request. The promise will be rejected if the request fails or if the response is not ok (i.e. the status code is not in the range 200-299).
example:

```js
fetch("https://api.github.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Axios** is a promise-based HTTP client for the browser and Node.js. It has many advantages over the Fetch API like it can handle request and response interceptors, transform requests and responses, and cancel requests. It also provides better error handling and has built-in CSRF protection.

```js
axios
  .get("https://api.github.com/users")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```
