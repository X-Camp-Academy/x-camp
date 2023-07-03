import { BaseAxiosClient, useClient } from "../BaseAxiosClient";
import { GetUserInfoResponse, LogoutResponse } from "./define";

export class AuthClient extends BaseAxiosClient {
  async getUserInfo() {
    const data: GetUserInfoResponse = await this.get("/getUser", {});
    return data;
  }

  async logout() {
    const data: LogoutResponse = await this.get("/logout", {});
    return data;
  }
}

export const useAuthClient = () => useClient("auth", AuthClient, "/v1");
