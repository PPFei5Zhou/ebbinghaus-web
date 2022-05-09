import { Request, Response } from 'express';

export default {
  'GET /api/tag/userTagList': async (req: Request, rep: Response) => {
    rep.status(200).send([
      {
        tagId: '2Cf5B239-3AFb-1D7d-15AD-cdB8A2bdEb0A',
        tagName: '声手手大',
        parentId: '8Eb1D1Fb-8DfD-fec5-0E7f-F54207F61A19',
        children: [
          {
            tagId: 'CaD12ebc-8713-1677-f338-13BbFADa1D58',
            tagName: '持观市和',
            parentId: '1bA4B43c-b7A9-D7d3-54a4-B5F94dEbBD92',
            children: null,
          },
          {
            tagId: 'e82ED9E9-7D36-4DeA-519e-d9bC75F15c1D',
            tagName: '得飞江参几',
            parentId: 'D5FEDdCF-259c-611C-2BC2-A1236BBEeF39',
            children: [],
          },
          {
            tagId: 'c29E574c-DdFf-AAAb-9Fd1-ED8da9324a86',
            tagName: '给传土育',
            parentId: 'E13eb1c0-fF51-dFBE-66Af-8B9A4e73eD38',
            children: [],
          },
        ],
      },
      {
        tagId: 'fc4c9bfa-4aBA-d2dB-1Dfd-9aEd1b86486b',
        tagName: '容去本花点',
        parentId: '8dcE5345-02D8-FDAa-8F45-7c6FbCAf4587',
        children: [
          {
            tagId: '8FEbD78b-6233-75cF-156C-FbB770571dDf',
            tagName: '反油家形格候',
            parentId: '23F3E3fd-1fCb-31F5-559d-fE5cbA4134eD',
            children: null,
          },
          {
            tagId: 'Bb941c96-0d91-4d71-0Ccf-125109cF8d23',
            tagName: '织千处今料',
            parentId: '2afb9cc6-A76a-C2DC-bd7f-dAeF2Af22BaA',
            children: [],
          },
          {
            tagId: 'ceE843CF-fAbf-DF9A-5B21-6b145b2e2EF7',
            tagName: '响制家为立',
            parentId: 'FCAbbEd9-7c95-4540-3e7D-A8E6fEf5B479',
            children: [],
          },
        ],
      },
      {
        tagId: 'BBCB39E6-f34E-5bF1-f7ec-fB2C9e929C2A',
        tagName: '通战持老',
        parentId: 'F2Bcb7a9-0f8d-bcbf-e1C2-4682eAD7bE1B',
        children: [
          {
            tagId: '5Bd8fBe0-c5dd-3AF4-669A-A3F1221C8aD7',
            tagName: '明备划空矿美十',
            parentId: '5744e36d-f4e5-f803-5CD8-b24E65c018be',
            children: [],
          },
          {
            tagId: '87c6bFFc-8214-1EEe-32F7-ce9B6ACd03B8',
            tagName: '产今验量',
            parentId: 'C9Cae2dc-1dB5-fd4C-2267-6BeCeDF7ea97',
            children: [],
          },
          {
            tagId: 'ba6cf725-2a52-8Ef2-4676-126B506246E1',
            tagName: '至且包',
            parentId: 'CdB26CCd-6CfA-5a51-36d5-Fc48eBCae04A',
            children: [],
          },
          {
            tagId: 'C3A9aeCE-bF8B-32fb-CC97-Aa72eFfb2fDF',
            tagName: '间则所圆',
            parentId: '228Ec8A1-5C20-ABfe-a2fc-BcF2A1916f92',
            children: null,
          },
        ],
      },
      {
        tagId: 'F22E8FfE-dD2B-fce3-d8bc-f756f0a42a69',
        tagName: '之得任进色油',
        parentId: '19c18dF6-EF11-6BDc-1A12-f59AE766dFbf',
        children: null,
      },
      {
        tagId: 'eeC441Fe-A66E-7D2E-FEeD-8Cfea13cD17d',
        tagName: '质除级加行',
        parentId: 'BAeb15Ed-DeE5-dC74-bE1f-bCe8d8f7AbB9',
        children: null,
      },
    ]);
  },
  'GET /api/tag/:id': async (req: Request, rep: Response) => {
    rep.status(200).send({
      tagId: '70F0F3dc-47CD-BD62-d17A-8f8B4fe3AAAD',
      tagName: '干三达清与好',
      parentId: 'b7DeE7ab-65A2-8eb4-D637-FC57ccd0AE6c',
      children: null,
    });
  },
  'POST /api/tag': async (req: Request, rep: Response) => {
    rep.status(200).send({
      tagId: '70F0F3dc-47CD-BD62-d17A-8f8B4fe3AAAD',
      tagName: '干三达清与好',
      parentId: 'b7DeE7ab-65A2-8eb4-D637-FC57ccd0AE6c',
      children: null,
    });
  },
};
