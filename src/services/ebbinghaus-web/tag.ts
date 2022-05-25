// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增 POST /api/tag */
export async function insertTag(
  body: API.TagBody,
  options?: { [key: string]: any },
) {
  return request<API.TagResponse>('/api/tag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除 DELETE /api/tag */
export async function deleteBatchById(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/tag', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询标签 GET /api/tag/${param0} */
export async function findTagById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findTagByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TagResponse>(`/api/tag/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新 PUT /api/tag/${param0} */
export async function updateTag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTagParams,
  body: API.TagBody,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TagResponse>(`/api/tag/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /api/tag/${param0} */
export async function deleteTagById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTagByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/tag/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 当前用户标签列表 GET /api/tag/userTagList */
export async function userTagList(options?: { [key: string]: any }) {
  return request<API.TagResponse[]>('/api/tag/userTagList', {
    method: 'GET',
    ...(options || {}),
  });
}
