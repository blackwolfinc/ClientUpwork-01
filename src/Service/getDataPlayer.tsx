import axios from "axios";

export const getDataPlayer = async () => {
  return await axios
    .get("./player.json")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
