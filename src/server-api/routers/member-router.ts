import { Router } from 'express';
import { IsDefined } from 'class-validator';

import { wrapAsync } from '../handlers';

export const memberRouter = () => {
  const router = Router();
  router.post('/', createMember());
  return router;
};

class CreateMemberParam {
  @IsDefined()
  public loginId: string;

  @IsDefined()
  public nick: string;

  @IsDefined()
  public password: string;
}
const createMember = () =>
  wrapAsync(async (req, res) => {
    const param = req.body;
    res.status(200).json({});
  });
