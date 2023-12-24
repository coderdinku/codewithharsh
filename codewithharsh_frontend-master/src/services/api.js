import axios from "axios";
const url = "http://localhost:3001";

export const createUser = async({body}) => {
    try {
        const response = await axios.post(`${url}/auth/register`, {
          headers: {
              'Content-Type': 'application/json',
          },
          body
      });
      console.log(response);
      return response;
    }
    catch (error) {
        return error;
    }
}