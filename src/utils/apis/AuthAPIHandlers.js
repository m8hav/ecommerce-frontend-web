import axios from "axios";
import { API_BASE_URL } from "./constants";
import { getRequestHeaders, getUserDetails, saveUserDetails } from "../AuthUtils";

// Auth Handlers
export const signUp = async (user) => {
  try {
    await axios.post(API_BASE_URL + '/auth/signup', user, getRequestHeaders());
    // logIn({ email: user.email, password: user.password })
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
}

export const logIn = async (credentials) => {
  try {
    // console.log(credentials)
    const res = await axios.post(API_BASE_URL + '/auth/login', credentials, getRequestHeaders());
    // console.log("res: ", res)
    // console.log("res.data: ", res.data)
    return res.data;
  } catch (error) {
    console.log('Error during API call', error);
    throw error;
  }
}