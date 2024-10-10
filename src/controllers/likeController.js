import { StatusCodes } from 'http-status-codes';
import * as likeService from '../services/likeService.js';

export async function addLike(req, res) {
  const { id } = req.params;
  const { user_id } = req.body;

  await likeService.addLike(+user_id, +id);

  return res.sendStatus(StatusCodes.CREATED);
}

export async function removeLike(req, res) {
  const { id } = req.params;
  const { user_id } = req.body;

  await likeService.removeLike(+user_id, +id);

  return res.sendStatus(StatusCodes.OK);
}
