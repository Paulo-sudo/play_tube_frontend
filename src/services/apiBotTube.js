import axios from "axios";

const urlApi = "http://localhost:8080";

const Bot = {
  async find(data) {
    let reponse = [];
    const url = `${urlApi}/find`;
    await axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then(function (res) {
        reponse.push(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    return reponse;
  }
}
export default Bot;