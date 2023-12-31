import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { RevenueItemController } from './revenueitem.controller';
import { RevenueItemValidation } from './revenueitem.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-revenue-item',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(RevenueItemValidation.create),
  RevenueItemController.insertIntoDB
);
router.get(
  '/:pbsCode',
  auth(ADMIN, SUPER_ADMIN, USER),
  RevenueItemController.getAllFromDB
);
router.get(
  '/revenue/:id',
  auth(ADMIN, SUPER_ADMIN, USER),
  RevenueItemController.getDataById
);
router.patch(
  '/:id',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(RevenueItemValidation.update),
  RevenueItemController.updateIntoDB
);
export const RevenueRoutes = router;
