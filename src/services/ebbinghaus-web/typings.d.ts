declare namespace API {
  type CardContent = {
    content: string;
  };

  type CardRequestBody = {
    id: string;
    cardName: string;
    tagId: string;
    createAt: string;
    content: ContentRequestBody[];
  };

  type Card = {
    id: string;
    cardName: string;
    createAt: string;
    content: CardContent[];
  };

  type TagResponse = {
    tagId: string;
    tagName: string;
    parentId: string;
    children: 6603544[];
  };

  type ContentRequestBody = {
    content: string;
  };

  type ContentResponseBody = {
    content: string;
  };

  type TagBody = {
    id: string;
    tagName: string;
    userId: string;
    parentId: string;
  };

  type CardResponseBody = {
    id: string;
    cardName: string;
    createAt: string;
    content: ContentResponseBody[];
  };

  type Tag = {
    tagId: string;
    tagName: string;
    parentId: string;
    userId: string;
    children: 6285385[];
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

  type findCardByIdParams = {
    id: string;
  };

  type updateCardParams = {
    id: string;
  };

  type deleteCardByIdParams = {
    id: string;
  };
}
