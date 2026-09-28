import { SignJWT, jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || "abkpsych-admin-secret-change-me-in-production"
);

const COOKIE_NAME = "abk_admin_session";
const EXPIRY_HOURS = 8;

export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "abkadmin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "ABKPsych2026!";

export async function signToken(username: string): Promise<string> {
  return new SignJWT({ username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${EXPIRY_HOURS}h`)
    .sign(SECRET);
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, SECRET);
    return true;
  } catch {
    return false;
  }
}

export { COOKIE_NAME };
