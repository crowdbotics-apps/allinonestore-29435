import axios from "axios"
import {} from "react-native-dotenv"
const allinonestore = axios.create({
  baseURL: "https://app.indi.com/akshar30?app_is_installed=true",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
