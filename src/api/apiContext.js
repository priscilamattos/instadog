import axios from "axios";
import { createContext, useState } from "react";

//create context
const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);

  //fetch dog images
  const getDogs = (dogs) => {
    const newDogs = [...dogs];
    newDogs.forEach((dog) => {
      const fetchImages = async () => {
        try {
          const response = await axios({
            method: "GET",
            url: "https://thedogapi.com/v1/images/search?q=",
            params: {
              format: "json",
              method: "GET",
              api_key:
                "live_jINPmFZwMC3VVVjfdqbDQhxlGjcgq6fpt0aiZjYIbcQPY5ZH2zdbiWx7eCFmbFRh",
            },
          });
          dogs.dogImages = response.data.id;
        } catch (error) {}
      };
      fetchImages(dogs.id);
    });
    setDogs(newDogs);
  };

  return (
    <UserContext.Provider value={{ dogs, getDogs, setDogs }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
