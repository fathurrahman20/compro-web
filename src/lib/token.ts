import Cookies from "js-cookie";

const COOKIE_NAME = "access_token_compro";
const REFRESH_COOKIE_NAME = "refresh_token_compro";

export function setAccessToken(token: string) {
  Cookies.set(COOKIE_NAME, token, { sameSite: "None", secure: true });
}

export function getAccessToken() {
  return Cookies.get(COOKIE_NAME);
}

export function setRefreshToken(token: string) {
  Cookies.set(REFRESH_COOKIE_NAME, token, { sameSite: "None", secure: true });
}

export function getRefreshToken() {
  return Cookies.get(REFRESH_COOKIE_NAME);
}

export function removeToken() {
  Cookies.remove(COOKIE_NAME, { sameSite: "None", secure: true });
  Cookies.remove(REFRESH_COOKIE_NAME, { sameSite: "None", secure: true });
}
