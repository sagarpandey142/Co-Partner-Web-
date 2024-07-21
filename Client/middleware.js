// import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

// export default withMiddlewareAuthRequired();

// export const config = {
//   matcher: ["/middleware", "/api/data"],
// };

// middleware.js
import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
  matcher: ["/api/protected-data"], // Ensure these paths do not overlap with edge function paths
};
