import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();

router.post(
  '/login',
  // auth(ADMIN, SUPER_ADMIN),
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);
// router.get('/', AdminController.getAllAdmins);

// router.delete('/:id', AdminController.deleteAdmin);

// router.patch(
//   '/:id',
//   validateRequest(AdminValidation.updateAdmin),
//   AdminController.updateAdmin
// );

export const AuthRoutes = router;
