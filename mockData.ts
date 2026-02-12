
import { Member, Track, Submission, SubmissionStatus } from './types';

// ✅ Python 스크립트로 추출한 실제 데이터 (Last Sync: 2026-02-12 18:38:03)
const REAL_DATA = {
  "members": [
    {
      "id": "2df6400e-9268-8028-8dbe-ef8246e90b85",
      "name": "정연우",
      "discordId": "1247448582101930040",
      "discordUsername": "dong_.chimi",
      "discordNickname": "5기/ 똑사장 연우",
      "profileImage": "https://cdn.discordapp.com/avatars/1247448582101930040/daa87d555034e7ed81dbbab9317b00cc.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:47:00.000Z"
    },
    {
      "id": "2df6400e-9268-807c-8701-d2dfa8c77dd2",
      "name": "윤사라",
      "discordId": "1456132328849149953",
      "discordUsername": "sara.mindplanet",
      "discordNickname": "윤사라/하기로/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1456132328849149953/672e298367e3ed264e8e109b50de8840.png?size=1024",
      "tracks": [
        "Sales"
      ],
      "track": "Sales",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:49:00.000Z"
    },
    {
      "id": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "name": "양성열",
      "discordId": "1212351510290243616",
      "discordUsername": "_yang5071",
      "discordNickname": "양성열 / 5기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "Builder Advanced",
        "Shortform"
      ],
      "track": "Builder Advanced",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:46:00.000Z"
    },
    {
      "id": "2df6400e-9268-80e6-a976-f62af164bfe3",
      "name": "진창용",
      "discordId": "863629308471803904",
      "discordUsername": "this8228",
      "discordNickname": "진창용/꾸머/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/863629308471803904/893b638cc4dea781f448c4f81fe875cd.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Advanced"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:50:00.000Z"
    },
    {
      "id": "2df6400e-9268-8100-9d3e-d292c27a828c",
      "name": "박진우",
      "discordId": "514447872117309440",
      "discordUsername": "curt7379",
      "discordNickname": "박진우/Curt/2기",
      "profileImage": "https://cdn.discordapp.com/avatars/514447872117309440/2f5f32e5d2428cafdeb11d7517004600.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8103-a0d8-e9245c086d4e",
      "name": "라피(AI쓰는한의사)",
      "discordId": "1089897274374627348",
      "discordUsername": "raphael.kr",
      "discordNickname": "AI깎는한의사 라피/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1089897274374627348/86086adc524585ae037425bd4da97302.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8103-a397-e61faa69a0ec",
      "name": "지주현",
      "discordId": "1139529557301543012",
      "discordUsername": "corogbelri_73296",
      "discordNickname": "지주현/초록벨리/3기",
      "profileImage": "https://cdn.discordapp.com/avatars/1139529557301543012/3626b5c3c65ea6e39cf9d952b6cf03d5.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8104-88cc-fb0b897698a4",
      "name": "조수빈",
      "discordId": "1330145052823126031",
      "discordUsername": "chorong2025_65465",
      "discordNickname": "조수빈",
      "profileImage": "https://cdn.discordapp.com/avatars/1330145052823126031/0ea4ea4a9a7f496f3215f372a834c41e.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "name": "김강산",
      "discordId": "1339962409552711805",
      "discordUsername": "ai_marvis_31343",
      "discordNickname": "김강산/마비스/3기",
      "profileImage": "https://cdn.discordapp.com/avatars/1339962409552711805/7ecc15293a31b905d568451daa62de13.png?size=1024",
      "tracks": [
        "Sales",
        "Builder Advanced",
        "Shortform"
      ],
      "track": "Sales",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8106-a6b7-e2d39af8485d",
      "name": "양정화",
      "discordId": "807292789817737216",
      "discordUsername": "siltarre",
      "discordNickname": "양정화/(데브로더)타래/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/807292789817737216/27342906efd20db50314e12735c06c3c.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8106-ab1f-cfc4b787b4a8",
      "name": "정창희",
      "discordId": "1430753799026507796",
      "discordUsername": "aieye2022",
      "discordNickname": "정창희/아이아이/3기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8107-915c-df625d9e364f",
      "name": "이승재",
      "discordId": "805501999985590272",
      "discordUsername": "jai4762",
      "discordNickname": "이승재/Jai/3기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8108-9666-fbb3541d980d",
      "name": "이효진",
      "discordId": "1184081743117025362",
      "discordUsername": "jini_room",
      "discordNickname": "이효진/지니/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1184081743117025362/f705d79154479594f2050323e5f6a1cf.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8108-a308-f045a8dc9c18",
      "name": "염민지",
      "discordId": "1405150289228595261",
      "discordUsername": "rosayeom",
      "discordNickname": "염민지/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1405150289228595261/efddc25b8ad91fa7a6d15ef4ec7c9a82.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8108-afa7-d8b34c7d6bd1",
      "name": "조현승",
      "discordId": "880397409262370857",
      "discordUsername": "bbuggumaen7296",
      "discordNickname": "조현승/이안/3기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8109-bbe4-ea21d95278a3",
      "name": "조예도",
      "discordId": "1455790949144727595",
      "discordUsername": "yesdozozzy",
      "discordNickname": "조예도/조지/5기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8112-9aff-ccc87d661968",
      "name": "김미란",
      "discordId": "1065037359072153750",
      "discordUsername": "mkim3089",
      "discordNickname": "김미란/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1065037359072153750/147c2a81174086c56f9cb0ec374fbe4a.png?size=1024",
      "tracks": [
        "Builder Advanced",
        "Shortform"
      ],
      "track": "Builder Advanced",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8114-a6ed-c7c89589c9d1",
      "name": "샤무스",
      "discordId": "1126851617686306919",
      "discordUsername": "s5amu5",
      "discordNickname": "샤무스/1기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8115-9206-e5626c0ee5cd",
      "name": "박명희",
      "discordId": "998583129885384774",
      "discordUsername": "shaynapark3372",
      "discordNickname": "박명희/샤나/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/998583129885384774/2d87cacf670bc6cc5d0115a15a7e4a88.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8115-b45c-d6f367a7c18a",
      "name": "김성규",
      "discordId": "1183406208628035637",
      "discordUsername": "lapin_dev",
      "discordNickname": "김성규 / 라핀 / 1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1183406208628035637/58fa5287f27d02a74028337bd6d8e260.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8117-83e7-f1cbef8d39c1",
      "name": "김주희",
      "discordId": "1192681812640677979",
      "discordUsername": "ateudeog_41153",
      "discordNickname": "김주희/SAYU/3기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8119-be32-df7389299fba",
      "name": "조인기",
      "discordId": "1152999518875435178",
      "discordUsername": "dudu_27718",
      "discordNickname": "조인기/디지트미/4기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-811a-8a75-f5494a10b290",
      "name": "심소연",
      "discordId": "1128639639977201695",
      "discordUsername": "allright68",
      "discordNickname": "심소연/AIPlay/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1128639639977201695/e9e26e64b1f30ba249ef908c1d0aa81c.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-811a-b586-f29eed3da458",
      "name": "안영준",
      "discordId": "809381480610529280",
      "discordUsername": "yeongjun9872",
      "discordNickname": "Casey",
      "profileImage": "https://cdn.discordapp.com/avatars/809381480610529280/6ed340cdf9d574f42058930cb691c522.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-811b-966b-dd8299203368",
      "name": "권예진",
      "discordId": "809094699700584479",
      "discordUsername": "hosu4873",
      "discordNickname": "호수/1기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8121-b8e7-c990031cf8df",
      "name": "이지홍",
      "discordId": "1193822897622503457",
      "discordUsername": "hong_shifter",
      "discordNickname": "이지홍/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/1193822897622503457/21b9142ee5fbc3320c198cb8664d5ca0.png?size=1024",
      "tracks": [
        "Sales"
      ],
      "track": "Sales",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8122-a07b-ec3f88ab36de",
      "name": "성보람",
      "discordId": "1405118493216477184",
      "discordUsername": "heijini001",
      "discordNickname": "보람/헤이지니/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1405118493216477184/7827397651e27cb480294ffc9b1c0d81.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8129-8d16-cdd1012c5003",
      "name": "고장혁",
      "discordId": "1405475165290364972",
      "discordUsername": "gojanghyeog_76249",
      "discordNickname": "고장혁/링코리/1기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-812a-9082-e966d0d293ac",
      "name": "허재혁",
      "discordId": "926487567354970132",
      "discordUsername": "manyfast.io",
      "discordNickname": "허재혁/5기",
      "profileImage": "https://cdn.discordapp.com/guilds/1383082575500677142/users/926487567354970132/avatars/9eebf4d2b8c509f0f5a51a7651ed7276.png?size=1024",
      "tracks": [
        "Sales"
      ],
      "track": "Sales",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-812c-aaad-c59576604b61",
      "name": "임솔",
      "discordId": "1328793365894004736",
      "discordUsername": "ceongnyeonjangin_78689",
      "discordNickname": "임솔/청년장인/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1328793365894004736/8b0446aab9b210dbceb875e1da1a3693.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-812f-a8a5-efa051d245ef",
      "name": "김명현",
      "discordId": "1431582248716730469",
      "discordUsername": "yuhagan",
      "discordNickname": "김명현/유하간/3기",
      "profileImage": "https://cdn.discordapp.com/avatars/1431582248716730469/c82b3fa769ed6e6ffdea579381ed5f5c.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8135-a31c-d965505143f6",
      "name": "박영솔",
      "discordId": "1116519077410779228",
      "discordUsername": "swlbear",
      "discordNickname": "박영솔/swlbear/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/1116519077410779228/83c3d88cece8d246cb9f5aa21e4f4c8f.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Advanced",
        "Shortform"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8137-8941-c3b05bd3ce53",
      "name": "신재식",
      "discordId": "875902056731381810",
      "discordUsername": "manggo9724",
      "discordNickname": "신재식/지미/3기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8137-8f17-eb5bc07534eb",
      "name": "조상원",
      "discordId": "968078120513073214",
      "discordUsername": "sangwoncho",
      "discordNickname": "조상원/2기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8139-82c8-cb21321cba9c",
      "name": "김상원",
      "discordId": "1026078625189089280",
      "discordUsername": "nickwrkz",
      "discordNickname": "닉/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1026078625189089280/ad28afc762f71159e848d25c5c135f84.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-813b-b01d-cdb8949fa238",
      "name": "김진홍",
      "discordId": "1395205209680121919",
      "discordUsername": "jinhong_jean",
      "discordNickname": "김진홍/진킴/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1395205209680121919/4184e50a5c1642093b0ad3adb0179827.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-813d-9e9c-e91524df32c6",
      "name": "김철이",
      "discordId": "1456100462045560907",
      "discordUsername": "hannahssi72",
      "discordNickname": "김철이/한나씨/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1456100462045560907/dfd7e8c90a3bba3e1147f7f6f8cc82c2.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-813e-8bd2-d50dcf0e78aa",
      "name": "박소연",
      "discordId": "1455750415504244979",
      "discordUsername": "_sonialab",
      "discordNickname": "박소연/쏘냐/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1455750415504244979/1628fc11e7961d85181295493426b775.png?size=1024",
      "tracks": [
        "Sales"
      ],
      "track": "Sales",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-813f-882a-d066439e0ec2",
      "name": "김응신",
      "discordId": "900949181861101620",
      "discordUsername": "eungshin",
      "discordNickname": "김응신/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/900949181861101620/2dc5ff065e63a14486faee024d609abf.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-813f-8d44-dc27021b09e8",
      "name": "이재훈",
      "discordId": "1119134218073677894",
      "discordUsername": "jhun3163",
      "discordNickname": "이재훈/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1119134218073677894/c82b3fa769ed6e6ffdea579381ed5f5c.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8141-bfd2-c21b441f04da",
      "name": "유현미",
      "discordId": "1456573579327049838",
      "discordUsername": "riaayoo",
      "discordNickname": "유현미/리아/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1456573579327049838/c6fd99a54b57355632b4d4806e4a2b60.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8143-abc1-fec229daca1b",
      "name": "박형렬",
      "discordId": "977488874207084594",
      "discordUsername": "broheat86",
      "discordNickname": "박형렬/5기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8144-afa9-c5ca1cea7d64",
      "name": "권세미",
      "discordId": "1389122521965662248",
      "discordUsername": "ssmikn818",
      "discordNickname": "권세미/1기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "name": "정병진",
      "discordId": "1435648110872236114",
      "discordUsername": "nyuseudaedi_40019",
      "discordNickname": "정병진/뉴스대디/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1435648110872236114/0588eee2b0d604f160aeb3b1629d39f1.png?size=1024",
      "tracks": [
        "Shortform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8146-9d11-eed95d59dfb4",
      "name": "윤채원",
      "discordId": "1043183992767258674",
      "discordUsername": "clarechwyoon",
      "discordNickname": "윤채원/T2WW/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1043183992767258674/58d3906a140ce344854211a2b637e9ac.png?size=1024",
      "tracks": [
        "Shortform",
        "Sales",
        "AI Agent",
        "Longform",
        "Builder Basic",
        "Builder Advanced"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8147-99a2-d7f74b94ccc8",
      "name": "이예지",
      "discordId": "920874518145286244",
      "discordUsername": "yl5254",
      "discordNickname": "이예지/2기",
      "profileImage": "https://cdn.discordapp.com/avatars/920874518145286244/253b375f357803fe0af0ce59ae90419a.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "name": "임성규",
      "discordId": "1219146433081511947",
      "discordUsername": "bryon2030",
      "discordNickname": "브라이언/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1219146433081511947/4e22c528d161aa10e6b88f63aa1417b6.png?size=1024",
      "tracks": [
        "Longform",
        "Shortform"
      ],
      "track": "Longform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-814b-918c-c5e32fc5804e",
      "name": "안영일",
      "discordId": "562511437029965847",
      "discordUsername": "doer2451",
      "discordNickname": "두어(투자자)",
      "profileImage": "https://cdn.discordapp.com/avatars/562511437029965847/68c1ecd57d218e0e80d40c081f6e7417.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-814f-b0d4-c563a8c55273",
      "name": "최민호",
      "discordId": "300949905994940418",
      "discordUsername": "ahahaaahhahahaha",
      "discordNickname": "최민호/5기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8150-8a39-c0c9053c64a5",
      "name": "전다원",
      "discordId": "1455751791646871697",
      "discordUsername": "jnjh12",
      "discordNickname": "전다원/캐럿/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1455751791646871697/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8150-b060-d7e281a7c073",
      "name": "김지훈",
      "discordId": "482614983239270402",
      "discordUsername": "cheese_som",
      "discordNickname": "김지훈/5기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "AI Agent",
        "Builder Advanced"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8152-9ed9-e2a2b06c7cb1",
      "name": "김호돈",
      "discordId": "350203158074621954",
      "discordUsername": "hodonkim",
      "discordNickname": "김호돈 / 디오 / 4기",
      "profileImage": "https://cdn.discordapp.com/avatars/350203158074621954/0c6fde311fcf6aa05de554c201dfd4f0.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8154-b65e-dfbc5a8a1a61",
      "name": "신동찬",
      "discordId": "1227227718475579486",
      "discordUsername": "susu05426",
      "discordNickname": "신동찬 / 0기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8156-acdc-db150eefc233",
      "name": "Shawn Park",
      "discordId": "1082616788396806194",
      "discordUsername": "ysore",
      "discordNickname": "Shawn/4기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8157-ac58-e94fe0db76fb",
      "name": "서인근",
      "discordId": "1374699750778998834",
      "discordUsername": "ike0565",
      "discordNickname": "서인근/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/1374699750778998834/c945dd516dc753f895889545b020156c.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8159-b3d8-e1116d0b8b19",
      "name": "이종빈",
      "discordId": "1405147146784608330",
      "discordUsername": "jongb.in",
      "discordNickname": "종빈/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1405147146784608330/6fe3736e4dfc59263c0b52de9898b2ab.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-815c-980f-fa0411c2f828",
      "name": "손정민",
      "discordId": "1443421933445054525",
      "discordUsername": "koko_69667",
      "discordNickname": "손정민/코코/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1443421933445054525/5ff98d258691f577b60b47edb3c4ed0c.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "name": "김영훈",
      "discordId": "440463702534258688",
      "discordUsername": "stevejobboo",
      "discordNickname": "김영훈/스티브잡부/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/440463702534258688/8075e31ad9cfaafec735509b81227027.png?size=1024",
      "tracks": [
        "Sales",
        "Longform",
        "Shortform"
      ],
      "track": "Sales",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-815d-8a4c-ef3c64fc9b76",
      "name": "윤지아",
      "discordId": "1444237961842393122",
      "discordUsername": "yongyong05531",
      "discordNickname": "윤지아/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1444237961842393122/c82b3fa769ed6e6ffdea579381ed5f5c.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-815d-98bb-f551684ec223",
      "name": "김예린",
      "discordId": "1047314216052330577",
      "discordUsername": "jobmakers_",
      "discordNickname": "김예린/키리/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1047314216052330577/2e0612d7599bce12dfa3840e29557e56.png?size=1024",
      "tracks": [
        "Builder Advanced"
      ],
      "track": "Builder Advanced",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-815d-b85b-d798dd131387",
      "name": "천차돌",
      "discordId": "921939066088476723",
      "discordUsername": "ddangx2.",
      "discordNickname": "차돌(여행)",
      "profileImage": "https://cdn.discordapp.com/avatars/921939066088476723/b55a2a66a921a6d8c5de6c99ed5c8eff.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-815e-8f73-ed0122e92ca2",
      "name": "박서연",
      "discordId": "933708481729536051",
      "discordUsername": "yeonee9740",
      "discordNickname": "박서연/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/933708481729536051/449d9b57e3362c92130ac84297b87e83.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8163-9e2b-f84dcde69c5f",
      "name": "이소영",
      "discordId": "814301293736230942",
      "discordUsername": "gracedell_real",
      "discordNickname": "이소영/원림/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/814301293736230942/bab2fd67a97739cdcd99552b51943f3b.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8164-adb9-c6849e98bfb3",
      "name": "김보람",
      "discordId": "839527567190130718",
      "discordUsername": "ellie_pm",
      "discordNickname": "김보람_4기",
      "profileImage": "https://cdn.discordapp.com/avatars/839527567190130718/5257d0c7e32b46199f0ad8f16dc5306f.png?size=1024",
      "tracks": [
        "Shortform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8165-8377-de45ad07c543",
      "name": "변상민",
      "discordId": "1055485546509643816",
      "discordUsername": "byeonsangmin_benjamin",
      "discordNickname": "벤자민/커뮤니티 매니저",
      "profileImage": "https://cdn.discordapp.com/avatars/1055485546509643816/958881cb3e9b78fd7281d6aa0849b2ba.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8165-a8c9-dcefb992db2e",
      "name": "이세정",
      "discordId": "1029286158389215252",
      "discordUsername": "whynotblair",
      "discordNickname": "이세정/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1029286158389215252/4a716afc6627585dd764c47a3bfe4a45.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8169-846d-ce04ade77650",
      "name": "서혜지",
      "discordId": "1354437755454750881",
      "discordUsername": "seohyeji.yh",
      "discordNickname": "서혜지/이현/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1354437755454750881/1982c25c2ffe17289e937ba050593e3d.png?size=1024",
      "tracks": [
        "Shortform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8169-9c9a-d07a9bb198fd",
      "name": "서민원",
      "discordId": "159997886472388609",
      "discordUsername": "sinclairseo",
      "discordNickname": "서민원/SINCLAIR/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/159997886472388609/01a08a0d34ca6aeb4c8052e84d6c2166.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Advanced"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-816d-a4fb-cead3abdd765",
      "name": "박지원",
      "discordId": "1416665569221935204",
      "discordUsername": "kyuwonz",
      "discordNickname": "박지원/G1/2기",
      "profileImage": "https://cdn.discordapp.com/avatars/1416665569221935204/9e615b2d049f64a748303b029c6ff434.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8173-9c14-fe11dede91b1",
      "name": "이민재",
      "discordId": "657592860845146113",
      "discordUsername": "roopang2896",
      "discordNickname": "이민재(개발자)",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8173-a3ea-f5a59d562d45",
      "name": "권고은",
      "discordId": "1016213968043376661",
      "discordUsername": "yulmu0664",
      "discordNickname": "권고은/율무/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1016213968043376661/e0740ea625b65c2d862890ded460b7ef.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8175-afc5-f65183fb569d",
      "name": "임채영",
      "discordId": "317288458810818561",
      "discordUsername": "cy3975",
      "discordNickname": "임채영/1인사업가/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/317288458810818561/c2e3aa934d25cf95b0c8ea83241ddbba.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8176-bdf2-d17d35de0783",
      "name": "이윤정",
      "discordId": "1226720512353239111",
      "discordUsername": "reyoo100",
      "discordNickname": "이윤정/4기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-817f-8006-cc6b2816473d",
      "name": "정새미",
      "discordId": "1287674989213913139",
      "discordUsername": "saemijung",
      "discordNickname": "정새미/새미닥/3기",
      "profileImage": "https://cdn.discordapp.com/avatars/1287674989213913139/25c28ec7fc445e582f12c93034adf7a7.png?size=1024",
      "tracks": [
        "Shortform",
        "Builder Basic"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8180-a0ab-f2ab326becf7",
      "name": "박현준",
      "discordId": "915962978879299635",
      "discordUsername": "woodie6437",
      "discordNickname": "박현준 / 노코드 개발 / 3기",
      "profileImage": "https://cdn.discordapp.com/avatars/915962978879299635/f345d7dc30cd3fdd03ace4853f91d88d.png?size=1024",
      "tracks": [
        "Longform",
        "Shortform"
      ],
      "track": "Longform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8180-aa50-ed54cda0dbf4",
      "name": "한태봉",
      "discordId": "1179375324757241857",
      "discordUsername": "longinus1000",
      "discordNickname": "한태봉/술끊은농부/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1179375324757241857/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "name": "조민석",
      "discordId": "439028788156825610",
      "discordUsername": "chomangani",
      "discordNickname": "조민석/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/439028788156825610/a910f6dd91f13e4ccfa02a5b3419699f.png?size=1024",
      "tracks": [
        "Builder Advanced",
        "Shortform"
      ],
      "track": "Builder Advanced",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8186-a8ba-d66d0774c9d9",
      "name": "이은택",
      "discordId": "1405116669935878196",
      "discordUsername": "elrendil_65027",
      "discordNickname": "이은택/찰리/1기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8187-8ee7-f0f795165475",
      "name": "민지선",
      "discordId": "1065866329082564678",
      "discordUsername": "minpro_61477",
      "discordNickname": "민지선/5기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8188-a616-ff7a66f4ef14",
      "name": "김서령",
      "discordId": "1232917695947603970",
      "discordUsername": "exuberant_seahorse_94632",
      "discordNickname": "김서령/멜리/5기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-8188-b07b-d8bca73c9f7d",
      "name": "김기훈",
      "discordId": "584605040115843072",
      "discordUsername": "danduck.",
      "discordNickname": "김기훈/단덕/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/584605040115843072/65c45f6e6ae234a74fc8365470df6605.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-818a-8309-e4e36d21488b",
      "name": "김효주",
      "discordId": "927756763149787216",
      "discordUsername": "hyosour_",
      "discordNickname": "김효주/2기",
      "profileImage": "https://cdn.discordapp.com/avatars/927756763149787216/6302189844510198eaaab34347c17d39.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-818c-b3e3-edeacfb68bd5",
      "name": "문지호",
      "discordId": "1183736061977952343",
      "discordUsername": "saya_21742",
      "discordNickname": "문지호/이사야/4기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Shortform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-818e-8326-e6cd63ecab42",
      "name": "송홍기",
      "discordId": "948234505737617469",
      "discordUsername": "ong9711",
      "discordNickname": "calm",
      "profileImage": "https://cdn.discordapp.com/avatars/948234505737617469/f8322d1d0921e45fcf2f9588f77d4ebb.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-818e-bcfd-cb87b9a53831",
      "name": "최희재",
      "discordId": "776995360010403840",
      "discordUsername": "__heeze",
      "discordNickname": "최희재/조이/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/776995360010403840/73e004e8b1080adb6507512765070f39.png?size=1024",
      "tracks": [
        "AI Agent",
        "Longform"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-818f-bd5a-de00ad0aebd9",
      "name": "강정호",
      "discordId": "1270892788799504444",
      "discordUsername": "jeongho17384",
      "discordNickname": "강정호/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/1270892788799504444/602b1ffd87059f61155b00694a5b94ed.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8190-a674-cfff04fa9e58",
      "name": "장주선",
      "discordId": "749935285000994826",
      "discordUsername": "jason920_",
      "discordNickname": "장주선/jason/2기",
      "profileImage": "https://cdn.discordapp.com/avatars/749935285000994826/b282fbd17f508a978e4079c839c74080.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8194-9dba-e37fcc5aaa4f",
      "name": "Jason",
      "discordId": "1392843626786328696",
      "discordUsername": "jason_84134",
      "discordNickname": "Jason",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8195-a4a2-f00355c27e81",
      "name": "류석",
      "discordId": "467905824920961036",
      "discordUsername": "luu_biquitous",
      "discordNickname": "류석/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/467905824920961036/5ce3fd097bbed8115b43ba4d911c08c3.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Advanced"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8197-b9e2-f86b8440fc47",
      "name": "손한승",
      "discordId": "1392755508498403488",
      "discordUsername": "sonhanseung_43671",
      "discordNickname": "손한승/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/1392755508498403488/c3b27241299ecf081845b47ed28480e8.png?size=1024",
      "tracks": [
        "Sales"
      ],
      "track": "Sales",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8198-a241-c89bdcc70956",
      "name": "배효진",
      "discordId": "1416782927924301844",
      "discordUsername": "hyojinbae",
      "discordNickname": "배효진/2기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-8199-9968-e841144cd05e",
      "name": "송경연",
      "discordId": "454468118153265174",
      "discordUsername": "trinity2876",
      "discordNickname": "송경연/Trinity/2기",
      "profileImage": "https://cdn.discordapp.com/avatars/454468118153265174/b837174f8054d8346be8ab06cdb350c6.png?size=1024",
      "tracks": [
        "Shortform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-819a-8f4f-f330a653f7ea",
      "name": "오지나",
      "discordId": "1377473439828283463",
      "discordUsername": "jina.aa",
      "discordNickname": "오지나/달리오/4기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Sales"
      ],
      "track": "Sales",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-819c-b648-ca5b145462c5",
      "name": "배정규",
      "discordId": "875215383546699886",
      "discordUsername": "eric_seizer",
      "discordNickname": "배정규/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/875215383546699886/059c6cbfe0a4c2e54beef282424546d6.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-819d-88e9-d4779a5f1f87",
      "name": "정경덕",
      "discordId": "1073777072176107530",
      "discordUsername": "joyjung73",
      "discordNickname": "정경덕/Joy/3기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-819d-8c06-ee8ba7f42bcc",
      "name": "안경희",
      "discordId": "1427199894778810368",
      "discordUsername": "monday_mimi",
      "discordNickname": "레츠리부트",
      "profileImage": "https://cdn.discordapp.com/avatars/1427199894778810368/563192f17c9acbb5ea5dac8fa3e1e3c6.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81a1-b9a1-da8bcdf7dbbb",
      "name": "손수민",
      "discordId": "1405117672894500948",
      "discordUsername": "soom._.inc",
      "discordNickname": "수민/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1405117672894500948/f2bb917866be25d5d58c6a18cc8f758e.png?size=1024",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81a2-9270-ebe22111bc3f",
      "name": "윤대로",
      "discordId": "1430552667297681431",
      "discordUsername": "caleb.yoon",
      "discordNickname": "윤대로/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1430552667297681431/993f1d5a01d37fc8b05da9b3789cd3e1.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81a2-b5d9-cd59c87a32f7",
      "name": "이재만",
      "discordId": "1407983233118765106",
      "discordUsername": "aisyncclub",
      "discordNickname": "이재만/싱크/3기",
      "profileImage": "https://cdn.discordapp.com/guilds/1383082575500677142/users/1407983233118765106/avatars/002640d4b1c1df2b8937f3ddf982edac.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81a3-837c-ccea7d7f54c6",
      "name": "이가윤",
      "discordId": "927415118097174569",
      "discordUsername": "igayun.",
      "discordNickname": "이가윤/illy/3기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81a8-b99f-d5dd37834c11",
      "name": "권서림",
      "discordId": "1136915916093927434",
      "discordUsername": "ksrimee",
      "discordNickname": "권서림/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1136915916093927434/9ac5b374a85ccad59f8ae4292722560f.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-81ab-b236-e695df448e47",
      "name": "김솔",
      "discordId": "755082333442277447",
      "discordUsername": "solsol5853",
      "discordNickname": "김솔/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/755082333442277447/06e197e194f977e2505436be9e831b31.png?size=1024",
      "tracks": [
        "AI Agent",
        "Longform"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-81ad-9df0-d734f9d3fa17",
      "name": "김연진",
      "discordId": "1120557173479571467",
      "discordUsername": "tremendous_k",
      "discordNickname": "김연진/Janice/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1120557173479571467/412da3d92f488a6485b1b1894ccb8a87.png?size=1024",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81b0-8550-de5e956fa37c",
      "name": "김은정",
      "discordId": "1455898239349035079",
      "discordUsername": "elinkim0797",
      "discordNickname": "김은정/엘린/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1455898239349035079/0bdb333a120f1f02609ed9a6ded64b72.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Advanced"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-81b3-9797-fa4a062b6159",
      "name": "박광수",
      "discordId": "1443616439163420745",
      "discordUsername": "bulog_kr",
      "discordNickname": "박광수/부로그/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1443616439163420745/d6ca21ef0882ecd65c9a69fd90428dba.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81b8-a720-e96e913c55d0",
      "name": "이창수",
      "discordId": "416265870516551692",
      "discordUsername": "dennisjr1004",
      "discordNickname": "이창수/솔라드/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/416265870516551692/b601be7cf8088f3e20f4b8937875ba93.png?size=1024",
      "tracks": [
        "Sales",
        "AI Agent"
      ],
      "track": "Sales",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81ba-b9d7-cf2c04581567",
      "name": "김정민",
      "discordId": "1444237962924527750",
      "discordUsername": "markkim0121",
      "discordNickname": "김정민/마크/4기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81bb-8ca2-d743c555447d",
      "name": "홍상훈",
      "discordId": "1394204263814795306",
      "discordUsername": "marvin_hong",
      "discordNickname": "홍상훈(마빈/UX)",
      "profileImage": "https://cdn.discordapp.com/avatars/1394204263814795306/829509ef92923b35758bade12617e0f3.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81bb-a643-e437acbb4e68",
      "name": "서청원",
      "discordId": "556325040883367938",
      "discordUsername": "kyleseo",
      "discordNickname": "서청원/원원/4기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81bb-a9e6-c6f993f6e0a3",
      "name": "이지은",
      "discordId": "897413673834930197",
      "discordUsername": "jieun_1lab",
      "discordNickname": "이지은/지은/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/897413673834930197/6e6111505de9c7b6bd7b00af8114c027.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81bd-ad1d-f7d291b1743b",
      "name": "양희정",
      "discordId": "1426147820364234805",
      "discordUsername": "channelswan",
      "discordNickname": "양희정/swan/3기",
      "profileImage": "https://cdn.discordapp.com/avatars/1426147820364234805/a6767e41e8ef350657899500624a54f9.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "name": "백지요",
      "discordId": "934795495853944872",
      "discordUsername": "jyojyo8478",
      "discordNickname": "백지요/카마/2기",
      "profileImage": "https://cdn.discordapp.com/avatars/934795495853944872/00a29ae694074646dd004626c47aef0b.png?size=1024",
      "tracks": [
        "AI Agent",
        "Longform"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81be-b2a4-e68c5fae9fe0",
      "name": "방재민",
      "discordId": "849530733164494859",
      "discordUsername": "roomjaemin",
      "discordNickname": "방재민/재민/2기",
      "profileImage": "https://cdn.discordapp.com/avatars/849530733164494859/b5b6d44746481ecf5ce023c660655341.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81c5-b32d-d8330f5f9f1e",
      "name": "한나린",
      "discordId": "1281872752835559477",
      "discordUsername": "meoci_88116",
      "discordNickname": "한나린/머치/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1281872752835559477/1618025229f820798d7ea8b806e0487f.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "name": "김라미",
      "discordId": "791892285351526430",
      "discordUsername": "soulmagics_lamie",
      "discordNickname": "김라미/라미/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/791892285351526430/3d4f107dab2abbb81269d0af15960de9.png?size=1024",
      "tracks": [
        "AI Agent",
        "Shortform"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-81c7-a487-f94ece8a83e8",
      "name": "이종석",
      "discordId": "634719627213144065",
      "discordUsername": "aiclub",
      "discordNickname": "이종석/Drone/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/634719627213144065/c80473675370015533b3831a4dbaf5a2.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Advanced",
        "Shortform"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81d0-af42-cb28cfb82d5c",
      "name": "하이서",
      "discordId": "1190249303613124689",
      "discordUsername": "iseo_05209",
      "discordNickname": "하이서/피그마튜터/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1190249303613124689/2faec427fde728eb9cfef1a7139d1e3e.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81d6-9901-ce6520aefbf2",
      "name": "김유나",
      "discordId": "1272113241321111562",
      "discordUsername": "rani_24",
      "discordNickname": "김유나/이나/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1272113241321111562/8a56b581d41424f18a722eecefefc8ed.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81d7-91b5-d83cb15b5aa1",
      "name": "임지은",
      "discordId": "930733717188661279",
      "discordUsername": "imjieun90",
      "discordNickname": "임지은/3기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81dc-8353-fb31cbfb5057",
      "name": "여현정",
      "discordId": "1390344656885121066",
      "discordUsername": "susususu2000_75971",
      "discordNickname": "여현정/현/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1390344656885121066/871ab779c97fde66935d48d5710d26ec.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81dc-bb50-f8382c60947e",
      "name": "김영태",
      "discordId": "1405133051540934705",
      "discordUsername": "gureumhyanggi",
      "discordNickname": "김영태/구름향기/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1405133051540934705/c82b3fa769ed6e6ffdea579381ed5f5c.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81dd-8ba5-d5bb9cad68ac",
      "name": "추성훈",
      "discordId": "411542077508157440",
      "discordUsername": "eddychu.",
      "discordNickname": "추성훈/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/411542077508157440/1e9740da0776660a9dad6c7e5f610653.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81e0-8b9a-ec79b7a9c8ff",
      "name": "서유상",
      "discordId": "937608136318144543",
      "discordUsername": "xena2022.",
      "discordNickname": "서유상/ 제나 /3기",
      "profileImage": "https://cdn.discordapp.com/avatars/937608136318144543/d9dce2b10cbe6acb13148cf17e667d2a.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81e1-9cd6-d0632ca3771a",
      "name": "정준모",
      "discordId": "1330533825754955898",
      "discordUsername": "junemoejeong",
      "discordNickname": "정준모 / 1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1330533825754955898/157e517cdbf371a47aaead44675714a3.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "name": "정지용",
      "discordId": "305865661148692481",
      "discordUsername": "jiyong9038",
      "discordNickname": "정지용/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/305865661148692481/7b48b4fc10e81c238cf966e2a156b92c.png?size=1024",
      "tracks": [
        "AI Agent",
        "Shortform"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81e1-bd98-e20c158c9e9a",
      "name": "김경수",
      "discordId": "398033642070212609",
      "discordUsername": "gang_0968",
      "discordNickname": "김경수/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/398033642070212609/911f5a532992be72d05d35ed5420fec0.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81e2-99de-cbc33a4cde1d",
      "name": "조대진",
      "discordId": "1444078504919695412",
      "discordUsername": "yulpapa2253",
      "discordNickname": "조대진/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/1444078504919695412/f7f2e9361e8a54ce6e72580ac7b967af.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Advanced"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81e2-acb0-dc3b313e7a1e",
      "name": "김태화",
      "discordId": "1091993339286540309",
      "discordUsername": "bbachinco",
      "discordNickname": "김태화/태화/2기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81e4-8b03-faeb8d810832",
      "name": "임소연",
      "discordId": "1118787928949264494",
      "discordUsername": "yeon_coach",
      "discordNickname": "임소연/임셸/5기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-81e8-9236-ef4ee9ae9d1e",
      "name": "장동원",
      "discordId": "1405245484041502871",
      "discordUsername": "jiocom357",
      "discordNickname": "장동원 / 1기",
      "profileImage": "https://cdn.discordapp.com/avatars/1405245484041502871/c82b3fa769ed6e6ffdea579381ed5f5c.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "name": "이진아",
      "discordId": "1295735487121588315",
      "discordUsername": "jinhwa_leeja",
      "discordNickname": "이진아/제나/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1295735487121588315/19c3519b5b8b24c12f6e42bd5f04a0b6.png?size=1024",
      "tracks": [
        "Longform",
        "Shortform"
      ],
      "track": "Longform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-81ed-94c2-d6ffba89cbdb",
      "name": "전수린",
      "discordId": "949180718842535966",
      "discordUsername": "ringring_9999",
      "discordNickname": "전수린/제이드/0기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81ed-a523-e46ee7043bc8",
      "name": "이은임",
      "discordId": "1455788498341597257",
      "discordUsername": "debi01740",
      "discordNickname": "이은임/데비/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1455788498341597257/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
      "tracks": [
        "Builder Advanced"
      ],
      "track": "Builder Advanced",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2df6400e-9268-81ef-a316-e89637aada08",
      "name": "김강민",
      "discordId": "528526853204344842",
      "discordUsername": "kimgangmin5512",
      "discordNickname": "김강민(크리에이터)",
      "profileImage": "https://cdn.discordapp.com/avatars/528526853204344842/b17807ed642f3c3e608b02dea31cac02.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81f1-9773-cd29ce6fdd17",
      "name": "이충우",
      "discordId": "840589349409259572",
      "discordUsername": "caleb20507206",
      "discordNickname": "이충우/caleb/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/840589349409259572/2d6079bb67a6564c2d76b254771ec311.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81f1-aa1e-f7250a0d3470",
      "name": "박경민",
      "discordId": "1353615695488749630",
      "discordUsername": "kyungmin_2192",
      "discordNickname": "박경민/케이/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/1353615695488749630/48a671e10861890ee06b2f8546c4b6e7.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Advanced",
        "Shortform"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81f5-a59d-c8053de08912",
      "name": "이의령",
      "discordId": "793657020040478750",
      "discordUsername": "wooridle4204",
      "discordNickname": "이의령/4기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81f6-9507-d75167c2a27d",
      "name": "최민수",
      "discordId": "1405136195083829260",
      "discordUsername": "heeyeoljagi",
      "discordNickname": "희열자기/1기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81f6-a1c4-fc2ae1189e78",
      "name": "김재승",
      "discordId": "1150452666456096770",
      "discordUsername": "martdealer",
      "discordNickname": "김재승/2기",
      "profileImage": "https://cdn.discordapp.com/avatars/1150452666456096770/5844db1b7682e32507abbd0d2c87ae77.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81f6-a63a-cbd78db0929e",
      "name": "이상엽",
      "discordId": "505665905166909451",
      "discordUsername": "isangyeob0125",
      "discordNickname": "이상엽/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/505665905166909451/4a191422abffc19e97c1d7a49354a628.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81f6-bc9b-ce448a37b324",
      "name": "이동범",
      "discordId": "262645433602408449",
      "discordUsername": "jeongjeomri",
      "discordNickname": "동범/1기",
      "profileImage": "https://cdn.discordapp.com/avatars/262645433602408449/6f5d0f30202b8e6318bd0d3c67a13e2b.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "name": "이종원",
      "discordId": "892518381536825344",
      "discordUsername": "suria_24",
      "discordNickname": "이종원/수리아/4기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81f9-af19-ee0ca559d657",
      "name": "강로하",
      "discordId": "1432178934665056396",
      "discordUsername": "atopineunmongro_36334",
      "discordNickname": "강로하/아토피는몽로/3기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81f9-bfa4-ee76f81f5df4",
      "name": "현상협",
      "discordId": "1110916493354475540",
      "discordUsername": "barefoot_wade",
      "discordNickname": "현상협/웨이드/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/1110916493354475540/dcef7ced541dc6479ad27c03aa706c0f.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81fb-a858-f85bf94a0b93",
      "name": "권기룡",
      "discordId": "1383427919678013545",
      "discordUsername": "dobongsantekeumaen_52308",
      "discordNickname": "권기룡/4기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81fc-b8e2-eb7357b57d7b",
      "name": "최민지",
      "discordId": "948597740529651802",
      "discordUsername": "eunoia.c",
      "discordNickname": "최민지/칼슨/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/948597740529651802/a90b2dc888aa8759c28d53cd840db217.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T07:30:00.000Z"
    },
    {
      "id": "2df6400e-9268-81ff-9f12-c3b31a1345d3",
      "name": "박준서",
      "discordId": "1455777260844875877",
      "discordUsername": "bepeoplemaker",
      "discordNickname": "박준서/피멩/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1455777260844875877/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
    },
    {
      "id": "2f96400e-9268-8102-b35c-e7d77ad33e0a",
      "name": "고드",
      "discordId": "1444311757978996830",
      "discordUsername": "godeu_91459",
      "discordNickname": "고드",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:05:00.000Z"
    },
    {
      "id": "2f96400e-9268-8104-b74d-e59cf43b5945",
      "name": "이은지",
      "discordId": "763294880503037953",
      "discordUsername": "ariel__ariel",
      "discordNickname": "이은지/5기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:03:00.000Z"
    },
    {
      "id": "2f96400e-9268-8111-8c44-c0fdc83f622e",
      "name": "pottatv",
      "discordId": "1381554445959303250",
      "discordUsername": "redjade0512",
      "discordNickname": "pottatv",
      "profileImage": "https://cdn.discordapp.com/avatars/1381554445959303250/1628fc11e7961d85181295493426b775.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:05:00.000Z"
    },
    {
      "id": "2f96400e-9268-8161-88c6-cd40c2b45746",
      "name": "강성규",
      "discordId": "1339978721859338333",
      "discordUsername": "seonggoos",
      "discordNickname": "강성규/성구/빌더코치",
      "profileImage": "https://cdn.discordapp.com/avatars/1339978721859338333/5e423d564522282b2e53b18edc6cb5f0.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "코치",
      "created_time": "2026-01-31T14:04:00.000Z"
    },
    {
      "id": "2f96400e-9268-8173-986a-c03ebc67eb19",
      "name": "채영",
      "discordId": "1309502559492509716",
      "discordUsername": "caeyeong_36655",
      "discordNickname": "채영",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:06:00.000Z"
    },
    {
      "id": "2f96400e-9268-8174-bc66-df8040bf47c7",
      "name": "MK",
      "discordId": "1455772215244230815",
      "discordUsername": "exuberant_cheetah_30676",
      "discordNickname": "MK",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:03:00.000Z"
    },
    {
      "id": "2f96400e-9268-8188-b2a2-c0232b089a58",
      "name": "구름향기",
      "discordId": "1405134129187520623",
      "discordUsername": "gureumhyanggi_68748",
      "discordNickname": "구름향기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:04:00.000Z"
    },
    {
      "id": "2f96400e-9268-81b3-b58d-c5d2d25d4a97",
      "name": "리아 : )",
      "discordId": "1456571880419889313",
      "discordUsername": "energetic_peacock_80390",
      "discordNickname": "리아 : )",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:03:00.000Z"
    },
    {
      "id": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "name": "이안",
      "discordId": "1392850552416768072",
      "discordUsername": "ian_61591",
      "discordNickname": "이안/부운영자",
      "profileImage": "https://cdn.discordapp.com/avatars/1392850552416768072/122eae3283396e88bc34f4ed81d62715.png?size=1024",
      "tracks": [
        "Builder Basic",
        "Longform",
        "Sales",
        "Builder Advanced",
        "AI Agent",
        "Shortform"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "운영진",
      "created_time": "2026-01-31T14:04:00.000Z"
    },
    {
      "id": "2f96400e-9268-81d7-a92c-f3594d2bbf87",
      "name": "김찬섭",
      "discordId": "1379321132636704880",
      "discordUsername": "mdmstudio",
      "discordNickname": "MDM/찬섭/세일즈코치",
      "profileImage": "https://cdn.discordapp.com/avatars/1379321132636704880/3556ef17c9f8507517a0435ea051d881.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "코치",
      "created_time": "2026-01-31T14:05:00.000Z"
    },
    {
      "id": "2f96400e-9268-81db-b57a-e5ffc23c1534",
      "name": "김미경",
      "discordId": "1455789446564675685",
      "discordUsername": "mkkim0770",
      "discordNickname": "Mkkim",
      "profileImage": "https://cdn.discordapp.com/avatars/1455789446564675685/e027f0247161cc58474198c759a698c2.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:04:00.000Z"
    },
    {
      "id": "2f96400e-9268-81e4-af14-f99e5837b069",
      "name": "조쉬/운영자",
      "discordId": "803843372392382504",
      "discordUsername": "joshproductletter",
      "discordNickname": "조쉬/운영자",
      "profileImage": "https://cdn.discordapp.com/avatars/803843372392382504/4505f2da1f0767f322c726185363f666.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "운영진",
      "created_time": "2026-01-31T14:06:00.000Z"
    },
    {
      "id": "2f96400e-9268-81e7-afbb-dce5b4e27742",
      "name": "yoon",
      "discordId": "1430509058619736176",
      "discordUsername": "yoon_98929",
      "discordNickname": "yoon",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:05:00.000Z"
    },
    {
      "id": "2f96400e-9268-81e9-aa65-c52cd8261723",
      "name": "지미",
      "discordId": "1430514544693874759",
      "discordUsername": "jimi_78850",
      "discordNickname": "지미",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:05:00.000Z"
    },
    {
      "id": "2f96400e-9268-81ed-9d64-f334b75999ec",
      "name": "엘린",
      "discordId": "1455896535064776714",
      "discordUsername": "elrin_64155",
      "discordNickname": "엘린",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:05:00.000Z"
    },
    {
      "id": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "name": "송재근",
      "discordId": "1466756902393352233",
      "discordUsername": "jakvis_",
      "discordNickname": "송재근/쟉비스/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Shortform",
        "Builder Basic"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-31T14:04:00.000Z"
    },
    {
      "id": "2f96400e-9268-81ff-8dc2-e171b23449a3",
      "name": "대빵쉐프",
      "discordId": "1457334641970384946",
      "discordUsername": "daebbangswepeu_66957",
      "discordNickname": "대빵쉐프",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-01-31",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-31T14:04:00.000Z"
    },
    {
      "id": "2fc6400e-9268-8126-a1b1-e58518d2d55a",
      "name": "이유주",
      "discordId": "606044558953807892",
      "discordUsername": "haruna7769",
      "discordNickname": "이유주/커뮤니티 매니저",
      "profileImage": "https://cdn.discordapp.com/avatars/606044558953807892/61f3b7c9ed80a007e0c78f447387a572.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-02-03",
      "notionSync": true,
      "cohort": "운영진",
      "created_time": "2026-02-03T13:45:00.000Z"
    },
    {
      "id": "2fc6400e-9268-81bb-b020-db7ae11390d2",
      "name": "uzoo",
      "discordId": "1362629612806340802",
      "discordUsername": "uzoo0323",
      "discordNickname": "uzoo",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-02-03",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-03T13:47:00.000Z"
    },
    {
      "id": "2fc6400e-9268-81bf-b5b8-f405c3666c00",
      "name": "은성원",
      "discordId": "1438503377116860466",
      "discordUsername": "jyunji_36754",
      "discordNickname": "은성원/은코치",
      "profileImage": "https://cdn.discordapp.com/avatars/1438503377116860466/b4a9a1b064ab74a17acededd6af3a70d.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-03",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-03T13:45:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "name": "김깜직",
      "discordId": "1314864693730611311",
      "discordUsername": "jeongminhwii",
      "discordNickname": "김깜직/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Shortform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-04T09:14:00.000Z"
    },
    {
      "id": "2fd6400e-9268-810a-9679-d764825b880f",
      "name": "케이슬립",
      "discordId": "1460224814768718028",
      "discordUsername": "keiseulrib_97957_03649",
      "discordNickname": "케이슬립",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-04T09:14:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8112-b8b5-ee2f1ed40c98",
      "name": "현진웅",
      "discordId": "348138416975904769",
      "discordUsername": "7m3ds8901",
      "discordNickname": "현진웅/grydex_/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:15:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8114-b66c-c76e8e022b02",
      "name": "최성진",
      "discordId": "1369399300324593780",
      "discordUsername": "cjsckdbfh",
      "discordNickname": "최성진 / 6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/2.png",
      "tracks": [
        "Sales",
        "Builder Basic",
        "AI Agent"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:16:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "name": "이만성",
      "discordId": "1351320828431564882",
      "discordUsername": "kimdiving",
      "discordNickname": "이만성/이브레인/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Sales",
        "AI Agent"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:14:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8128-a649-c35d601c95a0",
      "name": "장혜진",
      "discordId": "1468432291654275365",
      "discordUsername": "dambaeghanbaram_44969_40454",
      "discordNickname": "장혜진/담백한 바람/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T10:58:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8137-bb07-fa8e8ab11813",
      "name": "김연재",
      "discordId": "1309802194215899157",
      "discordUsername": "sylvie_46932",
      "discordNickname": "김연재/케이슬립/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Sales",
        "Longform",
        "Shortform"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:15:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8142-a989-f8352e9ecf0d",
      "name": "문병관",
      "discordId": "1468428017314562211",
      "discordUsername": "bk22moon",
      "discordNickname": "문병관/baker/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:14:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8168-a39e-fa71e8c4d86b",
      "name": "조은비",
      "discordId": "1468444537616859350",
      "discordUsername": "flor_25630",
      "discordNickname": "조은비/플로/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:15:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8172-994c-f2f75ab413b1",
      "name": "박자람",
      "discordId": "1468448455616893031",
      "discordUsername": "jaram.park",
      "discordNickname": "박자람/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/1468448455616893031/6c5996770c985bcd6e5b68131ff2ba04.png?size=1024",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:13:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8180-92da-ca2d7cccaec1",
      "name": "노신희",
      "discordId": "1011241117997600869",
      "discordUsername": "dolpaliyagjangsu2528",
      "discordNickname": "노신희/신이/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Sales"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-04T09:16:00.000Z"
    },
    {
      "id": "2fd6400e-9268-8185-b93b-e48e330e682b",
      "name": "이상덕",
      "discordId": "1468441432078684282",
      "discordUsername": "dalse.tax",
      "discordNickname": "이상덕/달리는세무사/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:14:00.000Z"
    },
    {
      "id": "2fd6400e-9268-818c-b026-cd92d926f7b9",
      "name": "김승우",
      "discordId": "682196201818554424",
      "discordUsername": "stevenkim18",
      "discordNickname": "김승우/Steven/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/682196201818554424/460ef64259d802cca5da451acd8feed5.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:14:00.000Z"
    },
    {
      "id": "2fd6400e-9268-819b-99af-dc7716a5f96f",
      "name": "김선정",
      "discordId": "1468495470723731517",
      "discordUsername": "sseon_36125",
      "discordNickname": "김선정/썬/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:13:00.000Z"
    },
    {
      "id": "2fd6400e-9268-819d-93b5-da9757bcc9b7",
      "name": "송현미",
      "discordId": "1468468111526334466",
      "discordUsername": "hyun2030.",
      "discordNickname": "송현미/쏭대표/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:13:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81a0-9bc2-ce3cd8b4cc76",
      "name": "최에녹",
      "discordId": "355303248749395969",
      "discordUsername": "balin3970",
      "discordNickname": "최에녹/Enoch/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:12:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "name": "박시준",
      "discordId": "1468452985406226525",
      "discordUsername": "dassyepeubagsijun_33578",
      "discordNickname": "박시준/닷셰프/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "Shortform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-04T09:14:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81b6-8773-e4e735274728",
      "name": "박한샘",
      "discordId": "1405580797305421904",
      "discordUsername": "aleveal",
      "discordNickname": "박한샘/Sam/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/1405580797305421904/c61926110a6b4c0cb0bd8fa529314a81.png?size=1024",
      "tracks": [
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:10:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "name": "그레이스킴",
      "discordId": "1392144792778965015",
      "discordUsername": "dreamingcoach1",
      "discordNickname": "그레이스킴/드리밍코치/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/1392144792778965015/1628fc11e7961d85181295493426b775.png?size=1024",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:13:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81bb-a7c3-fc4ba9e6a886",
      "name": "정인교",
      "discordId": "1089115346646093838",
      "discordUsername": "inkyojay",
      "discordNickname": "정인교/제이/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "Sales",
        "Builder Advanced"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-04T09:13:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81ca-9eb7-cdeedff433d2",
      "name": "고평온",
      "discordId": "1468439960376967299",
      "discordUsername": "jyforever10",
      "discordNickname": "Serena Ko",
      "profileImage": "https://cdn.discordapp.com/avatars/1468439960376967299/157e517cdbf371a47aaead44675714a3.png?size=1024",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:13:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81ca-b12f-cc1cb33d59bf",
      "name": "곽병준",
      "discordId": "762516489407692820",
      "discordUsername": "kkwakkk5543",
      "discordNickname": "곽병준/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/0.png",
      "tracks": [
        "AI Agent",
        "Builder Advanced"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:10:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81de-bb82-f41a102bdc05",
      "name": "1Q",
      "discordId": "1468428341660090390",
      "discordUsername": "powerful_puppy_56779",
      "discordNickname": "1Q",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-04T09:14:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81e0-bd5b-fb74ce02611c",
      "name": "곽수연",
      "discordId": "1138814429618774216",
      "discordUsername": "sy_k_",
      "discordNickname": "곽수연/가걍/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/1138814429618774216/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:13:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "name": "차진혁",
      "discordId": "1172143518064582668",
      "discordUsername": "chacha_952_38241",
      "discordNickname": "차진혁/에반/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/1172143518064582668/0e351edb4bbe3d129099ab14fffb7932.png?size=1024",
      "tracks": [
        "Sales",
        "Longform",
        "Shortform"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:14:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "name": "김정환",
      "discordId": "1100513913533120532",
      "discordUsername": "sleepingpain",
      "discordNickname": "김정환/됴냐/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/1100513913533120532/d7de579f95a349efaa361580e9ec8834.png?size=1024",
      "tracks": [
        "Sales",
        "Longform",
        "Shortform"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:30:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81e6-873e-c5a131700198",
      "name": "김영준",
      "discordId": "1058984826734129262",
      "discordUsername": "juny5923",
      "discordNickname": "김영준/로그/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/1058984826734129262/cbdc29be2d974b79d72297b6d73f061c.png?size=1024",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:13:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "name": "박진양",
      "discordId": "996891519028052081",
      "discordUsername": "careerpjy",
      "discordNickname": "박진양/수려맘/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/996891519028052081/7e0a553c84cf19eda5904e85e40ff300.png?size=1024",
      "tracks": [
        "Shortform",
        "Builder Basic"
      ],
      "track": "Shortform",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-04T09:13:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81ed-afee-c1b5690af250",
      "name": "김다은",
      "discordId": "1468428085572665477",
      "discordUsername": "dani_00525",
      "discordNickname": "김다은/다니/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/1468428085572665477/2105fbd6227c9fb6e139665bfb870852.png?size=1024",
      "tracks": [
        "Sales"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-04T09:13:00.000Z"
    },
    {
      "id": "2fd6400e-9268-81fb-8543-ed0754fb6680",
      "name": "천하윤",
      "discordId": "901418397731012689",
      "discordUsername": "ceonyujin_",
      "discordNickname": "천하윤 / 하윤킹 / 6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "Longform",
        "Builder Advanced",
        "Shortform"
      ],
      "track": "Longform",
      "joinedAt": "2026-02-04",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-04T09:10:00.000Z"
    },
    {
      "id": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "name": "김무전",
      "discordId": "990891364763987988",
      "discordUsername": "santekim",
      "discordNickname": "김무전/쌍떼/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/1.png",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-05T12:53:00.000Z"
    },
    {
      "id": "2fe6400e-9268-8196-b1b3-c8e3ac15201f",
      "name": "이미숙",
      "discordId": "thesweetchapter",
      "discordUsername": "thesweetchapter",
      "discordNickname": "sophia",
      "profileImage": "",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-02-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-05T13:10:00.000Z"
    },
    {
      "id": "2fe6400e-9268-81a2-a40f-d6a24d221c66",
      "name": "이명규",
      "discordId": "271160296830140418",
      "discordUsername": "myeonggyu.lee",
      "discordNickname": "이명규",
      "profileImage": "https://cdn.discordapp.com/avatars/271160296830140418/60cc37797e0d2db00065c2235b5cc424.png?size=1024",
      "tracks": [
        "Sales"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-05T12:53:00.000Z"
    },
    {
      "id": "2fe6400e-9268-81e0-86cd-ea72e6a3d2b1",
      "name": "이화연",
      "discordId": "1468756827461259488",
      "discordUsername": "kara023170",
      "discordNickname": "카라",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [
        "Shortform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-02-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-05T12:53:00.000Z"
    },
    {
      "id": "2fe6400e-9268-81f2-91c2-e27f6fb44839",
      "name": "소피아쉡",
      "discordId": "1399536466312298660",
      "discordUsername": "sopiasweb_33643",
      "discordNickname": "소피아쉡",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/3.png",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-02-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-05T12:51:00.000Z"
    },
    {
      "id": "2ff6400e-9268-8166-9b44-f38c8f3bed99",
      "name": "이성현",
      "discordId": "1095337823445459074",
      "discordUsername": "caemungi3744",
      "discordNickname": "이성현",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-06",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-06T09:24:00.000Z"
    },
    {
      "id": "3006400e-9268-8121-ad2d-f0c76cb20143",
      "name": "이상호",
      "discordId": "973134369252335636",
      "discordUsername": "zoo__peter",
      "discordNickname": "이상호/주피터/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [
        "Sales",
        "Builder Basic"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-07",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-07T08:38:00.000Z"
    },
    {
      "id": "3016400e-9268-810b-81a5-d1797af75675",
      "name": "서수민/수민서/6기",
      "discordId": "1468441587875844143",
      "discordUsername": "svminseo",
      "discordNickname": "수민서",
      "profileImage": "https://cdn.discordapp.com/avatars/1468441587875844143/8569adcbd36c70a7578c017bf5604ea5.png?size=1024",
      "tracks": [
        "Longform",
        "Shortform",
        "Builder Basic"
      ],
      "track": "Longform",
      "joinedAt": "2026-02-08",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-08T10:03:00.000Z"
    },
    {
      "id": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "name": "박현정",
      "discordId": "1470011065608700071",
      "discordUsername": "benji_47749_97622",
      "discordNickname": "박현정/벤지/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/4.png",
      "tracks": [
        "Sales",
        "Longform",
        "Builder Basic",
        "Shortform"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-08",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-08T11:40:00.000Z"
    },
    {
      "id": "3016400e-9268-8139-b447-fcbb968d8bf7",
      "name": "고원규/1Q/6기",
      "discordId": "1108655291404390440",
      "discordUsername": "go1q_",
      "discordNickname": "고원규/1Q/6기",
      "profileImage": "",
      "tracks": [
        "AI Agent",
        "Builder Basic"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-02-08",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-08T10:03:00.000Z"
    },
    {
      "id": "3016400e-9268-8175-a957-d84741a15a93",
      "name": "윤홍권/블랙권/6기",
      "discordId": "1468459037657010178",
      "discordUsername": "blackgwon",
      "discordNickname": "윤홍권/블랙권/6기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
      "tracks": [
        "Sales",
        "Builder Basic",
        "AI Agent"
      ],
      "track": "Sales",
      "joinedAt": "2026-02-08",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-08T10:03:00.000Z"
    },
    {
      "id": "3016400e-9268-81bd-9654-c77433264b00",
      "name": "강민",
      "discordId": "1306527505322217497",
      "discordUsername": "ghoiibaad",
      "discordNickname": "강민/고드/4기",
      "profileImage": "",
      "tracks": [
        "Shortform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-02-08",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-08T12:33:00.000Z"
    },
    {
      "id": "3016400e-9268-81ef-b6e0-c5ae2ea3f18f",
      "name": "이효정/샤무스/1기",
      "discordId": "1126851617686306919",
      "discordUsername": "shamoos",
      "discordNickname": "이효정/샤무스/1기",
      "profileImage": "",
      "tracks": [
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-02-08",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-02-08T10:03:00.000Z"
    },
    {
      "id": "3026400e-9268-8116-bdd9-e32a8006a60a",
      "name": "백영재",
      "discordId": "1101312772316332083",
      "discordUsername": "ww__jj",
      "discordNickname": "백영재/크플/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/1101312772316332083/f7f2e9361e8a54ce6e72580ac7b967af.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-02-09",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-02-09T06:51:00.000Z"
    },
    {
      "id": "3026400e-9268-817b-af6d-df71b0975788",
      "name": "안웅현",
      "discordId": "1229047466339471422",
      "discordUsername": "wallaby_wh",
      "discordNickname": "안웅현",
      "profileImage": "https://cdn.discordapp.com/avatars/1229047466339471422/6c5996770c985bcd6e5b68131ff2ba04.png?size=1024",
      "tracks": [],
      "track": "Unknown",
      "joinedAt": "2026-02-09",
      "notionSync": true,
      "cohort": "코치",
      "created_time": "2026-02-09T11:59:00.000Z"
    }
  ],
  "submissions": [
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DUpiAZAkvVd",
      "content": "https://www.threads.com/@makekim.kr/post/DUpiAZAkvVd",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://naver.me/xzHv5F7T",
      "content": "https://naver.me/xzHv5F7T",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8137-bb07-fa8e8ab11813",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470024904899559672/1471426314564145266/2026-02-12_174204.png?ex=698ee40b&is=698d928b&hm=d234b45dfb413cce255d09c0206da651f855f0600d1644bbac2d92b923c79017&",
      "content": "[김연재/케이슬립/6기] 크리에이터 숏폼 과제",
      "images": [
        "https://cdn.discordapp.com/attachments/1470024904899559672/1471426314564145266/2026-02-12_174204.png?ex=698ee40b&is=698d928b&hm=d234b45dfb413cce255d09c0206da651f855f0600d1644bbac2d92b923c79017&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dotshef/post/DUpoy1SkcLA?hl=ko",
      "content": "https://www.threads.com/@dotshef/post/DUpoy1SkcLA?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DUponLTkiID?xmt=AQF0njRJGqOJLM0IT3SUyODU9KaGEA4K99genmi5POBOEQ",
      "content": "https://www.threads.com/@slowwbuilder/post/DUponLTkiID?xmt=AQF0njRJGqOJLM0IT3SUyODU9KaGEA4K99genmi5POBOEQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@aron_aiconbia/post/DUpiV5YD30X?xmt=AQF0auf-s7JQ2eerBfVdo533vBFLAtXm95F_XhqYzFbLJUSi2hM-jAfybKIIZ4S-qt5a5YWT&slof=1",
      "content": "https://www.threads.com/@aron_aiconbia/post/DUpiV5YD30X?xmt=AQF0auf-s7JQ2eerBfVdo533vBFLAtXm95F_XhqYzFbLJUSi2hM-jAfybKIIZ4S-qt5a5YWT&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DUpgREHE947?xmt=AQF07zxstCWFSmCkZJHpsqWz9HORLV2G-rzZSNB9ZNwgDg",
      "content": "https://www.threads.com/@ai.profitwise/post/DUpgREHE947?xmt=AQF07zxstCWFSmCkZJHpsqWz9HORLV2G-rzZSNB9ZNwgDg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DUpjM7XD4H_?xmt=AQF0uRjUjNcUJ8N1RFKn7qqvecr7bOi78En8c5BpRmNcbUrJ-91uZUgKVPamPeQYjhzmaGAK&slof=1",
      "content": "https://www.threads.com/@home_dad_sol/post/DUpjM7XD4H_?xmt=AQF0uRjUjNcUJ8N1RFKn7qqvecr7bOi78En8c5BpRmNcbUrJ-91uZUgKVPamPeQYjhzmaGAK&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8164-adb9-c6849e98bfb3",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@keep.going.ellie/post/DUogSDQE3_5?xmt=AQF0w1LrGYhF7Sw33sN8ASJXq6mfLfOPfVTVV1jxbZLmK-50KXCZMfTLz9QG--BWRUm7asg&slof=1",
      "content": "https://www.threads.com/@keep.going.ellie/post/DUogSDQE3_5?xmt=AQF0w1LrGYhF7Sw33sN8ASJXq6mfLfOPfVTVV1jxbZLmK-50KXCZMfTLz9QG--BWRUm7asg&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DUosMaeE-hu?xmt=AQF0cn6vJK6UYqc4w1VCDavfw4bCTGgqVwJnr_OKwvoaG0oEkMwmXxSi0-ZDmwsWLCcGy48&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DUosMaeE-hu?xmt=AQF0cn6vJK6UYqc4w1VCDavfw4bCTGgqVwJnr_OKwvoaG0oEkMwmXxSi0-ZDmwsWLCcGy48&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DUo3NTQk5Ei?xmt=AQF09OXmUm50N4MMIC7A80SdbwYRjppklod8I0IzwDmiMPwp-JNypxpcg4q4ZDP6Horjq9DJ&slof=1",
      "content": "https://www.threads.com/@dodo_list_/post/DUo3NTQk5Ei?xmt=AQF09OXmUm50N4MMIC7A80SdbwYRjppklod8I0IzwDmiMPwp-JNypxpcg4q4ZDP6Horjq9DJ&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DUn4wKpiAQM?xmt=AQF0afCGD8SuJba2aGQ4Za3vGUS7_RwdJRIcYihmi2RY-M2jj3fP4fZ6jk5b3gsTaWksUwZD&slof=1 ",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DUn4wKpiAQM?xmt=AQF0afCGD8SuJba2aGQ4Za3vGUS7_RwdJRIcYihmi2RY-M2jj3fP4fZ6jk5b3gsTaWksUwZD&slof=1 ",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ina.sasad;",
      "content": "https://www.threads.com/@ina.sasad;",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@curious_lamie/post/DUmQBpZE6Rq?xmt=AQF0vArToqvgAeG5enFZbZ8-7wVK7JcmsiBxnIejcjXDMLcf3mHyrci2oeT0hJASTevwiow&slof=1",
      "content": "AI 댄스 프롬프트 \nhttps://www.threads.com/@curious_lamie/post/DUmQBpZE6Rq?xmt=AQF0vArToqvgAeG5enFZbZ8-7wVK7JcmsiBxnIejcjXDMLcf3mHyrci2oeT0hJASTevwiow&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/p/DUnxh0TAcfF/",
      "content": "https://www.instagram.com/p/DUnxh0TAcfF/\n어쩌다 보니... 스레드 계정을 만들자 마자 정지(?)를 먹었네요. 뭔가 잘못 입력한게 있나 봅니다. ㅠ\n어쩌다 보니... 인스타를 올리게 되었네요~\n\n",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470024904899559672/1471164995558576261/image.png?ex=698df0ab&is=698c9f2b&hm=4e6df29bd752d6de418619e5633bac113b483f359bdf1c0d0f86df6cbce03392&",
      "content": "스레드 처음 가입했더니, 이렇게 나오네요 ㅎㅎ 인스타 활동 이력도 없고 그래서 그렇다는데... \n가입 완료되면, 과제 시작하겠습니다! (미제출 횟수에 포함되지 않았으면 하는데🙏  검토 부탁드립니다🙇 )",
      "images": [
        "https://cdn.discordapp.com/attachments/1470024904899559672/1471164995558576261/image.png?ex=698df0ab&is=698c9f2b&hm=4e6df29bd752d6de418619e5633bac113b483f359bdf1c0d0f86df6cbce03392&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8137-bb07-fa8e8ab11813",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/activity-7427366058862252033-xY-E?utm_source=share&utm_medium=member_desktop&rcm=ACoAABy8IToBpjkSdesT6ABCVru0gkrsl7erGDQ",
      "content": "https://www.linkedin.com/posts/activity-7427366058862252033-xY-E?utm_source=share&utm_medium=member_desktop&rcm=ACoAABy8IToBpjkSdesT6ABCVru0gkrsl7erGDQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@aron_aiconbia/post/DUnwhG7j2XR?xmt=AQF0oW887Ulm4hBRQhs9LR3wfNW8Lhgix0RiyOmVGz4Ltg",
      "content": "https://www.threads.com/@aron_aiconbia/post/DUnwhG7j2XR?xmt=AQF0oW887Ulm4hBRQhs9LR3wfNW8Lhgix0RiyOmVGz4Ltg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-80e6-a976-f62af164bfe3",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/1duaM0LiNdxjBOktd4SL5upFtu4rkAoEPaZ5nbXb2G-8/edit?usp=sharing",
      "content": "1주차 과제 제출합니다~\n1. prd.md 파일\n2. 서비스 스크린샷\nhttps://docs.google.com/document/d/1duaM0LiNdxjBOktd4SL5upFtu4rkAoEPaZ5nbXb2G-8/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jakvis.labs/post/DUnvaZsEi63?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "content": "https://www.threads.com/@jakvis.labs/post/DUnvaZsEi63?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DUnuYAFkgGl",
      "content": "https://www.threads.com/@makekim.kr/post/DUnuYAFkgGl",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f1-aa1e-f7250a0d3470",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@okay.community/post/DUnufz8D1Cn?xmt=AQF0xaGPZKVzfGYpDPXh6ppPobDBZ21_XCiupdMlgGx_Nn46H1p_7b4RQLhUQWn2-QYKyrSh&slof=1",
      "content": "https://www.threads.com/@okay.community/post/DUnufz8D1Cn?xmt=AQF0xaGPZKVzfGYpDPXh6ppPobDBZ21_XCiupdMlgGx_Nn46H1p_7b4RQLhUQWn2-QYKyrSh&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DUnthdMj2aV?xmt=AQF0OPuT89aoHLgz7pXwHs7gCAhi0z4SJXt5GG-u2FiEsr6egSQnPrcNxxdQL3MrQTa-eIw&slof=1",
      "content": "https://www.threads.com/@swlbear/post/DUnthdMj2aV?xmt=AQF0OPuT89aoHLgz7pXwHs7gCAhi0z4SJXt5GG-u2FiEsr6egSQnPrcNxxdQL3MrQTa-eIw&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/reel/DUnZPleD5L7/?igsh=aW95Ync3cm54bjF1",
      "content": "https://www.instagram.com/reel/DUnZPleD5L7/?igsh=aW95Ync3cm54bjF1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DUnLoydkTSN?xmt=AQF0hmAVLBbNz2Kr-zZ3Ov1AsVufkx547yJ1loRyajhrVg",
      "content": "https://www.threads.com/@inner.builder/post/DUnLoydkTSN?xmt=AQF0hmAVLBbNz2Kr-zZ3Ov1AsVufkx547yJ1loRyajhrVg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DUnDL4bgqXm?xmt=AQF06S_w6C7xOrVfmdkbACEsHq6BapvIzrf-tCMEabWV5A",
      "content": "https://www.threads.com/@home_dad_sol/post/DUnDL4bgqXm?xmt=AQF06S_w6C7xOrVfmdkbACEsHq6BapvIzrf-tCMEabWV5A",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DUnXIBAkoBn?xmt=AQF0QDkW1WlYG5XZxwwneC9B7rpsMuSXyxQQmmDvmqQMkQ",
      "content": "https://www.threads.com/@slowwbuilder/post/DUnXIBAkoBn?xmt=AQF0QDkW1WlYG5XZxwwneC9B7rpsMuSXyxQQmmDvmqQMkQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://naver.me/5If2obcH",
      "content": "https://naver.me/5If2obcH",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DUnPLcqj0G_?xmt=AQF0Zk9WD1MI-t-Qyv6cZtjOAKmO2SNsdrYQM_sAGpCdFA",
      "content": "https://www.threads.com/@ai.vibecoding/post/DUnPLcqj0G_?xmt=AQF0Zk9WD1MI-t-Qyv6cZtjOAKmO2SNsdrYQM_sAGpCdFA",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dotshef/post/DUm3_fxEY5u?hl=ko",
      "content": "https://www.threads.com/@dotshef/post/DUm3_fxEY5u?hl=ko",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DUmkCXqib6y?xmt=AQF0FUxyxahb78V8tNvF-KiI1RZ-0rVNdrugFmobgmzzGH4",
      "content": "https://www.threads.com/@dodo_list_/post/DUmkCXqib6y?xmt=AQF0FUxyxahb78V8tNvF-KiI1RZ-0rVNdrugFmobgmzzGH4",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DUmbb6AjyWd?xmt=AQF0ISFUidnCeNeEjCRRY5vSEK7Yk_ByO3vfjy98qyErAd0Xt7dos5Z6yD5Jie7rUZh4HaZL&slof=1",
      "content": "https://www.threads.com/@lawyerssm/post/DUmbb6AjyWd?xmt=AQF0ISFUidnCeNeEjCRRY5vSEK7Yk_ByO3vfjy98qyErAd0Xt7dos5Z6yD5Jie7rUZh4HaZL&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-11",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/stevejobboo_rlksxiuksqsi-ai-gtm-share-7427164674170757120-tQlT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "content": "https://www.linkedin.com/posts/stevejobboo_rlksxiuksqsi-ai-gtm-share-7427164674170757120-tQlT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-10",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/valueforyourbiz_i-connected-claude-code-with-the-newsletter-activity-7426597974404915201-2mrz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6L56oBcnSGNNosRJL25X2aGHLoxESQD-U",
      "content": "https://www.linkedin.com/posts/valueforyourbiz_i-connected-claude-code-with-the-newsletter-activity-7426597974404915201-2mrz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6L56oBcnSGNNosRJL25X2aGHLoxESQD-U\n\nhttps://www.instagram.com/reel/DUjUrZgioyz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/stevejobboo_ascstu-activity-7426624973089280000-nwVI?utm_source=share&utm_medium=member_android&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "content": "https://www.linkedin.com/posts/stevejobboo_ascstu-activity-7426624973089280000-nwVI?utm_source=share&utm_medium=member_android&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-09",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://www.threads.com/asdjklasdjl",
      "content": "과제 테스트입니다.\n\nhttps://www.threads.com/asdjklasdjl",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-09",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://www.threads.com/asdjklasdjl",
      "content": "과제 테스트입니다.\n\nhttps://www.threads.com/asdjklasdjl",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-09",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://www.threads.com/asdjklasdjl",
      "content": "과제 테스트입니다.\n\nhttps://www.threads.com/asdjklasdjl",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-09",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://www.threads.com/asdjklasdjl",
      "content": "과제 테스트입니다.\n\nhttps://www.threads.com/asdjklasdjl",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-09",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://www.threads.com/asdjklasdjl",
      "content": "https://www.threads.com/asdjklasdjl",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81d4-b2d8-e81a50044ba1",
      "date": "2026-02-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/sjdalkdjlads",
      "content": "https://www.threads.com/sjdalkdjlads",
      "images": null
    }
  ],
  "lastUpdated": "2026-02-12T18:38:03.323356"
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
