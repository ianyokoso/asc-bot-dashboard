
import { Member, Track, Submission, SubmissionStatus } from './types';

// ✅ Python 스크립트로 추출한 실제 데이터 (Last Sync: 2026-02-19 10:20:16)
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
      "name": "이효정",
      "discordId": "1126851617686306919",
      "discordUsername": "s5amu5",
      "discordNickname": "샤무스/1기",
      "profileImage": "https://cdn.discordapp.com/embed/avatars/5.png",
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
        "Builder Advanced"
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
      "discordNickname": "이화연/카라/6기",
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
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-19",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DU51auxD1Y3?xmt=AQF0m7udYVyVp0wAjqE0ORuWt1f_vYkbdg7Lct0QyXjn6yeFt9D-9OXd7Lme02qkslDAVJfb&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DU51auxD1Y3?xmt=AQF0m7udYVyVp0wAjqE0ORuWt1f_vYkbdg7Lct0QyXjn6yeFt9D-9OXd7Lme02qkslDAVJfb&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-19",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DU51auxD1Y3?xmt=AQF0m7udYVyVp0wAjqE0ORuWt1f_vYkbdg7Lct0QyXjn6yeFt9D-9OXd7Lme02qkslDAVJfb&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DU51auxD1Y3?xmt=AQF0m7udYVyVp0wAjqE0ORuWt1f_vYkbdg7Lct0QyXjn6yeFt9D-9OXd7Lme02qkslDAVJfb&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8114-b66c-c76e8e022b02",
      "date": "2026-02-22",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://claim-safe-flow.lovable.app/",
      "content": "AI 기반 운수업 금융 운영 및 리스크 인프라 플랫폼\n\n\nPRD\n화일로 첨부\n\n랜딩 페이지\nhttps://claim-safe-flow.lovable.app/\n\n랜딩 페이지는 lovable 업글 후 재정비 해보도록 하겠습니다",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8114-b66c-c76e8e022b02",
      "date": "2026-02-22",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://claim-safe-flow.lovable.app/",
      "content": "AI 기반 운수업 금융 운영 및 리스크 인프라 플랫폼\n\n\nPRD\n화일로 첨부\n\n랜딩 페이지\nhttps://claim-safe-flow.lovable.app/\n\n랜딩 페이지는 lovable 업글 후 재정비 해보도록 하겠습니다",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DU5wqa2j1rd?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DU5wqa2j1rd?hl=ko",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DU5wqa2j1rd?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DU5wqa2j1rd?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DU5uxxfEbo-?xmt=AQF0_BRRCOnPb74h55ET1jcEzJIfGO53VJBf0HNafYZdLQ",
      "content": "https://www.threads.com/@inner.builder/post/DU5uxxfEbo-?xmt=AQF0_BRRCOnPb74h55ET1jcEzJIfGO53VJBf0HNafYZdLQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DU5uxxfEbo-?xmt=AQF0_BRRCOnPb74h55ET1jcEzJIfGO53VJBf0HNafYZdLQ",
      "content": "https://www.threads.com/@inner.builder/post/DU5uxxfEbo-?xmt=AQF0_BRRCOnPb74h55ET1jcEzJIfGO53VJBf0HNafYZdLQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DU5pB-vE7WW?xmt=AQF0Z-hUKatGptcJsClPL0WllFP2xiFpyoPWW-nNY8dP3g",
      "content": "https://www.threads.com/@ai.profitwise/post/DU5pB-vE7WW?xmt=AQF0Z-hUKatGptcJsClPL0WllFP2xiFpyoPWW-nNY8dP3g",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DU5pB-vE7WW?xmt=AQF0Z-hUKatGptcJsClPL0WllFP2xiFpyoPWW-nNY8dP3g",
      "content": "https://www.threads.com/@ai.profitwise/post/DU5pB-vE7WW?xmt=AQF0Z-hUKatGptcJsClPL0WllFP2xiFpyoPWW-nNY8dP3g",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DU5efSYkrkx",
      "content": "https://www.threads.com/@makekim.kr/post/DU5efSYkrkx",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DU5efSYkrkx",
      "content": "https://www.threads.com/@makekim.kr/post/DU5efSYkrkx",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@stevejobboogtm/post/DU5WMQUgWwq?xmt=AQF0kBZuCcIe7uUQACSldeqAann7Pa0mO9XTrZSlUC9qzZmqd6cgGbz3j9XA-IxC7miQp0M&slof=1",
      "content": "https://www.threads.com/@stevejobboogtm/post/DU5WMQUgWwq?xmt=AQF0kBZuCcIe7uUQACSldeqAann7Pa0mO9XTrZSlUC9qzZmqd6cgGbz3j9XA-IxC7miQp0M&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@stevejobboogtm/post/DU5WMQUgWwq?xmt=AQF0kBZuCcIe7uUQACSldeqAann7Pa0mO9XTrZSlUC9qzZmqd6cgGbz3j9XA-IxC7miQp0M&slof=1",
      "content": "https://www.threads.com/@stevejobboogtm/post/DU5WMQUgWwq?xmt=AQF0kBZuCcIe7uUQACSldeqAann7Pa0mO9XTrZSlUC9qzZmqd6cgGbz3j9XA-IxC7miQp0M&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DU5Vto8j9w7?xmt=AQF05JogN51EyfNbwNZxTyHB9pNw8QPVGG9uBWP72OjJtoC25rW9lSWqF_U4OFf1qCiGhWev&slof=1",
      "content": "https://www.threads.com/@lawyerssm/post/DU5Vto8j9w7?xmt=AQF05JogN51EyfNbwNZxTyHB9pNw8QPVGG9uBWP72OjJtoC25rW9lSWqF_U4OFf1qCiGhWev&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DU5Vto8j9w7?xmt=AQF05JogN51EyfNbwNZxTyHB9pNw8QPVGG9uBWP72OjJtoC25rW9lSWqF_U4OFf1qCiGhWev&slof=1",
      "content": "https://www.threads.com/@lawyerssm/post/DU5Vto8j9w7?xmt=AQF05JogN51EyfNbwNZxTyHB9pNw8QPVGG9uBWP72OjJtoC25rW9lSWqF_U4OFf1qCiGhWev&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DU5ROFUkY4X?xmt=AQF0ftijBZgr9fC9N81VjRy2Her4LOj6cToQA7vduRQx1Q",
      "content": "https://www.threads.com/@fortunecat_saju/post/DU5ROFUkY4X?xmt=AQF0ftijBZgr9fC9N81VjRy2Her4LOj6cToQA7vduRQx1Q",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DU5ROFUkY4X?xmt=AQF0ftijBZgr9fC9N81VjRy2Her4LOj6cToQA7vduRQx1Q",
      "content": "https://www.threads.com/@fortunecat_saju/post/DU5ROFUkY4X?xmt=AQF0ftijBZgr9fC9N81VjRy2Her4LOj6cToQA7vduRQx1Q",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://x.com/dot_shef/status/2024052220355076315",
      "content": "https://x.com/dot_shef/status/2024052220355076315",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://x.com/dot_shef/status/2024052220355076315",
      "content": "https://x.com/dot_shef/status/2024052220355076315",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DU49yj6iCYn?xmt=AQF0REDXJBRS6UcNxnKtGQj7ceIAtDcK0DZMrAK2I6EjG7JR9rti-f3RDC1hGaIAAm1FtJEo&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DU49yj6iCYn?xmt=AQF0REDXJBRS6UcNxnKtGQj7ceIAtDcK0DZMrAK2I6EjG7JR9rti-f3RDC1hGaIAAm1FtJEo&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DU49yj6iCYn?xmt=AQF0REDXJBRS6UcNxnKtGQj7ceIAtDcK0DZMrAK2I6EjG7JR9rti-f3RDC1hGaIAAm1FtJEo&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DU49yj6iCYn?xmt=AQF0REDXJBRS6UcNxnKtGQj7ceIAtDcK0DZMrAK2I6EjG7JR9rti-f3RDC1hGaIAAm1FtJEo&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-22",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://open.substack.com/pub/daddoctordeveloper/p/8-years-of-surgery-10-months-away?utm_campaign=post&utm_medium=email",
      "content": "https://open.substack.com/pub/daddoctordeveloper/p/8-years-of-surgery-10-months-away?utm_campaign=post&utm_medium=email",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-22",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://open.substack.com/pub/daddoctordeveloper/p/8-years-of-surgery-10-months-away?utm_campaign=post&utm_medium=email",
      "content": "https://open.substack.com/pub/daddoctordeveloper/p/8-years-of-surgery-10-months-away?utm_campaign=post&utm_medium=email",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DU4pLYekaXe?xmt=AQF07HM5uOMIEHLCgI5g6L1v7jm0gCZnZwNaEYqcKHvV9pZf1UvJs6xAkkzQ9mqlJ7SeJPXe&slof=1",
      "content": "https://www.threads.com/@interior.pulse/post/DU4pLYekaXe?xmt=AQF07HM5uOMIEHLCgI5g6L1v7jm0gCZnZwNaEYqcKHvV9pZf1UvJs6xAkkzQ9mqlJ7SeJPXe&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DU4pLYekaXe?xmt=AQF07HM5uOMIEHLCgI5g6L1v7jm0gCZnZwNaEYqcKHvV9pZf1UvJs6xAkkzQ9mqlJ7SeJPXe&slof=1",
      "content": "https://www.threads.com/@interior.pulse/post/DU4pLYekaXe?xmt=AQF07HM5uOMIEHLCgI5g6L1v7jm0gCZnZwNaEYqcKHvV9pZf1UvJs6xAkkzQ9mqlJ7SeJPXe&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DU4mS9sD6mw?xmt=AQF0fbM0hL9WiGF6eTrTeczy0VRt1_SqIfIzzlkObtQM8UFkWYK9SKqgJr7LnVhUI1s-HeGe&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DU4mS9sD6mw?xmt=AQF0fbM0hL9WiGF6eTrTeczy0VRt1_SqIfIzzlkObtQM8UFkWYK9SKqgJr7LnVhUI1s-HeGe&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DU4mS9sD6mw?xmt=AQF0fbM0hL9WiGF6eTrTeczy0VRt1_SqIfIzzlkObtQM8UFkWYK9SKqgJr7LnVhUI1s-HeGe&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DU4mS9sD6mw?xmt=AQF0fbM0hL9WiGF6eTrTeczy0VRt1_SqIfIzzlkObtQM8UFkWYK9SKqgJr7LnVhUI1s-HeGe&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DU4G4MnilIK?xmt=AQF0N8IBTHwgJllzXGyDHnxoRPvpJPX99BwN_yeUaQCF4FDRbyLm3pCoJNRLbI55u4NNn-c&slof=1",
      "content": "https://www.threads.com/@dodo_list_/post/DU4G4MnilIK?xmt=AQF0N8IBTHwgJllzXGyDHnxoRPvpJPX99BwN_yeUaQCF4FDRbyLm3pCoJNRLbI55u4NNn-c&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DU4G4MnilIK?xmt=AQF0N8IBTHwgJllzXGyDHnxoRPvpJPX99BwN_yeUaQCF4FDRbyLm3pCoJNRLbI55u4NNn-c&slof=1",
      "content": "https://www.threads.com/@dodo_list_/post/DU4G4MnilIK?xmt=AQF0N8IBTHwgJllzXGyDHnxoRPvpJPX99BwN_yeUaQCF4FDRbyLm3pCoJNRLbI55u4NNn-c&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/reel/DU4TjD7j12w/?igsh=MXFhbWo1bHRibHd6",
      "content": "https://www.instagram.com/reel/DU4TjD7j12w/?igsh=MXFhbWo1bHRibHd6",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/reel/DU4TjD7j12w/?igsh=MXFhbWo1bHRibHd6",
      "content": "https://www.instagram.com/reel/DU4TjD7j12w/?igsh=MXFhbWo1bHRibHd6",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DU36yrLiHuY?xmt=AQF07TNnl8lzb0-7KuBT1dPi7ShKJ7Y4bsfDHew76sFA01TqGG7oIX_7V1O1Y8LRD4KJedMy&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DU36yrLiHuY?xmt=AQF07TNnl8lzb0-7KuBT1dPi7ShKJ7Y4bsfDHew76sFA01TqGG7oIX_7V1O1Y8LRD4KJedMy&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-18",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DU36yrLiHuY?xmt=AQF07TNnl8lzb0-7KuBT1dPi7ShKJ7Y4bsfDHew76sFA01TqGG7oIX_7V1O1Y8LRD4KJedMy&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DU36yrLiHuY?xmt=AQF07TNnl8lzb0-7KuBT1dPi7ShKJ7Y4bsfDHew76sFA01TqGG7oIX_7V1O1Y8LRD4KJedMy&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DU3Ou_dD9Az?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DU3Ou_dD9Az?hl=ko",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DU3Ou_dD9Az?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DU3Ou_dD9Az?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DU3JX_pE3Z3?xmt=AQF0U74BpV3PqeNDLd21l6Gwo5rEJVwGH8Y-nugyGZ4SixMCCWmkDkSC8byi9OhmwVPWEFc&slof=1",
      "content": "https://www.threads.com/@ai.profitwise/post/DU3JX_pE3Z3?xmt=AQF0U74BpV3PqeNDLd21l6Gwo5rEJVwGH8Y-nugyGZ4SixMCCWmkDkSC8byi9OhmwVPWEFc&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DU3JX_pE3Z3?xmt=AQF0U74BpV3PqeNDLd21l6Gwo5rEJVwGH8Y-nugyGZ4SixMCCWmkDkSC8byi9OhmwVPWEFc&slof=1",
      "content": "https://www.threads.com/@ai.profitwise/post/DU3JX_pE3Z3?xmt=AQF0U74BpV3PqeNDLd21l6Gwo5rEJVwGH8Y-nugyGZ4SixMCCWmkDkSC8byi9OhmwVPWEFc&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DU3JLi5kmzI?xmt=AQF0ftijBZgr9fC9N81VjRy2Her4LOj6cToQA7vduRQx1Q",
      "content": "https://www.threads.com/@fortunecat_saju/post/DU3JLi5kmzI?xmt=AQF0ftijBZgr9fC9N81VjRy2Her4LOj6cToQA7vduRQx1Q",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DU3JLi5kmzI?xmt=AQF0ftijBZgr9fC9N81VjRy2Her4LOj6cToQA7vduRQx1Q",
      "content": "https://www.threads.com/@fortunecat_saju/post/DU3JLi5kmzI?xmt=AQF0ftijBZgr9fC9N81VjRy2Her4LOj6cToQA7vduRQx1Q",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DU3He2ZEvUa",
      "content": "https://www.threads.com/@makekim.kr/post/DU3He2ZEvUa",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DU3He2ZEvUa",
      "content": "https://www.threads.com/@makekim.kr/post/DU3He2ZEvUa",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DU2tPC1D964?xmt=AQF0i54vUdoa4r0MaD4rEUnhPAKBXsriZ7moL_Mp-bRXHhYz5TM-wOu37t5cw930Anf3za6F&slof=1",
      "content": "https://www.threads.com/@lawyerssm/post/DU2tPC1D964?xmt=AQF0i54vUdoa4r0MaD4rEUnhPAKBXsriZ7moL_Mp-bRXHhYz5TM-wOu37t5cw930Anf3za6F&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/reel/DU1zTH8j70v/?igsh=dmkyMDRuYzJzamhh",
      "content": "https://www.instagram.com/reel/DU1zTH8j70v/?igsh=dmkyMDRuYzJzamhh",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DU2McwhkVKH?xmt=AQF0Eg-sGufcbRlSG6RLu3xPrszBNnj-nCu972WnDwP3XsdyTXq6HIHadzy14SW_DMtoFxQ&slof=1",
      "content": "https://www.threads.com/@interior.pulse/post/DU2McwhkVKH?xmt=AQF0Eg-sGufcbRlSG6RLu3xPrszBNnj-nCu972WnDwP3XsdyTXq6HIHadzy14SW_DMtoFxQ&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/reel/DU1kkgbClzv/?igsh=M2dsZGs0amRnMWl3",
      "content": "https://www.instagram.com/reel/DU1kkgbClzv/?igsh=M2dsZGs0amRnMWl3",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DU1vKuwj1u6?xmt=AQF0oPuN3S5ro8_iNeVL0C0yW9qgt5eELStdeTQWo1iOvdHQwyfNf7OGkYCVzjRZPGetQjg&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DU1vKuwj1u6?xmt=AQF0oPuN3S5ro8_iNeVL0C0yW9qgt5eELStdeTQWo1iOvdHQwyfNf7OGkYCVzjRZPGetQjg&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DU16NjRifv1?xmt=AQF0K0yPL7CDxfMp27LbS4ko6_kCDp9yq3w5-Rn4gSp1ItwQyZILjOkMu4QLLFx-EenRVuKL&slof=1",
      "content": "https://www.threads.com/@dodo_list_/post/DU16NjRifv1?xmt=AQF0K0yPL7CDxfMp27LbS4ko6_kCDp9yq3w5-Rn4gSp1ItwQyZILjOkMu4QLLFx-EenRVuKL&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-17",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/stevejobboo_%EB%AA%85%EC%A0%88-%EC%95%9E%EB%91%90%EA%B3%A0-%EC%84%A0%ED%83%9D%ED%95%9C-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EA%B0%80%EC%A1%B1%EC%97%AC%ED%96%89-%EC%84%9C%EC%9A%B8%EB%9E%9C%EB%93%9C-%EC%95%84%EC%9D%B4%EA%B0%80-%EC%9E%88%EB%8A%94-%EB%B6%80%EB%AA%A8%EB%9D%BC%EB%A9%B4-%EB%AA%85%EC%A0%88-ugcPost-7429178290684440576-uSWg?utm_source=share&utm_medium=member_android&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "content": "https://www.linkedin.com/posts/stevejobboo_%EB%AA%85%EC%A0%88-%EC%95%9E%EB%91%90%EA%B3%A0-%EC%84%A0%ED%83%9D%ED%95%9C-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EA%B0%80%EC%A1%B1%EC%97%AC%ED%96%89-%EC%84%9C%EC%9A%B8%EB%9E%9C%EB%93%9C-%EC%95%84%EC%9D%B4%EA%B0%80-%EC%9E%88%EB%8A%94-%EB%B6%80%EB%AA%A8%EB%9D%BC%EB%A9%B4-%EB%AA%85%EC%A0%88-ugcPost-7429178290684440576-uSWg?utm_source=share&utm_medium=member_android&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DU0eeFmkiA5?xmt=AQF0ftijBZgr9fC9N81VjRy2Her4LOj6cToQA7vduRQx1Q",
      "content": "https://www.threads.com/@fortunecat_saju/post/DU0eeFmkiA5?xmt=AQF0ftijBZgr9fC9N81VjRy2Her4LOj6cToQA7vduRQx1Q",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DU0a-0tkR-u?xmt=AQF0KHNqlXmoqF0ncDh-p_k3ngkb0zmo-JXuPiFpxZcQFQ",
      "content": "https://www.threads.com/@inner.builder/post/DU0a-0tkR-u?xmt=AQF0KHNqlXmoqF0ncDh-p_k3ngkb0zmo-JXuPiFpxZcQFQ",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://x.com/dot_shef/status/2023375162163503427",
      "content": "https://x.com/dot_shef/status/2023375162163503427\n\nX로 이전했습니다. ㅎㅅㅎ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8159-b3d8-e1116d0b8b19",
      "date": "2026-02-22",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472931281028251823/SKILL.md?ex=69945da7&is=69930c27&hm=ca45f769397a895c7845bc550ab399afc5a8b75da90706d79b10befb6b5eaba8&",
      "content": "연휴 이슈로 날짜를 착각해 뒤늦게 제출합니다.\n코드 리포지토리에서의 작업 이력을 (Git과 별개로) history.md 파일에 기록하는 스킬을 만들어 보았습니다. Git 커밋에는 명시적으로 포함되지 않는 작업들, 이를테면 코드 분석, 방향성 논의, 설계 문서 작성, 기존 PRD 보완 등의 작업을 수행하고 그 결과를 기록으로 남길 때 사용하고 있습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DU0W-eDEr8G",
      "content": "https://www.threads.com/@makekim.kr/post/DU0W-eDEr8G",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DU0N5Upj2vc?xmt=AQF058CFFsPw-ugmyJftMF68kmjaeOe2SliEYj5Cb7LqKhklXG-5wUdppsp-Gu8IuDNBaBHY&slof=1",
      "content": "https://www.threads.com/@lawyerssm/post/DU0N5Upj2vc?xmt=AQF058CFFsPw-ugmyJftMF68kmjaeOe2SliEYj5Cb7LqKhklXG-5wUdppsp-Gu8IuDNBaBHY&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DUzwfnHEl_I?xmt=AQF0yR7yMALZ88G2e2Qlz8p0XxnrYWuJIu5DSHEGFb_Aict2gCk0Rf04wHK1yGiEmwGBTwlz&slof=1",
      "content": "https://www.threads.com/@slowwbuilder/post/DUzwfnHEl_I?xmt=AQF0yR7yMALZ88G2e2Qlz8p0XxnrYWuJIu5DSHEGFb_Aict2gCk0Rf04wHK1yGiEmwGBTwlz&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DUzsVSXkx7m?xmt=AQF0J5qoZEloRodOP_xa1EDu0n8Oyy5pry29Yg4WybjZ2uu2yA43_pgGBsGTBzdY3UzlCPk&slof=1",
      "content": "https://www.threads.com/@ai.profitwise/post/DUzsVSXkx7m?xmt=AQF0J5qoZEloRodOP_xa1EDu0n8Oyy5pry29Yg4WybjZ2uu2yA43_pgGBsGTBzdY3UzlCPk&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DUzq-AoiLMN?xmt=AQF0CWCKsNV9xTbuOAyVULv2kRvyvmmdYjvVZeV5FXcVMxZS2Fi2HxJ85XCrF86l5diO1jKL&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DUzq-AoiLMN?xmt=AQF0CWCKsNV9xTbuOAyVULv2kRvyvmmdYjvVZeV5FXcVMxZS2Fi2HxJ85XCrF86l5diO1jKL&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DUzYz_5CdpW?xmt=AQF0WHw7j5gi-aCf7ehiXkOnPtYACOLhzpFVlGYQFAH7LOMMXa7ZjLvpfvqAzQcHG7s0NV8&slof=1",
      "content": "https://www.threads.com/@dodo_list_/post/DUzYz_5CdpW?xmt=AQF0WHw7j5gi-aCf7ehiXkOnPtYACOLhzpFVlGYQFAH7LOMMXa7ZjLvpfvqAzQcHG7s0NV8&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DUy-acIk2pS?xmt=AQF05U-c9K6g2TOXBtF4tQVf2KgDPiCADUa9fKLdj9YENw",
      "content": "https://www.threads.com/@ai.vibecoding/post/DUy-acIk2pS?xmt=AQF05U-c9K6g2TOXBtF4tQVf2KgDPiCADUa9fKLdj9YENw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/reel/DUzVUsyD-EO/?igsh=MXBkemp0cTU3NnR3Yg==",
      "content": "https://www.instagram.com/reel/DUzVUsyD-EO/?igsh=MXBkemp0cTU3NnR3Yg==",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8115-b45c-d6f367a7c18a",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472635174973079575/skill.md?ex=699349e1&is=6991f861&hm=aa1b0e1519ac87f0c1673fd056eb346c7f1f4a6c281d700ffdd13353f2d2f70b&",
      "content": "클로드의 부족한점을 코덱스로 보완하기 위해 만든 스킬이고 예전부터 자주 애용하고 있습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-16",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DUyI_Fjk3mw?xmt=AQF09k4ZPugSw3gLbAWCk-JPR59VSGfDOZsjEfOTjlCq-gl3UH7vQLuBc41KcdkiBCMzPxxJ&slof=1",
      "content": "https://www.threads.com/@interior.pulse/post/DUyI_Fjk3mw?xmt=AQF09k4ZPugSw3gLbAWCk-JPR59VSGfDOZsjEfOTjlCq-gl3UH7vQLuBc41KcdkiBCMzPxxJ&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81a2-b5d9-cd59c87a32f7",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472617425747972168/skill.md?ex=6993395a&is=6991e7da&hm=5cbcc181bbe5932b50a0022c0d66dbf13871299c98c479ce672d62bbbf641c39&",
      "content": "Openclaw를 활용한 스킬 중 이 스킬은 브리핑/분석/추천을 같은 형식으로 통일해서 품질 흔들림을 막는 용도입니다. \n• 특히 **리스크 규칙(손절/일손실/포지션 수)**을 강제해서 감정매매를 줄이는 게 포인트입니다 • “주식비서” 호출 시 이 포맷대로 답하면 일관된 투자 보조가 가능하도록 하는 skill 중 하나 입니다",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DUyGMOFkxzv?xmt=AQF0-AuOuPPq45FDsCjLEYffAfqYrKl0RusPviT9XMsD9V9rAl3eo6eEoPSLCgtNh2YVkTU&slof=1",
      "content": "https://www.threads.com/@interior.pulse/post/DUyGMOFkxzv?xmt=AQF0-AuOuPPq45FDsCjLEYffAfqYrKl0RusPviT9XMsD9V9rAl3eo6eEoPSLCgtNh2YVkTU&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-819d-88e9-d4779a5f1f87",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472607377663590481/suneung-skill.md?ex=69932ffe&is=6991de7e&hm=fa619f8f171c2df7f3b143f85929a104bf805531762a7decbef38764ada5b523&",
      "content": "EBS 수능특강 영어 지문을 ppt로 만들어 주는 스킬입니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DUyFKWhEoTZ?xmt=AQF0hjbYPzcoRxfbuQeSAb-fOyOnLfYICuq8Kg1eBoh5V6rlWv53Lo2H5OWrJNxhrZ0qQNc&slof=1",
      "content": "https://www.threads.com/@makekim.kr/post/DUyFKWhEoTZ?xmt=AQF0hjbYPzcoRxfbuQeSAb-fOyOnLfYICuq8Kg1eBoh5V6rlWv53Lo2H5OWrJNxhrZ0qQNc&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f1-aa1e-f7250a0d3470",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1472605587471601837/PRD.md?ex=69932e53&is=6991dcd3&hm=e492aec637a5cf8b46265fecc0f120966c7bd729440dca0d2be53332bedc71e6&",
      "content": "[박경민/케이/0기] 빌더 심화 과제",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f1-aa1e-f7250a0d3470",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1472604957156053064/image.png?ex=69932dbd&is=6991dc3d&hm=634b3fed5c648d50179f4c929d3673d499fd82362689ddcdf1e09fc0a8613200&",
      "content": "1주차 과제 제출",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1472604957156053064/image.png?ex=69932dbd&is=6991dc3d&hm=634b3fed5c648d50179f4c929d3673d499fd82362689ddcdf1e09fc0a8613200&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81f1-aa1e-f7250a0d3470",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1472604957156053064/image.png?ex=69932dbd&is=6991dc3d&hm=634b3fed5c648d50179f4c929d3673d499fd82362689ddcdf1e09fc0a8613200&",
      "content": "1주차 과제 제출",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1472604957156053064/image.png?ex=69932dbd&is=6991dc3d&hm=634b3fed5c648d50179f4c929d3673d499fd82362689ddcdf1e09fc0a8613200&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://blog.naver.com/teri_home/224185008341",
      "content": "https://blog.naver.com/teri_home/224185008341",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://maily.so/jake/posts/2nzn78g6rp5",
      "content": "https://maily.so/jake/posts/2nzn78g6rp5",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1472601217783038104/message.txt?ex=69932a41&is=6991d8c1&hm=bed74992855bce7b8dc84bc0480a03e6e163405b11f68f3062b733158e4ef634&",
      "content": "1주차 과제 인증입니다.\n앱인토스 앱 제작 중입니다 prd md파일 첨부해서 올렸습니다",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.notion.so/B2B-PRD-30846f468c0d8026a356c9535e2f4e71?source=copy_link",
      "content": "첫 과제 입니다.\n일대일 컨설팅 전환을 위한 리드로서 조직 진단 서비스를 운영할 계획입니다. \n\n- PRD\nhttps://www.notion.so/B2B-PRD-30846f468c0d8026a356c9535e2f4e71?source=copy_link\n\n- 랜딩 페이지\nhttps://kindred-connection-code.lovable.app/\nQ. 랜딩페이지가 제 컴퓨터에서 위 링크로 볼땐 정상적으로 보이는데, 아래 예시 이미지엔 깨져보입니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.notion.so/B2B-PRD-30846f468c0d8026a356c9535e2f4e71?source=copy_link",
      "content": "첫 과제 입니다.\n일대일 컨설팅 전환을 위한 리드로서 조직 진단 서비스를 운영할 계획입니다. \n\n- PRD\nhttps://www.notion.so/B2B-PRD-30846f468c0d8026a356c9535e2f4e71?source=copy_link\n\n- 랜딩 페이지\nhttps://kindred-connection-code.lovable.app/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.notion.so/B2B-PRD-30846f468c0d8026a356c9535e2f4e71?source=copy_link",
      "content": "첫 과제 입니다.\n일대일 컨설팅 전환을 위한 리드로서 조직 진단 서비스를 운영할 계획입니다. \n\n- PRD\nhttps://www.notion.so/B2B-PRD-30846f468c0d8026a356c9535e2f4e71?source=copy_link\n\n- 랜딩 페이지\nhttps://preview--kindred-connection-code.lovable.app/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.notion.so/B2B-PRD-30846f468c0d8026a356c9535e2f4e71?source=copy_link",
      "content": "첫 과제 입니다.\n일대일 컨설팅 전환을 위한 리드로서 조직 진단 서비스를 운영할 계획입니다. \n\n- PRD\nhttps://www.notion.so/B2B-PRD-30846f468c0d8026a356c9535e2f4e71?source=copy_link\n\n- 랜딩 페이지\nhttps://kindred-connection-code.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e0-8b9a-ec79b7a9c8ff",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472596860177875007/SKILL.md?ex=69932632&is=6991d4b2&hm=de0a3174cdb6a3c3dda4234bec6a07518a6d824bbdbdcfc516e14f3a8e9b0c00&",
      "content": "제 글의 문체를 학습하고 분석해 제가 콘텐츠를 입력하면 자동으로 제 문체의 책으로 집필해주는 스킬입니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.notion.so/B2B-PRD-30846f468c0d8026a356c9535e2f4e71?source=copy_link",
      "content": "첫 과제 입니다.\n일대일 컨설팅 전환을 위한 리드로서 조직 진단 서비스를 운영할 계획입니다. \n\n- PRD\nhttps://www.notion.so/B2B-PRD-30846f468c0d8026a356c9535e2f4e71?source=copy_link\n\n- 랜딩 페이지\nhttps://id-preview-6065cc91--b5cb0eda-7ea2-4b8a-beb7-1c8b3d5d84dd.lovable.app/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8137-8941-c3b05bd3ce53",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472592563843235840/SKILL.md?ex=69932232&is=6991d0b2&hm=4e8e26a2d2ac7e6506aa7c082889f075b809e772382fb77976a9f17ec2b364ad&",
      "content": "이메일을 음성으로 보낼 수 있도록 하는 스킬입니다. \n\n메신저로 내가 원하는 내용을 음성으로 입력하고, 관련된 인원에게 메일을 보내달라고 하면 보내주는 스킬입니다. \n\n이동중에도 이메일을 편하게 처리할 수 있습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8137-8941-c3b05bd3ce53",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cycle-sprint-goals.lovable.app",
      "content": "첫 과제 인증입니다!\n\n랜딩페이지 : https://cycle-sprint-goals.lovable.app\nPRD : https://drive.google.com/file/d/1zQvgI39HDhjXwoYtBuLx1m8wSbhR8pl4/view?usp=drivesdk\n\n잘 도와주셔서 겨우 따라왔습니다.\n계속 해보겠습니다\n감사합니다!",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f1-aa1e-f7250a0d3470",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472585179473252373/SKILL.md?ex=69931b52&is=6991c9d2&hm=935aedcfa86cf494f812f9bbd37391400e31f1382a2c8a5ed082a331e69c6d53&",
      "content": "오프라인 모임 커뮤니티 찾기 스킬\n\n이 스킬은 사용자가 원하는 오프라인 모임 커뮤니티를 찾아 가입 방법과 활동 정보를 제공합니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472579398602457212/SKILL.md?ex=699315ef&is=6991c46f&hm=e799282623d12714bb90097ef0f085357f42e32e6eb80eac9b23233fbd807fe4&",
      "content": "UI 레퍼런스 리서치를 조사 시킬 스킬을 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8146-9d11-eed95d59dfb4",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/JGGz7JVFYTUhWEtoMycj2s",
      "content": "1주차 과제 제출합니다. \n\n1) 해외 영업 세일즈 퍼널\nhttps://whimsical.com/JGGz7JVFYTUhWEtoMycj2s\n\n2) USP 정의\nhttps://docs.google.com/document/d/1MXDYzplcYGwXZMDtoBmpAJfTZsHX0Sg_mw188W3LWGU/edit?usp=sharing\n\n3) 인터뷰지 (인터뷰 예정)\nhttps://docs.google.com/document/d/1CRsqCqGzTYO6LzyDYAFcKMF9_SBrWFPr8D2QonR6wMA/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8146-9d11-eed95d59dfb4",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/JGGz7JVFYTUhWEtoMycj2s",
      "content": "1주차 과제 제출합니다. \n\n1) 해외 영업 세일즈 퍼널\nhttps://whimsical.com/JGGz7JVFYTUhWEtoMycj2s\n\n2)",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ca-9eb7-cdeedff433d2",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/1A_JF1Qg36B2MeF7fONQqoa7wnVlIxP3Dsa89gPb8_5A/edit?usp=sharing",
      "content": "첫 과제인증입니다~\n\nPRD: https://docs.google.com/document/d/1A_JF1Qg36B2MeF7fONQqoa7wnVlIxP3Dsa89gPb8_5A/edit?usp=sharing\n\n랜딩페이지: https://betweenlines-mirror-journey.lovable.app",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ca-9eb7-cdeedff433d2",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/1A_JF1Qg36B2MeF7fONQqoa7wnVlIxP3Dsa89gPb8_5A/edit?usp=sharing",
      "content": "PRD: https://docs.google.com/document/d/1A_JF1Qg36B2MeF7fONQqoa7wnVlIxP3Dsa89gPb8_5A/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81a2-9270-ebe22111bc3f",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472571514456117354/SKILL.md?ex=69930e98&is=6991bd18&hm=8aef3f86e02823d9a3b77f67e99eb032c1ccbbe9cb805ddb83c4c6dc98ccc1c8&",
      "content": "강의영상 따라서 PPT 제작 스킬 만들었습니다^^",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8188-a616-ff7a66f4ef14",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472570974476959755/SKILL_KR.md?ex=69930e17&is=6991bc97&hm=89b28a9bfa2db03dcaf5a03c2af32c6a759c77ca100680cd44f1f8502dc4ec06&",
      "content": "1주차 과제 제출 - 회의 녹음, 요약본 제공 (단순 요약본을 제공하는게 아니라 백지상태에 있는 사람들도 이해할 수 있도록 회의록 정리 + 다음 액션 정리)",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8121-b8e7-c990031cf8df",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cueru.app",
      "content": "1주차 과제 제출합니다.\nhttps://cueru.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8195-a4a2-f00355c27e81",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1472563129929171137/masterplan.md?ex=699306c9&is=6991b549&hm=223ca93b54a677b99f14977c278212451c6fe6e6e055f3ed13d52189d0b1a4b8&",
      "content": "PRD, 스크린샷",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.notion.so/mangani/AI-30398082261c802f99b3c11dd88ac65b?source=copy_link)",
      "content": "```diff\n- 빌드 트랙(심화) 1주차 과제 제출합니다\n```\n\n1. [PRD.md](https://www.notion.so/mangani/AI-30398082261c802f99b3c11dd88ac65b?source=copy_link)\n키오스크 비교 사이트",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1472562264568627396/image.png?ex=699305fa&is=6991b47a&hm=3af7fac0be01fd5300838e138911f02d4da0c553888bb2f0094b12a680c8e9bd&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8195-a4a2-f00355c27e81",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472562048905904222/SKILL.md?ex=699305c7&is=6991b447&hm=2663e0fc7b3ff82f0fa63def73398881240ee5cf8ed3da43690a9ef6de4190d9&",
      "content": "과제 제출합니다. 동남아시아 스타트업 리서치 전용 스킬.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8108-a308-f045a8dc9c18",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472561031611023644/SKILL_1.md?ex=699304d4&is=6991b354&hm=b01302afcf93255acd75dd2af5e621b22cee2baa05031968818030210c092758&",
      "content": "1주차 과제 제출합니다\n고객사들의 이슈 리포팅을 자동 분류 및 담당자에게 전달하는 스킬입니다",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-9cd6-d0632ca3771a",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472561584315437171/transcript-to-ticktick.md?ex=69930558&is=6991b3d8&hm=f95f1090f8d226e1cf1a61be7fad2dabcf504946202f02e0fc11dd316521e9c7&",
      "content": "1주차 과제 - AI 녹음기의 전사내용에서 할일 목록을 뽑아서 TickTick에 이메일을 보내서 할일 목록에 추가하는 스킬.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1472561340144029900/image.png?ex=6993051e&is=6991b39e&hm=960e97a8f8fe6462624ccbc9861a1bc74c18de12895e6bb874a6a9f15cd4efbe&",
      "content": "1주차과제인증!",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1472561340144029900/image.png?ex=6993051e&is=6991b39e&hm=960e97a8f8fe6462624ccbc9861a1bc74c18de12895e6bb874a6a9f15cd4efbe&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8108-a308-f045a8dc9c18",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472561031611023644/SKILL_1.md?ex=699304d4&is=6991b354&hm=b01302afcf93255acd75dd2af5e621b22cee2baa05031968818030210c092758&",
      "content": "1주차 과제 제출합니다\n고객사들의 이슈 리포팅을 자동 분류 및 담당 개발자에게 전달하는 스킬입니다",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://maily.so/youngwon/posts/mjz6qpn1rwk",
      "content": "https://maily.so/youngwon/posts/mjz6qpn1rwk",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/BpygcQQb5okqueQU5CSgad",
      "content": "1주차 과제 제출합니다.\n\n[과제 1. 자신만의 퍼널 설계도 만들기]\nhttps://whimsical.com/BpygcQQb5okqueQU5CSgad\n\n[과제 2. 나만의 usp 정의하고 채워오기]\nhttps://docs.google.com/document/d/1tqsgda4hIVBPQwaXT1ViqLGs7LkTBM1P0xTTx-XLFIA/edit?usp=sharing\n\n[과제 3. 고객 인터뷰 3명 진행하기]\n2주차 과제 전에 진행분 올리겠습니다 !",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-819a-8f4f-f330a653f7ea",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/LfLENKdELXtutAxFHysVhE",
      "content": "퍼널 설계도 : https://whimsical.com/LfLENKdELXtutAxFHysVhE\nUSP : https://docs.google.com/document/d/1Ozw6zY7oXt8pH81agMxr8OhwFpVeoEA25eq-DNEUO4M/edit?usp=sharing\n고객인터뷰: https://docs.google.com/document/d/1D9PRCbSysCQvCcZ8nfZeeHaSvtbedhyZ/edit?usp=drive_link&ouid=106864949804080579348&rtpof=true&sd=true",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8114-b66c-c76e8e022b02",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://claude.ai/public/artifacts/0655efd9-3008-4d98-9238-cb6b8eba2546",
      "content": "과제인증 \n[과제1. 자신만의 퍼널 설계도 만들기]\nhttps://claude.ai/public/artifacts/0655efd9-3008-4d98-9238-cb6b8eba2546\n\n[과제2.나만의 usp 정의하고 채워오기 ]\nhttps://docs.google.com/document/d/e/2PACX-1vQ0XFrcAN-oUhkqxrvsjPGAaOTatw0K7sJRUk9LE0WiFf6e6OWHsbR_CBCBJzL7RD6-S_GMeKVjGAyB/pub\n\n[과제3.고객 인터뷰 3명 진행하기\n조금만 더 시간 부탁드립니다 ^^",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8139-82c8-cb21321cba9c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472555401378660641/SKILL.md?ex=6992ff96&is=6991ae16&hm=b8bf0e012ac815ee39da6ab4154646b293049a400935a94374627bd01f514ae4&",
      "content": "1주차 과제 제출합니다. 학습자료 로드맵 스킬입니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ff-9f12-c3b31a1345d3",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472552343903015035/mkt_writing_SKILL.md?ex=6992fcbd&is=6991ab3d&hm=dc422726f05d600da456fd59ff4a776488975e6fe661dca7d5c0c322fb7cba5d&",
      "content": "1주차 마케팅 글쓰기 스킬입니다.",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/10rQCHhPqW74n5RvDhlxLhWmBVv8zyYAPDW1gmrEME98/edit?usp=sharing",
      "content": "현재 도메인 만들기 전이어서, 발행 전의 뉴스레터를 공유합니다. \n\nhttps://docs.google.com/document/d/10rQCHhPqW74n5RvDhlxLhWmBVv8zyYAPDW1gmrEME98/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-819b-99af-dc7716a5f96f",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472551238129291306/SKILL.md?ex=6992fbb5&is=6991aa35&hm=7c80e7fef41f66943ec064ecbf2451b23368d9393e119912d2dcc7bc84e6a424&",
      "content": "1주차 과제 제출합니다.\n선물용 쿠키 세트 패키지 디자인 스킬입니다.  브랜드 커스터마이징 가능, 타겟층별, 시즈널 이슈에 따라 패키지 디자인을 제안합니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e6-873e-c5a131700198",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://afterwork-kr.vercel.app/",
      "content": "1주차 과제 제출합니다. 🙂\nPRD문서 : MD파일 첨부\n랜딩페이지 링크 : https://afterwork-kr.vercel.app/",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DUxr5BgEVBU?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DUxr5BgEVBU?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8028-8dbe-ef8246e90b85",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472548464431726685/power_contents_blog_writing_skill.md?ex=6992f920&is=6991a7a0&hm=30b11042e3e1335e40c32d681cc2e6a141286ff83b48439d352cfbc8e46db0ad&",
      "content": "1주차 네이버 파워콘텐츠 조건에 맞는 블로그 글 작성하기 skill",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8198-a241-c89bdcc70956",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472546281686700172/SKILL.md?ex=6992f718&is=6991a598&hm=6cf22ffcac35920bd94148b8989fbc349aa473823332c8f8a797da7bd1f47627&",
      "content": "1주차 과제 제출\n- 쓰레드 용 주제 키워드 트렌드, 인사이트/전문 지식 요약 및 정리",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81a0-9bc2-ce3cd8b4cc76",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472546168012804137/Skills.md?ex=6992f6fd&is=6991a57d&hm=fd07bd3f9159e689488704f2b580916ee04832786d84b7b5c033a51b1b37ac33&",
      "content": "1주차 미션 제출합니다. 업계 주간 뉴스를 정리하여 뉴스레터 형식으로 바꿔주는 스킬입니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-a487-f94ece8a83e8",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472543642831814779/Prompt_Triad_Orchestrator.md?ex=6992f4a2&is=6991a322&hm=ed47babbd6deb47b66252f09130cd44557a984b259100d43d2445753966fd35d&",
      "content": "1주차 미션 제출합니다.\n\n프롬프트 생성하는 Skill을 작업하고 있습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8028-8dbe-ef8246e90b85",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/1IGND2HlkFF0zQ8dG6-wu_J5NPhbKiyaAgT_91adSxvE/edit?usp=sharing",
      "content": "1주차\n- 판매상품 : 사업자 대표를 위한 ai 실무 활용법 강의 \n- PRD : https://docs.google.com/document/d/1IGND2HlkFF0zQ8dG6-wu_J5NPhbKiyaAgT_91adSxvE/edit?usp=sharing \n- 랜딩 : https://biz-ai-start.lovable.app/",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-81a2-a40f-d6a24d221c66",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/AhyEpU5CpGXer3VDCKYx7i",
      "content": "세일즈 1주차 과제 제출합니다~\n\n과제1 퍼널 설계도: https://whimsical.com/AhyEpU5CpGXer3VDCKYx7i \n과제2 USP 정의: https://docs.google.com/document/d/1k27x7G2kBwCWNsIsw2MQTFDRIEBxeE2hvglvCrOATUU/edit?usp=sharing \n과제2 고객인터뷰: https://docs.google.com/document/d/1jq4DV_DszGKc18D8R6jKacB2jnBfQwKrwoTpdN2ZV44/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81d7-91b5-d83cb15b5aa1",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://offer-boost-spot.lovable.app",
      "content": "1주차 과제 제출!\n- PRD문서 : MD파일 첨부\n- 랜딩페이지 링크 : https://offer-boost-spot.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8150-8a39-c0c9053c64a5",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://life-loop-health.lovable.app",
      "content": "빌더 1주차 과제\nPRD 문서 : 파일 업로드\n어플 랜딩 페이지 : https://life-loop-health.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8146-9d11-eed95d59dfb4",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472532508393345094/SKILL.md?ex=6992ea44&is=699198c4&hm=964ea9b7342909e07aa1329a1f34274d924eaf2a95bbf311144129635c5a9fb1&",
      "content": "1주차 과제 제출합니다. 소셜 미디어 자동 업로드 스킬입니다.",
      "images": null
    },
    {
      "memberId": "3006400e-9268-8121-ad2d-f0c76cb20143",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/zoopeterai-2o6nFLQKa8zPmzusiRxWmZ",
      "content": "세일즈 실전 1주차 과제 제출합니다\n\n과제1. 퍼널 설계도\nhttps://whimsical.com/zoopeterai-2o6nFLQKa8zPmzusiRxWmZ\n\n과제2. USP 정의 \nhttps://docs.google.com/document/d/1nsue6I7imm28CLg3DDhocutoJ_58rGMA5qkyKUq0imI/edit?usp=sharing\n\n과제3. 고객인터뷰 진행\nhttps://docs.google.com/document/d/11Oj9RXDFGs2r2fOiRMvbK8-GbdWgHgD7lhAo_JljOtI/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "3006400e-9268-8121-ad2d-f0c76cb20143",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/zoopeterai-2o6nFLQKa8zPmzusiRxWmZ",
      "content": "세일즈 실전 1주차 과제 제출합니다\n\n과제1. 퍼널 설계도\nhhttps://whimsical.com/zoopeterai-2o6nFLQKa8zPmzusiRxWmZ\n\n과제2. USP 정의 \nhttps://docs.google.com/document/d/1nsue6I7imm28CLg3DDhocutoJ_58rGMA5qkyKUq0imI/edit?usp=sharing\n\n과제3. 고객인터뷰 진행\nhttps://docs.google.com/document/d/11Oj9RXDFGs2r2fOiRMvbK8-GbdWgHgD7lhAo_JljOtI/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "3016400e-9268-8139-b447-fcbb968d8bf7",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472528406087205110/SKILL.md?ex=6992e672&is=699194f2&hm=2544aef4a4d0a7a6ec42b3ec2a4a6d5fd1b9f6ee8dedee64f8111ead779befcd&",
      "content": "1주차 과제 제출합니다. 쿠팡 데이터를 다운로드 받아 주간 매출 리포트를 자동화 해 주는 스킬입니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-818c-b026-cd92d926f7b9",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472525536847855757/SKILL.md?ex=6992e3c6&is=69919246&hm=69d4ec4ae1d8430008b71e9b25d59d23ab03f864202780285b99cd3105a2bafa&",
      "content": "1주차 과제 제출합니다!\n\niOS 앱 개발에서 , 한 개의 기능(피처)를 개발을 여러번 AI에게 요청을 하던 것을 \n\"한 번의 요청\"으로 (예시 \"로그인 기능 구현해줘\") \n대략적인 뼈대를 만들어주는 스킬을 만들어 보았습니다.\n\n[용어 설명]\n- TCA: iOS 앱 개발에서 앱의 상태 변화를 한 방향으로 흐르게 구조를 만들어주는 라이브러리(코드 모음집)\n- 클린 아키택처: 코드를 역할 별로 층을 나눠서 정리하는 방법론.",
      "images": null
    },
    {
      "memberId": "3006400e-9268-8121-ad2d-f0c76cb20143",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/1-fCiUX1mZ3knJ2Oxg-p_CtWrX3RY8mTvTDx72n1zG7o/edit?usp=sharing",
      "content": "빌더 기초 1주차 과제\n주식 종목 분석 앱\nPRD 문서 :\nhttps://docs.google.com/document/d/1-fCiUX1mZ3knJ2Oxg-p_CtWrX3RY8mTvTDx72n1zG7o/edit?usp=sharing\n\n랜딩페이지 : https://www.zoopeterai.com/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-9c9a-d07a9bb198fd",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472524888282497201/claude-code-skills.zip?ex=6992e32b&is=699191ab&hm=b67f2df8bf2d57f22cfe67ed1df43f0b2c9bcf50d7ca30cb4724192975c35476&",
      "content": "**Claude Code 커스텀 스킬 공유** - 세션 관리 + 배포 + 동기화\nSPEC.md(프로젝트 명세서) 기반 개발 워크플로우에서 쓰고 있는 스킬 4개 공유합니다.\n세션이 끊겨도 컨텍스트 유지하고, 종료 시 자동 정리되는 구조예요.\n\n스킬 소개\n- /session-start [작업] - 세션 시작 시 SPEC.md를 읽어서 \"지금 뭐 하고 있었는지\" 자동 요약. 세션 끊겨도 컨텍스트가 날아가지 않게 하려고 만들었어요.\n- /session-end [메모] - 세션 종료 시 자동 정리. Git 커밋 → SPEC.md 상태 업데이트 → GitHub Project 동기화 제안까지 3단계로 진행됩니다. typecheck + build 검증 포함.\n- /deploy [--preview] - 프로덕션(CI/CD) 또는 프리뷰(wrangler) 배포. lint → typecheck → test → 빌드 → 배포 → 모니터링을 한 커맨드로.\n- /sync [push|pull|status]-— SPEC.md 체크박스 작업 목록 ↔ GitHub Project 양방향 동기화. 둘 중 하나만 업데이트해도 동기화하면 끝.\n\n워크플로우 흐름\n/session-start [작업]     ← 컨텍스트 복원\n        ↓\n    (작업 수행)\n        ↓\n/session-end [메모]       ← 커밋 + SPEC.md 업데이트\n        ↓\n/deploy [--preview]       ← 배포 (필요 시)\n        ↓\n/sync push                ← GitHub Project 동기화 (필요 시)\n\n핵심은 SPEC.md를 프로젝트 상태의 Single Source of Truth로 쓰는 건데, session-end가 매번 자동 업데이트하고 session-start가 복원하는 루프입니다.\nSKILL.md 파일\n첨부된 파일을 .claude/skills/스킬명/SKILL.md에 넣으면 됩니다.\n프로젝트에 맞게 경로, 브랜치명, GitHub Project 상수 등을 수정해서 쓰세요.\n\nSPEC.md가 없으면 session-start/end의 효과가 반감되니, 프로젝트 명세서를 하나 만들어두는 걸 추천해요.",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/11qtk1tNILIOn6PjdNUXtXSpVeKmIDjgyPfOQm1l1N5c/edit?usp=sharing",
      "content": "빌더 기초 1주차 과제\nPRD 문서 : https://docs.google.com/document/d/11qtk1tNILIOn6PjdNUXtXSpVeKmIDjgyPfOQm1l1N5c/edit?usp=sharing\n랜딩 페이지 : https://aligned-brand-flow.lovable.app/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-818f-bd5a-de00ad0aebd9",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472518324800716900/ui-design-system-builder-SKILL.md?ex=6992dd0e&is=69918b8e&hm=5485439bc4de56059bb3005f4b8ac143fa44c8787febd759d28ba3f29d5343e9&",
      "content": "1주차 과제 제출합니다.\n저는 서비스 개발할 때 매번 디자인이 어려웠어요. 레퍼런스를 찾아보고, 직접 그려도 봤는데 생각보다 직관적이고 유려한 디자인이 잘 안나오더군요. 디자인에 시간을 많이 들여야 해서 SKill을 직접 만들었습니다",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-817f-8006-cc6b2816473d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://health-checkup-parsing.vercel.app/",
      "content": "근로자 건강진단 관리 서비스\n1. PRD.MD (첨부)\n\n2. 랜딩페이지: https://health-checkup-parsing.vercel.app/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/reel/DUxXh4ED6Z0/?igsh=YWZrd2dqcjlqczI0",
      "content": "https://www.instagram.com/reel/DUxXh4ED6Z0/?igsh=YWZrd2dqcjlqczI0",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472504562895294465/SKILL.md?ex=6992d03d&is=69917ebd&hm=2efd7dddb8126902ffa99d4df9e43e0052ec5d335257100b708c722d7e42d93d&",
      "content": "1주차 과제 제출합니다. 사이트 주소를 넣으면 그 사이트의 구조를 템플릿화 해주는 스킬입니다.  테스트로 m.samsung.com으로 만들어진 템플릿으로 기존에 만들어 놓았던 사이트를 리디자인 시켜보니 yumnote.png의 디자인이 landing-redesign-full.png로 변경이 되었습니다. 그래서 이번에는 그냥 기존의 디자인을 참고하지 말고 분석한대로 템플릿을 적용시켜서 리디자인을 해달라고 했습니다. 그렇게 해서 나온 결과가 landing-samsung-style-desktop.png입니다. 아직 초기버젼이라 조금 더 다듬어봐야겠습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472504563528503449/yumnote.png?ex=6992d03d&is=69917ebd&hm=f1676aa32a726618b8497cb4f341d6bd2b1056079d6441150191a34ac6905bf5&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472504564660834407/landing-redesign-full.png?ex=6992d03e&is=69917ebe&hm=ec8a989703ce944522ce067a0e462a8aca2865adfc8b9ffd5d7ecafe8ad2aca2&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472504565311078431/landing-samsung-style-desktop.png?ex=6992d03e&is=69917ebe&hm=63ef5c11c59d12ffc73ad3f661574ece9332890dc8f720e8d106c21c9c038338&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472502731423088712/yumnote.png?ex=6992ce88&is=69917d08&hm=f79019b1a83ca10d937b280f1ea6f48ddf994898c61ff02718db520d36a74456&",
      "content": "1주차 과제 제출합니다. 사이트 주소를 넣으면 그 사이트의 구조를 템플릿화 해주는 스킬입니다.  테스트로 m.samsung.com으로 만들어진 템플릿으로 기존에 만들어 놓았던 사이트를 리디자인 시켜보니 yumnote.png의 디자인이 landing-redesign-full.png로 변경이 되었습니다. 그래서 이번에는 그냥 기존의 디자인을 참고하지 말고 분석한대로 템플릿을 적용시켜서 리디자인을 해달라고 했습니다. 그렇게 해서 나온 결과가 landing-samsung-style-desktop.png입니다. 아직 초기버젼이라 조금 더 다듬어봐야겠습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472502731423088712/yumnote.png?ex=6992ce88&is=69917d08&hm=f79019b1a83ca10d937b280f1ea6f48ddf994898c61ff02718db520d36a74456&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472502732492505232/landing-redesign-full.png?ex=6992ce89&is=69917d09&hm=3f3b64ad0a3211cc4a23efa9bbdb0208c46f01cb9728ea4d44464a8b82a0a0a7&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472502733360599186/landing-samsung-style-desktop.png?ex=6992ce89&is=69917d09&hm=5dee30fdb5732a42f28a4eff4d45e4354dc53214b3d133db94babfb7c44fbb9c&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472502731423088712/yumnote.png?ex=6992ce88&is=69917d08&hm=f79019b1a83ca10d937b280f1ea6f48ddf994898c61ff02718db520d36a74456&",
      "content": "1주차 과제 제출합니다. 사이트 주소를 넣으면 그 사이트의 구조를 템플릿화 해주는 스킬입니다.  테스트로 m.samsung.com으로 만들어진 템플릿으로 기존에 만들어 놓았던 사이트를 리디자인 시켜보니 yumnote.png의 디자인이 landing-redesign-full.png로 변경이 되었습니다. 그래서 이번에는 그냥 기존의 디자인을 참고하지 말고 분석한대로 템플릿을 적용시켜서 리디자인을 해달라고 했습니다. 그렇게 해서 나온 결과가 landing-samsung-style-desktop.png입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472502731423088712/yumnote.png?ex=6992ce88&is=69917d08&hm=f79019b1a83ca10d937b280f1ea6f48ddf994898c61ff02718db520d36a74456&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472502732492505232/landing-redesign-full.png?ex=6992ce89&is=69917d09&hm=3f3b64ad0a3211cc4a23efa9bbdb0208c46f01cb9728ea4d44464a8b82a0a0a7&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472502733360599186/landing-samsung-style-desktop.png?ex=6992ce89&is=69917d09&hm=5dee30fdb5732a42f28a4eff4d45e4354dc53214b3d133db94babfb7c44fbb9c&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472502224642117795/landing-samsung-style.html?ex=6992ce10&is=69917c90&hm=1641178494d2e2dca8b0918d7feb5ea799780d485873ce422feb42adea4caaad&",
      "content": "[이종원/수리아/4기] AI 에이전트 과제",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472502224147185758/landing-redesign.html?ex=6992ce10&is=69917c90&hm=7b5736db760a6901e3100c5a59abdfab18db03c7017699c18a333239358726d5&",
      "content": "[이종원/수리아/4기] AI 에이전트 과제",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472501786265780245/SKILL.md?ex=6992cda7&is=69917c27&hm=e8844ce90347a48286f3c12b2cae101501729a95ad475fb8f7ee92dfc5bfc174&",
      "content": "1주차 과제 제출합니다. 사이트 주소를 넣으면 그 사이트의 구조를 템플릿화 해주는 스킬입니다.  테스트로 m.samsung.com으로 만들어진 템플릿으로 기존에 만들어 놓았던 사이트를 리디자인 시켜보니 yumnote.png의 디자인이 landing-redesign-full.png로 변경이 되었습니다. 그래서 이번에는 그냥 기존의 디자인을 참고하지 말고 분석한대로 템플릿을 적용시켜서 리디자인을 해달라고 했습니다. 그렇게 해서 나온 결과가 landing-samsung-style-desktop.png입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472501786878152765/yumnote.png?ex=6992cda7&is=69917c27&hm=ffe29461315a06222cda783c881d5e4f4d02357e576c65b251d143a7105e1809&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472501786265780245/SKILL.md?ex=6992cda7&is=69917c27&hm=e8844ce90347a48286f3c12b2cae101501729a95ad475fb8f7ee92dfc5bfc174&",
      "content": "1주차 과제 제출합니다. 사이트 주소를 넣으면 그 사이트의 구조를 템플릿화 해주는 스킬입니다.  테스트로 m.samsung.com으로 만들어진 템플릿으로 기존에 만들어 놓았던 사이트를 리디자인 시켜보니 yumnote.png의 디자인이 landing-redesign-full.png로 변경이 되었습니다. 그래서 이번에는 그냥 기존의 디자인을 참고하지 말고 분석한대로 템플릿을 적용시켜서 리디자인을 해달라고 했습니다. 그렇게 해서 나온 결과가 landing-samsung-style-desktop.png입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472501786878152765/yumnote.png?ex=6992cda7&is=69917c27&hm=ffe29461315a06222cda783c881d5e4f4d02357e576c65b251d143a7105e1809&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472501788539359232/landing-samsung-style-desktop.png?ex=6992cda8&is=69917c28&hm=2d4e17da2bac9091eb6e491892e2e0a866501bab5aea00ad98650d1342e1724e&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472501786265780245/SKILL.md?ex=6992cda7&is=69917c27&hm=e8844ce90347a48286f3c12b2cae101501729a95ad475fb8f7ee92dfc5bfc174&",
      "content": "1주차 과제 제출합니다. 사이트 주소를 넣으면 그 사이트의 구조를 템플릿화 해주는 스킬입니다.  테스트로 m.samsung.com으로 만들어진 템플릿으로 기존에 만들어 놓았던 사이트를 리디자인 시켜보니 yumnote.png의 디자인이 landing-redesign-full.png로 변경이 되었습니다. 그래서 이번에는 그냥 기존의 디자인을 참고하지 말고 분석한대로 템플릿을 적용시켜서 리디자인을 해달라고 했습니다. 그렇게 해서 나온 결과가 landing-samsung-style-desktop.png입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472501786878152765/yumnote.png?ex=6992cda7&is=69917c27&hm=ffe29461315a06222cda783c881d5e4f4d02357e576c65b251d143a7105e1809&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472501787834585150/landing-redesign-full.png?ex=6992cda7&is=69917c27&hm=13dbf14b5a7cc5e6ec6eb045370fae1cb156f044960fe2360248af66ffa32b71&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472501788539359232/landing-samsung-style-desktop.png?ex=6992cda8&is=69917c28&hm=2d4e17da2bac9091eb6e491892e2e0a866501bab5aea00ad98650d1342e1724e&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81ed-afee-c1b5690af250",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/Cmwtixx6LGYvFE9N1ZwXqJ",
      "content": "1주차 과제 제출합니다.\n\n과제1. 퍼널 설계도\nhttps://whimsical.com/Cmwtixx6LGYvFE9N1ZwXqJ\n\n과제2. USP 정의\nhttps://lightax-accounting.notion.site/USP-3080347cfa45803aa41bed0ce7f7b3bb?source=copy_link\n\n과제3. 고객인터뷰 진행\n현재 회계법인을 직접 운영하고 있어 인터뷰는 진행이 어려워 진행하지 못하였으나, 초도미팅시 고객이 하는 얘기가 항상 유사하여 대략적인 SPIN에 대해서 인지하고 있습니다. 신규 서비스라인의 경우 추가 진행하여 업로드하겠습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472492613100900544/SKILL.md?ex=6992c51c&is=6991739c&hm=c67fb6748975a9af2a74d6d4b043e8355e0e4cf6c5620bb0d7b71905f07f9653&",
      "content": "1주차 과제 제출합니다. 글쓰기 관련 스킬입니다.",
      "images": null
    },
    {
      "memberId": "3016400e-9268-8175-a957-d84741a15a93",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472237273473880214/SKILL.md?ex=6992800e&is=69912e8e&hm=8d30aafb62606d4ac78abde2935d6e34767d4d060498b5eb1517e9e0d2a3b9eb&",
      "content": "과제 인증합니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-813e-8bd2-d50dcf0e78aa",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.canva.com/design/DAHBXNJynZs/JAo4hyV8esg6gk9QBS0EKw/edit?utm_content=DAHBXNJynZs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      "content": "1주차 과제 제출합니다. \n\n과제1 - 퍼널 설계도 \nhttps://www.canva.com/design/DAHBXNJynZs/JAo4hyV8esg6gk9QBS0EKw/edit?utm_content=DAHBXNJynZs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton\n\n과제2 - 나만의 USP 정의 \nhttps://docs.google.com/document/d/16ViyN2uoqDiwQ_PGyv3N-JhE2thULrKUuJvrYy0wfjM/edit?usp=sharing\n\n과제3 - 고객인터뷰 진행 \n제품개발 시 고객 17명 대상으로 설문조사를 했던 것으로 작성하였습니다.  항목을 구체화하여 추가진행 예정입니다.  \nhttps://docs.google.com/document/d/100hKRGsfZDOEjzSidZj_MFZWLo6Q2lNyitpqsmq8nso/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81a8-b99f-d5dd37834c11",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472483287762206854/SKILL.md?ex=6992bc6d&is=69916aed&hm=75ad20be957cd16fc03b9bd4008edb14c9748cde23c16c764c899cb692818e0f&",
      "content": "1주차 과제 제출합니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8142-a989-f8352e9ecf0d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472482192834691223/SKILL_Music.md?ex=6992bb68&is=699169e8&hm=eac6f70a35c6f04cddc6e4f255d9deecea70581d12b170a27425ea0d4bd637a1&",
      "content": "1주차 과제 제출합니다\n키워드를 통한 BGM을 검색해주는 스킬입니다!",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ca-b12f-cc1cb33d59bf",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472479060708823132/SKILL.md?ex=6992b87d&is=699166fd&hm=850c95106697575f60444ddc1bf4e74854c480244d7477edaa7d21163641e41d&",
      "content": "[곽병준/6기] AI 에이전트 과제",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://vaulbo.tistory.com/entry/%EC%8B%9D%EB%8B%A8%EA%B4%80%EB%A6%AC%EB%A5%BC-%EC%9E%90%EB%8F%99%ED%99%94-%ED%95%98%EB%8A%94-%EB%B2%95",
      "content": "https://vaulbo.tistory.com/entry/%EC%8B%9D%EB%8B%A8%EA%B4%80%EB%A6%AC%EB%A5%BC-%EC%9E%90%EB%8F%99%ED%99%94-%ED%95%98%EB%8A%94-%EB%B2%95",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://landing-sparkle-magic-50.lovable.app",
      "content": "1주차 과제 제출\nprd : 파일 첨부\n렌딩 페이지 : https://landing-sparkle-magic-50.lovable.app",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-819b-99af-dc7716a5f96f",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/11NauWWpkrtG_MmpIKS31FLMsiVn1ml-QMFq9yenBioA/edit?usp=sharing",
      "content": "1주차 과제제출\n\n\"프리미엄 커스텀 쿠키 선물\" \n\nPRD\nhttps://docs.google.com/document/d/11NauWWpkrtG_MmpIKS31FLMsiVn1ml-QMFq9yenBioA/edit?usp=sharing\n\n랜딩페이지 링크 \nhttps://grainscookiecustom.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8187-8ee7-f0f795165475",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/17NDDc3s105kyjrI3TR29b0xpLyE085z0r29cUE3tC5o/edit?usp=sharing",
      "content": "\"대학원생을 위한 연구 방향 탐색 지도\" 웹사이트를 만들었습니다. \n\n러버블 크레딧 이슈로 개선을 많이 진행하지 못해서, 지속해서 개선을 해나가 보겠습니다. \n\n현재 버전의 PRD와 랜딩페이지 링크 제출합니다. \n\nPRD : https://docs.google.com/document/d/17NDDc3s105kyjrI3TR29b0xpLyE085z0r29cUE3tC5o/edit?usp=sharing\n랜딩 페이지: https://study-sparker.lovable.app/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8142-a989-f8352e9ecf0d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://lunch-buddy-fair.lovable.app/",
      "content": "1주차 과제 제출 : lunchat \n\nPRD : 첨부\n랜딩페이지 : https://lunch-buddy-fair.lovable.app/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-818e-bcfd-cb87b9a53831",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://zoey.day/claude-code-agent-product-page-localization",
      "content": "https://zoey.day/claude-code-agent-product-page-localization",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-818e-bcfd-cb87b9a53831",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472456902519554129/CLAUDE.md?ex=6992a3da&is=6991525a&hm=493a2e2590391b785897ba331078bdc57d3cfda47ce2c475e6fc18d83a8e337c&",
      "content": "[1주차 과제 제출]\n기존의 상세페이지를 다른 국가별로 로컬라이제이션 해주는 현지화 팀입니다.\n- 국가별 리서치 에이전트 / 번역 에이전트 / 카피라이팅 에이전트 / 이미지 현지화 생성 에이전트 / 검수 에이전트",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://routine-chef-buddy.lovable.app",
      "content": "1주차 과제 제출 : FItMeal\n크레딧 문제로 크리에이터 수업 내용을 반영해서 지속해서 개선해 나갈 계획입니다.\n\n랜딩 페이지 : https://routine-chef-buddy.lovable.app\nPRD : https://www.notion.so/FitMeal-PRD-3089a535777880fd92f4c9c9198fab5b?source=copy_link",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8109-bbe4-ea21d95278a3",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://weddingcontroltower.lovable.app",
      "content": "1주차 과제 제출 : 웨딩컨트롤타워 서비스\n\nPRD : (유첨)\n랜딩페이지 : https://weddingcontroltower.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/BpygcQQb5okqueQU5CSgad",
      "content": "1주차 과제 제출합니다.\n\n[과제1. 자신만의 퍼널 설계도 만들기]\nhttps://whimsical.com/BpygcQQb5okqueQU5CSgad\n\n[과제2. 나만의 usp 정의하고 채워오기]",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DUw9M0Pj6fM?xmt=AQF0-txHFupNdHtbeJuaKS9FTtdCZt-NglUWTa6Me5LWCg",
      "content": "https://www.threads.com/@ai.vibecoding/post/DUw9M0Pj6fM?xmt=AQF0-txHFupNdHtbeJuaKS9FTtdCZt-NglUWTa6Me5LWCg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8197-b9e2-f86b8440fc47",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/13cKyAVJEvd8RwUp5eJrzc",
      "content": "1주차 과제 제출합니다.\n\n\n[과제 1. 자신만의 퍼널 설계도 만들어오기]\nhttps://whimsical.com/13cKyAVJEvd8RwUp5eJrzc\n\n[과제 2. 나만의 USP 정의하고 채워오기]\nhttps://docs.google.com/document/d/1Kd9u0lHqwRSmmbHoB17TUAiacPZKbTbi2YGC-lu6t4Y/edit?tab=t.0\n\n[과제 3. 고객 인터뷰 3명 진행하기]\nhttps://docs.google.com/document/d/1qgCYFkY2WfphMdq70mLvbYEb7K0yQQNm6kf5INgkMOs/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://routine-chef-buddy.lovable.app",
      "content": "1주차 과제 제출 : FItMeal\n랜딩 페이지 : https://routine-chef-buddy.lovable.app\nPRD : https://www.notion.so/FitMeal-PRD-3089a535777880fd92f4c9c9198fab5b?source=copy_link",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81b8-a720-e96e913c55d0",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472443165263921386/2026-02-15_125854.png?ex=6992970f&is=6991458f&hm=82c75a8a73f37c5f5110961c94592ffd7d77782502330e7a40c648448f253118&",
      "content": "# 🎯 PROMPT FACTORY SKILL\n\n> 💡 \"뽀모도로 타이머 앱 만들고 싶어\" — 이런 **아이디어 하나만** 넣으면,\n> AI 직원 3명이 디자인(HTML)은 자동으로 만들고, 기능 추가용 프롬프트까지 완성해줍니다.\n\n**핵심 장점**\n1️⃣ **코딩 제로** — 복사-붙여넣기만으로 웹 앱 완성\n2️⃣ **체계적 품질** — 놓치기 쉬운 기능까지 AI가 빈틈없이 설계\n3️⃣ **시간 절약** — 디자인 자동 생성, AI Studio만 실행하면 끝\n\n**왜 필요한가?**\n❌ \"그냥 타이머 앱 달라고 하면\" → 기능 부족, 디자인 엉성\n✅ 이 스킬 →\n→ **찰리**가 필요한 기능 정리\n→ **샘**이 Stitch로 HTML 자동 생성\n→ **데니스**가 AI Studio 프롬프트 작성\n→ 완성된 **HTML + 프롬프트** 바로 사용!\n\n🎯 아이디어만 던지면 디자인부터 코드까지, **알아서 완성해주는 스킬**\n테스트 진행해본 예시 초안 디자인과 prompt-factory skill.md 파일 첨부합니다!",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1472443165263921386/2026-02-15_125854.png?ex=6992970f&is=6991458f&hm=82c75a8a73f37c5f5110961c94592ffd7d77782502330e7a40c648448f253118&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81d6-9901-ce6520aefbf2",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472438270800560189/SKILL.md?ex=69929280&is=69914100&hm=9357929647edda250a9c766063573b61b6fb63efda8f192aa0fe67c17465feff&",
      "content": "1주차 과제 제출합니다\n범용 뉴스레터 제작 스킬입니다!",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8128-a649-c35d601c95a0",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472435269994287175/SKILL.md?ex=69928fb4&is=69913e34&hm=0e2d0ad952fd053e298a64bdb08dd802b8fe9f80140e901d9a7f5606cc15129b&",
      "content": "1주차 과제 제출합니다.\n인스타그램 컨텐츠 아이디어 리서치하는 스킬을 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81b8-a720-e96e913c55d0",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.notion.so/3079c44f5af0810b9d5bdf35c1c5a015?source=copy_link",
      "content": "1주차 과제 제출하겠습니다!\n\n[과제1. 자신만의 퍼널 설계도 만들기]\n\nhttps://www.notion.so/3079c44f5af0810b9d5bdf35c1c5a015?source=copy_link\n\n[과제2.나만의 usp 정의하고 채워오기 ]\n\nhttps://docs.google.com/document/d/e/2PACX-1vQUYj98VuZmX-6xgm-RUx1l0BJ02ejxdlNMFEDBLBVNRUxrQGFPT7AUwkNBTfZEmQ/pub\n\n[과제3.고객 인터뷰 3명 진행하기]\n\nhttps://docs.google.com/document/d/e/2PACX-1vRJA207hW8okcKke-fsGcvLVl8i25bHOBh5JuAaEfVBSIYeswVgNF-EBIb_mVDOmPFx36siJxHrHW8G/pub",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/f42AEBfMJ35o5MQPz9DTc",
      "content": "안녕하세요. 첫번째 과제 인증합니다.\n\n[과제 1. 자신만의 퍼널 설계도 만들어오기]\nhttps://whimsical.com/f42AEBfMJ35o5MQPz9DTc\n\n[과제 2. 나만의 USP 정의하고 채워오기]\nhttps://docs.google.com/document/d/1PRtpAvVO8YMlXLGvomnBmvypNBPEu8eYdsLEx9CEAVg/edit?usp=sharing\n\n[과제 3. 고객 인터뷰 3명 진행하기]\nhttps://docs.google.com/document/d/1PLTrPitKKpKd13vYLlUKmVpYnw3RA6E8_JaagkOVJ90/edit?usp=sharing\nhttps://docs.google.com/spreadsheets/d/1yax9QsN-TN9J6hf-PzXuJiVMbW-nMGWGbbCqOa8P4SQ/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8114-a6ed-c7c89589c9d1",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470028096370511893/1472391573055737896/657733756933f583.docx?ex=69926702&is=69911582&hm=7f5d962dbd6c7936b9a30e30fbf1037e707f591df603f77d8197f215d81e35eb&",
      "content": "랜딩페이지는 ai 로 만들기\n위해 준비중입니다\n\nNOtion do 트랙\n지정되어 있지 않습니다. 하고 뜨는 이유는 뭘까요?\n\nhttps://cdn.discordapp.com/attachments/1470028096370511893/1472391573055737896/657733756933f583.docx?ex=69926702&is=69911582&hm=7f5d962dbd6c7936b9a30e30fbf1037e707f591df603f77d8197f215d81e35eb&",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472394180188835840/SKILL.md?ex=69926970&is=699117f0&hm=4515bfde3fd8a7172eb9ce3beb959d872fd9814d3a8c96c2d113bc3bee2ed5fa&",
      "content": "1주차 과제 제출, 다양한 자료 제시하면  동영상으로 교육자료를 만들어주는 시킬을 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472394180188835840/SKILL.md?ex=69926970&is=699117f0&hm=4515bfde3fd8a7172eb9ce3beb959d872fd9814d3a8c96c2d113bc3bee2ed5fa&",
      "content": "1주차 과제 제출, 다양한 자료 제시하면  동영상으로 교육자료를 만들어주는 시킬을 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://totogi.lovable.app/",
      "content": "1주차 과제제출 :실버를 위한  인지 게임\n\n\nhttps://totogi.lovable.app/\n또또기는 방문판매 조직을 위한 인지건강 플랫폼으로, 무료 인지테스트와 월간 뇌 건강 리포트를 통해 고객을 관리하고, 카운셀러의 건강기능식품 상담을 데이터 기반으로 지원하는 매출 증대 도구입니다.\n즐거운 명절 보내세요",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://totogi.lovable.app/",
      "content": "1주차 과제제출 :실버를 위한  인지 게임\n\n\nhttps://totogi.lovable.app/\n또또기는 방문판매 조직을 위한 인지건강 플랫폼으로, 무료 인지테스트와 월간 뇌 건강 리포트를 통해 고객을 관리하고, 카운셀러의 건강기능식품 상담을 데이터 기반으로 지원하는 매출 증대 도구입니다.\n즐거운 명절 보내세요",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://solkim.blog/archive/the-trap-of-someday/",
      "content": "https://solkim.blog/archive/the-trap-of-someday/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://solkim.blog/archive/the-trap-of-someday/",
      "content": "https://solkim.blog/archive/the-trap-of-someday/",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://totogi.lovable.app/",
      "content": "실버를 위한  인지 게임\n\n랜딩ㅔ이지.\nhttps://totogi.lovable.app/\n또또기는 방문판매 조직을 위한 인지건강 플랫폼으로, 무료 인지테스트와 월간 뇌 건강 리포트를 통해 고객을 관리하고, 카운셀러의 건강기능식품 상담을 데이터 기반으로 지원하는 매출 증대 도구입니다.\n즐거운 명절 보내세요",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://totogi.lovable.app/",
      "content": "실버를 위한  인지 게임\n\n랜딩ㅔ이지.\nhttps://totogi.lovable.app/\n또또기는 방문판매 조직을 위한 인지건강 플랫폼으로, 무료 인지테스트와 월간 뇌 건강 리포트를 통해 고객을 관리하고, 카운셀러의 건강기능식품 상담을 데이터 기반으로 지원하는 매출 증대 도구입니다.\n즐거운 명절 보내세요",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8172-994c-f2f75ab413b1",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://flaxen-pomelo-d2b.notion.site/Pikka-PRD-306b9b3f281d80a2b081dc9a7318c2e3?source=copy_link",
      "content": "PRD: https://flaxen-pomelo-d2b.notion.site/Pikka-PRD-306b9b3f281d80a2b081dc9a7318c2e3?source=copy_link\n\n랜딩페이지: https://pika-save-mind.lovable.app",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8172-994c-f2f75ab413b1",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://flaxen-pomelo-d2b.notion.site/Pikka-PRD-306b9b3f281d80a2b081dc9a7318c2e3?source=copy_link",
      "content": "PRD: https://flaxen-pomelo-d2b.notion.site/Pikka-PRD-306b9b3f281d80a2b081dc9a7318c2e3?source=copy_link\n\n랜딩페이지: https://pika-save-mind.lovable.app",
      "images": null
    },
    {
      "memberId": "3016400e-9268-8139-b447-fcbb968d8bf7",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://1q1q.notion.site/Masterplan-md-307e60851b6d8081a97fd10e9804bcad?source=copy_link",
      "content": "부족하지만 크레딧 부족으로 우선 제출합니다\nPRD : https://1q1q.notion.site/Masterplan-md-307e60851b6d8081a97fd10e9804bcad?source=copy_link\n랜딩페이지 : https://ninety-day-cxo-proof.lovable.app",
      "images": null
    },
    {
      "memberId": "3016400e-9268-8139-b447-fcbb968d8bf7",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://1q1q.notion.site/Masterplan-md-307e60851b6d8081a97fd10e9804bcad?source=copy_link",
      "content": "부족하지만 크레딧 부족으로 우선 제출합니다\nPRD : https://1q1q.notion.site/Masterplan-md-307e60851b6d8081a97fd10e9804bcad?source=copy_link\n랜딩페이지 : https://ninety-day-cxo-proof.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8180-a0ab-f2ab326becf7",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiwon_business/post/DUvFeiTkpj8?xmt=AQF0yWUPTwORrz5ewrfz0oe3eradbvE1zdiHXnXRdsgF-rjkgdiglIZdqJXHyIbiO76tNAo&slof=1",
      "content": "https://www.threads.com/@jiwon_business/post/DUvFeiTkpj8?xmt=AQF0yWUPTwORrz5ewrfz0oe3eradbvE1zdiHXnXRdsgF-rjkgdiglIZdqJXHyIbiO76tNAo&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81b6-8773-e4e735274728",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472268673770065920/SKILL.md?ex=6991f48d&is=6990a30d&hm=6c919cf14941c74f6426b94484ec140128157b2e7462c2b54068bce86371d1c0&",
      "content": "1주차 과제 제출합니다.\n카드 뉴스 제작해주는 스킬을 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472244352389742634/SKILL.md?ex=6991dde6&is=69908c66&hm=279a3df337147a5cff4e2f1dd66fd420092bf8f52f9a84b10068dea0c1a5a0d0&",
      "content": "1주차 과제 제출합니다.\nPPT 파일의 내용을 분석하여 노션으로 요약하여 정리하는 스킬을 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8187-8ee7-f0f795165475",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472243177976107008/SKILL.md?ex=6991dcce&is=69908b4e&hm=3a21d7c9ae0523734130b9fd2bd2e3d3f56bc23e5008d819aa5939234daef3ca&",
      "content": "아직 모든것이 익숙하지가 않아서 수업시간에 말씀해주신 ppt 관련 스킬을 따라서 만들어봤습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-8701-d2dfa8c77dd2",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.figma.com/board/uBst5Px3TygWlWkBSXlncb/%ED%8D%BC%EB%84%90-%EC%84%A4%EA%B3%84?node-id=0-1&t=SEBE6GQeopZtC5DR-1",
      "content": "과제인증 \n[과제1. 자신만의 퍼널 설계도 만들기]\nhttps://www.figma.com/board/uBst5Px3TygWlWkBSXlncb/%ED%8D%BC%EB%84%90-%EC%84%A4%EA%B3%84?node-id=0-1&t=SEBE6GQeopZtC5DR-1\n\n[과제2.나만의 usp 정의하고 채워오기 ]\nhttps://starterteam.notion.site/usp-3077c1122f1480b8998bc14b7b7f92b0?source=copy_link\n\n[과제3.고객 인터뷰 3명 진행하기]\nhttps://starterteam.notion.site/3077c1122f1480288c97eb84eaf4de28?source=copy_link",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/T1QKRh3cT3GQMEGPoN4Tqu",
      "content": "[과제1. 자신만의 퍼널 설계도 만들기]\nhttps://whimsical.com/T1QKRh3cT3GQMEGPoN4Tqu\n[과제2. 나만의 usp 정의하고 채워오기]\nhttps://docs.google.com/document/d/1KSqs9XEHmnLfGr13Ie0hbq-Rsb-g2RaAfH4sm7bfGjc/edit?usp=sharing\n[과제3. 고객 인터뷰 3명 진행하기]\n현재 판매가 없어서, 고객 인터뷰는 진행하지 않았습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1472237568824180898/image.png?ex=6991d795&is=69908615&hm=84a7cad799fcf452811b048544a18f7d7c4df853e07ac55c16aa198f8598e0ec&",
      "content": "1주차 과제  제출",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1472237568824180898/image.png?ex=6991d795&is=69908615&hm=84a7cad799fcf452811b048544a18f7d7c4df853e07ac55c16aa198f8598e0ec&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-818c-b026-cd92d926f7b9",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://stevenkim18.notion.site/1-PRD-30797549484c80b99f59d08f50112841",
      "content": "빌더 기초 1주차 과제\nPRD 문서: https://stevenkim18.notion.site/1-PRD-30797549484c80b99f59d08f50112841\n랜딩페이지: https://aix-lab-landing-page.vercel.app/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81a1-b9a1-da8bcdf7dbbb",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://bobbobbob.lovable.app",
      "content": "1주차 과제 제출합니다. \n\nPRD : (유첨)\n랜딩페이지 : https://bobbobbob.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-80e6-a976-f62af164bfe3",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/1duaM0LiNdxjBOktd4SL5upFtu4rkAoEPaZ5nbXb2G-8/edit?usp=sharing",
      "content": "1주차 과제 제출합니다~ (Manual Recovery)",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-14",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DUvV8bEkwcf?xmt=AQF0UI7IiZYO6nVxAPBpQEhfXR5iD79IshnDfO3-tt4dYA",
      "content": "https://www.threads.com/@ai.profitwise/post/DUvV8bEkwcf?xmt=AQF0UI7IiZYO6nVxAPBpQEhfXR5iD79IshnDfO3-tt4dYA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e2-99de-cbc33a4cde1d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472219697595547800/SKILL.md?ex=6991c6f0&is=69907570&hm=806579851f558eb5718818ec2558b689d5c9b6b73aaacff755260bad1c9ac51f&",
      "content": "고객 자문 시 고객 의도를 빠르게 판단하여 판례, 행정해석 등 법률 판단을 도와주는 자동화 스킬을 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e2-99de-cbc33a4cde1d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472218432970817699/message.txt?ex=6991c5c2&is=69907442&hm=26e08c231b4c3cc727d6ebdb6325caf23a961e629ecdf403434fff7e497e95e8&",
      "content": "저는 고객 자문 시 판례, 행정해석을 참조하는 내용을 자동화하는 스킬을  만들었습니다.",
      "images": null
    },
    {
      "memberId": "3016400e-9268-8175-a957-d84741a15a93",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/8j58zH5MQ4VoKp1xfPTZiL",
      "content": "과제인증 \n[과제1. 자신만의 퍼널 설계도 만들기]\nhttps://whimsical.com/8j58zH5MQ4VoKp1xfPTZiL\n\n[과제2.나만의 usp 정의하고 채워오기 ]\nhttps://docs.google.com/document/d/10GHj2J5P9O8i85dkksE-HRrQLHGLnmNtYLS1sVMCW1c/edit?usp=sharing\n\n[과제3.고객 인터뷰 3명 진행하기\n\n현재 판매를 운영하고 있어 인터뷰는 진행이 어려워 과제를 하지 않았습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8129-8d16-cdd1012c5003",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://retire-bright-score.lovable.app/",
      "content": "Manual One-off Submission requested by User.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8141-bfd2-c21b441f04da",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472207969180717170/SKILL.md?ex=6991bc04&is=69906a84&hm=6cfe21a330228d207a4b926d2acce3b8ddc80ddcfe9af8a9db137b62167b54a0&",
      "content": "회의록을 요약하고 참여자 각자 To do list를 만드는 스킬을 만들었습니다",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ed-a523-e46ee7043bc8",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1472198647813767301/2026-02-14_8.43.35.png?ex=6991b355&is=699061d5&hm=93ffd7cd93f75b7a05e0d1d255d53328c5c91d82581d743c5edfce31bc2b68bf&",
      "content": "1주차 과제 제출",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1472198647813767301/2026-02-14_8.43.35.png?ex=6991b355&is=699061d5&hm=93ffd7cd93f75b7a05e0d1d255d53328c5c91d82581d743c5edfce31bc2b68bf&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8185-b93b-e48e330e682b",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472197036890914837/SKILL.md?ex=6991b1d5&is=69906055&hm=caa859933408723e77712e2db008867e02a7a86df263fd1af4fd368238f1e68e&",
      "content": "사업자등록할 때 업종코드 많이 고민되시죠? \n어떤 사업을 할지 자유롭게 내용 입력하면, 사업자 업종코드를 매칭시켜주고 \n더 나아가 나이와 사업장주소지를 입력하면 창업감면과 중소기업특별세액 감면 여부 \n그리고 감면율 까지 한장의 보고서로 만들어 주는 스킬을 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-14",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DUvKtCUkqh2",
      "content": "https://www.threads.com/@makekim.kr/post/DUvKtCUkqh2",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472194982202052739/SKILL.md?ex=6991afeb&is=69905e6b&hm=ebd5fc7069e9a7e8f7dba66feedc28c6d5c2a786636e87073d198dd676bfacb6&",
      "content": "Nicolas Cole의 \"콘텐츠 설계자\" 프레임워크로 짧은 글(Threads/Substack Notes/LinkedIn)과\n  긴 글(Substack Newsletter)을 한국어/영어로 작성하는 스킬을 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-14",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/valueforyourbiz_2026%EB%85%84-%ED%95%9C-%ED%95%B4%EB%A5%BC-%EA%B3%84%ED%9A%8D%ED%95%98%EA%B3%A0-%EB%AA%A9%ED%91%9C%EB%A5%BC-%EA%B3%B5%EC%9C%A0%ED%95%98%EB%8A%94-%EA%B0%80%EC%A1%B1-%EC%9B%8C%ED%81%AC%EC%83%B5%EC%9D%84-%EC%A7%84%ED%96%89%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4-activity-7428387300348207104-yVYq?utm_source=share&utm_medium=member_ios&rcm=ACoAAC6L56oBcnSGNNosRJL25X2aGHLoxESQD-U",
      "content": "https://www.linkedin.com/posts/valueforyourbiz_2026%EB%85%84-%ED%95%9C-%ED%95%B4%EB%A5%BC-%EA%B3%84%ED%9A%8D%ED%95%98%EA%B3%A0-%EB%AA%A9%ED%91%9C%EB%A5%BC-%EA%B3%B5%EC%9C%A0%ED%95%98%EB%8A%94-%EA%B0%80%EC%A1%B1-%EC%9B%8C%ED%81%AC%EC%83%B5%EC%9D%84-%EC%A7%84%ED%96%89%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4-activity-7428387300348207104-yVYq?utm_source=share&utm_medium=member_ios&rcm=ACoAAC6L56oBcnSGNNosRJL25X2aGHLoxESQD-U",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e2-99de-cbc33a4cde1d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1472168763813134398/PRD_.md?ex=69919780&is=69904600&hm=06b60020a9fe6fa8f78a33df49fc194ed068b20d9b03e17d4028708777abdc7a&",
      "content": "1주 과제. 1.prd.md 파일, 2. 스크린샷",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1472168764874166284/image.png?ex=69919781&is=69904601&hm=5b6ed97188b196290af9bd95cddccd85f498962f80d73680748094199ce8375e&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8107-915c-df625d9e364f",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472145620478201960/SKILL.md?ex=699181f3&is=69903073&hm=f75e24b61f546a1afd1263542dc6f169cd6fd9887fad6e676148708418bfdd08&",
      "content": "엑셀 파일을 통해서 특정 값들을 입력하면 별도의 엑셀 형태의 다른 파일을 자동으로 작성하는 스킬을 작성했습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/1u6YBYOI56hGOB0H7oec7_c8wBzUQFwzfKzr1THqpst4/edit?tab=t.0#heading=h.k9gv0acohqvz",
      "content": "빌더 기초 1주차 과제 올립니다. \nPRD : https://docs.google.com/document/d/1u6YBYOI56hGOB0H7oec7_c8wBzUQFwzfKzr1THqpst4/edit?tab=t.0#heading=h.k9gv0acohqvz\n랜딩페이지 : https://past-bloom.lovable.app\n\n구정 연휴가 시작되네요. 모두 편안한 연휴 되시길 바랍니다. ^^",
      "images": null
    },
    {
      "memberId": "2fc6400e-9268-81bf-b5b8-f405c3666c00",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472129188264935454/SKILL.md?ex=699172a5&is=69902125&hm=ae1afd8a469b99ca44dd4b1f4e812d389f7026792a2970054ec6677089cf8718&",
      "content": "ppt스킬을 먼저 만들었습니다. \n만들때는 클로드에서 질문하면서 만들었습니다.\n커서에서 써봤는데 수정해야될 부분이 보여서 클로드에게 다시 보완해서 만들어달라고 하니 업데이트 하더라구요.\n그대로 다시 만들어달라니까 보완된 버전으로 만들어주었습니다.\n\n추가로 몇개 만들어보려고 했는데, 폴더를 따로 만들어야되는건지, 기존 ppt스킬에 있는 폴더에 그대로 추가해서 만들어도 되는지 아직 너무 어렵네요.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-14",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DUt6pLCE434?xmt=AQF0fKiUTOpsGaiGcen95sLQ-ogA9VXz5BefWFI4utwykAfIYY0UAktcn-A-KSayHSH4YkPu&slof=1",
      "content": "https://www.threads.com/@home_dad_sol/post/DUt6pLCE434?xmt=AQF0fKiUTOpsGaiGcen95sLQ-ogA9VXz5BefWFI4utwykAfIYY0UAktcn-A-KSayHSH4YkPu&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81b0-8550-de5e956fa37c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1472113599530012738/PRD__HANJARI.md?ex=69916420&is=699012a0&hm=ad2877c934c198e249a34355fd78128b4a3e32e7a273cbf9dcef13665e8e7a71&",
      "content": "1주 과제 1. PRD.MD파일 2. 스크린샷",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1472113599982993468/image.png?ex=69916420&is=699012a0&hm=1e288fa6b947b9b1b022e67f48e23e94aed756ebb0049657b965ce66ca1528b0&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81d7-91b5-d83cb15b5aa1",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.youtube.com/watch?v=ZZAFLkBcfjA)>",
      "content": "저는 카드뉴스 자동화 팀을 만들어보았습니다!\n그래서 스킬 md파일이 아닌 팀 세팅  md 파일을 추출해서 올립니다-!\n\n어제 조쉬님 <[클로드코드로 고퀄리티 PPT 슬라이드 자동으로 만드는 방법 (자료조사부터 슬라이드까지)](https://www.youtube.com/watch?v=ZZAFLkBcfjA)> 이 영상 보면서 따라해봤는데요\n\n얼추 나오긴 하지만 제가 원하는 퀄리티대로 이미지 산출물 뽑는게 너무 어렵더라고요. 아직 스킬, 에이전트 구분도 잘 못하는 상태라 그런거 같았어요. 어디서부터 퀄리티 컨트롤이 안되는건지 판단이 안되더라구요.\n\n근데 클로드랑 대화하다가 '스킬 > 에이전트' 순서로 연습해보라고 하길래 거기서 유레카 싶더라고요.\n\n그래서 이 순서로 해봤어요\n1. 카드뉴스 기획 스킬을 만든다 (마음에 들때까지 반복개선함)\n2. 카드뉴스 제작 스킬을 만든다 (마음에 들때까지 반복개선함)\n3. 이 2개 스킬을 순서대로 엮는 에이전트를 만들어달라고 함\n4. 클로드가 기획 에이전트, 제작 에이전트, 오케스트레이션하는 총괄 에이전트를 만들겠다고 함\n5. 클로드가 director 에이전트에 전체 파이프라인을 다 담겠다고 함. 기획/제작 에이전트를 따로 호출하지 않고 director가 직접 수행하는 방식으로 수정하겠다고 함.\n6. 막상 돌려보니까 리서치 부분이 아쉬워서 리서치 스킬을 추가해서 워크플로우 디벨롭함\n\n디자인 레퍼런스는 조쉬님 파일로 넣었더니 깔끔하게 예쁘게 나오네용ㅋㅋ",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8112-b8b5-ee2f1ed40c98",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/1SZnaqSc7idFN80b_vyAMhyj0Fv4uMWg1byVLKRaaG1g/edit?usp=drive_link",
      "content": "PRD 및 랜딩페이지 제출 합니다! 크레딧이 충분하지않아서 다른 툴로 조금 살을 덧 붙였습니다.\n\nPRD - https://docs.google.com/document/d/1SZnaqSc7idFN80b_vyAMhyj0Fv4uMWg1byVLKRaaG1g/edit?usp=drive_link\n랜딩페이지 - https://teacher-helper-9tr.pages.dev/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-819d-93b5-da9757bcc9b7",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://k-friend-route.lovable.app",
      "content": "아직은 어설프지만 제출합니다~\n\nPRD : \n랜딩페이지 : https://k-friend-route.lovable.app",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e0-bd5b-fb74ce02611c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/1FdiI8ewxw7YcwESnAX3tz8bgntTOKlk7xPBevuBNfAA/edit?tab=t.0",
      "content": "수정하고 싶은 부분이 많지만, 크레딧 부족으로 이쯤에서 제출합니다 🥺\n- PRD: https://docs.google.com/document/d/1FdiI8ewxw7YcwESnAX3tz8bgntTOKlk7xPBevuBNfAA/edit?tab=t.0\n- Lovable로 만든 랜딩 페이지: https://aap-by-notomo.lovable.app/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://maily.so/ai.insider.club/posts/1gz27y3wr3q",
      "content": "https://maily.so/ai.insider.club/posts/1gz27y3wr3q",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-14",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DUt66tqE9OJ?xmt=AQF0SCjTHSHYg_FPiACNd2OUFjDeP8M9NlyBWWYRh0SzkQ",
      "content": "https://www.threads.com/@dodo_list_/post/DUt66tqE9OJ?xmt=AQF0SCjTHSHYg_FPiACNd2OUFjDeP8M9NlyBWWYRh0SzkQ",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-14",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DUt9XqVEhp1?xmt=AQF0xt2R-HC-BznYGyADA6kq8t81O9vqSquqqpt48wQxVw",
      "content": "https://www.threads.com/@ai.vibecoding/post/DUt9XqVEhp1?xmt=AQF0xt2R-HC-BznYGyADA6kq8t81O9vqSquqqpt48wQxVw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-812f-a8a5-efa051d245ef",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://www.notion.so/3-AI-3066400e926880b4864ad377b3128220",
      "content": "ppt 자동화를했습니다. 몇개 뽑아보니 생각보다 디자인도 좋고 잘 뽑히네요. 근데 파이썬 자꾸 깔라고 하는데 파이썬 깔아야 할까요? ai 에이전트 돌릴려면 깔아야 할거 같기도하고..}",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-14",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/p/DUttQMGitI-/",
      "content": "https://www.instagram.com/p/DUttQMGitI-/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-14",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://maily.so/newsdaddyai/posts/g1o4g67gove",
      "content": "https://maily.so/newsdaddyai/posts/g1o4g67gove",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760?xmt=AQF0jn0TKZ9n-3btPGP5iFFBYeRYFT5ok-4GM2RHLEAWLA",
      "content": "https://www.threads.com/@benji98760?xmt=AQF0jn0TKZ9n-3btPGP5iFFBYeRYFT5ok-4GM2RHLEAWLA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DUs58qOj06T?xmt=AQF00fmiUs-NHpoW2amqhhXjCjQaPfQc73D461DICALkrQ",
      "content": "https://www.threads.com/@swlbear/post/DUs58qOj06T?xmt=AQF00fmiUs-NHpoW2amqhhXjCjQaPfQc73D461DICALkrQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/stevejobboo_txurwarpwree-rzgreetey-share-7428083686274920448-U7Cb?utm_source=share&utm_medium=member_android&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "content": "https://www.linkedin.com/posts/stevejobboo_txurwarpwree-rzgreetey-share-7428083686274920448-U7Cb?utm_source=share&utm_medium=member_android&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simpliciety/post/DUs5lTCEreX?xmt=AQF0wwQASRKY-6FVEN72Sx007Hr_wzC23GC8h5aRZCzJeLUF2b6skZzpBvMTpKS3NUm6nwg&slof=1",
      "content": "https://www.threads.com/@simpliciety/post/DUs5lTCEreX?xmt=AQF0wwQASRKY-6FVEN72Sx007Hr_wzC23GC8h5aRZCzJeLUF2b6skZzpBvMTpKS3NUm6nwg&slof=1",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jakvis.labs/post/DUs3lF8kvxn?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "content": "https://www.threads.com/@jakvis.labs/post/DUs3lF8kvxn?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@gncut_official/post/DUs3IDYCVt3?xmt=AQF0H_hXgQJhR3VxdH1fQcBZd5l49nwJcCzQjrfktmFkGg",
      "content": "https://www.threads.com/@gncut_official/post/DUs3IDYCVt3?xmt=AQF0H_hXgQJhR3VxdH1fQcBZd5l49nwJcCzQjrfktmFkGg",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ca-b12f-cc1cb33d59bf",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1471866046393880598/screencapture-localhost-3000-about-2026-02-13-22_45_29.png?ex=69907d93&is=698f2c13&hm=4c4aa8a68a04149c930cac883bc9b796221c0d9a86f996014838efb15b5c1fb5&",
      "content": "1주차 과제 제출합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1471866046393880598/screencapture-localhost-3000-about-2026-02-13-22_45_29.png?ex=69907d93&is=698f2c13&hm=4c4aa8a68a04149c930cac883bc9b796221c0d9a86f996014838efb15b5c1fb5&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8150-b060-d7e281a7c073",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1471862226292965518/image.png?ex=69907a04&is=698f2884&hm=3ce91f83164e1358ddcbb37c14b6b5aeedb683d54816ffaef60f4d29ebe1dccb&",
      "content": "1주차 과제 제출합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1471862226292965518/image.png?ex=69907a04&is=698f2884&hm=3ce91f83164e1358ddcbb37c14b6b5aeedb683d54816ffaef60f4d29ebe1dccb&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81b0-8550-de5e956fa37c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1471862119610716180/SKILL.md?ex=699079eb&is=698f286b&hm=fa45b06a6cb2c01e665d940e919d63228480f261ac9a4e8c6c035ab176ff3956&",
      "content": "저는 저만의 레포트 자동화 SKILL을 만들어 보았습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DUswTwOE_2c?xmt=AQF0cqzyUzx7JSVAE3kyNgDoAlYECrgVrKrk2OAEH42mhw",
      "content": "https://www.threads.com/@jiyong.product/post/DUswTwOE_2c?xmt=AQF0cqzyUzx7JSVAE3kyNgDoAlYECrgVrKrk2OAEH42mhw",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_",
      "content": "https://www.threads.com/@han_lab_",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1471852013275840797/SKILL.md?ex=69907081&is=698f1f01&hm=bc00a1bcfb273684771bdb1a98bc573cc4f0bc97cb13ef941915316f03c4a7e2&",
      "content": "claude code 갖고 놀다가 콘텍스트를 다 써버려서 2/19 리프레시 된답니다. 확.... 지르고 싶으나, 아무것도 모르는 상태에서 저지른 것이라 claude 한테 질문해가며 skill.md를 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@bagsijun765/post/DUse6mDgdVY?hl=ko",
      "content": "https://www.threads.com/@bagsijun765/post/DUse6mDgdVY?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-817f-8006-cc6b2816473d",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@saemidoc/post/DUrkGyPAbWX?xmt=AQF0hG3N6TOVl45yFHkxDbMHHD52MrLu-FtflPfUZus9GKkof3n-7gLM6sVTMXoukcY49HCg&slof=1",
      "content": "https://www.threads.com/@saemidoc/post/DUrkGyPAbWX?xmt=AQF0hG3N6TOVl45yFHkxDbMHHD52MrLu-FtflPfUZus9GKkof3n-7gLM6sVTMXoukcY49HCg&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DUsaOd5kmhe",
      "content": "https://www.threads.com/@makekim.kr/post/DUsaOd5kmhe",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DUsVN-Pk16H?xmt=AQF05dI2ldV52hakthQMQTY92WMJYeaOPTGeqLDQWt9a5g",
      "content": "https://www.threads.com/@ai.profitwise/post/DUsVN-Pk16H?xmt=AQF05dI2ldV52hakthQMQTY92WMJYeaOPTGeqLDQWt9a5g",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DUsUmUtEtjf?xmt=AQF0L-HTEAHGploGL3t_YGM8lWueqOAk3WYH6sljbwGf2Q",
      "content": "https://www.threads.com/@fortunecat_saju/post/DUsUmUtEtjf?xmt=AQF0L-HTEAHGploGL3t_YGM8lWueqOAk3WYH6sljbwGf2Q",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://naver.me/5PWhX39h",
      "content": "https://naver.me/5PWhX39h",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-81e0-86cd-ea72e6a3d2b1",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/activity-7427987438754586624-NLkU?utm_source=share&utm_medium=member_android&rcm=ACoAAGRq29gB9Bua5GCO9wUo6-ViDVOTmPGME6U",
      "content": "https://www.linkedin.com/posts/activity-7427987438754586624-NLkU?utm_source=share&utm_medium=member_android&rcm=ACoAAGRq29gB9Bua5GCO9wUo6-ViDVOTmPGME6U",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://blog.naver.com/svminseo/224181709511",
      "content": "https://blog.naver.com/svminseo/224181709511",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DUsMQ4rD5fT?xmt=AQF0rKZsozKAlNwON-zVtUYKALcQ8MQ3VwioMNzMwuLGLw",
      "content": "https://www.threads.com/@home_dad_sol/post/DUsMQ4rD5fT?xmt=AQF0rKZsozKAlNwON-zVtUYKALcQ8MQ3VwioMNzMwuLGLw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DUsKFmFkcqh?xmt=AQF0L9YMvVTMm-EpA5G7CFM9jRAm9eB6rcFrcXNVW68WHw",
      "content": "https://www.threads.com/@interior.pulse/post/DUsKFmFkcqh?xmt=AQF0L9YMvVTMm-EpA5G7CFM9jRAm9eB6rcFrcXNVW68WHw",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e6-873e-c5a131700198",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1471767954713481236/SKILL.md?ex=69902238&is=698ed0b8&hm=b3d9ed7a35a76c0413b7592821946074f943b6cae5f7e1a72d62a25387485573&",
      "content": "공유해주신 글쓰기 템플릿을 활용해서 제가 작성한 블로그 글을 쓰레드와 x 버전으로 다시 작성해주는 skill 을 만들었습니다. 🙂",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://rebirthcoaching.tistory.com/m/entry/AI%EA%B0%80-%EC%B0%8D%EC%96%B4%EB%82%B4%EB%8A%94-%EA%B8%80-%EC%86%8D%EC%97%90%EC%84%9C-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%9D%B4%EC%95%BC%EA%B8%B0%EA%B0%80-%EB%B9%9B%EB%82%98%EB%8A%94-%EB%B2%95",
      "content": "https://rebirthcoaching.tistory.com/m/entry/AI%EA%B0%80-%EC%B0%8D%EC%96%B4%EB%82%B4%EB%8A%94-%EA%B8%80-%EC%86%8D%EC%97%90%EC%84%9C-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%9D%B4%EC%95%BC%EA%B8%B0%EA%B0%80-%EB%B9%9B%EB%82%98%EB%8A%94-%EB%B2%95",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e6-873e-c5a131700198",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1471757537132150824/SKILL.md?ex=69901884&is=698ec704&hm=be2e0a601d80f0c9a387fa58627de9e9a6c18eba46167ea3b0f1537bffba0212&",
      "content": "공유해주신 글쓰기 템플릿을 활용해서 제가 작성한 블로그 글을 쓰레드와 x 버전으로 다시 작성해주는 skill 을 만들었습니다. 🙂",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DUr-u3QiFQJ",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DUr-u3QiFQJ",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DUrl_m-D9Nq?xmt=AQF0v2e4fuf7OlFJypnq11RE8ranEdOInsainu2HJz5Rmg",
      "content": "https://www.threads.com/@lawyerssm/post/DUrl_m-D9Nq?xmt=AQF0v2e4fuf7OlFJypnq11RE8ranEdOInsainu2HJz5Rmg",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DUp1tYxD3SB?xmt=AQF0_QCp0-4G-bMpnHh3SyR2Ymg06DONnd8ZDiw5l0DJpg",
      "content": "https://www.threads.com/@lawyerssm/post/DUp1tYxD3SB?xmt=AQF0_QCp0-4G-bMpnHh3SyR2Ymg06DONnd8ZDiw5l0DJpg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DUr7uKMEqPY?xmt=AQF0jn0TKZ9n-3btPGP5iFFBYeRYFT5ok-4GM2RHLEAWLA",
      "content": "https://www.threads.com/@slowwbuilder/post/DUr7uKMEqPY?xmt=AQF0jn0TKZ9n-3btPGP5iFFBYeRYFT5ok-4GM2RHLEAWLA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@aron_aiconbia/post/DUr4-6vj8wL?xmt=AQF0eQjUP6H6HdqJ2D-KgdRgETSmMJF0mcOYbq0CmKLzqPtcbjrdgHyFVJtBzdHqfUXm7yd2&slof=1",
      "content": "https://www.threads.com/@aron_aiconbia/post/DUr4-6vj8wL?xmt=AQF0eQjUP6H6HdqJ2D-KgdRgETSmMJF0mcOYbq0CmKLzqPtcbjrdgHyFVJtBzdHqfUXm7yd2&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DUru2FTAY03?xmt=AQF0gNoZBLlyHVN-uArIYURO-kaGdjov_g08r4PFgtTyn-2Y_ez6IjPHn1kSZ7HyzvYjdNI&slof=1",
      "content": "https://www.threads.com/@dodo_list_/post/DUru2FTAY03?xmt=AQF0gNoZBLlyHVN-uArIYURO-kaGdjov_g08r4PFgtTyn-2Y_ez6IjPHn1kSZ7HyzvYjdNI&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DUrZaqSDUWx?xmt=AQF0Q3u3_mLCAVi-sxQO-1fWkegW9odxLUgfoHJNgBun04TVko_gvYMrVlKX7QVSv_P04sRT&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DUrZaqSDUWx?xmt=AQF0Q3u3_mLCAVi-sxQO-1fWkegW9odxLUgfoHJNgBun04TVko_gvYMrVlKX7QVSv_P04sRT&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DUrQv3oExtl?xmt=AQF0N41F0soeVd335K1l6x9SrzIa2ISY0czz0p6KCL6M257LnEmSQFw4M2rzAcsrLsS-F8o&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DUrQv3oExtl?xmt=AQF0N41F0soeVd335K1l6x9SrzIa2ISY0czz0p6KCL6M257LnEmSQFw4M2rzAcsrLsS-F8o&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-814f-b0d4-c563a8c55273",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://docs.google.com/document/d/1iK81NitDXhk24iDSF51r4WJRdCriImLxaQe0_McaruM/",
      "content": "https://docs.google.com/document/d/1iK81NitDXhk24iDSF51r4WJRdCriImLxaQe0_McaruM/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/stevejobboo_gtm-parkour-comfortzone-activity-7427725403366010880-3WFG?utm_source=share&utm_medium=member_android&rcm=ACoAAB0VZoQBkVmUDVZv3DulLrpcZaRa57dmKl7U",
      "content": "#gtm #parkour #comfortzone | 김영훈 ... 자녀들에게 어떤 교육을 하고 있나요?",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.net/@swlbear/post/DUqWpCWdYAy?xmt=AQF0EoN6mzlTeyBuJJpZTxO0zHb7JGzMFztIoK1V17_SsDCy2rV0sLbGW8ggi7EpnASgkmg9&slof=1",
      "content": "백영솔 UX/UI 디자인 on Threads",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.net/@benji98760/post/DUqVXvCj53W?hl=ko",
      "content": "스레드 첫 글... 긴장된다. 괜히 부끄럽다...",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8137-bb07-fa8e8ab11813",
      "date": "2026-02-13",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/feed/update/urn:li:activity:7427729295051268096/",
      "content": "https://www.linkedin.com/feed/update/urn:li:activity:7427729295051268096/\n\n\"수면이 회복되면, 삶도 회복됩니다\" \n수면무호흡증 진단부터 양압기 치료 적응까지 — 40대 남성 김OO님 사례\n\n김OO님(40대 남성), 건강 관리에 진심인 분이셨습니다. 심혈관 관련 약을 꼬박꼬박 챙기고, 10kg 넘게 감량을 진행하고, 동료들 건강까지 챙기는 분. 다만 아침마다 유독 머리가 멍하고 몸이 무거운 게, 이만큼 노력하는데 뭔가 이상하다... 생각하셨다고 합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470024904899559672/1471522602282385578/image.png?ex=698f3db7&is=698dec37&hm=ead834147122cee52ef103bcd4ce04ffcca270fb43ff51dffc2e8239a44f4143&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
        "Builder Advanced"
      ],
      "link": "https://whimsical.com/KH7s2aaRUyU2BQzUeZXF6u",
      "content": "안녕하세요 과제 인증 올립겠습니다.\n\n[과제 1. 자신만의 퍼널 설계도 만들어오기 - 퍼널 링크 공유하기]\nhttps://whimsical.com/KH7s2aaRUyU2BQzUeZXF6u\n\n[과제 2. 나만의 USP 정의하고 차별화요기 - 문서 제출하기]\nhttps://docs.google.com/document/d/1ZAJUxFgpR50uJXUG91A3lnXICRkbnaZHEClRWraQdkQ/edit?usp=sharing\n\n[과제 3. 고객 인터뷰 3명 진행하기]\nhttps://docs.google.com/document/d/1X37IwXY8eZJWD_4KzCtySo4SviF8PSNWaLTMzAG8efs/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jakvis.labs/post/DUqUkrHEodZ?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "content": "https://www.threads.com/@jakvis.labs/post/DUqUkrHEodZ?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simpliciety/post/DUqTpUREhhW?xmt=AQF07TOjdwrd4Ju6IyM8iAsy4kQmco4YDHnnD_un5-6qxMz8b9sXpQ3SOAVe3bU7AgAQWUdx&slof=1",
      "content": "https://www.threads.com/@simpliciety/post/DUqTpUREhhW?xmt=AQF07TOjdwrd4Ju6IyM8iAsy4kQmco4YDHnnD_un5-6qxMz8b9sXpQ3SOAVe3bU7AgAQWUdx&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@gncut_official/post/DUqSSuJCaRv?xmt=AQF0o1B7-Sbolp5Jhqh4_2UWDYNnoOHFhZUyo-atPcCU3g",
      "content": "https://www.threads.com/@gncut_official/post/DUqSSuJCaRv?xmt=AQF0o1B7-Sbolp5Jhqh4_2UWDYNnoOHFhZUyo-atPcCU3g",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DUqSL8vka9p?xmt=AQF05JiE2ZgeG5Wl0Yr0M-EzGzWsFYyk0U6qmhKtKHjSbA",
      "content": "https://www.threads.com/@inner.builder/post/DUqSL8vka9p?xmt=AQF05JiE2ZgeG5Wl0Yr0M-EzGzWsFYyk0U6qmhKtKHjSbA",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/p/DUqRxi4AZ7Q/?img_index=2",
      "content": "https://www.instagram.com/p/DUqRxi4AZ7Q/?img_index=2",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@kama.creative_/post/DUqRkTyEiFX?xmt=AQF0xzcm2pKC4VErV8_owbiQRkHP3IUbDchk5oM4ylPPSDYisT5C5x3k1GO6E1VXwznoEnw&slof=1",
      "content": "https://www.threads.com/@kama.creative_/post/DUqRkTyEiFX?xmt=AQF0xzcm2pKC4VErV8_owbiQRkHP3IUbDchk5oM4ylPPSDYisT5C5x3k1GO6E1VXwznoEnw&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DUqMOPNkp3b?xmt=AQF0xflqxCU076FmkicidIDwPT_fH-RSFNXUkPIwS-UYog",
      "content": "https://www.threads.com/@fortunecat_saju/post/DUqMOPNkp3b?xmt=AQF0xflqxCU076FmkicidIDwPT_fH-RSFNXUkPIwS-UYog",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DUqIU-7k-ys?xmt=AQF0cqzyUzx7JSVAE3kyNgDoAlYECrgVrKrk2OAEH42mhw",
      "content": "https://www.threads.com/@jiyong.product/post/DUqIU-7k-ys?xmt=AQF0cqzyUzx7JSVAE3kyNgDoAlYECrgVrKrk2OAEH42mhw",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-81e0-86cd-ea72e6a3d2b1",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/hwayounlee_%EB%85%B8%EB%8F%99%EB%B2%95-%EC%9D%B8%EC%82%AC%EB%85%B8%EB%AC%B4-hr-activity-7427671041872658432--N6j",
      "content": "https://www.linkedin.com/posts/hwayounlee_%EB%85%B8%EB%8F%99%EB%B2%95-%EC%9D%B8%EC%82%AC%EB%85%B8%EB%AC%B4-hr-activity-7427671041872658432--N6j",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DUp1tYxD3SB?xmt=AQF0d5tnDOdbTdg5PPhw6rps6v2oAaBQU3yVMyIToinNRg",
      "content": "https://www.threads.com/@lawyerssm/post/DUp1tYxD3SB?xmt=AQF0d5tnDOdbTdg5PPhw6rps6v2oAaBQU3yVMyIToinNRg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-12",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DUp0VTiE-L6?xmt=AQF0WTfxFxEAdx27uGe8C8hOgIJKJrbof0Zwpla7SH2BLmURn4curLmtu0nEZIrbD8bdWEQ&slof=1",
      "content": "AI Agent 처음엔 멘붕 올만 해. \nhttps://www.threads.com/@rm.visualizer/post/DUp0VTiE-L6?xmt=AQF0WTfxFxEAdx27uGe8C8hOgIJKJrbof0Zwpla7SH2BLmURn4curLmtu0nEZIrbD8bdWEQ&slof=1",
      "images": null
    },
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
        "AI Agent",
        "Longform",
        "Sales",
        "Builder Basic",
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
    }
  ],
  "lastUpdated": "2026-02-19T10:20:16.090890"
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
