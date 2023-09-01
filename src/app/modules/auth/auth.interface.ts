export type ILoginUser = {
  mobileNo: string;
  password: string;
};

export type IUserLoginResponse = {
  mobileNo: string;
  role: string;
  pbsCode: string;
  zonalCode?: string;
  complainCode?: string;
  substationCode?: string;
  accessToken: string;
  refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};
