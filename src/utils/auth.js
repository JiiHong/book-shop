import jwt from 'jsonwebtoken';

export function createJwtToken(email) {
  return jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: Number(process.env.JWT_EXPIRES_IN),
  });
}
