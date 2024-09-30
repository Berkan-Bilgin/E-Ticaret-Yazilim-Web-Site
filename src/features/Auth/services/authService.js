import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://localhost:7275/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default class AuthService {
  static async register(userData) {
    const response = await httpClient.post("/Auth/register", userData);
    return response.data;
  }

  static async login(credentials) {
    const response = await httpClient.post("/Auth/login", credentials);
    return response.data;
  }
}
