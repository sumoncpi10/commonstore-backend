import { Substation } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { substaionFilterableFields } from './substation.constrant';
import { SubstationService } from './substation.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await SubstationService.inertIntoDB(req.body);
  sendResponse<Substation>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'substation Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const pbsCode = req.params.pbsCode;
  const filters = pick(req.query, substaionFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await SubstationService.getAllFromDB(
    filters,
    options,
    pbsCode
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'substation data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const substationCode = req.params.substationCode;
  const result = await SubstationService.getDataById(substationCode);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'substation data fatched',
    data: result,
  });
});
const updateIntoDB = catchAsync(async (req, res) => {
  const { substationCode } = req.params;
  const payload = req.body;
  const result = await SubstationService.updateIntoDB(substationCode, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'substation Updated Successfully',
    data: result,
  });
});
export const SubstationController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
};
