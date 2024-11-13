# XMLHttpRequest
## HTML Status Codes
| Status Code | Meaning                                                                              |
|-------------|--------------------------------------------------------------------------------------|
| 200         | HTTP request successful                                                              |
| 3XX         | General form for request redirection errors                                          |
| 301         | Resource permanently moved, the new URL is provided                                  |
| 4XX         | General form for client errors                                                       |
| 400         | Bad request. Ex: Incorrect request syntax                                            |
| 401         | Unauthorized request. Ex: Not properly authenticated.                                |
| 403         | Request forbidden. Ex: User does not have necessary permissions.                     |
| 404         | Not found. Ex: Requested resource does not exist.                                    |
| 5XX         | General form for server error codes                                                  |
| 500         | Internal server error. Ex: Server-side code crashed.                                 |
| 503         | Service unavailable. Ex: Webpage is temporarily unavailable due to site maintenance. |

## Comparison of Promise object's `then()` and `catch()` scenarios
| Code                                     | Scenario                                                        | Function(s) called                  | Uncaught exception?  |
|------------------------------------------|-----------------------------------------------------------------|-------------------------------------|----------------------|
| `promise1.then(okFunc, failFunc);`       | `promise1` fulfilled, `okFunc()` does NOT throw an exception    | `okFunc()` only                     | No                   |
|                                          | `promise1` fulfilled, `okFunc()` throws an exception            | `okFunc()` only                     | Yes                  |
|                                          | `promise1` rejected, `failFunc()` does NOT throw an exception   | `failFunc()` only                   | No                   |
|                                          | `promise1` rejected, `failFunc()` throws an exception           | `failFunc()` only                   | Yes                  |
| `promise1.then(okFunc).catch(failFunc);` | `promise1` fulfilled, `okFunc()` does NOT throw an exception    | `okFunc()` only                     | No                   |
|                                          | `promise1` fulfilled, `okFunc()` throws an exception            | `okFunc()` first, then `failFunc()` | No                   |
|                                          | `promise1` rejected, `failFunc()` does NOT throw an exception   | `failFunc()` only                   | No                   |
|                                          | `promise1` rejected, `failFunc()` throws an exception           | `failFunc()` only                   | Yes                  |
