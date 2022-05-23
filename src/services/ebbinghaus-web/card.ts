// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** findById GET /api/card/${param0} */
export async function findCardById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findCardByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<
    string | number | boolean | any[] | Record<string, any> | number
  >(`/api/card/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update PUT /api/card/${param0} */
export async function updateCard(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateCardParams,
  body: API.CardRequestBody,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CardRequestBody>(`/api/card/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** deleteById DELETE /api/card/${param0} */
export async function deleteCardById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCardByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/card/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** insert POST /api/card */
export async function insertCard(
  body: API.CardRequestBody,
  options?: { [key: string]: any },
) {
  return request<API.CardResponseBody>('/api/card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteBatchById DELETE /api/card */
export async function deleteBatchCardById(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/card', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findAllBy POST /api/card/findAllBy */
export async function findAllCardBy(
  body: API.CardRequestBody | any,
  options?: { [key: string]: any },
) {
  return request<API.CardResponseBody[]>('/api/card/findAllBy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
