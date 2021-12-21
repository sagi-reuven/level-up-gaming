import httpService, { setDefaultCommonHeader } from "./httpService";
import { myUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";


// send a header = ("x-auth-token", and the token itself)
setDefaultCommonHeader("x-auth-token", getJwt());

// get token from localstorage
export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

// POST request to create a new user - USER ROUTE
export function createUser(user) {
  return httpService.post(`${myUrl}/levelup/users`, user);
}

// POST request to login a user - AUTH ROUTE
// set the token that returns to localstorage
export async function login(email, password) {
  const {
    data: { token },
  } = await httpService.post(`${myUrl}/levelup/auth`, { email, password });
  localStorage.setItem(TOKEN_KEY, token);
}

// checks if localstorage has a token and decode it 
export function isUserLogged() {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(jwt);
  } catch {
    return null;
  }
}

// remove token from localstorge
export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

// GET user info by id 
export async function getUserInfo(id) {
  return httpService.get(`${myUrl}/levelup/users/${id}`);
}


// UPDATE user details by id
export function editUser({ _id, ...body }) {
  return httpService.put(`${myUrl}/levelup/users/${_id}`, body);
}

// DELETE user from data base by id
export function deleteUser(id) {
  return httpService.delete(`${myUrl}/levelup/users/${id}`);
}

const userService = {
  createUser,
  isUserLogged,
  login,
  logout,
  getUserInfo,
  editUser,
  deleteUser,
};

export default userService;
