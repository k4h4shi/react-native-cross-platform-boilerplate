// @flow

import queryString from "query-string";
import { fetchWithJWTToken } from "./Authorizer";

/**
 * HttpHelper class for the web api.
 * can execute get, post, put, delete, patch requests with JWT Token.
 */
export default class HttpHelper {
  /**
   * Handle get request
   */
  static get(url: string, params: Object) {
    const suffix = params ? `?${queryString.stringify(params)}` : "";
    return fetchWithJWTToken("GET", `${url}${suffix}`);
  }

  /**
   * Handle post request.
   */
  static post(url: string, data: Object = {}) {
    return fetchWithJWTToken("POST", url, data);
  }

  /**
   * Handle put request.
   */
  static put(url: string, data: Object = {}) {
    return fetchWithJWTToken("PUT", url, data);
  }

  /**
   * Handle put request.
   */
  static delete(url: string) {
    return fetchWithJWTToken("DELETE", url);
  }

  /**
   * Handle delete request.
   */
  static patch(url: string, data: Object = {}) {
    return fetchWithJWTToken("PATCH", url, data);
  }
}
