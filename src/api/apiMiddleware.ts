// not used yet
// can be used if we need to add additional headers or perform changes before/after the API call
// authorization token and x-lc-tenant currently need to be passed by extension; they are received after the extension is registered with the UI Extensibility service

import { FetchParams, Middleware, ResponseContext } from "../lc-public-api";

export class ApiMiddleware implements Middleware {
  public async pre(context: ResponseContext): Promise<FetchParams | void> {
    const accessToken = this.acquireToken(); // trados.getRegistrationResult().token
    return {
      url: context.url,
      init: {
        ...context.init,
        headers: new Headers({
          ...context.init.headers,
          Authorization: `Bearer ${accessToken}`
        })
      }
    };
  }

  public post(context: ResponseContext): Promise<Response | void> {
    return Promise.resolve(context.response);
  }

  private acquireToken(): Promise<string> {
    return Promise.resolve().then(() => {
      // todo: implement a way of getting the token? or defer responsability to extension like Office 365?
      // trados.getRegistrationResult().token
      return "ACCESS_TOKEN";
    });
  }
}
