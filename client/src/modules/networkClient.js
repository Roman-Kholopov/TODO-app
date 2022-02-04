import axios from "axios";

const BACKEND_URL = "https://jsonplaceholder.typicode.com/";
const DEFAULT_URL = "http://localhost:8000";
const URL_GET = "";
const URL_POST = "";
const URL_DELL = "";

const URL = new URL(BACKEND_URL, [DEFAULT_URL]);

class NetworkClient {
  // url: "",
  // _client: "",
  // _baseUrl: BACKEND_URL,
  // send() {
  //   if (this._client === "get") {
  //     return get;
  //   } else if (this._client === "post") {
  //     return post;
  //   } else {
  //     return {};
  //   }
}

const fetchTodo = async () => {
  await getTodoList();
  {
    axios
      .get("url", { timeout: 1500 })
      .then((response) => {
        return [];
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  }

  await getTodo();
  {
    axios
      .get(url, { timeout: TIMER })
      .then((response) => {
        return {};
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  }
};

//// Получить данные
axios
  .get(URL_GET, { timeout: TIMER })
  .then((response) => {
    console.log(response.data);
    return [];
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });

/////Отправить данные

const newPost = {
  title: "sunt aut provident",
  id: 2,
  todoId: 1,
};

axios
  .post(URL_POST, newPost, { timeout: TIMER })
  .then((response) => {
    console.log(`Status code ${response.status}`);
    console.log(response);
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });

/////Удалить данные
axios
  .delete(URL_DELL)
  .then(() => {
    console.log(`Returned data:, delete`);
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });
