//ito yung thunder client para gumana yung inilalagay dun

import { devApiUrl, devKey } from "./functions-general";

export const queryData = (endpoint, method = "get", fd = {}) => {
    //ito yung sa security na apikey
  let url = devApiUrl + endpoint;
  let username = devKey;
  let password = "";
  let auth = btoa(`${username}:${password}`);
  //ito yung nakiikta sa thunder client
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic " + auth);
  myHeaders.append("Content-Type", "application/json");

  let options = {
    method,
    headers: myHeaders,
  };

  if (method !== "get") {
    options = {
      ...options,
      body: JSON.stringify(fd), // ito yung tina-type sa json sa thunder client
    };
  }

  const data = fetch(url, options).then((res) => res.json()); //ito yung nag re request ng data at nagsesend sa server ng data, dito nag re request

  return data;
};
