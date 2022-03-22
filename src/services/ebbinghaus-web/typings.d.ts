declare namespace API {
  type LibraryPaginateResponseBody = {
    current: number;
    pageSize: number;
    total: number;
    list: Library[];
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
