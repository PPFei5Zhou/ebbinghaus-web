declare namespace API {
  type Knowledge = {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    libraryId: string;
    createDate: string;
    updateDate: string;
  };

  type KnowledgePaginateResponseBody = {
    current: number;
    pageSize: number;
    total: number;
    list: Knowledge[];
  };

  type KnowledgeRequestBody = {
    id?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    libraryId?: string;
    createDate?: string;
    updateDate?: string;
  };

  type BaseRequestBody = {
    /** ID */
    id: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 创建日期 */
    createDate?: string;
    /** 更新日期 */
    updateDate?: string;
  };

  type Page = {
    content: (
      | string
      | number
      | boolean
      | any[]
      | Record<string, any>
      | number
    )[];
    pageable: {
      sort: { empty?: boolean; sorted?: boolean; unsorted?: boolean };
      offset?: number;
      pageSize?: number;
      pageNumber?: number;
      unpaged?: boolean;
      paged?: boolean;
    };
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: { empty?: boolean; sorted?: boolean; unsorted?: boolean };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
  };

  type Library = {
    id: string;
    libraryName: string;
    libraryDescription: string;
    libraryParentId: string;
    libraryOwnerId: string;
    createDate: string;
    updateDate: string;
  };

  type LibraryRequestBody = {
    id?: string;
    libraryName?: string;
    libraryDescription?: string;
    libraryParentId?: string;
    libraryOwnerId?: string;
    createDate?: string;
    updateDate?: string;
  };

  type LibraryPaginateResponseBody = {
    current: number;
    pageSize: number;
    total: number;
    list: Library[];
  };

  type selectLibraryParams = {
    /** 页码 */
    page: string;
    /** 每页数量 */
    size: string;
    /** ID */
    id?: string;
    /** 名称 */
    libraryName?: string;
    /** 描述 */
    libraryDescription?: string;
    /** 父级ID */
    libraryParentId?: string;
    /** 所属用户ID */
    libraryOwnerId?: string;
  };

  type getKnowledgeByIdParams = {
    id: string;
  };

  type updateKnowledgeParams = {
    id: string;
  };

  type deleteKnowledgeByIdParams = {
    id: string;
  };

  type selectKnowledgeParams = {
    page?: string;
    size?: string;
    id?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    libraryId?: string;
  };

  type selectLibraryByIdParams = {
    id: string;
  };

  type updateLibraryParams = {
    id: string;
  };

  type deleteLibraryByIdParams = {
    id: string;
  };
}
