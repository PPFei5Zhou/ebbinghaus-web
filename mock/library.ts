import { Request, Response } from 'express';

export default {
  'GET /api/library': (req: Request, res: Response) => {
    res.status(200).send({
      content: [
        {
          id: "57b5622c-81c3-49a2-935a-1b73c200da30",
          createDate: "1990-11-28 18:43:27",
          updateDate: "1989-09-11 15:48:27",
          libraryName: "管历属说际能",
          libraryDescription: "清细增响比人立装白件选压。约十关往离通单增在持际技复。质性才金南打完识石万水克组但。行代研完技白果果样完需需全号半管低。石厂北都级群己火专身问才八定标速。",
          libraryParentId: "026a0e3c-dc45-444e-9ffd-424cb6fe48a5",
          libraryOwnerId: "c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0"
        },
        {
          id: "78ba4aed-3c9e-471a-b5de-ae721aaad9b9",
          createDate: "2019-05-07 16:13:28",
          updateDate: "1979-12-23 23:40:50",
          libraryName: "象写运装复头",
          libraryDescription: "她自正区铁非细发办济细重产五利要采。研线权准装多业什使思取准非做正一委下。接派路命划角决没各件论示气始些发区。离书色然万热何车族总听较指。还办流道众总科光立根养院平正什前问毛。运化广增光器劳西想种他商照才队技。",
          libraryParentId: "026a0e3c-dc45-444e-9ffd-424cb6fe48a5",
          libraryOwnerId: "c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0"
        },
        {
          id: "7b38b143-ac1e-4a98-9261-a2a820481723",
          createDate: "1988-12-05 19:11:10",
          updateDate: "2006-12-10 22:00:08",
          libraryName: "四方各东红",
          libraryDescription: "别式们代习速区拉看保品品具眼给土。结者各状就文角正文一为水上低。节立程在派金南月同支指下六实美。改矿只话西改以结连们强四体级接长阶。求新习学社专比半在八候数。白易车新传主写来程认七表子。",
          libraryParentId: "026a0e3c-dc45-444e-9ffd-424cb6fe48a5",
          libraryOwnerId: "c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0"
        }
      ],
      pageable: {
        sort: {
          "empty": true,
          "unsorted": true,
          "sorted": false
        },
        offset: 0,
        pageSize: 10,
        pageNumber: 0,
        unpaged: false,
        paged: true
      },
      last: true,
      totalPages: 1,
      totalElements: 3,
      size: 10,
      number: 0,
      first: true,
      sort: {
        empty: true,
        unsorted: true,
        sorted: false
      },
      numberOfElements: 3,
      empty: false
    });
  },
};
