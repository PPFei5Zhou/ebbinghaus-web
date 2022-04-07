import { Request, Response } from 'express';

export default {
  'GET /api/knowledge': (req: Request, res: Response) => {
    res.status(200).send({
      current: 1,
      pageSize: 10,
      total: 4,
      list: [
        {
          id: '2abd714F-f5aF-e794-8806-954079f601E0',
          createDate: '2017-03-16 05:59:40',
          updateDate: '1983-04-06 12:02:24',
          title: '候身化此风',
          subtitle: '风学走观',
          content:
            '给布七别广十去义效三级实压要。增研总定明程白周量什值行料半。称步物江真层青但交导运定便农二市门济。约效严特使称许样院是参清影区路求。提然们决片别知再我机为西带些改。达调年议领或二心常消气律原反况就求。月可业飞完取下原件很任石。',
          libraryId: '57b5622c-81c3-49a2-935a-1b73c200da30',
        },
        {
          id: '56D1aCf7-A5dD-ed6c-659E-ffD3CF16F98f',
          createDate: '2000-09-21 20:05:01',
          updateDate: '1974-06-29 14:05:33',
          title: '先各知为今',
          subtitle: '都步半好',
          content:
            '地以期置选么照便持展节得行百矿不色。装厂方机何权理因并明感取边。声领整或特自山当中方放车长间科发。联头响按亲当习花段九构断之定合元表。争任交研情养级需适圆铁现干离最龙内。应民安目斗花育养江情思片非消题。',
          libraryId: '57b5622c-81c3-49a2-935a-1b73c200da30',
        },
        {
          id: '7E5E9372-95fB-183B-8eCd-A19032bc9F12',
          createDate: '2014-05-11 13:57:16',
          updateDate: '1981-10-18 12:31:26',
          title: '去拉影方叫清',
          subtitle: '交队反住',
          content:
            '党利南南带专目须不信火十美这加九。正快验选由万片收林商号有改阶生信。利并入且眼开权百干重元半团。做于使和圆照过难建价组明的。即在华调着引华长划知商部式标行车。传特安查以复角现史合属较自年阶研图及。关马习须所图立外验提现她律北学。',
          libraryId: '57b5622c-81c3-49a2-935a-1b73c200da30',
        },
        {
          id: 'BdA05aAC-CDDC-8D4B-137e-c338fA0d5edE',
          createDate: '1987-06-04 07:00:04',
          updateDate: '2009-03-10 16:12:45',
          title: '如九来保五国干',
          subtitle: '新上水',
          content:
            '变给管美儿按劳发与难状切个所每作。联特政点十并石铁期看装论土方别界。细感好小对积省即学马委器六党术军。',
          libraryId: '57b5622c-81c3-49a2-935a-1b73c200da30',
        },
      ],
    });
  },
};
