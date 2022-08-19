import axios from "axios";
const url = "https://v3.football.api-sports.io/fixtures?league=290&season=2021";
const key = "4deb38f5dfc6e3a36222b6142ac6fd0e";

let arry = [];

 export const persianGalf2021 = async () => {
  if (arry.length === 0) {
    var temp =  await axios
      .get(`${url}`, {
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": key,
        },
      })
      // .then((result) => {
        
      //   return result.data;
      // });
      arry=temp.data.response;
  }
  // return  arry;
};

