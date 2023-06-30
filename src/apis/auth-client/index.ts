import { BaseAxiosClient, useClient } from "../BaseAxiosClient";
import { UserInfo } from "./define";

export interface GetUserInfoResponse {
  code: number;
  msg: string;
  data: UserInfo;
}

export interface LogoutResponse {
  code: number;
  msg: string;
  data: string;
}

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
