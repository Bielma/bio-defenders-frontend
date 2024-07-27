import { BASE_URL } from "../constants";

interface Request {
  method: string;
  headers: {
    "Content-Type": string;
    Authorization?: string;
  };
  body?: string;
}

const sendRequest = async (route: String, request: Request) => {
  let response;
  try {
    response = await fetch(BASE_URL + route, request);
    if (response.status === 401) {
      //if (response.status === 401 || response.status == 500 || response.status == 403) {

      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false };
  }
};

export { sendRequest };
