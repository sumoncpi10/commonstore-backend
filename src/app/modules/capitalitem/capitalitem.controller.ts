import { CapitalItem } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { capitalItemFilterableFields } from './capitalitem.constrant';
import { CapitalItemService } from './capitalitem.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await CapitalItemService.inertIntoDB(req.body);
  sendResponse<CapitalItem>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CapitalItem Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const pbsCode = req.params.id;
  const filters = pick(req.query, capitalItemFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await CapitalItemService.getAllFromDB(
    filters,
    options,
    pbsCode
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CapitalItem data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CapitalItemService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CapitalItem data fatched',
    data: result,
  });
});
const updateIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await CapitalItemService.updateIntoDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Capital item Updated Successfully',
    data: result,
  });
});
export const CapitalItemController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
};
