// @flow

export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type Url = string;
export type Token = string;
export type Data = Object;

// Http option
type Option = {
  method: Method,
  headers: {
    Accept: string,
    "Content-Type": string,
    Authorization: string
  },
  body: string
};

// Http Status
type Success = { success: true, value: boolean };
type Failed = { success: false, error: string };

type Response = Success | Failed;

/**
 * fetch with JWT token.
 */
export const fetchWithJWTToken = (
  method: Method,
  url: Url,
  data: ?Data
): Promise<any> => {
  return authorize()
    .then((token: Token) => createOption(method, data, token))
    .then((option: Option) => fetch(url, option));
};

/**
 * do authorization and get token
 */
const authorize = (): Promise<Token> => {
  // write authrization
  return Promise.resolve("");
};

/**
 * create the options for fetch.
 */
const createOption = (method: Method, data: ?Data, token: Token): Option => ({
  method: method,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
  },
  body: JSON.stringify(data)
});
