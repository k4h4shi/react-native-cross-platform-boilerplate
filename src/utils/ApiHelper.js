// @flow
import env from "../config/env";
import camelize from "camelize";
import snakeize from "snakeize";
import HttpHelper from "./HttpHelper";

/**
 * ApiHelper class for the web api.
 * it wraps HttpHelper and adjust case between cliant and server.
 * can execute get, post, put, delete, patch requests with JWT Token.
 */
export default class ApiHelper {
  /**
   * Handle get request.
   */
  static get(endpoint: string, params: Object) {
    console.debug(
      `ApiHelper requested GET ${endpoint} with params ${JSON.stringify(
        params
      )}`
    );
    return HttpHelper.get(`${env.API_BASE_URI}/${endpoint}`, params)
      .then(response => {
        const json = response.json();
        if (response.ok) {
          return json;
        } else {
          throw json;
        }
      })
      .then(json => camelize(json));
  }

  /**
   * Handle post request.
   */
  static post(endpoint: string, data: Object = {}) {
    console.debug(
      `ApiHelper requested POST ${endpoint} with data ${JSON.stringify(data)}`
    );
    return HttpHelper.post(`${env.API_BASE_URI}/${endpoint}`, snakeize(data));
  }

  /**
   * Handle put request.
   */
  static put(endpoint: string, data: Object = {}) {
    console.debug(
      `ApiHelper requested PUT ${endpoint} with data ${JSON.stringify(data)}`
    );
    return HttpHelper.put(`${env.API_BASE_URI}/${endpoint}`, snakeize(data));
  }

  /**
   * Handle put request.
   */
  static delete(endpoint: string) {
    console.debug(`ApiHelper requested DELETE ${endpoint}`);
    return HttpHelper.delete(`${env.API_BASE_URI}/${endpoint}`);
  }

  /**
   * Handle patch request.
   */
  static patch(endpoint: string, data: Object = {}) {
    console.debug(
      `ApiHelper requested PATCH ${endpoint} with data ${JSON.stringify(data)}`
    );
    return HttpHelper.patch(`${env.API_BASE_URI}/${endpoint}`, snakeize(data));
  }
}
