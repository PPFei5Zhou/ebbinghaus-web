// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 条件查询 GET /api/library */
export async function selectLibrary(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.selectLibraryParams,
  options?: { [key: string]: any },
) {
  return request<API.Page>('/api/library', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增 POST /api/library */
export async function insertLibrary(
  body: API.LibraryRequestBody,
  options?: { [key: string]: any },
) {
  return request<API.Library>('/api/library', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除 DELETE /api/library */
export async function deleteLibrary(body: string[], options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/library', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询 GET /api/library/${param0} */
export async function selectLibraryById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.selectLibraryByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/library/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新 PUT /api/library/${param0} */
export async function updateLibrary(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateLibraryParams,
  body: API.LibraryRequestBody,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Library>(`/api/library/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 单个删除 DELETE /api/library/${param0} */
export async function deleteLibraryById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteLibraryByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/library/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
