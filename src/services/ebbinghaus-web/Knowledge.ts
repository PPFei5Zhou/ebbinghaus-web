// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查询 GET /api/knowledge/${param0} */
export async function getKnowledgeById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKnowledgeByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/knowledge/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新 PUT /api/knowledge/${param0} */
export async function updateKnowledge(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateKnowledgeParams,
  body: API.KnowledgeRequestBody,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Knowledge>(`/api/knowledge/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除 DELETE /api/knowledge/${param0} */
export async function deleteKnowledgeById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteKnowledgeByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/knowledge/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 条件查询 GET /api/knowledge */
export async function selectKnowledge(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.selectKnowledgeParams,
  options?: { [key: string]: any },
) {
  return request<API.KnowledgePaginateResponseBody>('/api/knowledge', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增 POST /api/knowledge */
export async function insertKnowledge(
  body: API.KnowledgeRequestBody,
  options?: { [key: string]: any },
) {
  return request<API.Knowledge>('/api/knowledge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除 DELETE /api/knowledge */
export async function deleteKnowledge(
  body: string[],
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/knowledge', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
