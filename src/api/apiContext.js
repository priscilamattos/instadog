import axios from "axios";
import { createContext, useState } from "react";

//create context
const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);

  //fetch dog images
  const getDogs = async (dogs) => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://api.thedogapi.com/v1/images/search",
        headers: {
          "Content-type": "application/json",
          "x-api-key":
            "live_jINPmFZwMC3VVVjfdqbDQhxlGjcgq6fpt0aiZjYIbcQPY5ZH2zdbiWx7eCFmbFRh",
        },
        params: {
          limit: 5,
        },
      });
      setDogs(response.data);
      console.log(
        "🚀 ~ file: apiContext.js ~ line 25 ~ fetchImages ~ response",
        response.data
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: apiContext.js ~ line 29 ~ getDogs ~ error",
        error
      );
    }
  };

  return (
    <UserContext.Provider value={{ dogs, getDogs, setDogs }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
