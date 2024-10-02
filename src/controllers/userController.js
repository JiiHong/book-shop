import { StatusCodes } from 'http-status-codes';
import * as userService from '../services/userService.js';

export async function join(req, res) {
  const { email, password } = req.body;
  // TODO: email로 유저 찾아서 중복 확인

  const userId = await userService.join(email, password);
  // TODO: userId 토큰으로 변경
  return res.status(StatusCodes.CREATED).json({ userId });
}
