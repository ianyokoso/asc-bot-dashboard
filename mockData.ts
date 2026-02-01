
import { Member, Track, Submission, SubmissionStatus } from './types';

// ✅ Python 스크립트로 추출한 실제 데이터 (Last Sync: 2026-02-01 00:01:58)
const REAL_DATA = {
  "members": [
    {
      "id": "2df6400e-9268-8028-8dbe-ef8246e90b85",
      "name": "정연우",
      "discordId": "1247448582101930040",
      "discordUsername": "dong_.chimi",
      "profileImage": "https://cdn.discordapp.com/avatars/1247448582101930040/daa87d555034e7ed81dbbab9317b00cc.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-807c-8701-d2dfa8c77dd2",
      "name": "윤사라",
      "discordId": "1456132328849149953",
      "discordUsername": "sara.mindplanet",
      "profileImage": "https://cdn.discordapp.com/avatars/1456132328849149953/672e298367e3ed264e8e109b50de8840.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "name": "양성열",
      "discordId": "1212351510290243616",
      "discordUsername": "_yang5071",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-80e6-a976-f62af164bfe3",
      "name": "진창용",
      "discordId": "863629308471803904",
      "discordUsername": "this8228",
      "profileImage": "https://cdn.discordapp.com/avatars/863629308471803904/893b638cc4dea781f448c4f81fe875cd.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8100-9d3e-d292c27a828c",
      "name": "박진우",
      "discordId": "514447872117309440",
      "discordUsername": "curt7379",
      "profileImage": "https://cdn.discordapp.com/avatars/514447872117309440/2f5f32e5d2428cafdeb11d7517004600.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8103-a0d8-e9245c086d4e",
      "name": "라피(AI쓰는한의사)",
      "discordId": "1089897274374627348",
      "discordUsername": "raphael.kr",
      "profileImage": "https://cdn.discordapp.com/avatars/1089897274374627348/86086adc524585ae037425bd4da97302.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8103-a397-e61faa69a0ec",
      "name": "지주현",
      "discordId": "1139529557301543012",
      "discordUsername": "corogbelri_73296",
      "profileImage": "https://cdn.discordapp.com/avatars/1139529557301543012/3626b5c3c65ea6e39cf9d952b6cf03d5.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8104-88cc-fb0b897698a4",
      "name": "조수빈",
      "discordId": "1330145052823126031",
      "discordUsername": "chorong2025_65465",
      "profileImage": "https://cdn.discordapp.com/avatars/1330145052823126031/0ea4ea4a9a7f496f3215f372a834c41e.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "name": "김강산",
      "discordId": "1339962409552711805",
      "discordUsername": "ai_marvis_31343",
      "profileImage": "https://cdn.discordapp.com/avatars/1339962409552711805/7ecc15293a31b905d568451daa62de13.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8106-a6b7-e2d39af8485d",
      "name": "양정화",
      "discordId": "807292789817737216",
      "discordUsername": "siltarre",
      "profileImage": "https://cdn.discordapp.com/avatars/807292789817737216/27342906efd20db50314e12735c06c3c.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8106-ab1f-cfc4b787b4a8",
      "name": "정창희",
      "discordId": "1430753799026507796",
      "discordUsername": "aieye2022",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8107-915c-df625d9e364f",
      "name": "이승재",
      "discordId": "805501999985590272",
      "discordUsername": "jai4762",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8108-9666-fbb3541d980d",
      "name": "이효진",
      "discordId": "1184081743117025362",
      "discordUsername": "jini_room",
      "profileImage": "https://cdn.discordapp.com/avatars/1184081743117025362/f705d79154479594f2050323e5f6a1cf.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8108-a308-f045a8dc9c18",
      "name": "염민지",
      "discordId": "1405150289228595261",
      "discordUsername": "rosayeom",
      "profileImage": "https://cdn.discordapp.com/avatars/1405150289228595261/efddc25b8ad91fa7a6d15ef4ec7c9a82.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8108-afa7-d8b34c7d6bd1",
      "name": "조현승",
      "discordId": "880397409262370857",
      "discordUsername": "bbuggumaen7296",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8109-bbe4-ea21d95278a3",
      "name": "조예도",
      "discordId": "1455790949144727595",
      "discordUsername": "yesdozozzy",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8112-9aff-ccc87d661968",
      "name": "김미란",
      "discordId": "1065037359072153750",
      "discordUsername": "mkim3089",
      "profileImage": "https://cdn.discordapp.com/avatars/1065037359072153750/147c2a81174086c56f9cb0ec374fbe4a.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8112-bffe-fb873f96503a",
      "name": "김정환",
      "discordId": "1100513913533120532",
      "discordUsername": "sleepingpain",
      "profileImage": "https://cdn.discordapp.com/avatars/1100513913533120532/d7de579f95a349efaa361580e9ec8834.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8114-a6ed-c7c89589c9d1",
      "name": "샤무스",
      "discordId": "1126851617686306919",
      "discordUsername": "s5amu5",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8115-9206-e5626c0ee5cd",
      "name": "박명희",
      "discordId": "998583129885384774",
      "discordUsername": "shaynapark3372",
      "profileImage": "https://cdn.discordapp.com/avatars/998583129885384774/2d87cacf670bc6cc5d0115a15a7e4a88.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8115-b45c-d6f367a7c18a",
      "name": "김성규",
      "discordId": "1183406208628035637",
      "discordUsername": "lapin_dev",
      "profileImage": "https://cdn.discordapp.com/avatars/1183406208628035637/58fa5287f27d02a74028337bd6d8e260.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8117-83e7-f1cbef8d39c1",
      "name": "김주희",
      "discordId": "1192681812640677979",
      "discordUsername": "ateudeog_41153",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8119-be32-df7389299fba",
      "name": "조인기",
      "discordId": "1152999518875435178",
      "discordUsername": "dudu_27718",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-811a-8a75-f5494a10b290",
      "name": "심소연",
      "discordId": "1128639639977201695",
      "discordUsername": "allright68",
      "profileImage": "https://cdn.discordapp.com/avatars/1128639639977201695/e9e26e64b1f30ba249ef908c1d0aa81c.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-811a-b586-f29eed3da458",
      "name": "안영준",
      "discordId": "809381480610529280",
      "discordUsername": "yeongjun9872",
      "profileImage": "https://cdn.discordapp.com/avatars/809381480610529280/6ed340cdf9d574f42058930cb691c522.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-811b-966b-dd8299203368",
      "name": "권예진",
      "discordId": "809094699700584479",
      "discordUsername": "hosu4873",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8121-b8e7-c990031cf8df",
      "name": "이지홍",
      "discordId": "1193822897622503457",
      "discordUsername": "hong_shifter",
      "profileImage": "https://cdn.discordapp.com/avatars/1193822897622503457/21b9142ee5fbc3320c198cb8664d5ca0.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8122-a07b-ec3f88ab36de",
      "name": "성보람",
      "discordId": "1405118493216477184",
      "discordUsername": "heijini001",
      "profileImage": "https://cdn.discordapp.com/avatars/1405118493216477184/7827397651e27cb480294ffc9b1c0d81.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8129-8d16-cdd1012c5003",
      "name": "고장혁",
      "discordId": "1405475165290364972",
      "discordUsername": "gojanghyeog_76249",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-812a-9082-e966d0d293ac",
      "name": "허재혁",
      "discordId": "926487567354970132",
      "discordUsername": "manyfast.io",
      "profileImage": "https://cdn.discordapp.com/guilds/1383082575500677142/users/926487567354970132/avatars/9eebf4d2b8c509f0f5a51a7651ed7276.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-812c-aaad-c59576604b61",
      "name": "임솔",
      "discordId": "1328793365894004736",
      "discordUsername": "ceongnyeonjangin_78689",
      "profileImage": "https://cdn.discordapp.com/avatars/1328793365894004736/8b0446aab9b210dbceb875e1da1a3693.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-812f-a8a5-efa051d245ef",
      "name": "김명현",
      "discordId": "1431582248716730469",
      "discordUsername": "yuhagan",
      "profileImage": "https://cdn.discordapp.com/avatars/1431582248716730469/c82b3fa769ed6e6ffdea579381ed5f5c.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8135-a31c-d965505143f6",
      "name": "박영솔",
      "discordId": "1116519077410779228",
      "discordUsername": "swlbear",
      "profileImage": "https://cdn.discordapp.com/avatars/1116519077410779228/83c3d88cece8d246cb9f5aa21e4f4c8f.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8137-8941-c3b05bd3ce53",
      "name": "신재식",
      "discordId": "875902056731381810",
      "discordUsername": "manggo9724",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8137-8f17-eb5bc07534eb",
      "name": "조상원",
      "discordId": "968078120513073214",
      "discordUsername": "sangwoncho",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8139-82c8-cb21321cba9c",
      "name": "김상원",
      "discordId": "1026078625189089280",
      "discordUsername": "nickwrkz",
      "profileImage": "https://cdn.discordapp.com/avatars/1026078625189089280/c75a68f4b88bc2a1cf3e9819fb6c53a0.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-813b-b01d-cdb8949fa238",
      "name": "김진홍",
      "discordId": "1395205209680121919",
      "discordUsername": "jinhong_jean",
      "profileImage": "https://cdn.discordapp.com/avatars/1395205209680121919/4184e50a5c1642093b0ad3adb0179827.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-813d-9e9c-e91524df32c6",
      "name": "김철이",
      "discordId": "1456100462045560907",
      "discordUsername": "hannahssi72",
      "profileImage": "https://cdn.discordapp.com/avatars/1456100462045560907/dfd7e8c90a3bba3e1147f7f6f8cc82c2.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-813e-8bd2-d50dcf0e78aa",
      "name": "박소연",
      "discordId": "1455750415504244979",
      "discordUsername": "_sonialab",
      "profileImage": "https://cdn.discordapp.com/avatars/1455750415504244979/1628fc11e7961d85181295493426b775.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-813f-882a-d066439e0ec2",
      "name": "김응신",
      "discordId": "900949181861101620",
      "discordUsername": "eungshin",
      "profileImage": "https://cdn.discordapp.com/avatars/900949181861101620/2dc5ff065e63a14486faee024d609abf.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-813f-8d44-dc27021b09e8",
      "name": "이재훈",
      "discordId": "1119134218073677894",
      "discordUsername": "jhun3163",
      "profileImage": "https://cdn.discordapp.com/avatars/1119134218073677894/c82b3fa769ed6e6ffdea579381ed5f5c.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8141-bfd2-c21b441f04da",
      "name": "유현미",
      "discordId": "1456573579327049838",
      "discordUsername": "riaayoo",
      "profileImage": "https://cdn.discordapp.com/avatars/1456573579327049838/c6fd99a54b57355632b4d4806e4a2b60.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8143-abc1-fec229daca1b",
      "name": "박형렬",
      "discordId": "977488874207084594",
      "discordUsername": "broheat86",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8144-afa9-c5ca1cea7d64",
      "name": "권세미",
      "discordId": "1389122521965662248",
      "discordUsername": "ssmikn818",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "name": "정병진",
      "discordId": "1435648110872236114",
      "discordUsername": "nyuseudaedi_40019",
      "profileImage": "https://cdn.discordapp.com/avatars/1435648110872236114/0588eee2b0d604f160aeb3b1629d39f1.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8146-9d11-eed95d59dfb4",
      "name": "윤채원",
      "discordId": "1043183992767258674",
      "discordUsername": "clarechwyoon",
      "profileImage": "https://cdn.discordapp.com/avatars/1043183992767258674/58d3906a140ce344854211a2b637e9ac.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8147-99a2-d7f74b94ccc8",
      "name": "이예지",
      "discordId": "920874518145286244",
      "discordUsername": "yl5254",
      "profileImage": "https://cdn.discordapp.com/avatars/920874518145286244/253b375f357803fe0af0ce59ae90419a.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "name": "임성규",
      "discordId": "1219146433081511947",
      "discordUsername": "bryon2030",
      "profileImage": "https://cdn.discordapp.com/avatars/1219146433081511947/4e22c528d161aa10e6b88f63aa1417b6.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-814b-918c-c5e32fc5804e",
      "name": "안영일",
      "discordId": "562511437029965847",
      "discordUsername": "doer2451",
      "profileImage": "https://cdn.discordapp.com/avatars/562511437029965847/68c1ecd57d218e0e80d40c081f6e7417.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-814f-b0d4-c563a8c55273",
      "name": "최민호",
      "discordId": "300949905994940418",
      "discordUsername": "ahahaaahhahahaha",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8150-8a39-c0c9053c64a5",
      "name": "전다원",
      "discordId": "1455751791646871697",
      "discordUsername": "jnjh12",
      "profileImage": "https://cdn.discordapp.com/avatars/1455751791646871697/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8150-b060-d7e281a7c073",
      "name": "김지훈",
      "discordId": "482614983239270402",
      "discordUsername": "cheese_som",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8152-9ed9-e2a2b06c7cb1",
      "name": "김호돈",
      "discordId": "350203158074621954",
      "discordUsername": "hodonkim",
      "profileImage": "https://cdn.discordapp.com/avatars/350203158074621954/0c6fde311fcf6aa05de554c201dfd4f0.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8154-b65e-dfbc5a8a1a61",
      "name": "신동찬",
      "discordId": "1227227718475579486",
      "discordUsername": "susu05426",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8156-acdc-db150eefc233",
      "name": "Shawn Park",
      "discordId": "1082616788396806194",
      "discordUsername": "ysore",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8157-ac58-e94fe0db76fb",
      "name": "서인근",
      "discordId": "1374699750778998834",
      "discordUsername": "ike0565",
      "profileImage": "https://cdn.discordapp.com/avatars/1374699750778998834/c945dd516dc753f895889545b020156c.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8159-b3d8-e1116d0b8b19",
      "name": "이종빈",
      "discordId": "1405147146784608330",
      "discordUsername": "jongb.in",
      "profileImage": "https://cdn.discordapp.com/avatars/1405147146784608330/6fe3736e4dfc59263c0b52de9898b2ab.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-815c-980f-fa0411c2f828",
      "name": "손정민",
      "discordId": "1443421933445054525",
      "discordUsername": "koko_69667",
      "profileImage": "https://cdn.discordapp.com/avatars/1443421933445054525/5ff98d258691f577b60b47edb3c4ed0c.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "name": "김영훈",
      "discordId": "440463702534258688",
      "discordUsername": "stevejobboo",
      "profileImage": "https://cdn.discordapp.com/avatars/440463702534258688/8075e31ad9cfaafec735509b81227027.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-815d-8a4c-ef3c64fc9b76",
      "name": "윤지아",
      "discordId": "1444237961842393122",
      "discordUsername": "yongyong05531",
      "profileImage": "https://cdn.discordapp.com/avatars/1444237961842393122/c82b3fa769ed6e6ffdea579381ed5f5c.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-815d-98bb-f551684ec223",
      "name": "김예린",
      "discordId": "1047314216052330577",
      "discordUsername": "jobmakers_",
      "profileImage": "https://cdn.discordapp.com/avatars/1047314216052330577/2e0612d7599bce12dfa3840e29557e56.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-815d-b85b-d798dd131387",
      "name": "천차돌",
      "discordId": "921939066088476723",
      "discordUsername": "ddangx2.",
      "profileImage": "https://cdn.discordapp.com/avatars/921939066088476723/b55a2a66a921a6d8c5de6c99ed5c8eff.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-815e-8f73-ed0122e92ca2",
      "name": "박서연",
      "discordId": "933708481729536051",
      "discordUsername": "yeonee9740",
      "profileImage": "https://cdn.discordapp.com/avatars/933708481729536051/7e82011057bf1e696c1f532d93ebbfec.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8163-9e2b-f84dcde69c5f",
      "name": "이소영",
      "discordId": "814301293736230942",
      "discordUsername": "gracedell_real",
      "profileImage": "https://cdn.discordapp.com/avatars/814301293736230942/bab2fd67a97739cdcd99552b51943f3b.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8164-adb9-c6849e98bfb3",
      "name": "김보람",
      "discordId": "839527567190130718",
      "discordUsername": "ellie_pm",
      "profileImage": "https://cdn.discordapp.com/avatars/839527567190130718/5257d0c7e32b46199f0ad8f16dc5306f.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8165-8377-de45ad07c543",
      "name": "변상민",
      "discordId": "1055485546509643816",
      "discordUsername": "byeonsangmin_benjamin",
      "profileImage": "https://cdn.discordapp.com/avatars/1055485546509643816/958881cb3e9b78fd7281d6aa0849b2ba.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8165-a8c9-dcefb992db2e",
      "name": "이세정",
      "discordId": "1029286158389215252",
      "discordUsername": "whynotblair",
      "profileImage": "https://cdn.discordapp.com/avatars/1029286158389215252/4a716afc6627585dd764c47a3bfe4a45.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8169-846d-ce04ade77650",
      "name": "서혜지",
      "discordId": "1354437755454750881",
      "discordUsername": "seohyeji.yh",
      "profileImage": "https://cdn.discordapp.com/avatars/1354437755454750881/1982c25c2ffe17289e937ba050593e3d.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8169-9c9a-d07a9bb198fd",
      "name": "서민원",
      "discordId": "159997886472388609",
      "discordUsername": "sinclairseo",
      "profileImage": "https://cdn.discordapp.com/avatars/159997886472388609/01a08a0d34ca6aeb4c8052e84d6c2166.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-816d-a4fb-cead3abdd765",
      "name": "박지원",
      "discordId": "1416665569221935204",
      "discordUsername": "kyuwonz",
      "profileImage": "https://cdn.discordapp.com/avatars/1416665569221935204/9e615b2d049f64a748303b029c6ff434.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8173-9c14-fe11dede91b1",
      "name": "이민재",
      "discordId": "657592860845146113",
      "discordUsername": "roopang2896",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8173-a3ea-f5a59d562d45",
      "name": "권고은",
      "discordId": "1016213968043376661",
      "discordUsername": "yulmu0664",
      "profileImage": "https://cdn.discordapp.com/avatars/1016213968043376661/e0740ea625b65c2d862890ded460b7ef.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8175-afc5-f65183fb569d",
      "name": "임채영",
      "discordId": "317288458810818561",
      "discordUsername": "cy3975",
      "profileImage": "https://cdn.discordapp.com/avatars/317288458810818561/c2e3aa934d25cf95b0c8ea83241ddbba.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8176-bdf2-d17d35de0783",
      "name": "이윤정",
      "discordId": "1226720512353239111",
      "discordUsername": "reyoo100",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-817f-8006-cc6b2816473d",
      "name": "정새미",
      "discordId": "1287674989213913139",
      "discordUsername": "saemijung",
      "profileImage": "https://cdn.discordapp.com/avatars/1287674989213913139/25c28ec7fc445e582f12c93034adf7a7.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8180-a0ab-f2ab326becf7",
      "name": "박현준",
      "discordId": "915962978879299635",
      "discordUsername": "woodie6437",
      "profileImage": "https://cdn.discordapp.com/avatars/915962978879299635/f345d7dc30cd3fdd03ace4853f91d88d.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8180-aa50-ed54cda0dbf4",
      "name": "한태봉",
      "discordId": "1179375324757241857",
      "discordUsername": "longinus1000",
      "profileImage": "https://cdn.discordapp.com/avatars/1179375324757241857/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "name": "조민석",
      "discordId": "439028788156825610",
      "discordUsername": "chomangani",
      "profileImage": "https://cdn.discordapp.com/avatars/439028788156825610/a910f6dd91f13e4ccfa02a5b3419699f.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8186-a8ba-d66d0774c9d9",
      "name": "이은택",
      "discordId": "1405116669935878196",
      "discordUsername": "elrendil_65027",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8187-8ee7-f0f795165475",
      "name": "민지선",
      "discordId": "1065866329082564678",
      "discordUsername": "minpro_61477",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8188-a616-ff7a66f4ef14",
      "name": "김서령",
      "discordId": "1232917695947603970",
      "discordUsername": "exuberant_seahorse_94632",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8188-b07b-d8bca73c9f7d",
      "name": "김기훈",
      "discordId": "584605040115843072",
      "discordUsername": "danduck.",
      "profileImage": "https://cdn.discordapp.com/avatars/584605040115843072/65c45f6e6ae234a74fc8365470df6605.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-818a-8309-e4e36d21488b",
      "name": "김효주",
      "discordId": "927756763149787216",
      "discordUsername": "hyosour_",
      "profileImage": "https://cdn.discordapp.com/avatars/927756763149787216/6302189844510198eaaab34347c17d39.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-818c-b3e3-edeacfb68bd5",
      "name": "문지호",
      "discordId": "1183736061977952343",
      "discordUsername": "saya_21742",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-818e-8326-e6cd63ecab42",
      "name": "송홍기",
      "discordId": "948234505737617469",
      "discordUsername": "ong9711",
      "profileImage": "https://cdn.discordapp.com/avatars/948234505737617469/f8322d1d0921e45fcf2f9588f77d4ebb.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-818e-bcfd-cb87b9a53831",
      "name": "최희재",
      "discordId": "776995360010403840",
      "discordUsername": "__heeze",
      "profileImage": "https://cdn.discordapp.com/avatars/776995360010403840/73e004e8b1080adb6507512765070f39.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-818f-bd5a-de00ad0aebd9",
      "name": "강정호",
      "discordId": "1270892788799504444",
      "discordUsername": "jeongho17384",
      "profileImage": "https://cdn.discordapp.com/avatars/1270892788799504444/602b1ffd87059f61155b00694a5b94ed.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8190-a674-cfff04fa9e58",
      "name": "장주선",
      "discordId": "749935285000994826",
      "discordUsername": "jason920_",
      "profileImage": "https://cdn.discordapp.com/avatars/749935285000994826/b282fbd17f508a978e4079c839c74080.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8194-9dba-e37fcc5aaa4f",
      "name": "Jason",
      "discordId": "1392843626786328696",
      "discordUsername": "jason_84134",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8195-a4a2-f00355c27e81",
      "name": "류석",
      "discordId": "467905824920961036",
      "discordUsername": "luu_biquitous",
      "profileImage": "https://cdn.discordapp.com/avatars/467905824920961036/5ce3fd097bbed8115b43ba4d911c08c3.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8197-b9e2-f86b8440fc47",
      "name": "손한승",
      "discordId": "1392755508498403488",
      "discordUsername": "sonhanseung_43671",
      "profileImage": "https://cdn.discordapp.com/avatars/1392755508498403488/c3b27241299ecf081845b47ed28480e8.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8198-a241-c89bdcc70956",
      "name": "배효진",
      "discordId": "1416782927924301844",
      "discordUsername": "hyojinbae",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-8199-9968-e841144cd05e",
      "name": "송경연",
      "discordId": "454468118153265174",
      "discordUsername": "trinity2876",
      "profileImage": "https://cdn.discordapp.com/avatars/454468118153265174/b837174f8054d8346be8ab06cdb350c6.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-819a-8f4f-f330a653f7ea",
      "name": "오지나",
      "discordId": "1377473439828283463",
      "discordUsername": "jina.aa",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-819c-b648-ca5b145462c5",
      "name": "배정규",
      "discordId": "875215383546699886",
      "discordUsername": "eric_seizer",
      "profileImage": "https://cdn.discordapp.com/avatars/875215383546699886/059c6cbfe0a4c2e54beef282424546d6.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-819d-88e9-d4779a5f1f87",
      "name": "정경덕",
      "discordId": "1073777072176107530",
      "discordUsername": "joyjung73",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-819d-8c06-ee8ba7f42bcc",
      "name": "안경희",
      "discordId": "1427199894778810368",
      "discordUsername": "monday_mimi",
      "profileImage": "https://cdn.discordapp.com/avatars/1427199894778810368/563192f17c9acbb5ea5dac8fa3e1e3c6.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81a1-b9a1-da8bcdf7dbbb",
      "name": "손수민",
      "discordId": "1405117672894500948",
      "discordUsername": "soom._.inc",
      "profileImage": "https://cdn.discordapp.com/avatars/1405117672894500948/f2bb917866be25d5d58c6a18cc8f758e.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81a2-9270-ebe22111bc3f",
      "name": "윤대로",
      "discordId": "1430552667297681431",
      "discordUsername": "caleb.yoon",
      "profileImage": "https://cdn.discordapp.com/avatars/1430552667297681431/993f1d5a01d37fc8b05da9b3789cd3e1.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81a2-b5d9-cd59c87a32f7",
      "name": "이재만",
      "discordId": "1407983233118765106",
      "discordUsername": "aisyncclub",
      "profileImage": "https://cdn.discordapp.com/guilds/1383082575500677142/users/1407983233118765106/avatars/002640d4b1c1df2b8937f3ddf982edac.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81a3-837c-ccea7d7f54c6",
      "name": "이가윤",
      "discordId": "927415118097174569",
      "discordUsername": "igayun.",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81a8-b99f-d5dd37834c11",
      "name": "권서림",
      "discordId": "1136915916093927434",
      "discordUsername": "ksrimee",
      "profileImage": "https://cdn.discordapp.com/avatars/1136915916093927434/9ac5b374a85ccad59f8ae4292722560f.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81ab-b236-e695df448e47",
      "name": "김솔",
      "discordId": "755082333442277447",
      "discordUsername": "solsol5853",
      "profileImage": "https://cdn.discordapp.com/avatars/755082333442277447/06e197e194f977e2505436be9e831b31.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81ad-9df0-d734f9d3fa17",
      "name": "김연진",
      "discordId": "1120557173479571467",
      "discordUsername": "tremendous_k",
      "profileImage": "https://cdn.discordapp.com/avatars/1120557173479571467/412da3d92f488a6485b1b1894ccb8a87.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81b0-8550-de5e956fa37c",
      "name": "김은정",
      "discordId": "1455898239349035079",
      "discordUsername": "elinkim0797",
      "profileImage": "https://cdn.discordapp.com/avatars/1455898239349035079/0bdb333a120f1f02609ed9a6ded64b72.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81b3-9797-fa4a062b6159",
      "name": "박광수",
      "discordId": "1443616439163420745",
      "discordUsername": "bulog_kr",
      "profileImage": "https://cdn.discordapp.com/avatars/1443616439163420745/d6ca21ef0882ecd65c9a69fd90428dba.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81b8-a720-e96e913c55d0",
      "name": "이창수",
      "discordId": "416265870516551692",
      "discordUsername": "dennisjr1004",
      "profileImage": "https://cdn.discordapp.com/avatars/416265870516551692/b601be7cf8088f3e20f4b8937875ba93.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81ba-b9d7-cf2c04581567",
      "name": "김정민",
      "discordId": "1444237962924527750",
      "discordUsername": "markkim0121",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81bb-8ca2-d743c555447d",
      "name": "홍상훈",
      "discordId": "1394204263814795306",
      "discordUsername": "marvin_hong",
      "profileImage": "https://cdn.discordapp.com/avatars/1394204263814795306/829509ef92923b35758bade12617e0f3.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81bb-a643-e437acbb4e68",
      "name": "서청원",
      "discordId": "556325040883367938",
      "discordUsername": "kyleseo",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81bb-a9e6-c6f993f6e0a3",
      "name": "이지은",
      "discordId": "897413673834930197",
      "discordUsername": "jieun_1lab",
      "profileImage": "https://cdn.discordapp.com/avatars/897413673834930197/2d1fa9ecf4a45fbbd4d493536e36c162.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81bd-ad1d-f7d291b1743b",
      "name": "양희정",
      "discordId": "1426147820364234805",
      "discordUsername": "channelswan",
      "profileImage": "https://cdn.discordapp.com/avatars/1426147820364234805/a6767e41e8ef350657899500624a54f9.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "name": "백지요",
      "discordId": "934795495853944872",
      "discordUsername": "jyojyo8478",
      "profileImage": "https://cdn.discordapp.com/avatars/934795495853944872/00a29ae694074646dd004626c47aef0b.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81be-b2a4-e68c5fae9fe0",
      "name": "방재민",
      "discordId": "849530733164494859",
      "discordUsername": "roomjaemin",
      "profileImage": "https://cdn.discordapp.com/avatars/849530733164494859/b5b6d44746481ecf5ce023c660655341.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81c5-b32d-d8330f5f9f1e",
      "name": "한나린",
      "discordId": "1281872752835559477",
      "discordUsername": "meoci_88116",
      "profileImage": "https://cdn.discordapp.com/avatars/1281872752835559477/1618025229f820798d7ea8b806e0487f.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "name": "김라미",
      "discordId": "791892285351526430",
      "discordUsername": "soulmagics_lamie",
      "profileImage": "https://cdn.discordapp.com/avatars/791892285351526430/3d4f107dab2abbb81269d0af15960de9.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81c7-a487-f94ece8a83e8",
      "name": "이종석",
      "discordId": "634719627213144065",
      "discordUsername": "aiclub",
      "profileImage": "https://cdn.discordapp.com/avatars/634719627213144065/c80473675370015533b3831a4dbaf5a2.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81d0-af42-cb28cfb82d5c",
      "name": "하이서",
      "discordId": "1190249303613124689",
      "discordUsername": "iseo_05209",
      "profileImage": "https://cdn.discordapp.com/avatars/1190249303613124689/2faec427fde728eb9cfef1a7139d1e3e.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81d6-9901-ce6520aefbf2",
      "name": "김유나",
      "discordId": "1272113241321111562",
      "discordUsername": "rani_24",
      "profileImage": "https://cdn.discordapp.com/avatars/1272113241321111562/8a56b581d41424f18a722eecefefc8ed.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81d7-91b5-d83cb15b5aa1",
      "name": "임지은",
      "discordId": "930733717188661279",
      "discordUsername": "imjieun90",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81dc-8353-fb31cbfb5057",
      "name": "여현정",
      "discordId": "1390344656885121066",
      "discordUsername": "susususu2000_75971",
      "profileImage": "https://cdn.discordapp.com/avatars/1390344656885121066/871ab779c97fde66935d48d5710d26ec.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81dc-bb50-f8382c60947e",
      "name": "김영태",
      "discordId": "1405133051540934705",
      "discordUsername": "gureumhyanggi",
      "profileImage": "https://cdn.discordapp.com/avatars/1405133051540934705/c82b3fa769ed6e6ffdea579381ed5f5c.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81dd-8ba5-d5bb9cad68ac",
      "name": "추성훈",
      "discordId": "411542077508157440",
      "discordUsername": "eddychu.",
      "profileImage": "https://cdn.discordapp.com/avatars/411542077508157440/8f29cb9eecb1b444ea20495467f18a7f.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81e0-8b9a-ec79b7a9c8ff",
      "name": "서유상",
      "discordId": "937608136318144543",
      "discordUsername": "xena2022.",
      "profileImage": "https://cdn.discordapp.com/avatars/937608136318144543/d9dce2b10cbe6acb13148cf17e667d2a.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81e1-9cd6-d0632ca3771a",
      "name": "정준모",
      "discordId": "1330533825754955898",
      "discordUsername": "junemoejeong",
      "profileImage": "https://cdn.discordapp.com/avatars/1330533825754955898/157e517cdbf371a47aaead44675714a3.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "name": "정지용",
      "discordId": "305865661148692481",
      "discordUsername": "jiyong9038",
      "profileImage": "https://cdn.discordapp.com/avatars/305865661148692481/7b48b4fc10e81c238cf966e2a156b92c.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81e1-bd98-e20c158c9e9a",
      "name": "김경수",
      "discordId": "398033642070212609",
      "discordUsername": "gang_0968",
      "profileImage": "https://cdn.discordapp.com/avatars/398033642070212609/911f5a532992be72d05d35ed5420fec0.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81e2-99de-cbc33a4cde1d",
      "name": "조대진",
      "discordId": "1444078504919695412",
      "discordUsername": "yulpapa2253",
      "profileImage": "https://cdn.discordapp.com/avatars/1444078504919695412/f7f2e9361e8a54ce6e72580ac7b967af.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81e2-acb0-dc3b313e7a1e",
      "name": "김태화",
      "discordId": "1091993339286540309",
      "discordUsername": "bbachinco",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81e4-8b03-faeb8d810832",
      "name": "임소연",
      "discordId": "1118787928949264494",
      "discordUsername": "yeon_coach",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81e8-9236-ef4ee9ae9d1e",
      "name": "장동원",
      "discordId": "1405245484041502871",
      "discordUsername": "jiocom357",
      "profileImage": "https://cdn.discordapp.com/avatars/1405245484041502871/c82b3fa769ed6e6ffdea579381ed5f5c.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "name": "이진아",
      "discordId": "1295735487121588315",
      "discordUsername": "jinhwa_leeja",
      "profileImage": "https://cdn.discordapp.com/avatars/1295735487121588315/19c3519b5b8b24c12f6e42bd5f04a0b6.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81ed-94c2-d6ffba89cbdb",
      "name": "전수린",
      "discordId": "949180718842535966",
      "discordUsername": "ringring_9999",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81ed-a523-e46ee7043bc8",
      "name": "이은임",
      "discordId": "1455788498341597257",
      "discordUsername": "debi01740",
      "profileImage": "https://cdn.discordapp.com/avatars/1455788498341597257/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81ef-a316-e89637aada08",
      "name": "김강민",
      "discordId": "528526853204344842",
      "discordUsername": "kimgangmin5512",
      "profileImage": "https://cdn.discordapp.com/avatars/528526853204344842/b17807ed642f3c3e608b02dea31cac02.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81f1-9773-cd29ce6fdd17",
      "name": "이충우",
      "discordId": "840589349409259572",
      "discordUsername": "caleb20507206",
      "profileImage": "https://cdn.discordapp.com/avatars/840589349409259572/2d6079bb67a6564c2d76b254771ec311.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81f1-aa1e-f7250a0d3470",
      "name": "박경민",
      "discordId": "1353615695488749630",
      "discordUsername": "kyungmin_2192",
      "profileImage": "https://cdn.discordapp.com/avatars/1353615695488749630/48a671e10861890ee06b2f8546c4b6e7.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81f5-a59d-c8053de08912",
      "name": "이의령",
      "discordId": "793657020040478750",
      "discordUsername": "wooridle4204",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81f6-9507-d75167c2a27d",
      "name": "최민수",
      "discordId": "1405136195083829260",
      "discordUsername": "heeyeoljagi",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81f6-a1c4-fc2ae1189e78",
      "name": "김재승",
      "discordId": "1150452666456096770",
      "discordUsername": "martdealer",
      "profileImage": "https://cdn.discordapp.com/avatars/1150452666456096770/5844db1b7682e32507abbd0d2c87ae77.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81f6-a63a-cbd78db0929e",
      "name": "이상엽",
      "discordId": "505665905166909451",
      "discordUsername": "isangyeob0125",
      "profileImage": "https://cdn.discordapp.com/avatars/505665905166909451/4a191422abffc19e97c1d7a49354a628.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81f6-bc9b-ce448a37b324",
      "name": "이동범",
      "discordId": "262645433602408449",
      "discordUsername": "jeongjeomri",
      "profileImage": "https://cdn.discordapp.com/avatars/262645433602408449/6f5d0f30202b8e6318bd0d3c67a13e2b.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "name": "이종원",
      "discordId": "892518381536825344",
      "discordUsername": "suria_24",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81f9-af19-ee0ca559d657",
      "name": "강로하",
      "discordId": "1432178934665056396",
      "discordUsername": "atopineunmongro_36334",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81f9-bfa4-ee76f81f5df4",
      "name": "현상협",
      "discordId": "1110916493354475540",
      "discordUsername": "barefoot_wade",
      "profileImage": "https://cdn.discordapp.com/avatars/1110916493354475540/8d33e80be538dba6dfe48ba7b690afd9.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81fb-a858-f85bf94a0b93",
      "name": "권기룡",
      "discordId": "1383427919678013545",
      "discordUsername": "dobongsantekeumaen_52308",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81fc-b8e2-eb7357b57d7b",
      "name": "최민지",
      "discordId": "948597740529651802",
      "discordUsername": "eunoia.c",
      "profileImage": "https://cdn.discordapp.com/avatars/948597740529651802/a90b2dc888aa8759c28d53cd840db217.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2df6400e-9268-81ff-9f12-c3b31a1345d3",
      "name": "박준서",
      "discordId": "1455777260844875877",
      "discordUsername": "bepeoplemaker",
      "profileImage": "https://cdn.discordapp.com/avatars/1455777260844875877/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-05",
      "notionSync": true
    },
    {
      "id": "2f76400e-9268-8036-93b7-f47a8785b250",
      "name": null,
      "discordId": "Unknown",
      "discordUsername": "Unknown",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-8102-b35c-e7d77ad33e0a",
      "name": "고드",
      "discordId": "1444311757978996830",
      "discordUsername": "godeu_91459",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-8104-b74d-e59cf43b5945",
      "name": "이은지/5기",
      "discordId": "763294880503037953",
      "discordUsername": "ariel__ariel",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-8111-8c44-c0fdc83f622e",
      "name": "pottatv",
      "discordId": "1381554445959303250",
      "discordUsername": "redjade0512",
      "profileImage": "https://cdn.discordapp.com/avatars/1381554445959303250/1628fc11e7961d85181295493426b775.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-8161-88c6-cd40c2b45746",
      "name": "강성규/성구/빌더코치",
      "discordId": "1339978721859338333",
      "discordUsername": "seonggoos",
      "profileImage": "https://cdn.discordapp.com/avatars/1339978721859338333/5e423d564522282b2e53b18edc6cb5f0.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-8173-986a-c03ebc67eb19",
      "name": "채영",
      "discordId": "1309502559492509716",
      "discordUsername": "caeyeong_36655",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-8174-bc66-df8040bf47c7",
      "name": "MK",
      "discordId": "1455772215244230815",
      "discordUsername": "exuberant_cheetah_30676",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-817d-9772-c9d8dfddd69a",
      "name": "파묵",
      "discordId": "1306527505322217497",
      "discordUsername": "ghoiibaad",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-8188-b2a2-c0232b089a58",
      "name": "구름향기",
      "discordId": "1405134129187520623",
      "discordUsername": "gureumhyanggi_68748",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-81b3-b58d-c5d2d25d4a97",
      "name": "리아 : )",
      "discordId": "1456571880419889313",
      "discordUsername": "energetic_peacock_80390",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "name": "이안/부운영자",
      "discordId": "1392850552416768072",
      "discordUsername": "ian_61591",
      "profileImage": "https://cdn.discordapp.com/avatars/1392850552416768072/122eae3283396e88bc34f4ed81d62715.png?size=1024",
      "tracks": [
        "Shortform",
        "Longform",
        "Builder Basic",
        "Builder Advanced",
        "Sales",
        "AI Agent"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-81d7-a92c-f3594d2bbf87",
      "name": "MDM/찬섭/세일즈코치",
      "discordId": "1379321132636704880",
      "discordUsername": "mdmstudio",
      "profileImage": "https://cdn.discordapp.com/avatars/1379321132636704880/3556ef17c9f8507517a0435ea051d881.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-81db-b57a-e5ffc23c1534",
      "name": "Mkkim",
      "discordId": "1455789446564675685",
      "discordUsername": "mkkim0770",
      "profileImage": "https://cdn.discordapp.com/avatars/1455789446564675685/e027f0247161cc58474198c759a698c2.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-81e4-af14-f99e5837b069",
      "name": "조쉬/운영자",
      "discordId": "803843372392382504",
      "discordUsername": "joshproductletter",
      "profileImage": "https://cdn.discordapp.com/avatars/803843372392382504/4505f2da1f0767f322c726185363f666.png?size=1024",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-81e7-afbb-dce5b4e27742",
      "name": "yoon",
      "discordId": "1430509058619736176",
      "discordUsername": "yoon_98929",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-81e9-aa65-c52cd8261723",
      "name": "지미",
      "discordId": "1430514544693874759",
      "discordUsername": "jimi_78850",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-81ed-9d64-f334b75999ec",
      "name": "엘린",
      "discordId": "1455896535064776714",
      "discordUsername": "elrin_64155",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "name": "송재근/쟉비스/6기",
      "discordId": "1466756902393352233",
      "discordUsername": "jakvis_",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    },
    {
      "id": "2f96400e-9268-81ff-8dc2-e171b23449a3",
      "name": "대빵쉐프",
      "discordId": "1457334641970384946",
      "discordUsername": "daebbangswepeu_66957",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-31",
      "notionSync": true
    }
  ],
  "submissions": [
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://www.linkdn.com/asdjklasjdklads"
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://www.linkdn.com/asdjklasjdklads"
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://www.linkdn.com/asdjklasjdklads"
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://www.linkdn.com/asdjklasjdklads"
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://www.linkdn.com/asdjklasjdklads"
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-01-31",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ian.yokoso/post/asdklasdjlkasd"
    }
  ],
  "lastUpdated": "2026-02-01T00:01:58.691991"
};

export const mockMembers: Member[] = REAL_DATA.members.map(m => ({
  ...m,
  track: m.track as Track,
  tracks: m.tracks ? m.tracks.map((t: string) => t as Track) : [m.track as Track]
}));

export const generateSubmissions = (): Submission[] => {
    return REAL_DATA.submissions.map(s => ({
        ...s,
        status: s.status as SubmissionStatus,
        tracks: s.tracks ? s.tracks.map((t: string) => t as Track) : undefined,
        link: s.link || undefined
    }));
};
