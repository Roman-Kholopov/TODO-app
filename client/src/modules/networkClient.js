import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos1/";
//const url_1='http://localhost:8000'
const url_1 = "https://swapi.dev/api/people";

class NetworkClient {
  constructor(client, baseUrl) {
    this._client = client;
    this._baseUrl = baseUrl;
  }
  send() {
    network();
  }
}

export const network = () => {
  axios(url)
    .then((response) => console.log(response))
    .catch((error) => {
      if (error.response.status !== 200) {
        axios(url_1).then((response) => console.log(response));
      } else if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(error.message);
      }
    });
};
network();
