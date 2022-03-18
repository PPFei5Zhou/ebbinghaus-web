declare namespace API {
  type Page = {
    content: (string | number | boolean | any[] | Record<string, any> | number)[];
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

  type LibraryRequestBody = {
    id?: string;
    libraryName?: string;
    libraryDescription?: string;
    libraryParentId?: string;
    libraryOwnerId?: string;
    createDate?: string;
    updateDate?: string;
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
