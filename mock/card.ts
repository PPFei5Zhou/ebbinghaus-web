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
};
