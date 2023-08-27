import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ZonalController } from './zonal.controller';
import { ZonalValidation } from './zonal.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-zonal',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(ZonalValidation.create),
  ZonalController.insertIntoDB
);
router.get(
  '/:pbsCode',
  auth(ADMIN, SUPER_ADMIN, USER),
  ZonalController.getAllFromDB
);
router.get(
  '/zonal/:zonalCode',
  auth(ADMIN, SUPER_ADMIN, USER),
  ZonalController.getDataById
);
router.patch(
  '/:zonalCode',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(ZonalValidation.update),
  ZonalController.updateIntoDB
);

export const ZonalRoutes = router;
