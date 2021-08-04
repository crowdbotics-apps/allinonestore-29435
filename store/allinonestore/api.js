import axios from "axios"
import {
  ALLINONESTORE_USERNAME,
  ALLINONESTORE_PASSWORD
} from "react-native-dotenv"
const allinonestore = axios.create({
  baseURL: "https://app.indi.com/akshar30?app_is_installed=true",
  auth: { username: ALLINONESTORE_USERNAME, password: ALLINONESTORE_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
