import * as auth0 from "auth0-js";
import { Auth0DecodedHash } from "auth0-js";

export default class Auth {
  tokenRenewalTimeout: number;
  auth = new auth0.WebAuth({
    domain: "sports-cast.auth0.com",
    clientID: "2VoChwCg8rPmarq4MjwT2lsd47xkBbw1",
    redirectUri: "http://localhost:3000/login-callback",
    audience: "https://sports-cast.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.scheduleRenewal();
  }
  handleAuthentication() {
    return new Promise((res, rej) => {
      this.auth.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          res();
        } else if (err) {
          alert(`Error: ${err.error}. Check the console for further details.`);
          rej(err);
        }
      });
    });
  }
  login() {
    this.auth.authorize();
  }
  setSession(authResult: Auth0DecodedHash) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);

    // schedule a token renewal
    this.scheduleRenewal();
  }
  getAccessToken() {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No access token found");
    }
    return accessToken;
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("scopes");
    clearTimeout(this.tokenRenewalTimeout);
    // navigate to the home route
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  renewToken() {
    this.auth.checkSession({}, (err, result) => {
      if (err) {
        alert(
          `Could not get a new token (${err.error}: ${err.errorDescription}).`
        );
      } else {
        this.setSession(result);
        alert(`Successfully renewed auth!`);
      }
    });
  }

  scheduleRenewal() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    const delay = expiresAt - Date.now();
    if (delay > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewToken();
      }, delay);
    }
  }
}
