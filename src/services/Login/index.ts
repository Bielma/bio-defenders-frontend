import { sendRequest } from "../../utils/utils";

const login = async (email: string, password: string) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };
  const response = await sendRequest("/login", request);
  return response;
};
