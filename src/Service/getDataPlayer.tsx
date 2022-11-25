export const getDataPlayer = async () => {
  await fetch("../assets/json/player.json")
    .then((response) => response.json())
    .then((json) => console.log(json));
};
