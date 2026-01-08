export const cookieOptions = {
  httpOnly: true, //so that can access from js
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 1000* 60 * 60, //1 hour
};