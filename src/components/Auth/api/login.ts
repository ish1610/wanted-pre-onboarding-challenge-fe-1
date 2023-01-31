import axios from "axios";
import { calculateRemainingTime } from "../utils/token";

let logoutTimer: NodeJS.Timeout;

export const loginAPI = {
  login: async (
    email: string,
    password: string,
    onMoveHomeCb: () => void,
    dispatchNotFoundEmailCb: () => void,
    dispatchInvalidPasswordCb: () => void,
    resetEmailInputStateCb: () => void,
    resetPasswordInputStateCb: () => void,
    dispatchLoginCb: (email: string) => void,
    dispatchLogoutCb: () => void
  ) => {
    let token: string;
    let expirationTime: string;
    let uId: string;
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_AUTH_API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      // 토큰 만료 시각
      expirationTime = new Date(
        new Date().getTime() + +response.data.expiresIn * 1000
      ).toISOString();

      token = response.data.idToken;
      uId = response.data.localId;
    } catch (error: any) {
      if (error.response.data.error.message === "EMAIL_NOT_FOUND") {
        dispatchNotFoundEmailCb();
      } else if (error.response.data.error.message === "INVALID_PASSWORD") {
        dispatchInvalidPasswordCb();
      }

      return;
    }
    const remainingTime = calculateRemainingTime(expirationTime);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("uId", uId);
    // 만료 시간 지나면 자동 로그아웃
    logoutTimer = setTimeout(() => {
      loginAPI.logout(dispatchLogoutCb);
    }, remainingTime);
    dispatchLoginCb(email);
    onMoveHomeCb();
    resetEmailInputStateCb();
    resetPasswordInputStateCb();
  },
  logout: (dispatchLogoutCb: () => void) => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    dispatchLogoutCb();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  },
};
