
import { Member, Track, Submission, SubmissionStatus } from './types';

// ✅ Python 스크립트로 추출한 실제 데이터 (Last Sync: 2026-02-04 13:06:08)
const REAL_DATA = {
  "members": [
    {
      "id": "2f796446-e4ec-8101-8560-e14a462c53b3",
      "name": "김연진/Janice/4기",
      "discordId": "1120557173479571467",
      "discordUsername": "tremendous_k",
      "discordNickname": "김연진/Janice/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8103-ba68-c87aa02ccb0c",
      "name": "이재훈/5기",
      "discordId": "1119134218073677894",
      "discordUsername": "jhun3163",
      "discordNickname": "이재훈/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8104-82d8-f9ba82f81be9",
      "name": "이종원/수리아/4기",
      "discordId": "892518381536825344",
      "discordUsername": "suria_24",
      "discordNickname": "이종원/수리아/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8106-9ace-d27cac47ba90",
      "name": "방재민/재민/2기",
      "discordId": "849530733164494859",
      "discordUsername": "roomjaemin",
      "discordNickname": "방재민/재민/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8107-9e73-d7b6c56ee883",
      "name": "김철이/한나씨/5기",
      "discordId": "1456100462045560907",
      "discordUsername": "hannahssi72",
      "discordNickname": "김철이/한나씨/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8107-a61b-db92ff86d340",
      "name": "차돌(여행)",
      "discordId": "921939066088476723",
      "discordUsername": "ddangx2.",
      "discordNickname": "차돌(여행)",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8107-ad3f-e4335ab13c8d",
      "name": "김호돈 / 디오 / 4기",
      "discordId": "350203158074621954",
      "discordUsername": "hodonkim",
      "discordNickname": "김호돈 / 디오 / 4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8108-baad-ec47e2fee200",
      "name": "여현정/현/4기",
      "discordId": "1390344656885121066",
      "discordUsername": "susususu2000_75971",
      "discordNickname": "여현정/현/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8109-b8c6-f7d08f8e34e8",
      "name": "AI깎는한의사 라피/1기",
      "discordId": "1089897274374627348",
      "discordUsername": "raphael.kr",
      "discordNickname": "AI깎는한의사 라피/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-810b-9197-e6864b512e12",
      "name": "이은택/찰리/1기",
      "discordId": "1405116669935878196",
      "discordUsername": "elrendil_65027",
      "discordNickname": "이은택/찰리/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-810b-b339-cb5afd4097e0",
      "name": "조대진/4기",
      "discordId": "1444078504919695412",
      "discordUsername": "yulpapa2253",
      "discordNickname": "조대진/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-810f-b87b-eb9c6c503507",
      "name": "홍상훈(마빈/UX)",
      "discordId": "1394204263814795306",
      "discordUsername": "marvin_hong",
      "discordNickname": "홍상훈(마빈/UX)",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8110-b048-ea89b05afb32",
      "name": "권서림/5기",
      "discordId": "1136915916093927434",
      "discordUsername": "ksrimee",
      "discordNickname": "권서림/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8111-961a-d273862e6594",
      "name": "서민원/SINCLAIR/1기",
      "discordId": "159997886472388609",
      "discordUsername": "sinclairseo",
      "discordNickname": "서민원/SINCLAIR/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8111-9a9c-f776e9209f33",
      "name": "이안/부운영자",
      "discordId": "1392850552416768072",
      "discordUsername": "ian_61591",
      "discordNickname": "이안/부운영자",
      "profileImage": "",
      "tracks": [
        "Shortform",
        "Longform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8112-b2c3-cfde935040b1",
      "name": "김라미/라미/5기",
      "discordId": "791892285351526430",
      "discordUsername": "soulmagics_lamie",
      "discordNickname": "김라미/라미/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8113-97f2-d65108ed7af3",
      "name": "김경수/0기",
      "discordId": "398033642070212609",
      "discordUsername": "gang_0968",
      "discordNickname": "김경수/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8113-9a94-da69e650de28",
      "name": "임채영/1인사업가/1기",
      "discordId": "317288458810818561",
      "discordUsername": "cy3975",
      "discordNickname": "임채영/1인사업가/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8117-bd94-c1e66532faf7",
      "name": "윤대로/4기",
      "discordId": "1430552667297681431",
      "discordUsername": "caleb.yoon",
      "discordNickname": "윤대로/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8118-9619-c2c6fe985034",
      "name": "정창희/아이아이/3기",
      "discordId": "1430753799026507796",
      "discordUsername": "aieye2022",
      "discordNickname": "정창희/아이아이/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8119-bc45-fd1d48d78c2d",
      "name": "이종석/Drone/0기",
      "discordId": "634719627213144065",
      "discordUsername": "aiclub",
      "discordNickname": "이종석/Drone/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-811b-9a4e-eec92d9f5fb7",
      "name": "유현미/리아/5기",
      "discordId": "1456573579327049838",
      "discordUsername": "riaayoo",
      "discordNickname": "유현미/리아/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8120-a70c-dda41340d369",
      "name": "Jason",
      "discordId": "1392843626786328696",
      "discordUsername": "jason_84134",
      "discordNickname": "Jason",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8120-b3f4-cca8e931d7bc",
      "name": "김정환/됴나/0기",
      "discordId": "1100513913533120532",
      "discordUsername": "sleepingpain",
      "discordNickname": "김정환/됴나/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8121-a0d3-c4d5fd35910b",
      "name": "현상협/웨이드/0기",
      "discordId": "1110916493354475540",
      "discordUsername": "barefoot_wade",
      "discordNickname": "현상협/웨이드/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8122-8975-e6d0f1c7d785",
      "name": "이승재/Jai/3기",
      "discordId": "805501999985590272",
      "discordUsername": "jai4762",
      "discordNickname": "이승재/Jai/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8122-b055-e381e0093eb6",
      "name": "김서령/멜리/5기",
      "discordId": "1232917695947603970",
      "discordUsername": "exuberant_seahorse_94632",
      "discordNickname": "김서령/멜리/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8125-9d5b-fad63319ee4d",
      "name": "류석/4기",
      "discordId": "467905824920961036",
      "discordUsername": "luu_biquitous",
      "discordNickname": "류석/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8127-89b5-e98f1e91238f",
      "name": "허재혁/5기",
      "discordId": "926487567354970132",
      "discordUsername": "manyfast.io",
      "discordNickname": "허재혁/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8128-8b5c-fd496831462a",
      "name": "장주선/jason/2기",
      "discordId": "749935285000994826",
      "discordUsername": "jason920_",
      "discordNickname": "장주선/jason/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-812b-84a4-d4723eba758b",
      "name": "박형렬/5기",
      "discordId": "977488874207084594",
      "discordUsername": "broheat86",
      "discordNickname": "박형렬/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-812c-addd-ddd40ce443c0",
      "name": "심소연/AIPlay/1기",
      "discordId": "1128639639977201695",
      "discordUsername": "allright68",
      "discordNickname": "심소연/AIPlay/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-812d-ab59-f05a9f5ada3b",
      "name": "김예린/키리/1기",
      "discordId": "1047314216052330577",
      "discordUsername": "jobmakers_",
      "discordNickname": "김예린/키리/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-812f-bf33-ceb97ad5c68a",
      "name": "박지원/G1/2기",
      "discordId": "1416665569221935204",
      "discordUsername": "kyuwonz",
      "discordNickname": "박지원/G1/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8132-b2ca-dd1dea319b0b",
      "name": "김보람_4기",
      "discordId": "839527567190130718",
      "discordUsername": "ellie_pm",
      "discordNickname": "김보람_4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8133-8651-fb65f4d8e0b5",
      "name": "이효진/지니/1기",
      "discordId": "1184081743117025362",
      "discordUsername": "jini_room",
      "discordNickname": "이효진/지니/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8133-8738-ee60a2466387",
      "name": "전수린/제이드/0기",
      "discordId": "949180718842535966",
      "discordUsername": "ringring_9999",
      "discordNickname": "전수린/제이드/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8136-8bba-cdef020c436f",
      "name": "레츠리부트",
      "discordId": "1427199894778810368",
      "discordUsername": "monday_mimi",
      "discordNickname": "레츠리부트",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8137-8490-cde938d2cefe",
      "name": "김미란/5기",
      "discordId": "1065037359072153750",
      "discordUsername": "mkim3089",
      "discordNickname": "김미란/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8138-ad0a-c715dcd80eae",
      "name": "박광수/부로그/4기",
      "discordId": "1443616439163420745",
      "discordUsername": "bulog_kr",
      "discordNickname": "박광수/부로그/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-813b-9008-ca11c40f2a5d",
      "name": "이상엽/0기",
      "discordId": "505665905166909451",
      "discordUsername": "isangyeob0125",
      "discordNickname": "이상엽/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8144-a822-d32de275d1d0",
      "name": "윤채원/T2WW/4기",
      "discordId": "1043183992767258674",
      "discordUsername": "clarechwyoon",
      "discordNickname": "윤채원/T2WW/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8146-82ed-ca89eda10034",
      "name": "파묵",
      "discordId": "1306527505322217497",
      "discordUsername": "ghoiibaad",
      "discordNickname": "파묵",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8147-8d09-c0870a3b6a39",
      "name": "서혜지/이현/4기",
      "discordId": "1354437755454750881",
      "discordUsername": "seohyeji.yh",
      "discordNickname": "서혜지/이현/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-814f-9117-fd59af671dad",
      "name": "박영솔/swlbear/0기",
      "discordId": "1116519077410779228",
      "discordUsername": "swlbear",
      "discordNickname": "박영솔/swlbear/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8152-ab1e-f0d981b6d7f8",
      "name": "이세정/1기",
      "discordId": "1029286158389215252",
      "discordUsername": "whynotblair",
      "discordNickname": "이세정/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8154-8a39-fc3a0c7e4dfe",
      "name": "조현승/이안/3기",
      "discordId": "880397409262370857",
      "discordUsername": "bbuggumaen7296",
      "discordNickname": "조현승/이안/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8155-954d-c5cc069236a2",
      "name": "장동원 / 1기",
      "discordId": "1405245484041502871",
      "discordUsername": "jiocom357",
      "discordNickname": "장동원 / 1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8156-b1b5-fe67b5dae2e4",
      "name": "손한승/0기",
      "discordId": "1392755508498403488",
      "discordUsername": "sonhanseung_43671",
      "discordNickname": "손한승/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8157-b993-cbf149027388",
      "name": "강성규/성구/빌더코치",
      "discordId": "1339978721859338333",
      "discordUsername": "seonggoos",
      "discordNickname": "강성규/성구/빌더코치",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8158-8b1c-de69eca9a494",
      "name": "박현준 / 노코드 개발 / 3기",
      "discordId": "915962978879299635",
      "discordUsername": "woodie6437",
      "discordNickname": "박현준 / 노코드 개발 / 3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8159-99be-eaca7ef2d379",
      "name": "조수빈",
      "discordId": "1330145052823126031",
      "discordUsername": "chorong2025_65465",
      "discordNickname": "조수빈",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-815c-b7bb-d1ece37c0925",
      "name": "Shawn/4기",
      "discordId": "1082616788396806194",
      "discordUsername": "ysore",
      "discordNickname": "Shawn/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-815f-8f32-ce8c26a85e15",
      "name": "5기/ 똑사장 연우",
      "discordId": "1247448582101930040",
      "discordUsername": "dong_.chimi",
      "discordNickname": "5기/ 똑사장 연우",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-815f-b84b-c27653b528ad",
      "name": "김주희/SAYU/3기",
      "discordId": "1192681812640677979",
      "discordUsername": "ateudeog_41153",
      "discordNickname": "김주희/SAYU/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8162-871b-f724542b12c2",
      "name": "신재식/지미/3기",
      "discordId": "875902056731381810",
      "discordUsername": "manggo9724",
      "discordNickname": "신재식/지미/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8163-9abf-cbdd64b6ed26",
      "name": "이은임/데비/5기",
      "discordId": "1455788498341597257",
      "discordUsername": "debi01740",
      "discordNickname": "이은임/데비/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8164-92d6-e4f169863113",
      "name": "하이서/피그마튜터/1기",
      "discordId": "1190249303613124689",
      "discordUsername": "iseo_05209",
      "discordNickname": "하이서/피그마튜터/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8167-9afc-d6456b86607d",
      "name": "조쉬/운영자",
      "discordId": "803843372392382504",
      "discordUsername": "joshproductletter",
      "discordNickname": "조쉬/운영자",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-816a-9d95-eeaf04780c19",
      "name": "송경연/Trinity/2기",
      "discordId": "454468118153265174",
      "discordUsername": "trinity2876",
      "discordNickname": "송경연/Trinity/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-816a-be42-f293d4074ce4",
      "name": "calm",
      "discordId": "948234505737617469",
      "discordUsername": "ong9711",
      "discordNickname": "calm",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-816c-8cbb-ee9ca78755bb",
      "name": "임소연/임셸/5기",
      "discordId": "1118787928949264494",
      "discordUsername": "yeon_coach",
      "discordNickname": "임소연/임셸/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-816c-b531-fba690e5c6d9",
      "name": "김영훈/스티브잡부/5기",
      "discordId": "440463702534258688",
      "discordUsername": "stevejobboo",
      "discordNickname": "김영훈/스티브잡부/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-816d-945d-f2318eb97276",
      "name": "강정호/0기",
      "discordId": "1270892788799504444",
      "discordUsername": "jeongho17384",
      "discordNickname": "강정호/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-816e-87f6-fc457a163708",
      "name": "채영",
      "discordId": "1309502559492509716",
      "discordUsername": "caeyeong_36655",
      "discordNickname": "채영",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-816e-b075-ffe4295eeae0",
      "name": "권고은/율무/2기",
      "discordId": "1016213968043376661",
      "discordUsername": "yulmu0664",
      "discordNickname": "권고은/율무/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8170-936a-dc61cd98ad64",
      "name": "김솔/5기",
      "discordId": "755082333442277447",
      "discordUsername": "solsol5853",
      "discordNickname": "김솔/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8170-a5fe-e9561bc09c6f",
      "name": "Casey",
      "discordId": "809381480610529280",
      "discordUsername": "yeongjun9872",
      "discordNickname": "Casey",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8171-8327-da6331abb680",
      "name": "이소영/원림/1기",
      "discordId": "814301293736230942",
      "discordUsername": "gracedell_real",
      "discordNickname": "이소영/원림/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8171-ac1c-fc7ab1f9e3ab",
      "name": "김효주/2기",
      "discordId": "927756763149787216",
      "discordUsername": "hyosour_",
      "discordNickname": "김효주/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8173-93d9-e06d20d85ad1",
      "name": "리아 : )",
      "discordId": "1456571880419889313",
      "discordUsername": "energetic_peacock_80390",
      "discordNickname": "리아 : )",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8173-977d-e1683956543f",
      "name": "박서연/0기",
      "discordId": "933708481729536051",
      "discordUsername": "yeonee9740",
      "discordNickname": "박서연/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8173-ab1a-f932b925a2a3",
      "name": "김지훈/5기",
      "discordId": "482614983239270402",
      "discordUsername": "cheese_som",
      "discordNickname": "김지훈/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8174-9b3e-dc3de7784ed5",
      "name": "김태화/태화/2기",
      "discordId": "1091993339286540309",
      "discordUsername": "bbachinco",
      "discordNickname": "김태화/태화/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8174-aa74-ece768ddee3a",
      "name": "조인기/디지트미/4기",
      "discordId": "1152999518875435178",
      "discordUsername": "dudu_27718",
      "discordNickname": "조인기/디지트미/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8175-8003-d1e0cb5c6e6b",
      "name": "권기룡/4기",
      "discordId": "1383427919678013545",
      "discordUsername": "dobongsantekeumaen_52308",
      "discordNickname": "권기룡/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8176-8a79-f68ce2e34df1",
      "name": "이진아/제나/5기",
      "discordId": "1295735487121588315",
      "discordUsername": "jinhwa_leeja",
      "discordNickname": "이진아/제나/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8178-a90e-f4993bb0d121",
      "name": "한태봉/술끊은농부/1기",
      "discordId": "1179375324757241857",
      "discordUsername": "longinus1000",
      "discordNickname": "한태봉/술끊은농부/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8179-95ca-cca85196c9b7",
      "name": "전다원/캐럿/5기",
      "discordId": "1455751791646871697",
      "discordUsername": "jnjh12",
      "discordNickname": "전다원/캐럿/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-817c-b25b-ce5f02b7aba4",
      "name": "추성훈/1기",
      "discordId": "411542077508157440",
      "discordUsername": "eddychu.",
      "discordNickname": "추성훈/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-817e-99d4-d1284a726f98",
      "name": "염민지/1기",
      "discordId": "1405150289228595261",
      "discordUsername": "rosayeom",
      "discordNickname": "염민지/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8181-8121-d99a55098b89",
      "name": "두어(투자자)",
      "discordId": "562511437029965847",
      "discordUsername": "doer2451",
      "discordNickname": "두어(투자자)",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8182-970c-f2fd06cecfd2",
      "name": "보람/헤이지니/1기",
      "discordId": "1405118493216477184",
      "discordUsername": "heijini001",
      "discordNickname": "보람/헤이지니/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8184-97ac-ee30d7a3cbc6",
      "name": "신동찬 / 0기",
      "discordId": "1227227718475579486",
      "discordUsername": "susu05426",
      "discordNickname": "신동찬 / 0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-818b-b028-ce7b9da6ce7c",
      "name": "닉/4기",
      "discordId": "1026078625189089280",
      "discordUsername": "nickwrkz",
      "discordNickname": "닉/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-818e-9186-fcb936a0857a",
      "name": "양정화/(데브로더)타래/4기",
      "discordId": "807292789817737216",
      "discordUsername": "siltarre",
      "discordNickname": "양정화/(데브로더)타래/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-818e-a532-d5d9e2e42a24",
      "name": "정경덕/Joy/3기",
      "discordId": "1073777072176107530",
      "discordUsername": "joyjung73",
      "discordNickname": "정경덕/Joy/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8190-8a60-c9ffbf08cb45",
      "name": "김성규 / 라핀 / 1기",
      "discordId": "1183406208628035637",
      "discordUsername": "lapin_dev",
      "discordNickname": "김성규 / 라핀 / 1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8191-932a-ea4d7c670bee",
      "name": "박진우/Curt/2기",
      "discordId": "514447872117309440",
      "discordUsername": "curt7379",
      "discordNickname": "박진우/Curt/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8191-9ebf-ecb59e3bd4c9",
      "name": "고드",
      "discordId": "1444311757978996830",
      "discordUsername": "godeu_91459",
      "discordNickname": "고드",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8192-ad58-e797b9beee89",
      "name": "김은정/엘린/5기",
      "discordId": "1455898239349035079",
      "discordUsername": "elinkim0797",
      "discordNickname": "김은정/엘린/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8193-94b4-f91d58676bcf",
      "name": "김명현/유하간/3기",
      "discordId": "1431582248716730469",
      "discordUsername": "yuhagan",
      "discordNickname": "김명현/유하간/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8193-ad1e-d949bd4fe269",
      "name": "손정민/코코/4기",
      "discordId": "1443421933445054525",
      "discordUsername": "koko_69667",
      "discordNickname": "손정민/코코/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8196-aa5f-c2ae544ec0d8",
      "name": "이은지/5기",
      "discordId": "763294880503037953",
      "discordUsername": "ariel__ariel",
      "discordNickname": "이은지/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8196-ab67-db9819c39092",
      "name": "벤자민/커뮤니티 매니저",
      "discordId": "1055485546509643816",
      "discordUsername": "byeonsangmin_benjamin",
      "discordNickname": "벤자민/커뮤니티 매니저",
      "profileImage": "",
      "tracks": [
        "Shortform"
      ],
      "track": "Shortform",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8198-807a-ff8902053c33",
      "name": "최민지/칼슨/4기",
      "discordId": "948597740529651802",
      "discordUsername": "eunoia.c",
      "discordNickname": "최민지/칼슨/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-8199-8068-d812e53ff72c",
      "name": "지미",
      "discordId": "1430514544693874759",
      "discordUsername": "jimi_78850",
      "discordNickname": "지미",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-819b-8918-c6a25707343d",
      "name": "서유상/ 제나 /3기",
      "discordId": "937608136318144543",
      "discordUsername": "xena2022.",
      "discordNickname": "서유상/ 제나 /3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-819b-bd3e-ef19b88b27db",
      "name": "윤사라/하기로/5기",
      "discordId": "1456132328849149953",
      "discordUsername": "sara.mindplanet",
      "discordNickname": "윤사라/하기로/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-819c-8691-dae29c3e7839",
      "name": "MK",
      "discordId": "1455772215244230815",
      "discordUsername": "exuberant_cheetah_30676",
      "discordNickname": "MK",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-819d-a8d4-eb25d6228676",
      "name": "강로하/아토피는몽로/3기",
      "discordId": "1432178934665056396",
      "discordUsername": "atopineunmongro_36334",
      "discordNickname": "강로하/아토피는몽로/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-819e-bcb7-dc826ed85833",
      "name": "배효진/2기",
      "discordId": "1416782927924301844",
      "discordUsername": "hyojinbae",
      "discordNickname": "배효진/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81a0-9f07-e5f688130f0d",
      "name": "구름향기",
      "discordId": "1405134129187520623",
      "discordUsername": "gureumhyanggi_68748",
      "discordNickname": "구름향기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81a1-a7fa-f962a6c94cde",
      "name": "Mkkim",
      "discordId": "1455789446564675685",
      "discordUsername": "mkkim0770",
      "discordNickname": "Mkkim",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81a4-9bf2-f3f1d68d8f95",
      "name": "김유나/이나/4기",
      "discordId": "1272113241321111562",
      "discordUsername": "rani_24",
      "discordNickname": "김유나/이나/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81a6-ba23-f089ba1dab7a",
      "name": "이예지/2기",
      "discordId": "920874518145286244",
      "discordUsername": "yl5254",
      "discordNickname": "이예지/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81a7-8774-fd8b3902c84f",
      "name": "정병진/뉴스대디/5기",
      "discordId": "1435648110872236114",
      "discordUsername": "nyuseudaedi_40019",
      "discordNickname": "정병진/뉴스대디/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81a8-8c97-ec31a2362494",
      "name": "정지용/0기",
      "discordId": "305865661148692481",
      "discordUsername": "jiyong9038",
      "discordNickname": "정지용/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81a8-a8b2-e04259595f43",
      "name": "김진홍/진킴/1기",
      "discordId": "1395205209680121919",
      "discordUsername": "jinhong_jean",
      "discordNickname": "김진홍/진킴/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81a8-b95e-ead6db035ab9",
      "name": "동범/1기",
      "discordId": "262645433602408449",
      "discordUsername": "jeongjeomri",
      "discordNickname": "동범/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81a9-9ff0-f12cc8872f27",
      "name": "이재만/싱크/3기",
      "discordId": "1407983233118765106",
      "discordUsername": "aisyncclub",
      "discordNickname": "이재만/싱크/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81aa-9824-f6ac6decac9c",
      "name": "배정규/4기",
      "discordId": "875215383546699886",
      "discordUsername": "eric_seizer",
      "discordNickname": "배정규/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81ad-bd25-dd9081293607",
      "name": "민지선/5기",
      "discordId": "1065866329082564678",
      "discordUsername": "minpro_61477",
      "discordNickname": "민지선/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81af-ac09-c902aa7f0036",
      "name": "이지홍/0기",
      "discordId": "1193822897622503457",
      "discordUsername": "hong_shifter",
      "discordNickname": "이지홍/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81b1-a700-d5e731372d00",
      "name": "이윤정/4기",
      "discordId": "1226720512353239111",
      "discordUsername": "reyoo100",
      "discordNickname": "이윤정/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81b2-88e8-f5d8ffdd51fe",
      "name": "이창수/솔라드/4기",
      "discordId": "416265870516551692",
      "discordUsername": "dennisjr1004",
      "discordNickname": "이창수/솔라드/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81b4-9525-ef15e0aa6c38",
      "name": "양희정/swan/3기",
      "discordId": "1426147820364234805",
      "discordUsername": "channelswan",
      "discordNickname": "양희정/swan/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81b6-850b-d061a62bb1d2",
      "name": "문지호",
      "discordId": "1183736061977952343",
      "discordUsername": "saya_21742",
      "discordNickname": "문지호",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81b6-a0e8-facc8f626516",
      "name": "고장혁/링코리/1기",
      "discordId": "1405475165290364972",
      "discordUsername": "gojanghyeog_76249",
      "discordNickname": "고장혁/링코리/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81b7-90f2-cdf82e718492",
      "name": "서청원/원원/4기",
      "discordId": "556325040883367938",
      "discordUsername": "kyleseo",
      "discordNickname": "서청원/원원/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81b7-bae2-f3a4e4e34265",
      "name": "yoon",
      "discordId": "1430509058619736176",
      "discordUsername": "yoon_98929",
      "discordNickname": "yoon",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81b8-af8d-c9897fbb9d2b",
      "name": "이충우/caleb/0기",
      "discordId": "840589349409259572",
      "discordUsername": "caleb20507206",
      "discordNickname": "이충우/caleb/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81bb-a63b-ce95c9675552",
      "name": "박소연/쏘냐/5기",
      "discordId": "1455750415504244979",
      "discordUsername": "_sonialab",
      "discordNickname": "박소연/쏘냐/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81bd-afbd-c1f512f81240",
      "name": "김재승/2기",
      "discordId": "1150452666456096770",
      "discordUsername": "martdealer",
      "discordNickname": "김재승/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81be-bb84-cf22805e474b",
      "name": "박경민/케이/0기",
      "discordId": "1353615695488749630",
      "discordUsername": "kyungmin_2192",
      "discordNickname": "박경민/케이/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81c0-be21-e2d1ba116316",
      "name": "김강산/마비스/3기",
      "discordId": "1339962409552711805",
      "discordUsername": "ai_marvis_31343",
      "discordNickname": "김강산/마비스/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81c2-a7e3-ea4debfc9065",
      "name": "수민/1기",
      "discordId": "1405117672894500948",
      "discordUsername": "soom._.inc",
      "discordNickname": "수민/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81c3-8435-e5d51d633146",
      "name": "pottatv",
      "discordId": "1381554445959303250",
      "discordUsername": "redjade0512",
      "discordNickname": "pottatv",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81c5-9551-fd5cf1adb98d",
      "name": "한나린/머치/1기",
      "discordId": "1281872752835559477",
      "discordUsername": "meoci_88116",
      "discordNickname": "한나린/머치/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81c7-9646-ea05473a0c6f",
      "name": "백지요/카마/2기",
      "discordId": "934795495853944872",
      "discordUsername": "jyojyo8478",
      "discordNickname": "백지요/카마/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81cb-97f3-c2fe5113128f",
      "name": "정준모 / 1기",
      "discordId": "1330533825754955898",
      "discordUsername": "junemoejeong",
      "discordNickname": "정준모 / 1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81cc-8dab-e3845e5f45fd",
      "name": "김영태/구름향기/1기",
      "discordId": "1405133051540934705",
      "discordUsername": "gureumhyanggi",
      "discordNickname": "김영태/구름향기/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81ce-bb6a-ed9156cbc41e",
      "name": "박명희/샤나/5기",
      "discordId": "998583129885384774",
      "discordUsername": "shaynapark3372",
      "discordNickname": "박명희/샤나/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81d1-b4c7-dceef6bdfd15",
      "name": "샤무스/1기",
      "discordId": "1126851617686306919",
      "discordUsername": "s5amu5",
      "discordNickname": "샤무스/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81d4-92a0-c63436c2b32b",
      "name": "김정민/마크/4기",
      "discordId": "1444237962924527750",
      "discordUsername": "markkim0121",
      "discordNickname": "김정민/마크/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81d4-af7d-e135efd7b24c",
      "name": "최민호/5기",
      "discordId": "300949905994940418",
      "discordUsername": "ahahaaahhahahaha",
      "discordNickname": "최민호/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81d8-9a88-de1ef7f11901",
      "name": "엘린",
      "discordId": "1455896535064776714",
      "discordUsername": "elrin_64155",
      "discordNickname": "엘린",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81d8-a509-d87fc79035a1",
      "name": "MDM/찬섭/세일즈코치",
      "discordId": "1379321132636704880",
      "discordUsername": "mdmstudio",
      "discordNickname": "MDM/찬섭/세일즈코치",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81d8-af66-ebfffbd42783",
      "name": "임솔/청년장인/1기",
      "discordId": "1328793365894004736",
      "discordUsername": "ceongnyeonjangin_78689",
      "discordNickname": "임솔/청년장인/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81d9-b0fa-c7a9b8c8cbc6",
      "name": "서인근/0기",
      "discordId": "1374699750778998834",
      "discordUsername": "ike0565",
      "discordNickname": "서인근/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81da-bab6-f66a2ff79201",
      "name": "호수/1기",
      "discordId": "809094699700584479",
      "discordUsername": "hosu4873",
      "discordNickname": "호수/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81db-a594-ee97a8e9aa16",
      "name": "조예도/조지/5기",
      "discordId": "1455790949144727595",
      "discordUsername": "yesdozozzy",
      "discordNickname": "조예도/조지/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81df-99d8-f47fea0641ee",
      "name": "이의령/4기",
      "discordId": "793657020040478750",
      "discordUsername": "wooridle4204",
      "discordNickname": "이의령/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81e2-a879-e6d96f76dd19",
      "name": "이가윤/illy/3기",
      "discordId": "927415118097174569",
      "discordUsername": "igayun.",
      "discordNickname": "이가윤/illy/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81e3-aac0-fb718c8566d1",
      "name": "정새미/새미닥/3기",
      "discordId": "1287674989213913139",
      "discordUsername": "saemijung",
      "discordNickname": "정새미/새미닥/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81e5-ad03-d1c8941abc99",
      "name": "대빵쉐프",
      "discordId": "1457334641970384946",
      "discordUsername": "daebbangswepeu_66957",
      "discordNickname": "대빵쉐프",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81ee-b296-c827e00f4685",
      "name": "브라이언/5기",
      "discordId": "1219146433081511947",
      "discordUsername": "bryon2030",
      "discordNickname": "브라이언/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81ef-b175-fbb7adccf616",
      "name": "조민석/4기",
      "discordId": "439028788156825610",
      "discordUsername": "chomangani",
      "discordNickname": "조민석/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f0-b62f-ea782a4762e5",
      "name": "종빈/1기",
      "discordId": "1405147146784608330",
      "discordUsername": "jongb.in",
      "discordNickname": "종빈/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f1-804e-d4107aec19a6",
      "name": "김기훈/단덕/1기",
      "discordId": "584605040115843072",
      "discordUsername": "danduck.",
      "discordNickname": "김기훈/단덕/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f1-b668-cf32ec9eace6",
      "name": "진창용/꾸머/5기",
      "discordId": "863629308471803904",
      "discordUsername": "this8228",
      "discordNickname": "진창용/꾸머/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f2-bf18-d4f3b473668c",
      "name": "권세미/1기",
      "discordId": "1389122521965662248",
      "discordUsername": "ssmikn818",
      "discordNickname": "권세미/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f3-8c67-eaec98d32e09",
      "name": "지주현/초록벨리/3기",
      "discordId": "1139529557301543012",
      "discordUsername": "corogbelri_73296",
      "discordNickname": "지주현/초록벨리/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f5-b21c-d09452227edc",
      "name": "박준서/피멩/5기",
      "discordId": "1455777260844875877",
      "discordUsername": "bepeoplemaker",
      "discordNickname": "박준서/피멩/5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f6-836e-e9556dddc3d8",
      "name": "윤지아/4기",
      "discordId": "1444237961842393122",
      "discordUsername": "yongyong05531",
      "discordNickname": "윤지아/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f7-b823-e89253a13b9d",
      "name": "희열자기/1기",
      "discordId": "1405136195083829260",
      "discordUsername": "heeyeoljagi",
      "discordNickname": "희열자기/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f8-ac04-c35121a1b8f0",
      "name": "조상원/2기",
      "discordId": "968078120513073214",
      "discordUsername": "sangwoncho",
      "discordNickname": "조상원/2기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f8-bcfe-c19776c55202",
      "name": "김응신/1기",
      "discordId": "900949181861101620",
      "discordUsername": "eungshin",
      "discordNickname": "김응신/1기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81f9-b1aa-efecc8cfcbc4",
      "name": "이민재(개발자)",
      "discordId": "657592860845146113",
      "discordUsername": "roopang2896",
      "discordNickname": "이민재(개발자)",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81fa-a2e9-e0e7f8c07a4d",
      "name": "양성열 / 5기",
      "discordId": "1212351510290243616",
      "discordUsername": "_yang5071",
      "discordNickname": "양성열 / 5기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81fb-b077-d892c63bbbe9",
      "name": "오지나/달리오/4기",
      "discordId": "1377473439828283463",
      "discordUsername": "jina.aa",
      "discordNickname": "오지나/달리오/4기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81fc-a7e5-cb5585e52ed4",
      "name": "최희재/조이/0기",
      "discordId": "776995360010403840",
      "discordUsername": "__heeze",
      "discordNickname": "최희재/조이/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81ff-81ed-f545dc9b8673",
      "name": "임지은/3기",
      "discordId": "930733717188661279",
      "discordUsername": "imjieun90",
      "discordNickname": "임지은/3기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81ff-9153-cf0e685d6dd5",
      "name": "이지은/지은/0기",
      "discordId": "897413673834930197",
      "discordUsername": "jieun_1lab",
      "discordNickname": "이지은/지은/0기",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f796446-e4ec-81ff-9efe-e885071b1236",
      "name": "김강민(크리에이터)",
      "discordId": "528526853204344842",
      "discordUsername": "kimgangmin5512",
      "discordNickname": "김강민(크리에이터)",
      "profileImage": "",
      "tracks": [
        "Unassigned"
      ],
      "track": "Unassigned",
      "joinedAt": "2026-01-29",
      "notionSync": true
    },
    {
      "id": "2f996446-e4ec-805b-9fb1-ed12f699b8de",
      "name": "스미스",
      "discordId": "471575244029689856",
      "discordUsername": "smith_james2794",
      "discordNickname": "스미스",
      "profileImage": "",
      "tracks": [
        "Builder Basic",
        "AI Agent"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-01-31",
      "notionSync": true
    }
  ],
  "submissions": [
    {
      "memberId": "2f796446-e4ec-8111-9a9c-f776e9209f33",
      "date": "2026-01-30",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.figma.com/asjdklasjdlkas",
      "content": "[이안/부운영자] 크리에이터 숏폼 과제",
      "images": null
    }
  ],
  "lastUpdated": "2026-02-04T13:06:08.601365"
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
