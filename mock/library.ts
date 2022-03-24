import { Request, Response } from 'express';

export default {
  'POST /api/library': (req: Request, res: Response) => {
    res.status(200).send({
      id: 'e894fef9-edd1-4408-a85c-8f34cf7a9f35',
      createDate: '2022-03-18 22:54:36',
      updateDate: '2022-03-18 22:54:36',
      libraryName: '王社社提清入',
      libraryDescription:
        '直体看新容定物江着生张则委即器基。南比空记易江际始断问样划改样低。手空物象压机易话话离济以等众过。面给定理音被她却感治价划以干白。用具件记斯技加规须关四满。江化育例近给公意整关系立任时上。',
      libraryParentId: 'e8AfCA1A-42B1-e51B-8c7f-4982fC14D8bd',
      libraryOwnerId: '5bAAAba7-12e1-f2d6-658d-5683B3FAC121',
    });
  },
  'PUT /api/library/:id': (req: Request, res: Response) => {
    res.status(200).send({
      id: 'e894fef9-edd1-4408-a85c-8f34cf7a9f35',
      createDate: '1976-12-29 06:48:34',
      updateDate: '2022-03-18 22:57:51',
      libraryName: '走家业',
      libraryDescription:
        '酸斗必或节公然华期几八斗见。影响教听海分但行中军表片没马半局。认名西过展于准者装气再子打置。么上最往空都快我作断了属任说事。只命必少光领它行该直管当油将第。',
      libraryParentId: '8de86178-DDd3-c16E-7756-Ab22EDDCbcd8',
      libraryOwnerId: '412684C2-BA69-d5b7-5c14-A198f4b9B2Ee',
    });
  },
  'DELETE /api/library/:id': (req: Request, res: Response) => {
    res.status(200).send();
  },
  'DELETE /api/library': (req: Request, res: Response) => {
    res.status(200).send();
  },
  'GET /api/library/:id': (req: Request, res: Response) => {
    res.status(200).send({
      id: 'e894fef9-edd1-4408-a85c-8f34cf7a9f35',
      createDate: '1976-12-29 06:48:34',
      updateDate: '2022-03-18 22:57:51',
      libraryName: '走家业',
      libraryDescription:
        '酸斗必或节公然华期几八斗见。影响教听海分但行中军表片没马半局。认名西过展于准者装气再子打置。么上最往空都快我作断了属任说事。只命必少光领它行该直管当油将第。',
      libraryParentId: '8de86178-DDd3-c16E-7756-Ab22EDDCbcd8',
      libraryOwnerId: '412684C2-BA69-d5b7-5c14-A198f4b9B2Ee',
    });
  },
  'GET /api/library': (req: Request, res: Response) => {
    let query = req.query as API.selectLibraryParams;
    let page = query.page;
    let size = query.size;
    if (page === '1' && size === '10') {
      res.status(200).send({
        current: 1,
        pageSize: 10,
        total: 26,
        list: [
          {
            id: '026a0e3c-dc45-444e-9ffd-424cb6fe48a5',
            createDate: '2004-03-06 18:23:15',
            updateDate: '2004-11-01 01:14:31',
            libraryName: '市示意度四线',
            libraryDescription:
              '五属很压传族已容会特别等交将始原作。长美前然选者府火却十人四则品。界断采断段写律因光南也两。重点眼联非真们先量连光商它片分上住。家导列保照水红所老同持维半合热相七。',
            libraryParentId: '',
            libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
          },
          {
            id: '047a1d10-46c9-4ab0-baf6-4674675db593',
            createDate: '1983-07-25 09:51:52',
            updateDate: '1994-12-19 00:52:10',
            libraryName: '见合行许性',
            libraryDescription:
              '清维式没都路热划连无且之然用。回段形无持时处即局拉平身思。想一发规阶什小务形极政口色示并。交高多小意管据业看清办连的米。活以多府回率红究时积志便治这或带。品月十民开越矿般往书布电别铁六。',
            libraryParentId: '',
            libraryOwnerId: 'dDbfcb52-B7fF-9A60-Fbcc-daC5fBbdBa64',
          },
          {
            id: '0818cc2e-536c-4400-9e08-f91ecebbd967',
            createDate: '2021-03-15 01:48:18',
            updateDate: '1978-08-11 06:50:22',
            libraryName: '半什国传电',
            libraryDescription:
              '厂厂龙十拉大全流土及分精八院王算。单光月前空劳龙高律器长便一满究。出越思要列素几国论本重公人亲。交八拉听对议劳但可次性样。',
            libraryParentId: '',
            libraryOwnerId: '7F3632ef-d7Dc-5DFe-45Ac-4F4cFD8E7aD5',
          },
          {
            id: '143e7ae6-0e23-49cb-b8f9-4a2e53c7fbfc',
            createDate: '2022-03-18 18:55:54',
            updateDate: '2022-03-18 18:55:54',
            libraryName: '王社社提清入',
            libraryDescription:
              '直体看新容定物江着生张则委即器基。南比空记易江际始断问样划改样低。手空物象压机易话话离济以等众过。面给定理音被她却感治价划以干白。用具件记斯技加规须关四满。江化育例近给公意整关系立任时上。',
            libraryParentId: 'e8AfCA1A-42B1-e51B-8c7f-4982fC14D8bd',
            libraryOwnerId: '5bAAAba7-12e1-f2d6-658d-5683B3FAC121',
          },
          {
            id: '18750512-9701-4b21-85a7-bf8f84da4866',
            createDate: '2022-03-18 15:52:27',
            updateDate: '2022-03-18 15:52:27',
            libraryName: '养格非通过识',
            libraryDescription:
              '查动八由事百府不重对他气八带前。铁年低切民条指术争住为究。看物场队国容原张日们四电声来团强建。则族往切民集铁美养快力并比如国解花相。总准物金革克织连则支心革结采线或机。',
            libraryParentId: 'c465f42A-F127-Bc48-21b9-9d1dF9deA3c6',
            libraryOwnerId: '2CcDeA11-BCaC-4c67-465D-D2DBCc36CAA8',
          },
          {
            id: '1c8fa5a2-a843-409a-a0d8-5c54784eb774',
            createDate: '2008-01-10 00:17:25',
            updateDate: '2001-12-18 05:28:56',
            libraryName: '可准确无建建则',
            libraryDescription:
              '内什开美细动加反可称交他例。法口平日头国复东用并论品。地指六较划因切手统圆而接华实务它民。生着了政十场万华提收派全强然林声七史。马只次保术一展决取因北酸高场验术技委。',
            libraryParentId: '',
            libraryOwnerId: 'c53bA5B3-f286-2eBf-8A7E-2B7E7Aff1b2A',
          },
          {
            id: '2219df67-01bf-4b52-81aa-17115b1df1f7',
            createDate: '2007-08-14 14:05:39',
            updateDate: '1995-10-23 08:58:23',
            libraryName: '根业料消共多',
            libraryDescription:
              '称存你群照论物社九当变被决必知运统。专有性量铁划相建六开研确为系。加头周用使她油料家教主身当眼她。',
            libraryParentId: '',
            libraryOwnerId: '2333dbED-5EA8-7C7B-BBe5-cA3780b33298',
          },
          {
            id: '22c022bf-2d65-4664-acb5-42f7868db2fd',
            createDate: '1980-09-06 17:27:24',
            updateDate: '1980-08-16 10:26:55',
            libraryName: '车六不观式及没',
            libraryDescription:
              '常律志业问线说都三关新广积指备不。三战道点战八究东对维观场相度。看机指图果面教的其劳取记团选且拉。一带车斗九龙打林路造重国志增起题海。',
            libraryParentId: '',
            libraryOwnerId: 'FE7d3e6b-6f4B-C3bE-eAe5-756d5ACB61A7',
          },
          {
            id: '37515669-307b-4c3a-9ac8-5d63238c30ec',
            createDate: '1997-04-06 06:36:56',
            updateDate: '1990-02-23 13:40:30',
            libraryName: '许般文清',
            libraryDescription:
              '构利拉日高参国断加而群石改。反三光打同适果两须号级后群住果利。至满步斗意实已安平平内心区作列。物权连属界十量员动特心效局建王。公步来行量八情价持复或集色里土。同土太见少观理是党具为但写大数亲。',
            libraryParentId: '',
            libraryOwnerId: 'd7BA02bB-b663-f483-fbDD-dBa1eE7ACA3c',
          },
          {
            id: '3b775f51-b3cb-4929-9110-05374d3ecab0',
            createDate: '2014-01-30 18:48:27',
            updateDate: '2010-04-13 18:54:18',
            libraryName: '名六根适消进型',
            libraryDescription:
              '南光全压打大义知西引安一究省地据数写。政走建教音头联只际安更更以步。是因布持体求重论价业天越江五即。',
            libraryParentId: '',
            libraryOwnerId: 'D27FD1f1-70d8-1b9E-Dc7e-4fccc8BbcCC7',
          },
        ],
      });
      return;
    } else if (page === '2' && size === '10') {
      res.status(200).send({
        current: 2,
        pageSize: 10,
        total: 26,
        list: [
          {
            id: '418ff65c-4b76-4213-ae9f-e3c3a0a1e8d2',
            createDate: '2004-07-17 23:56:15',
            updateDate: '1996-03-31 22:17:08',
            libraryName: '观治断连',
            libraryDescription:
              '定来事头增给者青即天相精果看热维。象这口取头步酸造作风率米叫素金。石化入局多直度角学问便南子划代原。好级很文开六石只等影较研。次员起组问土张张许系却代。',
            libraryParentId: '',
            libraryOwnerId: '5F933F2A-796e-Df9A-6455-FbA4A428D60d',
          },
          {
            id: '4b46026a-69d4-483e-b45c-a432b595ec28',
            createDate: '1983-03-12 23:46:57',
            updateDate: '2006-04-28 08:31:49',
            libraryName: '米层什毛问选',
            libraryDescription:
              '代受立电节最机量划看走保间运。米何才眼选后发大事全能主门级识平易。花六议办你千受管类做与命色查。角半为由组存往色千农离写离。候影广动就交处儿然儿手人又情交及。',
            libraryParentId: '',
            libraryOwnerId: 'D965F9e6-76F5-CAc8-83BD-4F429E4CC91c',
          },
          {
            id: '53420dc0-70a5-47fb-b00e-02a35f80919d',
            createDate: '2001-02-01 16:00:23',
            updateDate: '2014-01-13 21:46:40',
            libraryName: '选统适观干酸县',
            libraryDescription:
              '会但有况将子许叫车使验经。展家历查西采受程理日布形做合。叫效究国组理育好率林及个地需东都。而为即说统的再易受路样根式发许。专学风保列山由者向起道易育资省立。号议市价再想存时律发业响现志听起门特。离真县历就而广群据解了问和运起民务。',
            libraryParentId: '',
            libraryOwnerId: 'Cea2d9Ac-E978-0E3e-dded-59F369fF9CC6',
          },
          {
            id: '57b5622c-81c3-49a2-935a-1b73c200da30',
            createDate: '1990-11-28 18:43:27',
            updateDate: '1989-09-11 15:48:27',
            libraryName: '管历属说际能',
            libraryDescription:
              '清细增响比人立装白件选压。约十关往离通单增在持际技复。质性才金南打完识石万水克组但。行代研完技白果果样完需需全号半管低。石厂北都级群己火专身问才八定标速。',
            libraryParentId: '026a0e3c-dc45-444e-9ffd-424cb6fe48a5',
            libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
          },
          {
            id: '78ba4aed-3c9e-471a-b5de-ae721aaad9b9',
            createDate: '2019-05-07 16:13:28',
            updateDate: '1979-12-23 23:40:50',
            libraryName: '象写运装复头',
            libraryDescription:
              '她自正区铁非细发办济细重产五利要采。研线权准装多业什使思取准非做正一委下。接派路命划角决没各件论示气始些发区。离书色然万热何车族总听较指。还办流道众总科光立根养院平正什前问毛。运化广增光器劳西想种他商照才队技。',
            libraryParentId: '026a0e3c-dc45-444e-9ffd-424cb6fe48a5',
            libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
          },
          {
            id: '7b38b143-ac1e-4a98-9261-a2a820481723',
            createDate: '1988-12-05 19:11:10',
            updateDate: '2006-12-10 22:00:08',
            libraryName: '四方各东红',
            libraryDescription:
              '别式们代习速区拉看保品品具眼给土。结者各状就文角正文一为水上低。节立程在派金南月同支指下六实美。改矿只话西改以结连们强四体级接长阶。求新习学社专比半在八候数。白易车新传主写来程认七表子。',
            libraryParentId: '026a0e3c-dc45-444e-9ffd-424cb6fe48a5',
            libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
          },
          {
            id: '8bf13e92-35c7-40a3-acb4-efb52819f19a',
            createDate: '1997-08-10 07:54:08',
            updateDate: '1991-01-25 12:07:58',
            libraryName: '长变高拉',
            libraryDescription:
              '流二己群标约验示头完认约。性土组统原采严素比标元小白九华。已只起都值情斗五什调那它单本军天会。合下品应是七她江号志件进相即算。',
            libraryParentId: '047a1d10-46c9-4ab0-baf6-4674675db593',
            libraryOwnerId: 'dDbfcb52-B7fF-9A60-Fbcc-daC5fBbdBa64',
          },
          {
            id: '8d271533-8755-457f-bd7c-1650a4544a3a',
            createDate: '2004-07-31 05:23:14',
            updateDate: '2022-03-18 15:52:27',
            libraryName: '义分种物难七些',
            libraryDescription:
              '传红收运亲流你红感条少型给历阶。变毛此走基本增千基革土活热物民北。积七式元但期应色开识门明。样效选商事点石经容度山江科现区些。那克料称角个声往离电派号装需美斗。他入机打越报步工研我场况决其式两然什。',
            libraryParentId: '28f4dDdC-c5C1-7DC5-7653-E8862224d9EB',
            libraryOwnerId: 'dDbfcb52-B7fF-9A60-Fbcc-daC5fBbdBa64',
          },
          {
            id: '97304afc-91df-4ad5-a868-f2ef88e569ed',
            createDate: '1978-08-20 22:17:57',
            updateDate: '2018-01-25 07:49:15',
            libraryName: '听然严等',
            libraryDescription:
              '需济效记期论基响京道油要等。两我许列任转片拉局厂离做方酸业。便心此到效局车速片力二外张义。者手感律共王市论办社成习线调自天术平。电团往查变给往观完起在计亲自六。民高者议后向个往车况业和从发几查代。共除系连变规质商成后走出飞。',
            libraryParentId: '0818cc2e-536c-4400-9e08-f91ecebbd967',
            libraryOwnerId: '7F3632ef-d7Dc-5DFe-45Ac-4F4cFD8E7aD5',
          },
          {
            id: 'b3224f2f-d832-49a2-941b-7a9c8a5cd5db',
            createDate: '1982-03-19 23:24:42',
            updateDate: '2018-05-13 12:04:03',
            libraryName: '般果大业区一',
            libraryDescription:
              '市社比八白张般火明很老接满列安管组。果这号入低圆容气阶门离交值级消领。联消代火级空效内他阶品己二人日单任育。开设还取周与则清需及机低住做与。及价打照定半现律计经之非表积根使。',
            libraryParentId: '0818cc2e-536c-4400-9e08-f91ecebbd967',
            libraryOwnerId: '7F3632ef-d7Dc-5DFe-45Ac-4F4cFD8E7aD5',
          },
        ],
      });
      return;
    } else if (page === '3' && size === '10') {
      res.status(200).send({
        current: 3,
        pageSize: 10,
        total: 26,
        list: [
          {
            id: 'b4a952cd-1884-42fe-a3a9-9ee520a6cbe3',
            createDate: '1984-05-30 09:40:04',
            updateDate: '1981-06-23 15:35:27',
            libraryName: '小斗始治',
            libraryDescription:
              '包价大然约与历改光去学热还类约。看常五解价比放定江什世用精道。已值下基增越水音做议调队维形号连。果省日或较照程示大易米变还。影持电九形周应政拉叫越属。',
            libraryParentId: '0818cc2e-536c-4400-9e08-f91ecebbd967',
            libraryOwnerId: '7F3632ef-d7Dc-5DFe-45Ac-4F4cFD8E7aD5',
          },
          {
            id: 'c00b6cef-f4a0-4ce9-9560-8e92da658dad',
            createDate: '1995-02-16 21:38:45',
            updateDate: '2000-06-16 11:16:19',
            libraryName: '务你战院共',
            libraryDescription:
              '子毛技确还调角些步极厂列叫金党百。层种周公参太系术土务高照党观出圆进红。长构进还般感七热格除一太太此特。观该选石志眼边因报装按社什元西。千划区种细米部信观方深据共转府眼。',
            libraryParentId: '1c8fa5a2-a843-409a-a0d8-5c54784eb774',
            libraryOwnerId: 'c53bA5B3-f286-2eBf-8A7E-2B7E7Aff1b2A',
          },
          {
            id: 'ceeed7c2-4d9e-4b44-acb2-a20b6a28b7c1',
            createDate: '2004-10-17 19:15:30',
            updateDate: '2009-07-05 10:54:44',
            libraryName: '军正导花',
            libraryDescription:
              '称交备决情法标没安二和广。速类习上团领可己子们始适义务流取分建。布知工片江使期办产话标部极主又北百。',
            libraryParentId: '1c8fa5a2-a843-409a-a0d8-5c54784eb774',
            libraryOwnerId: 'c53bA5B3-f286-2eBf-8A7E-2B7E7Aff1b2A',
          },
          {
            id: 'd5f45a33-3131-4521-8a03-0ab7fdbd7722',
            createDate: '2016-10-12 23:39:08',
            updateDate: '2000-12-21 10:50:31',
            libraryName: '走长圆多',
            libraryDescription:
              '规民目则养万集五个史到色。圆口际深治总般空金实油几。律林却用色酸清确件具场百算治解反你。使华自改手西代须基维志手命。元流八改传带专强外界眼热名目则新种。阶基过如决局次江周何族因门性厂话。约效军边马口联却存子使再增参都。',
            libraryParentId: '2219df67-01bf-4b52-81aa-17115b1df1f7',
            libraryOwnerId: '2333dbED-5EA8-7C7B-BBe5-cA3780b33298',
          },
          {
            id: 'daac6c91-0e3f-405b-9c5f-3b28bf1a7160',
            createDate: '2009-05-04 01:45:45',
            updateDate: '1975-08-27 16:01:29',
            libraryName: '起率历却回族',
            libraryDescription:
              '局置本感连心对利切工信速。算由式战且如手调于度放器立设内向。热斯系率族走万手角代取十料义始取。林称人反织积育提划亲定单水。约利主满声第白角五类七气须看系备料。',
            libraryParentId: '2219df67-01bf-4b52-81aa-17115b1df1f7',
            libraryOwnerId: '2333dbED-5EA8-7C7B-BBe5-cA3780b33298',
          },
          {
            id: 'e894fef9-edd1-4408-a85c-8f34cf7a9f35',
            createDate: '1976-12-29 06:48:34',
            updateDate: '2022-03-18 22:57:51',
            libraryName: '走家业',
            libraryDescription:
              '酸斗必或节公然华期几八斗见。影响教听海分但行中军表片没马半局。认名西过展于准者装气再子打置。么上最往空都快我作断了属任说事。只命必少光领它行该直管当油将第。',
            libraryParentId: '8de86178-DDd3-c16E-7756-Ab22EDDCbcd8',
            libraryOwnerId: '412684C2-BA69-d5b7-5c14-A198f4b9B2Ee',
          },
        ],
      });
      return;
    } else if (page === '1' && size === '20') {
      res.status(200).send({
        current: 1,
        pageSize: 20,
        total: 26,
        list: [
          {
            id: '026a0e3c-dc45-444e-9ffd-424cb6fe48a5',
            createDate: '2004-03-06 18:23:15',
            updateDate: '2004-11-01 01:14:31',
            libraryName: '市示意度四线',
            libraryDescription:
              '五属很压传族已容会特别等交将始原作。长美前然选者府火却十人四则品。界断采断段写律因光南也两。重点眼联非真们先量连光商它片分上住。家导列保照水红所老同持维半合热相七。',
            libraryParentId: '',
            libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
          },
          {
            id: '047a1d10-46c9-4ab0-baf6-4674675db593',
            createDate: '1983-07-25 09:51:52',
            updateDate: '1994-12-19 00:52:10',
            libraryName: '见合行许性',
            libraryDescription:
              '清维式没都路热划连无且之然用。回段形无持时处即局拉平身思。想一发规阶什小务形极政口色示并。交高多小意管据业看清办连的米。活以多府回率红究时积志便治这或带。品月十民开越矿般往书布电别铁六。',
            libraryParentId: '',
            libraryOwnerId: 'dDbfcb52-B7fF-9A60-Fbcc-daC5fBbdBa64',
          },
          {
            id: '0818cc2e-536c-4400-9e08-f91ecebbd967',
            createDate: '2021-03-15 01:48:18',
            updateDate: '1978-08-11 06:50:22',
            libraryName: '半什国传电',
            libraryDescription:
              '厂厂龙十拉大全流土及分精八院王算。单光月前空劳龙高律器长便一满究。出越思要列素几国论本重公人亲。交八拉听对议劳但可次性样。',
            libraryParentId: '',
            libraryOwnerId: '7F3632ef-d7Dc-5DFe-45Ac-4F4cFD8E7aD5',
          },
          {
            id: '143e7ae6-0e23-49cb-b8f9-4a2e53c7fbfc',
            createDate: '2022-03-18 18:55:54',
            updateDate: '2022-03-18 18:55:54',
            libraryName: '王社社提清入',
            libraryDescription:
              '直体看新容定物江着生张则委即器基。南比空记易江际始断问样划改样低。手空物象压机易话话离济以等众过。面给定理音被她却感治价划以干白。用具件记斯技加规须关四满。江化育例近给公意整关系立任时上。',
            libraryParentId: 'e8AfCA1A-42B1-e51B-8c7f-4982fC14D8bd',
            libraryOwnerId: '5bAAAba7-12e1-f2d6-658d-5683B3FAC121',
          },
          {
            id: '18750512-9701-4b21-85a7-bf8f84da4866',
            createDate: '2022-03-18 15:52:27',
            updateDate: '2022-03-18 15:52:27',
            libraryName: '养格非通过识',
            libraryDescription:
              '查动八由事百府不重对他气八带前。铁年低切民条指术争住为究。看物场队国容原张日们四电声来团强建。则族往切民集铁美养快力并比如国解花相。总准物金革克织连则支心革结采线或机。',
            libraryParentId: 'c465f42A-F127-Bc48-21b9-9d1dF9deA3c6',
            libraryOwnerId: '2CcDeA11-BCaC-4c67-465D-D2DBCc36CAA8',
          },
          {
            id: '1c8fa5a2-a843-409a-a0d8-5c54784eb774',
            createDate: '2008-01-10 00:17:25',
            updateDate: '2001-12-18 05:28:56',
            libraryName: '可准确无建建则',
            libraryDescription:
              '内什开美细动加反可称交他例。法口平日头国复东用并论品。地指六较划因切手统圆而接华实务它民。生着了政十场万华提收派全强然林声七史。马只次保术一展决取因北酸高场验术技委。',
            libraryParentId: '',
            libraryOwnerId: 'c53bA5B3-f286-2eBf-8A7E-2B7E7Aff1b2A',
          },
          {
            id: '2219df67-01bf-4b52-81aa-17115b1df1f7',
            createDate: '2007-08-14 14:05:39',
            updateDate: '1995-10-23 08:58:23',
            libraryName: '根业料消共多',
            libraryDescription:
              '称存你群照论物社九当变被决必知运统。专有性量铁划相建六开研确为系。加头周用使她油料家教主身当眼她。',
            libraryParentId: '',
            libraryOwnerId: '2333dbED-5EA8-7C7B-BBe5-cA3780b33298',
          },
          {
            id: '22c022bf-2d65-4664-acb5-42f7868db2fd',
            createDate: '1980-09-06 17:27:24',
            updateDate: '1980-08-16 10:26:55',
            libraryName: '车六不观式及没',
            libraryDescription:
              '常律志业问线说都三关新广积指备不。三战道点战八究东对维观场相度。看机指图果面教的其劳取记团选且拉。一带车斗九龙打林路造重国志增起题海。',
            libraryParentId: '',
            libraryOwnerId: 'FE7d3e6b-6f4B-C3bE-eAe5-756d5ACB61A7',
          },
          {
            id: '37515669-307b-4c3a-9ac8-5d63238c30ec',
            createDate: '1997-04-06 06:36:56',
            updateDate: '1990-02-23 13:40:30',
            libraryName: '许般文清',
            libraryDescription:
              '构利拉日高参国断加而群石改。反三光打同适果两须号级后群住果利。至满步斗意实已安平平内心区作列。物权连属界十量员动特心效局建王。公步来行量八情价持复或集色里土。同土太见少观理是党具为但写大数亲。',
            libraryParentId: '',
            libraryOwnerId: 'd7BA02bB-b663-f483-fbDD-dBa1eE7ACA3c',
          },
          {
            id: '3b775f51-b3cb-4929-9110-05374d3ecab0',
            createDate: '2014-01-30 18:48:27',
            updateDate: '2010-04-13 18:54:18',
            libraryName: '名六根适消进型',
            libraryDescription:
              '南光全压打大义知西引安一究省地据数写。政走建教音头联只际安更更以步。是因布持体求重论价业天越江五即。',
            libraryParentId: '',
            libraryOwnerId: 'D27FD1f1-70d8-1b9E-Dc7e-4fccc8BbcCC7',
          },
          {
            id: '418ff65c-4b76-4213-ae9f-e3c3a0a1e8d2',
            createDate: '2004-07-17 23:56:15',
            updateDate: '1996-03-31 22:17:08',
            libraryName: '观治断连',
            libraryDescription:
              '定来事头增给者青即天相精果看热维。象这口取头步酸造作风率米叫素金。石化入局多直度角学问便南子划代原。好级很文开六石只等影较研。次员起组问土张张许系却代。',
            libraryParentId: '',
            libraryOwnerId: '5F933F2A-796e-Df9A-6455-FbA4A428D60d',
          },
          {
            id: '4b46026a-69d4-483e-b45c-a432b595ec28',
            createDate: '1983-03-12 23:46:57',
            updateDate: '2006-04-28 08:31:49',
            libraryName: '米层什毛问选',
            libraryDescription:
              '代受立电节最机量划看走保间运。米何才眼选后发大事全能主门级识平易。花六议办你千受管类做与命色查。角半为由组存往色千农离写离。候影广动就交处儿然儿手人又情交及。',
            libraryParentId: '',
            libraryOwnerId: 'D965F9e6-76F5-CAc8-83BD-4F429E4CC91c',
          },
          {
            id: '53420dc0-70a5-47fb-b00e-02a35f80919d',
            createDate: '2001-02-01 16:00:23',
            updateDate: '2014-01-13 21:46:40',
            libraryName: '选统适观干酸县',
            libraryDescription:
              '会但有况将子许叫车使验经。展家历查西采受程理日布形做合。叫效究国组理育好率林及个地需东都。而为即说统的再易受路样根式发许。专学风保列山由者向起道易育资省立。号议市价再想存时律发业响现志听起门特。离真县历就而广群据解了问和运起民务。',
            libraryParentId: '',
            libraryOwnerId: 'Cea2d9Ac-E978-0E3e-dded-59F369fF9CC6',
          },
          {
            id: '57b5622c-81c3-49a2-935a-1b73c200da30',
            createDate: '1990-11-28 18:43:27',
            updateDate: '1989-09-11 15:48:27',
            libraryName: '管历属说际能',
            libraryDescription:
              '清细增响比人立装白件选压。约十关往离通单增在持际技复。质性才金南打完识石万水克组但。行代研完技白果果样完需需全号半管低。石厂北都级群己火专身问才八定标速。',
            libraryParentId: '026a0e3c-dc45-444e-9ffd-424cb6fe48a5',
            libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
          },
          {
            id: '78ba4aed-3c9e-471a-b5de-ae721aaad9b9',
            createDate: '2019-05-07 16:13:28',
            updateDate: '1979-12-23 23:40:50',
            libraryName: '象写运装复头',
            libraryDescription:
              '她自正区铁非细发办济细重产五利要采。研线权准装多业什使思取准非做正一委下。接派路命划角决没各件论示气始些发区。离书色然万热何车族总听较指。还办流道众总科光立根养院平正什前问毛。运化广增光器劳西想种他商照才队技。',
            libraryParentId: '026a0e3c-dc45-444e-9ffd-424cb6fe48a5',
            libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
          },
          {
            id: '7b38b143-ac1e-4a98-9261-a2a820481723',
            createDate: '1988-12-05 19:11:10',
            updateDate: '2006-12-10 22:00:08',
            libraryName: '四方各东红',
            libraryDescription:
              '别式们代习速区拉看保品品具眼给土。结者各状就文角正文一为水上低。节立程在派金南月同支指下六实美。改矿只话西改以结连们强四体级接长阶。求新习学社专比半在八候数。白易车新传主写来程认七表子。',
            libraryParentId: '026a0e3c-dc45-444e-9ffd-424cb6fe48a5',
            libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
          },
          {
            id: '8bf13e92-35c7-40a3-acb4-efb52819f19a',
            createDate: '1997-08-10 07:54:08',
            updateDate: '1991-01-25 12:07:58',
            libraryName: '长变高拉',
            libraryDescription:
              '流二己群标约验示头完认约。性土组统原采严素比标元小白九华。已只起都值情斗五什调那它单本军天会。合下品应是七她江号志件进相即算。',
            libraryParentId: '047a1d10-46c9-4ab0-baf6-4674675db593',
            libraryOwnerId: 'dDbfcb52-B7fF-9A60-Fbcc-daC5fBbdBa64',
          },
          {
            id: '8d271533-8755-457f-bd7c-1650a4544a3a',
            createDate: '2004-07-31 05:23:14',
            updateDate: '2022-03-18 15:52:27',
            libraryName: '义分种物难七些',
            libraryDescription:
              '传红收运亲流你红感条少型给历阶。变毛此走基本增千基革土活热物民北。积七式元但期应色开识门明。样效选商事点石经容度山江科现区些。那克料称角个声往离电派号装需美斗。他入机打越报步工研我场况决其式两然什。',
            libraryParentId: '28f4dDdC-c5C1-7DC5-7653-E8862224d9EB',
            libraryOwnerId: 'dDbfcb52-B7fF-9A60-Fbcc-daC5fBbdBa64',
          },
          {
            id: '97304afc-91df-4ad5-a868-f2ef88e569ed',
            createDate: '1978-08-20 22:17:57',
            updateDate: '2018-01-25 07:49:15',
            libraryName: '听然严等',
            libraryDescription:
              '需济效记期论基响京道油要等。两我许列任转片拉局厂离做方酸业。便心此到效局车速片力二外张义。者手感律共王市论办社成习线调自天术平。电团往查变给往观完起在计亲自六。民高者议后向个往车况业和从发几查代。共除系连变规质商成后走出飞。',
            libraryParentId: '0818cc2e-536c-4400-9e08-f91ecebbd967',
            libraryOwnerId: '7F3632ef-d7Dc-5DFe-45Ac-4F4cFD8E7aD5',
          },
          {
            id: 'b3224f2f-d832-49a2-941b-7a9c8a5cd5db',
            createDate: '1982-03-19 23:24:42',
            updateDate: '2018-05-13 12:04:03',
            libraryName: '般果大业区一',
            libraryDescription:
              '市社比八白张般火明很老接满列安管组。果这号入低圆容气阶门离交值级消领。联消代火级空效内他阶品己二人日单任育。开设还取周与则清需及机低住做与。及价打照定半现律计经之非表积根使。',
            libraryParentId: '0818cc2e-536c-4400-9e08-f91ecebbd967',
            libraryOwnerId: '7F3632ef-d7Dc-5DFe-45Ac-4F4cFD8E7aD5',
          },
        ],
      });
      return;
    } else {
      res.status(404);
      return;
    }
  },
};
