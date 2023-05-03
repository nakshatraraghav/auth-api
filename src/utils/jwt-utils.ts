import jwt from "jsonwebtoken";

const private_key = process.env.PRIVATE_KEY as string;

export function verifyToken(token: string) {
  try {
    const payload = jwt.verify(token, private_key);
    return {
      payload,
      expired: false,
      valid: true,
    };
  } catch (error: any) {
    return {
      payload: null,
      valid: false,
      expired: error.message === "jwt expired",
    };
  }
}
