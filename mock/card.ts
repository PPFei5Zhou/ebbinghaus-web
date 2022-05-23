import { Request, Response } from 'express';

export default {
  'POST /api/card': async (req: Request, rep: Response) => {
    let body = req.body as unknown as API.CardRequestBody;
    rep.status(200).send({
      id: 'da9EDd75-179f-c571-D2f6-a71F416eBd17',
      cardName: body.cardName,
      createAt: '2016-05-25 21:33:07',
      content: [
        {
          content: body.content[0] || '',
        },
      ],
    });
  },
  'POST /api/card/findAllBy': async (req: Request, rep: Response) => {
    rep.status(200).send([
      {
        id: '13DfeAC9-BF66-c7A2-eCA5-9AA2dECE5Dfd',
        cardName: '温马思新',
        createAt: '1992-10-14 18:18:54',
        content: [
          {
            content:
              '些你结重每常花型精节身便学此任计。论会话命究品选之千来低就至。调连列品石思前何列划示形清水。正共运产引受性还最习山则想许。格本指者原具电委感图展利己车小。',
          },
        ],
      },
      {
        id: '8Fb5Fb36-df4F-1351-e297-eC6c7daA37fa',
        cardName: '道政大别主',
        createAt: '1988-11-06 06:27:25',
        content: [
          {
            content:
              '工严三化求程转书器许干看县具积。价十设了可比走程来会交万造式体少。下我史团最也全千精争千理写光最。才东设习律感也七近圆展过感。事看广热比计传期引物江万道力素低。得真记类没容和道根白改有。',
          },
        ],
      },
      {
        id: '2dAA127a-1BBe-aEB8-4B7D-6cd1fFE1Acbc',
        cardName: '定在到',
        createAt: '1979-06-13 06:02:58',
        content: [
          {
            content:
              '好里效例革叫党育天到米再第组。所权真备参们红长原现把都育建使。几题到那同那回格光外极学治。周红被再种百目法路任道算己。商去义于南计例群西相少入领是济改。任情五入你实转持起活决三证解个电车。',
          },
          {
            content:
              '先族式并万者必花设克这毛般战自标。存斗集电文适参主也按党单反。情市前除式参质速它些成验动革。及不革那角则场算非次万军又动快给。受只书各格京将标何进精学。人受产查儿治将清教标儿通资子效情群决。业去据打响风术名代素心且五战市。',
          },
        ],
      },
      {
        id: 'dDedDBE5-CC8F-1414-36cc-Eeb619a344eA',
        cardName: '小认常农农数京',
        createAt: '1978-02-11 01:10:42',
        content: [
          {
            content:
              '各节究管最建亲发情确最定史青长边其。界族四素色共万支体持音活月保。次商前指节半次准感听拉如革派育基。国于关置交往消它连道光按适便。热程才些己从至光别看连产气图进深。效要代看思意则要置织已平市。',
          },
          {
            content:
              '反斯真机清再并音非值公花边斗大教林。技极等极被团越需东该实族气新大马。改者又且观办装规所率电第五则体。更深无我点直不因铁年等极周。',
          },
          {
            content:
              '眼片第见系红以育路计千于劳形厂器。现或机由办时二则完使准置制历。造来红把思包领型想题间九如道。更位细前命动听响事组研电。将外具治代西指实当儿确区林住月十往学。非时听流五品确程发九布象。',
          },
          {
            content:
              '王制值造何会除候化发华条技参打。再比打各受里展也么日需这六部按。石别目候门务属内切命低市他满院么点。她即管人办价可达同国难受过去克。',
          },
        ],
      },
    ]);
  },
};
