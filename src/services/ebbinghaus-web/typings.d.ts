declare namespace API {
  type TagResponse = {
    tagId: string;
    tagName: string;
    parentId: string;
    children: 6603544[];
  };

  type Tag = {
    tagId: string;
    tagName: string;
    parentId: string;
    userId: string;
    children: 6285385[];
  };

  type TagBody = {
    id: string;
    tagName: string;
    userId: string;
    parentId: string;
  };

  type findTagByIdParams = {
    id: string;
  };

  type updateTagParams = {
    id: string;
  };

  type deleteTagByIdParams = {
    id: string;
  };
}
