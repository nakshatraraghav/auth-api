import jwt from "jsonwebtoken";
import { config } from "dotenv";
config(); // idk why i have to do this but without doing this the env variables are undefined
// so idk

const private_key = process.env.PRIVATE_KEY as string;
const access_token_ttl = process.env.ACCESS_TOKEN_TTL as string;
const refresh_token_ttl = process.env.REFRESH_TOKEN_TTL as string;

export default function createTokens(payload: Object) {
  const access_token = jwt.sign(payload, private_key, {
    expiresIn: access_token_ttl,
  });

  const refresh_token = jwt.sign(payload, private_key, {
    expiresIn: refresh_token_ttl,
  });

  return {
    access_token,
    refresh_token,
  };
}
