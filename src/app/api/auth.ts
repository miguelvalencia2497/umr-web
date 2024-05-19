import axios from "axios";
import { AuthNames } from "../[lng]/types/Users";
import httpCommon from "./http-common";

export async function authenticateUser(
  email: string,
  password: string,
  role: string,
) {
  try {
    const response = await httpCommon.post(
      `/${
        role ? role.toLocaleLowerCase() : AuthNames.PATIENT.toLocaleLowerCase()
      }/signin`,
      {
        username: email,
        password: password,
        domain: "DOMAIN",
      },
    );

    // Assuming your API returns a token upon successful login
    const authToken = response.data.token;
    return authToken;
  } catch (error) {
    // Handle authentication errors (e.g., invalid credentials)
    throw error;
  }
}
