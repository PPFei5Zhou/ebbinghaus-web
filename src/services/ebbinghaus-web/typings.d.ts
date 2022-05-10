declare namespace API {
  type TagBody = {
    id: string;
    tagName: string;
    userId: string;
    parentId: string;
  };

  type CardRequestBody = {
    id: string;
    cardName: string;
    createAt: string;
    content: ContentRequestBody[];
  };

  type Card = {
    id: string;
    cardName: string;
    createAt: string;
    content: CardContent[];
  };

  type ContentRequestBody = {
    content: string;
  };

  type TagResponse = {
    tagId: string;
    tagName: string;
    parentId: string;
    children: 6603544[];
  };

  type ContentResponseBody = {
    content: string;
  };

  type Tag = {
    tagId: string;
    tagName: string;
    parentId: string;
    userId: string;
    children: 6285385[];
  };

  type CardResponseBody = {
    id: string;
    cardName: string;
    createAt: string;
    content: ContentResponseBody[];
  };

  type CardContent = {
    content: string;
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
