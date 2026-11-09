import { getRegistrationResult } from "../events";
import { FetchParams, Middleware, RequestContext } from "../lc-public-api";

/**
 * Sets the Authorization header of every Public API request to the latest value received from the host
 * (the host calls the register callback again when the token is refreshed), so refreshed tokens are used
 * even by previously created API clients and even if the caller passes a stale authorization value.
 */
export class AuthorizationMiddleware implements Middleware {
  public async pre(context: RequestContext): Promise<FetchParams> {
    const authorization = getRegistrationResult()?.authorization;
    const headers = new Headers(context.init.headers);
    headers.set("Authorization", authorization);

    return { url: context.url, init: { ...context.init, headers } };
  }
}
