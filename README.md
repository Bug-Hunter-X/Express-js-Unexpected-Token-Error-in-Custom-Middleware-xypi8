# Express.js Unexpected Token Error in Custom Middleware

This repository demonstrates an uncommon error in Express.js where an unexpected token error occurs due to an issue within a custom middleware function.  The error is subtle and can be difficult to debug without carefully reviewing the middleware's implementation.

## Problem

The `bug.js` file contains a simple Express.js application. However, if you add custom middleware without proper handling, you might encounter unexpected token errors during the middleware execution.   The cause is that a middleware function is not correctly handling request or response and is potentially attempting to directly manipulate the HTTP response object incorrectly.   A common issue is that if you use `res.end()` or `res.write()` multiple times that can lead to this issue.

## Solution

The `bugSolution.js` file demonstrates the corrected implementation of the custom middleware, ensuring proper handling of the response object and avoiding unexpected token errors.  It highlights the importance of adhering to the standard Express.js middleware signature and correctly handling the response. Pay careful attention to how `res.end()` is used and ensure you are not accidentally calling it more than once.

## How to reproduce the bug:
1. Clone this repository.
2. Navigate to the `bug.js` file.
3. Attempt to run the application (using `node bug.js`).  The server may crash with an error.
4. Then navigate to the `bugSolution.js` and run it.  This should work without issues.