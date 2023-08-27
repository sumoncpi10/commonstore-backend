import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-category',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(CategoryValidation.create),
  CategoryController.insertIntoDB
);
router.get(
  '/',
  auth(ADMIN, SUPER_ADMIN, USER),
  CategoryController.getAllFromDB
);
router.get(
  '/:id',
  auth(ADMIN, SUPER_ADMIN, USER),
  CategoryController.getDataById
);

export const CategoryRoutes = router;
