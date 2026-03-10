
import { Member, Track, Submission, SubmissionStatus } from './types';

// ✅ Python 스크립트로 추출한 실제 데이터 (Last Sync: 2026-03-10 20:27:39)
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
        "Shortform"
      ],
      "track": "Shortform",
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
      "id": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "name": "김강산",
      "discordId": "1339962409552711805",
      "discordUsername": "ai_marvis_31343",
      "discordNickname": "김강산/마비스/3기",
      "profileImage": "https://cdn.discordapp.com/avatars/1339962409552711805/7ecc15293a31b905d568451daa62de13.png?size=1024",
      "tracks": [
        "Sales",
        "Builder Advanced"
      ],
      "track": "Sales",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
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
      "id": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "name": "임성규",
      "discordId": "1219146433081511947",
      "discordUsername": "bryon2030",
      "discordNickname": "브라이언/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1219146433081511947/4e22c528d161aa10e6b88f63aa1417b6.png?size=1024",
      "tracks": [
        "Longform"
      ],
      "track": "Longform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": "6기",
      "created_time": "2026-01-05T08:36:00.000Z"
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
      "id": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "name": "김영훈",
      "discordId": "440463702534258688",
      "discordUsername": "stevejobboo",
      "discordNickname": "김영훈/스티브잡부/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/440463702534258688/8075e31ad9cfaafec735509b81227027.png?size=1024",
      "tracks": [
        "Longform",
        "Shortform"
      ],
      "track": "Longform",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
      "created_time": "2026-01-05T08:36:00.000Z"
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
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
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
        "Builder Basic"
      ],
      "track": "Builder Basic",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
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
        "Shortform"
      ],
      "track": "Shortform",
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
        "Builder Basic"
      ],
      "track": "Builder Basic",
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
      "id": "2df6400e-9268-8195-a4a2-f00355c27e81",
      "name": "류석",
      "discordId": "467905824920961036",
      "discordUsername": "luu_biquitous",
      "discordNickname": "류석/4기",
      "profileImage": "https://cdn.discordapp.com/avatars/467905824920961036/5ce3fd097bbed8115b43ba4d911c08c3.png?size=1024",
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
      "id": "2df6400e-9268-81b0-8550-de5e956fa37c",
      "name": "김은정",
      "discordId": "1455898239349035079",
      "discordUsername": "elinkim0797",
      "discordNickname": "김은정/엘린/5기",
      "profileImage": "https://cdn.discordapp.com/avatars/1455898239349035079/0bdb333a120f1f02609ed9a6ded64b72.png?size=1024",
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
      "id": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "name": "백지요",
      "discordId": "934795495853944872",
      "discordUsername": "jyojyo8478",
      "discordNickname": "백지요/카마/2기",
      "profileImage": "https://cdn.discordapp.com/avatars/934795495853944872/00a29ae694074646dd004626c47aef0b.png?size=1024",
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
      "discordNickname": "이종석/Drone/0기- ",
      "profileImage": "https://cdn.discordapp.com/avatars/634719627213144065/c80473675370015533b3831a4dbaf5a2.png?size=1024",
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
        "Shortform"
      ],
      "track": "Shortform",
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
        "AI Agent"
      ],
      "track": "AI Agent",
      "joinedAt": "2026-01-05",
      "notionSync": true,
      "cohort": null,
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
      "id": "2df6400e-9268-81f1-aa1e-f7250a0d3470",
      "name": "박경민",
      "discordId": "1353615695488749630",
      "discordUsername": "kyungmin_2192",
      "discordNickname": "박경민/케이/0기",
      "profileImage": "https://cdn.discordapp.com/avatars/1353615695488749630/48a671e10861890ee06b2f8546c4b6e7.png?size=1024",
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
        "AI Agent"
      ],
      "track": "AI Agent",
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
      "id": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "name": "차진혁",
      "discordId": "1172143518064582668",
      "discordUsername": "chacha_952_38241",
      "discordNickname": "차진혁/에반/6기",
      "profileImage": "https://cdn.discordapp.com/avatars/1172143518064582668/0e351edb4bbe3d129099ab14fffb7932.png?size=1024",
      "tracks": [
        "Longform",
        "Shortform"
      ],
      "track": "Longform",
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
        "Shortform"
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
    }
  ],
  "submissions": [
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-03-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480824607807111290/01-lifestyle.png?ex=69b114e2&is=69afc362&hm=7d53ee39de587117a37bd11d97a351eb0fd78212bb3b9ab3791d7f00a04a47b4&",
      "content": "<@682196201818554424> 님껄 보고 저한테 어울리게 앱스토어 마케팅 이미지 만드는 멀티에이전트를 구현했습니다. 이미지들은 실제로 앱스토어에 올라간 새 앱의 앱스토어 이미지 입니다.\n\n아직 한번에 다 잘 나오지는 않는데 그래도 이정도만 만족입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480824607807111290/01-lifestyle.png?ex=69b114e2&is=69afc362&hm=7d53ee39de587117a37bd11d97a351eb0fd78212bb3b9ab3791d7f00a04a47b4&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480824610684669963/02-lockscreen.png?ex=69b114e3&is=69afc363&hm=70d36eb92c7e481e2295b1ea718eaaee147cae7471e7ed4de8eb15f3c7d6c008&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480824619836375140/03-voice.png?ex=69b114e5&is=69afc365&hm=0f08fc665772f06bce7059e34f1bc39abf47dbb113f1b7020a80ac34a4c1f8e8&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480824622952874054/04-timeline.png?ex=69b114e6&is=69afc366&hm=18315cdaaf7f75aa4b9a8d6edd47430f9c46b03064dc61d84f56b06f5d7ca03f&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480824625566060544/05-empathy.png?ex=69b114e7&is=69afc367&hm=b200a3e549df0b5341888b1fa03bd6908a4b3eb433bbd797d10380566d9cf89f&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480824628170457199/06-card-share.png?ex=69b114e7&is=69afc367&hm=91f2a23c2f67dd7ed94534f13ea54ef380a5f0a3c597e501acab923c60c25dee&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480824630066413679/07-stats.png?ex=69b114e8&is=69afc368&hm=d082a4b304b421c92998f8c84850ff5348ba095061b5546797f5a0ae797555a8&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480824632260169841/08-privacy.png?ex=69b114e8&is=69afc368&hm=392ca54783cb5dc572a18dbe794b6d3a3b45f43f32d0694729a2a5d5b3f3ee4e&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480824634097275001/09-watch.png?ex=69b114e9&is=69afc369&hm=7c2a1553fa3a2bece7ee9b39228fcf1822a977ac6fde3091c13a32098700cdad&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480824636366127175/image.png?ex=69b114e9&is=69afc369&hm=7afae086508a4be6951dc73a87c4d4ff8cc3497b47ef5b582003735a538ccf7f&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81a2-9270-ebe22111bc3f",
      "date": "2026-03-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480814499475886140/2026-03-10_3.20.05.png?ex=69b10b78&is=69afb9f8&hm=5ca7cc4967eb8b487d684fe592332860a18e434d81632d06633be0b634ba7302&",
      "content": "절대 탈락되어서는 안된다는 일념 하나로, \n클로드 데스크탑 코드를 사용하여, \n지메일과 노션 MCP를 연동하고, \n일일 이메일 요약을 노션페이지로 매일 업데이트 하는 아주 단순한 자동화를 실행했습니다!",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480814499475886140/2026-03-10_3.20.05.png?ex=69b10b78&is=69afb9f8&hm=5ca7cc4967eb8b487d684fe592332860a18e434d81632d06633be0b634ba7302&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480814499865821195/2026-03-10_3.21.25.png?ex=69b10b78&is=69afb9f8&hm=0049ca871d887cd6774d90f129a73e0126b2406bbb44d964892e5b2c51ebda26&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-03-10",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@naratdon.kor/post/DVsE5KREzGi",
      "content": "https://www.threads.com/@naratdon.kor/post/DVsE5KREzGi",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-03-10",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVsCuPGkj8y?xmt=AQF0QmhqcsdutRzOStYQAl1psnZSFxkaB4VSE4KTqviPi6qFmSB8CqkkpgI_wbO4Q7RZVae4&slof=1",
      "content": "https://www.threads.com/@slowwbuilder/post/DVsCuPGkj8y?xmt=AQF0QmhqcsdutRzOStYQAl1psnZSFxkaB4VSE4KTqviPi6qFmSB8CqkkpgI_wbO4Q7RZVae4&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-03-10",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVsAQEDjyRa",
      "content": "https://www.threads.com/@han_lab_/post/DVsAQEDjyRa",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-10",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DVn-McmiIyE?xmt=AQF0asJ8EJUMcVM_NuzWkBml8wZt92Kmlh-7--pxNsblhT4m1BQ36-Z3pDSeWgN3viDiSfc&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DVn-McmiIyE?xmt=AQF0asJ8EJUMcVM_NuzWkBml8wZt92Kmlh-7--pxNsblhT4m1BQ36-Z3pDSeWgN3viDiSfc&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-10",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DVrj2-9iIkS?xmt=AQF0Sz8sIMCC-USwrwUksO9yH5N0W45Hz5jXEekRXG1AlI9PYYOedlyOzxIAGrCF9IdsE21T&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DVrj2-9iIkS?xmt=AQF0Sz8sIMCC-USwrwUksO9yH5N0W45Hz5jXEekRXG1AlI9PYYOedlyOzxIAGrCF9IdsE21T&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8139-82c8-cb21321cba9c",
      "date": "2026-03-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480642906485297207/2026-03-10_4.05.06.png?ex=69b06ba9&is=69af1a29&hm=0fe4001938a3733535c8b1f6b3cd6a75f7d1570559bb7fd6ffcc1d5863934798&",
      "content": "[3주차 과제 제출]\nmd 문서를 notion mcp 를 활용해서 정리해보았어요~!",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480642906485297207/2026-03-10_4.05.06.png?ex=69b06ba9&is=69af1a29&hm=0fe4001938a3733535c8b1f6b3cd6a75f7d1570559bb7fd6ffcc1d5863934798&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480642907101855744/2026-03-10_4.05.29.png?ex=69b06baa&is=69af1a2a&hm=9a305d526c9b2eaeaf6873b782cde461027861fded27056b040498a2172f8274&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8139-82c8-cb21321cba9c",
      "date": "2026-03-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480642906485297207/2026-03-10_4.05.06.png?ex=69b06ba9&is=69af1a29&hm=0fe4001938a3733535c8b1f6b3cd6a75f7d1570559bb7fd6ffcc1d5863934798&",
      "content": "md 문서를 notion mcp 를 활용해서 정리해보았어요~!",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480642906485297207/2026-03-10_4.05.06.png?ex=69b06ba9&is=69af1a29&hm=0fe4001938a3733535c8b1f6b3cd6a75f7d1570559bb7fd6ffcc1d5863934798&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480642907101855744/2026-03-10_4.05.29.png?ex=69b06baa&is=69af1a2a&hm=9a305d526c9b2eaeaf6873b782cde461027861fded27056b040498a2172f8274&"
      ]
    },
    {
      "memberId": "2df6400e-9268-817f-8006-cc6b2816473d",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://soom-note.cloud",
      "content": "https://soom-note.cloud\n1. 디자인 변경\n2. 결제 연동- 진행중입니다",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-03-10",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVqv1MoiRhj?xmt=AQF0VCqDmhZaE9bR15KPLOrhYKfj6CuUrDMwhDaHL3-3LQ",
      "content": "https://www.threads.com/@dodo_list_/post/DVqv1MoiRhj?xmt=AQF0VCqDmhZaE9bR15KPLOrhYKfj6CuUrDMwhDaHL3-3LQ",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-819b-99af-dc7716a5f96f",
      "date": "2026-03-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480579562332225656/image.png?ex=69b030ab&is=69aedf2b&hm=c3679cc6f64df854c4463f28907916c3cd0c6b168c6e131296aa26a90e977c4d&",
      "content": "과제 제출 합니다.\n[ SNS Screenshot Archive - notion mcp 로 전송 ] \n\n매일 모바일로 많은 스크린샷을 저장만하고 관리하기 어려웠는데,  이 스크린샷 정보들을 분석해서 어떤 내용인지, 어디에서 따온 스크린샷인지 정리하는 스킬만들어서 노션 mcp로 만들었습니다.  앞으로 쿨하게 이미 분석한 스크린샷 삭제하고 폰용량 확보할수 있겠어요.:)",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480579562332225656/image.png?ex=69b030ab&is=69aedf2b&hm=c3679cc6f64df854c4463f28907916c3cd0c6b168c6e131296aa26a90e977c4d&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480579562671702077/image.png?ex=69b030ab&is=69aedf2b&hm=b14ef6bb5d06efae65112cda977b8cb41331fea97529a711d133a3a7678dfa6f&"
      ]
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVqtm4nD3XL?xmt=AQF0Jz5Lg-W8qO59c5vEjlj-M2uDe02GKwtX37KlU2KCfQ",
      "content": "https://www.threads.com/@ghoiibaad/post/DVqtm4nD3XL?xmt=AQF0Jz5Lg-W8qO59c5vEjlj-M2uDe02GKwtX37KlU2KCfQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8028-8dbe-ef8246e90b85",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://biz-ai-start.lovable.app",
      "content": "https://biz-ai-start.lovable.app  테스트 결제 페이지까지 완료입니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480571893521318083/2026-03-09_11.23.24.png?ex=69b02987&is=69aed807&hm=1bc26e36af33b000b51f27586a75bceebdf3c01b320a041e7793ab8a371aa5d3&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DVqrNFdEzd5?xmt=AQF0CqBRUHzPqvDdN9DXPPG0u_4wX5v3Kh1QYSoUJNyTiA",
      "content": "https://www.threads.com/@jiyong.product/post/DVqrNFdEzd5?xmt=AQF0CqBRUHzPqvDdN9DXPPG0u_4wX5v3Kh1QYSoUJNyTiA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/stevejobboo_ai-gtm-swkruv-share-7436771746952916992-SUdT?utm_source=share&utm_medium=member_android&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "content": "https://www.linkedin.com/posts/stevejobboo_ai-gtm-swkruv-share-7436771746952916992-SUdT?utm_source=share&utm_medium=member_android&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8028-8dbe-ef8246e90b85",
      "date": "2026-03-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480540589723353220/2026-03-09_9.06.40.png?ex=69b00c5f&is=69aebadf&hm=7e121bbd1d0e86949a538caf729b8277f8282a1338aefeea3ee9c5e3969a05d6&",
      "content": "이걸 왜 이제 알았을까요? 너무좋네요 노션mcp",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480540589723353220/2026-03-09_9.06.40.png?ex=69b00c5f&is=69aebadf&hm=7e121bbd1d0e86949a538caf729b8277f8282a1338aefeea3ee9c5e3969a05d6&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480540590373605558/2026-03-09_9.14.00.png?ex=69b00c5f&is=69aebadf&hm=cf1c71a34fe7e75b0e50f840aada1bf538d11aab2675cee5e79735b632621071&"
      ]
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jakvis.labs/post/DVqaXMaCWje?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "content": "https://www.threads.com/@jakvis.labs/post/DVqaXMaCWje?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DVqYoL9j4Nv?xmt=AQF0nxGoCX39iInGHhPEolnO-Z4MGDe23uFuCZehtxZiyA",
      "content": "https://www.threads.com/@lawyerssm/post/DVqYoL9j4Nv?xmt=AQF0nxGoCX39iInGHhPEolnO-Z4MGDe23uFuCZehtxZiyA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSu62HrCo/",
      "content": "https://vt.tiktok.com/ZSu62HrCo/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVqOETumaaw?xmt=AQF0vfgcUxKXl62PmY0ZkxAY4T6zZt_ZS3LayzXqaPA0gHp-Cucc6kEVh4vNsxBi1bRvr9Y&slof=1",
      "content": "https://www.threads.com/@ai.profitwise/post/DVqOETumaaw?xmt=AQF0vfgcUxKXl62PmY0ZkxAY4T6zZt_ZS3LayzXqaPA0gHp-Cucc6kEVh4vNsxBi1bRvr9Y&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8137-8941-c3b05bd3ce53",
      "date": "2026-03-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480504670559670293/2026-03-09_6.54.52.png?ex=69afeaeb&is=69ae996b&hm=fdbe8eb1b7ec7d7f0e12e94c390df9c50457abfbd87fa7e203af2db9a0224c31&",
      "content": "현재 28개 정도의 커스텀 스킬을 만들어 사용중이고, 그중에 일부를 MCP 로 만들었습니다. 대부분 API 기반으로 작동하고, 리포트 산출물을 반복적으로 내는걸 목표로 합니다. \n그중 일부를 올려둡니다. \nnotion은 MCP, API 각각 시도했는데, 에러가 좀 나서 지금은 playwake?(정확하지 않습니다. 무슨 기능인지 몰라요..) 라는걸 AI 가 추천해줘서 그냥 JavaScript 를 스크래핑해오는 방식으로 하고 있습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480504670559670293/2026-03-09_6.54.52.png?ex=69afeaeb&is=69ae996b&hm=fdbe8eb1b7ec7d7f0e12e94c390df9c50457abfbd87fa7e203af2db9a0224c31&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@naratdon.kor/post/DVpcYbHEzCQ",
      "content": "https://www.threads.com/@naratdon.kor/post/DVpcYbHEzCQ",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81a0-9bc2-ce3cd8b4cc76",
      "date": "2026-03-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480465099981328506/image.png?ex=69afc611&is=69ae7491&hm=6787c636f6a0eb04fa1507a65548640deb3454eddd5177d20788a246e1955808&",
      "content": "뒤늦게 과제를 제출하네요.\n특정 제품에 대해 서브 에이전트를 통해 리뷰 및 뉴스레터 본문을 만들고, 이후 노션에 DB화 해봤습니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480465099981328506/image.png?ex=69afc611&is=69ae7491&hm=6787c636f6a0eb04fa1507a65548640deb3454eddd5177d20788a246e1955808&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480465100295897229/image.png?ex=69afc611&is=69ae7491&hm=ae952ec1bf40e03385eeab309fd85ef3e678a6ec05dd5ab63d50f510d0c3906c&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVp3M08kjzx?xmt=AQF0rUSX4OaGNlKE3ffx6TtynEO95o8O-PhaRbHvA_8NCA",
      "content": "https://www.threads.com/@slowwbuilder/post/DVp3M08kjzx?xmt=AQF0rUSX4OaGNlKE3ffx6TtynEO95o8O-PhaRbHvA_8NCA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8137-8941-c3b05bd3ce53",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://shackletonschool.imweb.me/",
      "content": "https://shackletonschool.imweb.me/\n\n디자인은 더 잘 하고 싶은데, 아직 시스템까지는 못 갔습니다.\n토스 결제 PG 신청했고 승인 대기중입니다",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dot.shef/post/DVpgoA1gWvL?hl=ko",
      "content": "https://www.threads.com/@dot.shef/post/DVpgoA1gWvL?hl=ko",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://hanbok-portrait.vercel.app/free",
      "content": "3주차 과제 인증\n본인의 사진을 넣으면 한복 이미지로 바뀌는데. \n보완이 필요합니다. ^^; \nhttps://hanbok-portrait.vercel.app/free",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-03-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480380715387453602/IMG_0343.png?ex=69af777a&is=69ae25fa&hm=559eaf1211c1fa952f3aabf2b73a83117a7702f1542de3247699f9e9ebf029a8&",
      "content": "토큰이 예상보다 과도하게 소비되어\n해결방안을 제시하라 했고, 1번을 적용했어요.\n전체 캐싱-> 개별\n\n4가지 우선순위별 솔루션:\n\n1. Prompt Caching 추가 (코드 한 줄, 효과 최대)\n2. max_tokens 조정 (안전하고 빠름)\n3. SNS + 이미지 분석 → Haiku 전환\n4. 스케줄러 리포트 → Batches API\n\n<@892518381536825344> 이종원님 과제를 보니, 제 구조는 투박함 그 자체. 구조 자체를 최적화를 해봐야겠습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480380715387453602/IMG_0343.png?ex=69af777a&is=69ae25fa&hm=559eaf1211c1fa952f3aabf2b73a83117a7702f1542de3247699f9e9ebf029a8&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-03-15",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://apss-in-toss-template-innerbuilder.lovable.app",
      "content": "3주차 과제 인증\n1. 리드마그넷으로 앱인토스 가이드 + 템플렛 문서를 생각하고 있습니다\n좀 더 수정이 필요해요\n\nhttps://apss-in-toss-template-innerbuilder.lovable.app\n\n2. 메인 포트폴리오 페이지와 연계해서 더 확장성을 높일려고 준비중입니다",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-03-09",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVo7eO0kxhy?xmt=AQF0qvf95Um96Sq0o11-wn6obon8jhVmCifEUuGgTcpizY58qZY4vVbDLeB3wjMUAudAdTOE",
      "content": "https://www.threads.com/@han_lab_/post/DVo7eO0kxhy?xmt=AQF0qvf95Um96Sq0o11-wn6obon8jhVmCifEUuGgTcpizY58qZY4vVbDLeB3wjMUAudAdTOE",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81b8-a720-e96e913c55d0",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://www.latpeed.com/products/4m7YY",
      "content": "📌 3주차 과제 인증                                                                                                                                                                          \n  리드마그넷으로 자신의 아이디어를 검증하고,                                                                                                                                                 실제 서비스까지 만들어볼 수 있게 도움을 주는                                                                                                                                             \n  **비즈니스 모델 캔버스 인터랙티브 도구**를 만들었습니다.                                                                                                                                 \n  \n  👉 https://www.latpeed.com/products/4m7YY\n\n  아직 디스커버리 채널과 서비스를 빌드 중이라\n  이번 주차는 경험하는 데 의의를 두었습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1480321812943470772/2026-03-09_064345.png?ex=69af409f&is=69adef1f&hm=4d1cb5223caac48137b85e23d5d38447aa9678768c4addbdbf1a11650fe438ad&",
        "https://cdn.discordapp.com/attachments/1470030785615761593/1480321813341933773/2026-03-09_064950.png?ex=69af409f&is=69adef1f&hm=ba535f54eb6cb32a03a00e3a33ae386660afa4f1bcfd7f17bcf6ec99cd6c426b&",
        "https://cdn.discordapp.com/attachments/1470030785615761593/1480321813807370380/2026-03-09_064408.png?ex=69af409f&is=69adef1f&hm=84e29470e5b76a7b55607c91b0d54807ecd75564fec0b27b764570edc98e7920&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480248466163761162/image.png?ex=69aefc50&is=69adaad0&hm=d5c6423729b162272d397b3e519807ee1ffd956d868306e24a1ffa76fa22a3b1&",
      "content": "과제 제출 합니다. 처음에는 노션 mcp를 이용해서 기존에 클로드코드로 작업을 하는 내용을 노션 db로 자동 저장이 되도록 하려고 했는데 굳이 토큰을 소모하지 않는 방법으로 변경을 했습니다. \n\n클로드코드 프로젝트 관리 시스템 — 작업 요약 및 워크플로우\n작업 내용 요약\n문제\n클로드코드로 다수의 프로젝트를 진행 중이나, 프로젝트별 진행상황·작업 이력·남은 작업이 체계적으로 관리되지 않음.\n검토 과정\n\n초기 아이디어: Notion MCP를 활용해 프로젝트 상태를 Notion에 기록 + CLI에서 조회\n1차 수정: Notion MCP는 매 세션마다 API 호출로 토큰을 소모하므로 비효율. CLAUDE.md 기반 로컬 관리로 전환\n2차 수정: 작업 이력을 장기 보존해야 하는데 CLAUDE.md가 비대해지면 토큰 낭비. → CLAUDE.md(현재 상태) + CHANGELOG.md(전체 이력)로 이원화, Notion은 대시보드로 활용\n3차 수정: 동기화 방식 검토. cron(서버 상시 가동 전제)은 일반 PC 환경에 부적합. → 세션 시작 시 동기화로 변경\n4차 수정: 세션 시작 시 클로드코드가 동기화하면 토큰 소모. → 셸 함수로 분리 (토큰 0)\n5차 수정: alias cc 대신 claude 자체를 래핑, 동기화 범위를 현재 프로젝트 → 전체 프로젝트로 확대, 백그라운드 실행으로 시작 지연 제거\n최종 수정: 장애 감지 로직을 시간 기반 → 파일 수정 시각 비교 방식으로 변경\n\n최종 산출물\n\nproject-management-plan.md: 클로드코드에 전달할 세부 계획서 (구현용)\n\n\n확정된 워크플로우\n일상 사용 흐름 (사용자 시점)\n1. 터미널에서 claude 입력 (평소와 동일, 추가 행동 없음)\n      ↓\n2. [자동] 셸 함수가 sync-to-notion.sh를 백그라운드 실행\n   - ~/projects/ 전체 스캔\n   - 이전 세션에서 변경된 CLAUDE.md/CHANGELOG.md를 Notion에 동기화\n   - 동기화 실패 시 로그에만 기록, claude 실행에 영향 없음\n      ↓ (동시에)\n3. [자동] 클로드코드 세션 시작\n      ↓\n4. 클로드코드로 작업 수행\n      ↓\n5. [자동] 클로드코드가 작업 완료 시마다:\n   - CLAUDE.md의 상태/최근 요약/남은 작업 갱신\n   - CHANGELOG.md에 작업 이력 append\n      ↓\n6. 세션 종료 (아무것도 안 함)\n      ↓\n7. 다음에 claude 실행 시 → 2번으로 돌아감 (이전 세션 데이터 동기화)",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480248466163761162/image.png?ex=69aefc50&is=69adaad0&hm=d5c6423729b162272d397b3e519807ee1ffd956d868306e24a1ffa76fa22a3b1&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81e1-9cd6-d0632ca3771a",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480245532671611130/image.png?ex=69aef994&is=69ada814&hm=20ed933964580b49fa5f2fffae5f64e408e9cb426fcf2e7b0b1a914627c569c2&",
      "content": "과제 제출. 업무용 이메일로 수시로 날아오는 매입에 대한 거래처 이메일을 자동분류시킨 후에 개별이체가 필요한 업체에 대해서는 매일 Notion에 정리하여 이체가 필요한 거래처를 작성하도록 만들어봤습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480245532671611130/image.png?ex=69aef994&is=69ada814&hm=20ed933964580b49fa5f2fffae5f64e408e9cb426fcf2e7b0b1a914627c569c2&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-819b-99af-dc7716a5f96f",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://cootina.com/",
      "content": "3주차 과제 제출 \nhttps://cootina.com/\n결제연동 - 토스페이먼츠 회원가입인증이 대표자 대리서명 기다리는 중이라, 테스트키 나오는대로 업데이트예정입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480240784572813453/image.png?ex=69aef528&is=69ada3a8&hm=f01454f13c3e1d379d0f603161eaaf7c8fefe8468ad92be898ccf8a428209171&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480227123657576610/2026-03-09_12.05.24.png?ex=69aee86f&is=69ad96ef&hm=387ee0cc8819896010c2bd8b824ee693635cb2a986e8773c80409def34005469&",
      "content": "notion MCP 연결하여 생성된 콘텐츠를 노션 데이터베이스에 저장하도록 했습니다.\n현재 claude api 문제가 생겨서 로컬 ui를 보지 못하는 관계로 노션 캡쳐하여 첨부합니다. \n아쉬운대로 lovable에도 prd를 올려서 구현해보고 있습니다.\n\n------------------------\n🚀 [PRD v3.0] 블로그 자동화 및 시장 조사 대시보드 요약\n1. 제품 개요 (Product Overview)\n본 프로젝트는 로컬 환경(Mac)에서 구동되는 AI 기반 콘텐츠 생성 및 시장 조사 통합 대시보드입니다. 업계 동향 수집부터 멀티 플랫폼 발행까지의 전 과정을 자동화하여 생산성을 극대화합니다.\n\n2. 핵심 기능 모듈 (Core Modules)\n✍️ CREATION (콘텐츠 생성 및 편집)\nAI 멀티 생성: Claude 3.5 Sonnet + Tavily 검색을 결합한 고품질 초안 생성.\n\nSEO 최적화 분석: 제목, 분량, 키워드 밀도 실시간 점수화 및 가이드 제공.\n\n원클릭 발행: 구글 문서, 노션 DB, 워드프레스 즉시 전송 및 아카이브.\n\n📊 RESEARCH (시장 조사 및 리포팅)\n자동 모니터링: RSS, YouTube, 키워드 기반 매일 오전 8시 데이터 수집.\n\n지능형 리포트: 수집 데이터를 분석하여 주간 브리핑 및 트렌드 리포트 자동 생성.\n\n리서치 드로어: 작업 중 페이지 이탈 없이 우측 패널에서 최신 피드 실시간 참조.\n\n🎨 LIBRARY (자산 및 일정 관리)\n미디어 라이브러리: Midjourney, DALL-E 등 도구별 프롬프트 생성 및 노션 저장.\n\n콘텐츠 캘린더: 블로그 및 영상 기획 일정을 월별 그리드 뷰로 시각화 관리.\n\n아이디어 뱅크: 사이드바 위젯을 통해 휘발성 아이디어를 즉시 노션 DB로 전송.\n\n3. 기술 사양 (Technical Specs)\nYAML\n# Tech Stack\nLanguage: Python 3.10+\nFramework: FastAPI (Uvicorn)\nDatabase: SQLite (SQLAlchemy 2.0)\nAI Engine: Anthropic Claude API (claude-sonnet-4-6)\nSearch: Tavily API\nIntegrations: Notion API, Google Docs API, WordPress REST API\n4. 시스템 워크플로우 (Workflow)\n[수집] 매일 아침 AI가 설정된 소스(RSS/YT)에서 시장 동향 수집.\n\n[분석] 수집 데이터 기반 리포트 생성 또는 사용자 주제별 콘텐츠 기획.\n\n[편집] 인앱 편집기에서 SEO 점수를 확인하며 최종 내용 검토.\n\n[발행] 버튼 클릭으로 블로그 업로드 및 노션/구글 문서 기록 동시 완료.\n\n5. 향후 로드맵 (Roadmap)\nPhase F: 클라우드 배포(Railway/Vercel) 및 다중 사용자 인증 기능 검토.\n\n자동화 확장: 슬랙/이메일 알림 연동 및 카드뉴스 자동 생성 모듈 추가.\n\n\n상태: Phase E 완료 (운영 중)",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480227123657576610/2026-03-09_12.05.24.png?ex=69aee86f&is=69ad96ef&hm=387ee0cc8819896010c2bd8b824ee693635cb2a986e8773c80409def34005469&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480227124131397795/2026-03-09_12.31.18.png?ex=69aee86f&is=69ad96ef&hm=80336067babc2e92f2d0b4085d5cf1b8e0288827ea9193d519bf8edf0f115014&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81e0-8b9a-ec79b7a9c8ff",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480228640246468842/2026-03-09_12.28.09.png?ex=69aee9d9&is=69ad9859&hm=ab14321825983aa55490d6c798e2e8fe72dfb8aad67448bd7f8507f84337104f&",
      "content": "3주차 과제 제출합니다.\n저희 유튜브 채널 주요 지표를 일주일마다 자동으로 분석하고 kpi를 관리하며\n저희 구독자에게 커스터 마이징된\n트렌드를 분석해 아이템 제안해주는 자비스라는 에이전트입니다.\n현재 슬랙으로 연결된 상태입니다. 테스트 화면 공유합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480228640246468842/2026-03-09_12.28.09.png?ex=69aee9d9&is=69ad9859&hm=ab14321825983aa55490d6c798e2e8fe72dfb8aad67448bd7f8507f84337104f&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480227123657576610/2026-03-09_12.05.24.png?ex=69aee86f&is=69ad96ef&hm=387ee0cc8819896010c2bd8b824ee693635cb2a986e8773c80409def34005469&",
      "content": "notion MCP 연결하여 생성된 콘텐츠를 노션 데이터베이스에 저장하도록 했습니다.\n현재 claude api 문제가 생겨서 로컬 ui를 보지 못하는 관계로 노션 캡쳐하여 첨부합니다. \n아쉬운대로 lovable에도 prd를 올려서 구현해보고 있습니다.\n\n------------------------\n\n📋 [PRD v3.0] 블로그 자동화 및 시장 조사 대시보드 요약 보고서\n1. 제품 개요 (Product Overview)\n본 프로젝트는 로컬 환경(Mac)에서 구동되는 AI 기반 콘텐츠 생성 및 시장 조사 통합 대시보드입니다. 단순한 글쓰기 보조를 넘어, 업계 동향 수집부터 멀티 플랫폼 발행까지의 전 과정을 자동화하여 콘텐츠 생산성을 극대화하는 데 목적이 있습니다.\n\n2. 핵심 아키텍처 및 모듈 (Core Modules)\n🔹 CREATION (콘텐츠 생성 및 편집)\nAI 멀티 생성: Claude 3.5 Sonnet과 Tavily 검색을 결합하여 폴더 내 자료나 텍스트 입력만으로 고품질 초안 생성.\n\nSEO 최적화: 인앱 편집기 내에서 제목, 본문 분량, 키워드 밀도 등을 실시간 점수화(SEO 분석 탭).\n\n원클릭 발행: 생성된 콘텐츠를 구글 문서, 노션 DB, 워드프레스에 즉시 전송 및 아카이브.\n\n🔹 RESEARCH (시장 조사 및 리포팅)\n자동 모니터링: RSS, YouTube, 특정 키워드를 활용해 매일 오전 8시 최신 데이터를 자동 수집.\n\n지능형 리포트: 수집된 스냅샷을 분석해 주간 브리핑 및 카테고리별(경쟁사/트렌드) AI 리포트 생성.\n\n리서치 드로어: 작업 중 페이지 이탈 없이 우측 패널에서 최신 피드와 리포트를 실시간 참조.\n\n🔹 LIBRARY (자산 및 일정 관리)\n미디어 라이브러리: 미드저니, DALL-E용 프롬프트를 도구별로 생성하고 별도 노션 DB에 저장.\n\n콘텐츠 캘린더: 블로그 및 영상 기획 일정을 월별 그리드 뷰로 시각화하여 관리.\n\n아이디어 뱅크: 사이드바 위젯을 통해 휘발성 아이디어를 즉시 노션 '수정사항/아이디어' DB로 전송.\n\n3. 기술적 사양 (Technical Specifications)\nStack: Python (FastAPI), SQLite (SQLAlchemy 2.0), Jinja2.\n\nAI Engine: Anthropic Claude API (claude-sonnet-4-6).\n\nIntegrations: Notion API (2022-06-28), Google Docs API, WordPress REST API.\n\nAutomation: APScheduler를 활용한 정기적 데이터 수집 로직 구현.\n\n4. 주요 업데이트 사항 (v3.0 기준)\nUI 구조 개선: CREATION / RESEARCH / LIBRARY 섹션별 사이드바 그룹화.\n\n데이터 시각화: 수집된 데이터 기반의 키워드 빈도 분석 바 차트 추가.\n\n성능 최적화: RSS 수집 시 SSL 우회 적용 및 4단계 JSON 파싱 폴백 로직으로 안정성 강화.\n\n5. 향후 과제 (Roadmap)\nPhase F: 클라우드 배포(Railway/Vercel) 및 다중 사용자 인증 기능 검토.\n\n자동화 확장: 수집 완료 시 슬랙 또는 이메일 알림 연동 및 카드뉴스 자동 생성 모듈 추가.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480227123657576610/2026-03-09_12.05.24.png?ex=69aee86f&is=69ad96ef&hm=387ee0cc8819896010c2bd8b824ee693635cb2a986e8773c80409def34005469&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480227124131397795/2026-03-09_12.31.18.png?ex=69aee86f&is=69ad96ef&hm=80336067babc2e92f2d0b4085d5cf1b8e0288827ea9193d519bf8edf0f115014&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480227123657576610/2026-03-09_12.05.24.png?ex=69aee86f&is=69ad96ef&hm=387ee0cc8819896010c2bd8b824ee693635cb2a986e8773c80409def34005469&",
      "content": "notion MCP 연결하여 생성된 콘텐츠를 노션 데이터베이스에 저장하도록 했습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480227123657576610/2026-03-09_12.05.24.png?ex=69aee86f&is=69ad96ef&hm=387ee0cc8819896010c2bd8b824ee693635cb2a986e8773c80409def34005469&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480227124131397795/2026-03-09_12.31.18.png?ex=69aee86f&is=69ad96ef&hm=80336067babc2e92f2d0b4085d5cf1b8e0288827ea9193d519bf8edf0f115014&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81b0-8550-de5e956fa37c",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480224496228241682/image.png?ex=69aee5fd&is=69ad947d&hm=8cdd9fab22d1a83bd8797d0a2edc948be6760dd62f9cd4e9b47374c956a3a0bd&",
      "content": "과제 제출합니다. 뉴스레터 자동 생성해서 노션에 DB화 하는것을 해보았습니다. 만족스럽진 못하지만 Notion DB까지 가능하네요. 계속해서 연구해 보아야 할것 같습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480224496228241682/image.png?ex=69aee5fd&is=69ad947d&hm=8cdd9fab22d1a83bd8797d0a2edc948be6760dd62f9cd4e9b47374c956a3a0bd&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://minion.toss.im/FyOtM1om",
      "content": "3주차 과제 제출\n앱인토스 광고, 인앱결제 연동 완료\n\nhttps://minion.toss.im/FyOtM1om",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8172-994c-f2f75ab413b1",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://phrase-fix.lovable.app/",
      "content": "3주차 과제 제출:\nhttps://phrase-fix.lovable.app/\n\n결제기능 구현 완료 (심사 신청 완료)",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81b8-a720-e96e913c55d0",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480217022754455592/2026-03-08_225640.png?ex=69aedf07&is=69ad8d87&hm=63093ed99c8f019a96b0880710964eb919d348dbeeb43e52ab89c0e634425a37&",
      "content": "# 🎬 GrowthGen — 텍스트 → 유튜브 영상 자동 제작 에이전트 팀 (Remotion)\n\n텍스트를 넣으면 **모션그래픽 + TTS 나레이션 + GIF**가 포함된 유튜브용 MP4를 자동으로 만들어줍니다.\n각 슬라이드의 감정(emotion)과 아이콘 키워드로 GIF를 자동 검색·매칭해서 밋밋한 텍스트 영상에 재미를 더합니다.\n\n## 📥 입력 가능한 형식\n\n> 📰 아티클 / 뉴스레터 / 블로그 글 → 구어체 나레이션으로 자동 변환\n> ✍️ 직접 쓴 스크립트 → 바로 영상 제작\n\n## ⚙️ 작동 방식\n\nClaude Code에서 `/generate-video 파일명.txt` 실행하면 7명의 AI 에이전트가 순서대로 처리합니다.\n\n```\n📝 텍스트 → 🗣️ 구어체 나레이션 변환 → 🎨 슬라이드 구성\n→ 🔊 TTS 음성 생성 + 🎞️ GIF 검색 (동시실행)\n→ ✅ 품질 검증 → 🎬 Remotion 렌더링 → MP4\n```\n\n🔊 **TTS**: ElevenLabs(eleven_multilingual_v2)를 우선 사용하고, API 키가 없거나 실패하면 QN3(로컬)로 자동 폴백됩니다.\n🎞️ **GIF**: 슬라이드별 감정 태그 → 아이콘 → 템플릿 순서로 키워드를 추출해서 Klipy API로 자동 검색합니다.\n\n## 💡 활용 방법\n\n| 상황                    | 방법                                             |\n| ----------------------- | ------------------------------------------------ |\n| 글을 바로 영상으로      | `/generate-video 내-글.txt`                    |\n| 스크립트 다듬고 싶을 때 | `/write-script` → 수정 → `/generate-video` |\n| 렌더링 품질 확인        | `/review-video`                                |\n\n## 📐 영상 포맷 (글 분량으로 자동 결정)\n\n`~150자 쇼츠` · `~500자 숏폼` · `~2000자 미드폼` · `2000자+ 롱폼`\n\n## 🛠️ 기술 스택\n\n`Remotion` `@remotion/mcp` `Claude Code` `ElevenLabs TTS` `QN3 TTS(폴백)` `Klipy GIF`\n\n> 리모션으로 유튜브 영상을 만드시는 분들을 보고 영감받아 만들어봤습니다.\n> 아직 GIF 배치나 등장 방식 등 퀄리티적으로 개선할 부분이 많고, 배경음악/효과음 등도 추가 예정입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480217022754455592/2026-03-08_225640.png?ex=69aedf07&is=69ad8d87&hm=63093ed99c8f019a96b0880710964eb919d348dbeeb43e52ab89c0e634425a37&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480217023190405240/2026-03-08_225750.png?ex=69aedf07&is=69ad8d87&hm=e51259cd31f572bbf1ad5ef5d4388fbe79001eb9aafe6227590f8c687a8e3a96&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480217025673691277/2026-03-08_225808.png?ex=69aedf08&is=69ad8d88&hm=6c78c4e05d55689f7e2c3993fb20036cc51c62ae7feab712c408915cb12e1439&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480217026436796426/2026-03-08_225832.png?ex=69aedf08&is=69ad8d88&hm=8c0c5c8f606cbc3e67d9f304da3cf4a4ca61230017ea0ca19de8184af8a05dec&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81b6-8773-e4e735274728",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480216375455645696/image.png?ex=69aede6c&is=69ad8cec&hm=1155a19dd0a1f741b64a199056909b8c6005d06d1325a51662ed9543da40da67&",
      "content": "3주차 과제 제출합니다! \n콘텐츠 아이디어 리서치해서 노션 연동해서 DB화 자동으로 해주는 것을 해보았습니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480216375455645696/image.png?ex=69aede6c&is=69ad8cec&hm=1155a19dd0a1f741b64a199056909b8c6005d06d1325a51662ed9543da40da67&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480216375950708847/image.png?ex=69aede6d&is=69ad8ced&hm=05401e5d1076f728d77ea645782b2e95600e884a19e76faa228328f327b085f9&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81ca-9eb7-cdeedff433d2",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://deepecho-weekly-echoes.lovable.app",
      "content": "1. 디자인 변경 : https://deepecho-weekly-echoes.lovable.app 2. 결제 연동 - 아직 베타버전이라 혼자 써보고 서비스를 개시할 예정이라 따로 연동까지는 안했습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-bd98-e20c158c9e9a",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480214902516748371/image.png?ex=69aedd0d&is=69ad8b8d&hm=8b7c9e146c33c77d50df2c2602734b79efd933f03e7ecdd478d27ef083f3962b&",
      "content": "3주차 과제 제출\nBloomberg Weekend 의  오늘 뉴스, 미국 증시 이슈 요약본을 만들어서 노션에 업로드해주는 에이전트를 만들었습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480214902516748371/image.png?ex=69aedd0d&is=69ad8b8d&hm=8b7c9e146c33c77d50df2c2602734b79efd933f03e7ecdd478d27ef083f3962b&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480214902881783989/image.png?ex=69aedd0d&is=69ad8b8d&hm=99053091b4c07677f69ef7000ee1dd67ba67c5ac7466de688d5a8b5abebec5fb&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480214903318118582/image.png?ex=69aedd0e&is=69ad8b8e&hm=9def5a0bb51d57b8e4d103b00f792b916c73c5955b21ae31a4727354f906470e&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8159-b3d8-e1116d0b8b19",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480213898136391720/image.png?ex=69aedc1e&is=69ad8a9e&hm=bf0d0c0bd0d7233960fe80d76f9cee2e35f48714be8850551f81c508f169a68d&",
      "content": "**릴리즈 노트 자동화 구축**\n> 앱스토어/플레이스토어에 앱을 배포하기 전후에, 릴리즈 노트를 자동 생성하여 Slack에 게시하는 시스템을 만들었습니다.\n\n- **구성요소**\n  - /release-note 스킬: Claude Code에서 수동 실행 가능한 커맨드\n  - Slack MCP 연동: 별도 코드 없이 Claude가 직접 Slack 메시지를 전송\n  - Post-push hook: bump 커밋 push 감지 시 자동으로 스킬 호출\n\n- **워크플로우**\n  1. git push 실행 → hook이 bump 커밋 감지 → /release-note 자동 실행\n  2. git log에서 이전 bump 이후 커밋 목록 수집\n  3. EAS CLI로 iOS/Android 빌드넘버 조회 → 다음 빌드넘버 예측\n  4. 날짜/버전/빌드넘버는 스크립트로 조립, 변경사항 요약만 AI가 생성\n  5. #engr-zauto-release 채널에 자동 게시\n  6. master 브랜치일 때는 앱스토어용 릴리즈 노트를 스레드 댓글로 추가",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480213898136391720/image.png?ex=69aedc1e&is=69ad8a9e&hm=bf0d0c0bd0d7233960fe80d76f9cee2e35f48714be8850551f81c508f169a68d&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480213898496970953/image.png?ex=69aedc1e&is=69ad8a9e&hm=fed2f6cff2f57ec4bcc00044fa133e05e0ab86865135a806a0724280359bd5a0&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480213898714943488/image.png?ex=69aedc1e&is=69ad8a9e&hm=08c8ef35a536c912555fc527ab15a5c7c55f10baed08a67204a698b9e1f4ad19&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480213899444883726/image.png?ex=69aedc1e&is=69ad8a9e&hm=ce57969edb554813da00cad9db7f3243782e204866fa84158c50347d2522c2d5&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://past-bloom.lovable.app",
      "content": "3주차 과제\n1. 디자인 변경 ->  https://past-bloom.lovable.app \n모빈에서 참고해 디자인 변경 해 보았으나 썩 마음에 들진 않습니다. \n(질문: 개발중인 서비스에 적용하지 않아 다행이지만 혹시 개발 중인 서비스에 디자인 변경을 해 보았는데 마음에 들지 않은 경우는 어떻게 이전상태로 돌아갈 수 있는지 궁금합니다.\n2. 결제연동 -> 핵심기능을 위해 몇가지 API가 더 연결되어야 해서 결제 연결은 아직 하지 못했습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://past-bloom.lovable.app",
      "content": "3주차 과제\n디자인 변경 ->  https://past-bloom.lovable.app \n모빈에서 참고해 디자인 변경 해 보았으나 썩 마음에 들진 않습니다. \n(질문: 개발중인 서비스에 적용하지 않아 다행이지만 혹시 개발 중인 서비스에 디자인 변경을 해 보았는데 마음에 들지 않은 경우는 어떻게 이전상태로 돌아갈 수 있는지 궁금합니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81a8-b99f-d5dd37834c11",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480211277740642407/image.png?ex=69aed9ad&is=69ad882d&hm=05a6656bc07da9c62df4f835ce62de9e3d418c5a9dcf92cea9222dca1eb0f933&",
      "content": "3주차 과제 제출합니다.\n기존에 만든 AI 강의 실습 자료 내용을 바로 노션으로 연동되게 하였습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480211277740642407/image.png?ex=69aed9ad&is=69ad882d&hm=05a6656bc07da9c62df4f835ce62de9e3d418c5a9dcf92cea9222dca1eb0f933&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480211278076182630/image.png?ex=69aed9ad&is=69ad882d&hm=51b9fcfa0a546fcf1ef64f22dcedf80386a7a6c4497b5fdd32b50f9ca030117e&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8109-bbe4-ea21d95278a3",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://marryos.lovable.app",
      "content": "3주차 과제 제출합니다.\n\n아직 모든 핵심기능이 구현되지 않아, 핵심기능 디벨롭에 집중해 진행했습니다.\nhttps://marryos.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://maily.so/youngwon/posts/mjz6q8kvrwk",
      "content": "https://maily.so/youngwon/posts/mjz6q8kvrwk",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DVn-McmiIyE?xmt=AQF0qvf95Um96Sq0o11-wn6obon8jhVmCifEUuGgTcpizY58qZY4vVbDLeB3wjMUAudAdTOE&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DVn-McmiIyE?xmt=AQF0qvf95Um96Sq0o11-wn6obon8jhVmCifEUuGgTcpizY58qZY4vVbDLeB3wjMUAudAdTOE&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://yourpartnercoach.lovable.app/",
      "content": "3주차 과제 제출 합니다.\n\n2구간으로 결제 페이지 구현\n\nhttps://yourpartnercoach.lovable.app/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://yourpartnercoach.lovable.app/",
      "content": "3주차 과제 제출 합니다.\n\nhttps://yourpartnercoach.lovable.app/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8187-8ee7-f0f795165475",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://study-sparker.lovable.app",
      "content": "1) 디자인\n - 컴포넌트 구성이 어려워서 프롬프트로 디자인 수정을 하고 러버블 에디터를 통해 수동으로 문구를 수정했는데 반영이 잘 안되서 크레딧을 다사용했습니다ㅠ \n - 디자인 컴포넌트부터 다시 시도해서 강의 순서대로 다시 디자인 개선 해보겠습니다. \n2) 결제 \n - 구현 보안 예정입니다. \n\n\nhttps://study-sparker.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8187-8ee7-f0f795165475",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://study-sparker.lovable.app",
      "content": "1. 디자인\n - 컴포넌트 구성이 어려워서 프롬프트로 디자인 수정을 하고 러버블 에디터를 통해 수동으로 문구를 수정했는데 반영이 잘 안되서 크레딧을 다사용했습니다ㅠ \n - 디자인 컴포넌트부터 다시 시도해서 강의 순서대로 다시 디자인 개선 해보겠습니다. \n2. 결제 \n - 구현 보안 예정입니다. \n\n\nhttps://study-sparker.lovable.app",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://lovable.dev/projects/790a2f74-736b-4a5d-bc89-7d211f8736d6",
      "content": "3주차 과제 제출 합니다.\n\nhttps://lovable.dev/projects/790a2f74-736b-4a5d-bc89-7d211f8736d6",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8187-8ee7-f0f795165475",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://study-sparker.lovable.app",
      "content": "1. 디자인\n- 컴포넌트 구성이 어려워서 프롬프트로 디자인 수정을 하고 러버블 에디터를 통해 수동으로 문구를 수정했는데 반영이 잘 안되서 크레딧을 다사용했습니다ㅠ \n- 디자인 컴포넌트부터 다시 시도해서 강의 순서대로 다시 디자인 개선 해보겠습니다. \n2. 결제 \n- 구현 보안 예정입니다. \n\n\nhttps://study-sparker.lovable.app",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://aligned-brand-flow.lovable.app/",
      "content": "1. 리드 마그넷 전면 수정이 필요합니다. \n https://aligned-brand-flow.lovable.app/\n\n2. 4월 중 채널 개설까지 모두 완료 예정입니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-818c-b026-cd92d926f7b9",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://apps.apple.com/kr/app/%EB%B3%B4%EB%9D%BC%EC%84%B1%EA%B2%BD/id6449989969",
      "content": "3주차 과제 제출합니다.\n\n3년 전에 만들어서 앱스토어에 배포했던 \"성경 앱\"을 \niOS26 리퀴드 글라스 느낌의 디자인으로 전면 재구성하였습니다.\nhttps://apps.apple.com/kr/app/%EB%B3%B4%EB%9D%BC%EC%84%B1%EA%B2%BD/id6449989969\n\n(결제는 인앱 결제를 붙일 예정인데 아직 앱 배포 심사가 나오지 않아 대기중입니다.)",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480173241548017684/image.png?ex=69aeb641&is=69ad64c1&hm=e502f8f32e339f2bf355fa89ffe5a606433fce332afbe9a4f3b76e296ebdf217&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480173242256724149/image.png?ex=69aeb641&is=69ad64c1&hm=6d5bcbfe85ebc773c06605be31771ad5253add5353f33714258cfe3b4baebb26&"
      ]
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://aligned-brand-flow.lovable.app/",
      "content": "1. 러버블 디자인으로 디자인 변경 \n https://aligned-brand-flow.lovable.app/\n2. 결제 미구현 (보완 예정입니다.)",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-80e6-a976-f62af164bfe3",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480173048912019600/image.png?ex=69aeb613&is=69ad6493&hm=2ceb0d115f90f563de063fe40af39e802868004531f2aae580bb8e7e49c7bffa&",
      "content": "3주차 미션 제출합니다.\ngmail 로 온 미팅 및 일정 자동으로 구글 캘린더 반영, 슬랙 DM 발송",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480173048912019600/image.png?ex=69aeb613&is=69ad6493&hm=2ceb0d115f90f563de063fe40af39e802868004531f2aae580bb8e7e49c7bffa&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480173049255825503/image.png?ex=69aeb613&is=69ad6493&hm=7b21ce189a269f751f3f2063e7ec72c69211e0c83d40aa3028e21f0213eb3c49&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-818c-b026-cd92d926f7b9",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480172314443387051/image.png?ex=69aeb564&is=69ad63e4&hm=d21bae89018fce823db82051b753c90af63d1d1c69c716f9affe72dd0369af87&",
      "content": "3주차 미션 제출합니다.\n\nXcode MCP를 사용해서 자동으로 앱스토어에 올릴 마케팅 이미지를 만들어주는 멀티에이전트를 구현했습니다.\n\n- Xcode MCP를 사용해서 앱 스크린샷을 찍어줍니다.\n- 이미지를 분석하고 이에 대한 마케팅 문구를 만들어 줍니다.\n- 나노 바나나2로 생성하기 위한 프롬프트를 생성합니다.\n- 나노 바나나2 api를 이용해서 앱 스토어 마케팅 이미지를 생성합니다.\n- 앱스토어 규격에 맡는지 이미지가 잘 생성되었는지 마지막으로 확인합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480172314443387051/image.png?ex=69aeb564&is=69ad63e4&hm=d21bae89018fce823db82051b753c90af63d1d1c69c716f9affe72dd0369af87&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480172315999469650/image.png?ex=69aeb564&is=69ad63e4&hm=b6cb62e9109b6f0cb5a28252d41086e3f6f0e85a720402f324eb8769316237e3&"
      ]
    },
    {
      "memberId": "2df6400e-9268-818f-bd5a-de00ad0aebd9",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480171639709761536/2026-03-08_8.49.26.png?ex=69aeb4c3&is=69ad6343&hm=923193b2e033c61a29889f103f4eb7198cd9414c59f725fa7af5abe700e3a0c6&",
      "content": "제가 보고 싶은 실리콘 밸리 최신 기술뉴스, 1인기업가 뉴스레터를 만들어서 Notion에 업로드하는 에이전트를 만들었습니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480171639709761536/2026-03-08_8.49.26.png?ex=69aeb4c3&is=69ad6343&hm=923193b2e033c61a29889f103f4eb7198cd9414c59f725fa7af5abe700e3a0c6&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480171640015818792/image.png?ex=69aeb4c3&is=69ad6343&hm=2f583d40508aa5f06db85d6c56fe8d9c7aa6edb699d48d6eba0f1181065392a3&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480171640317939732/image.png?ex=69aeb4c3&is=69ad6343&hm=823f197886ca387d7dc9d8d8cc144d590c652deceddc0f6fbe61ecdd0d1427f1&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480171640842096714/image.png?ex=69aeb4c3&is=69ad6343&hm=f057a20f46631483eeecf349dc45f893e7c81e92016f5df8a92ed91c59915ee6&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81d6-9901-ce6520aefbf2",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480166937051791484/2026-03-08_200430.jpg?ex=69aeb061&is=69ad5ee1&hm=61696d68babe5d638b5d62a05ab8e0a05bbf703c0df385bfff46818e70a1ad83&",
      "content": "랜딩페이지 기획 후 스티치 mcp 연결하여 내보내었습니다!",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480166937051791484/2026-03-08_200430.jpg?ex=69aeb061&is=69ad5ee1&hm=61696d68babe5d638b5d62a05ab8e0a05bbf703c0df385bfff46818e70a1ad83&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480166937538465792/screen.png?ex=69aeb062&is=69ad5ee2&hm=7aece05bb8bf170112d063ce270b18cf37c8df9025d56fdb7c3440d4dc30f25a&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480166938318602262/screen.png?ex=69aeb062&is=69ad5ee2&hm=63d97072b1a8db0142230f3b5f76e99f0e9ed653b14a499cfc744d2e6355f92d&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480166938746294446/screen.png?ex=69aeb062&is=69ad5ee2&hm=c94c2283feb3f3f0ab99780085929b5b2729e532faff70548757c8e5a838299d&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480166939157594142/screen.png?ex=69aeb062&is=69ad5ee2&hm=52b490f08e0ab77b4a17b928f1900bf37debfc4325ebb16e0747ea833aed24ac&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480166940159901737/screen.png?ex=69aeb062&is=69ad5ee2&hm=7cd7662c1bc9479c9a95f61fefc58194bb9025f409238b2883c448063ddfb351&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480166940495577098/screen.png?ex=69aeb062&is=69ad5ee2&hm=f8c01af33f6d771ea20b43ce555e1726e5c0870c6e523f0f407aa677504dde3d&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480166941011218472/screen.png?ex=69aeb062&is=69ad5ee2&hm=9974cab90ab284a4d177f8cef9c4412a4a4e096d1a6a6c3d4aba6c66106cf155&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480166941405479036/screen.png?ex=69aeb063&is=69ad5ee3&hm=efd49e69b67fba6e17ab9bdccea61f4ec6692d274a210c5b288ef7bb4215bd2d&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81c7-a487-f94ece8a83e8",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480164627680723046/Prompt_Triad_Orchestrator.md?ex=69aeae3b&is=69ad5cbb&hm=4fd912dc8616c4950d931d124a105fd733af6b88cdfa66834ddce0561b684287&",
      "content": "3주차 미션 제출합니다.\n\nPrompt Grnerator 구현에 필요한 md 파일들과 곡개이 필요한 내용들을 정리중에 있습니다. 요구사항을 아직 받지 못하여 받은 후 업데이트 하도록 하겠습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8180-92da-ca2d7cccaec1",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://drive.google.com/file/d/1enbdZcJL5QS02TEVDfEqhuO_APa9j0S5/view?usp=sharing",
      "content": "1. 리드 마그넷 링크\nhttps://drive.google.com/file/d/1enbdZcJL5QS02TEVDfEqhuO_APa9j0S5/view?usp=sharing\n\n2. 아직 인스타그램을 만들고 홍보를 진행하지 못하여 리드 마그넷을 배포하지 못했습니다. 진행 후에 공유하도록 하겠습니다.",
      "images": null
    },
    {
      "memberId": "3006400e-9268-8121-ad2d-f0c76cb20143",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470030785615761593/1480162201011617957/image.png?ex=69aeabf8&is=69ad5a78&hm=cbe082048fe2d2ff83318cb9eabe96d16dcf8413bfa4b73f7665ad2bbd5316a3&",
      "content": "3주차 과제 인증\n간만에 제 유튜브 채널에 제가 갖고 있는 적정 주가 Tool 배포를 위해서 글을 올렸습니다. 이메일 수집을 통해 추가적인 마케팅 계획 예정입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1480162201011617957/image.png?ex=69aeabf8&is=69ad5a78&hm=cbe082048fe2d2ff83318cb9eabe96d16dcf8413bfa4b73f7665ad2bbd5316a3&",
        "https://cdn.discordapp.com/attachments/1470030785615761593/1480162201317937295/image.png?ex=69aeabf8&is=69ad5a78&hm=25a32f4730cfd437e6fcae10b43f0765ace2981b65c213cdd462e9d2f17208cf&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81ed-a523-e46ee7043bc8",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://ai-nine-ebon.vercel.app/",
      "content": "3주차 과제 제출. 토스페이먼츠 연동\nhttps://ai-nine-ebon.vercel.app/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e6-873e-c5a131700198",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480149456312864809/2026-03-08_7.25.10.png?ex=69aea01a&is=69ad4e9a&hm=952048f0149f967613d9a6c90d64012694da6efddc4b150650037c713f99718a&",
      "content": "3주차 과제 제출합니다.\n\nAI 논문 자동 브리핑 시스템을 만들었습니다.\n사용한 MCP는 노션과 Gmail 입니다. 🙂 \n\n\n## 상세내용\nMCP 기반 Gmail → Notion 자동화 파이프라인\n\n1. 개요\n매일 아침 AI 논문 뉴스레터를 읽고 정리하는 반복 작업을 자동화하기 위해, Claude Desktop의 Cowork 모드와 MCP(Model Context Protocol)를 활용하여 자동 브리핑 시스템을 구축했습니다.\n이 시스템은 Gmail에서 뉴스레터를 자동 수집하고, CUA/VLM/Agent 도메인 기준으로 필터링한 후, Notion 데이터베이스에 한국어 요약과 함께 자동 정리합니다.\n\n2. MCP 아키텍처\n본 시스템은 3개의 MCP Server를 연동하여 동작합니다. 각 MCP는 독립적인 역할을 수행하며, Claude가 중간에서 오케스트레이션을 담당합니다.\n\n3. 파이프라인 플로우\n전체 파이프라인은 6단계로 구성되며, 1차 소스(뉴스레터)와 2차 소스(Google Scholar)를 분리하여 노이즈를 최소화합니다.\n\n3.1 소스 전략\n1차 소스 (뉴스레터)\n이미 커뮤니티에서 큐레이션된 논문을 수집하므로 노이즈가 적습니다.\nAlphaSignal: AI/ML 핵심 논문 큐레이션\nHuggingFace Daily Papers: 커뮤니티 투표 기반 인기 논문\nThe Batch (Andrew Ng): AI 업계 주간 브리핑\nTLDR: 기술 뉴스 종합\n\n2차 소스 (Google Scholar)\nGoogle Scholar 알림은 키워드 매칭이라 노이즈가 많습니다. 테스트에서 생물학(RNAi), 의약품(minoxidil), 통신(MEC) 논문이 함께 수신되었습니다. 이를 해결하기 위해 다음 필터를 추가했습니다:\nAI/ML 분야 판단: LLM, transformer, deep learning 등 AI 컨텍스트 키워드 확인\nTier 1 학회 필터: 주요 학회 및 arXiv/OpenReview 논문만 포함\n본문 접근 확인: 유료 paywall 논문 제외 (IEEE, Springer 등)\n중복 체크: 1차 소스와 중복되는 논문 제외\n\n3.2 필터링 기준\n도메인별 우선순위\nCUA (1순위): CUA, computer use, GUI agent, web agent, screen agent → 무조건 포함\nVLM (2순위): VLM, vision-language, multimodal → 왠만하면 포함\nAgent (3순위): agent, tool use, planning → 꼭 읽어야 할 것만\n\nTier 1 학회 목록 (Google Scholar 필터용)\n\n4. Notion 데이터베이스 스키마\nNotion의 \"지식\" 데이터베이스에 다음 스키마로 저장됩니다. 요약은 한국어 3문장으로 작성되며, 각 문장은 문제 제기 → 해결 방법 → 차별점 구조를 따릅니다.\n\n5. 스케줄 설정\nTask ID: daily-ai-paper-digest\nCron: 0 8 * * * (매일 아침 8시, 로컬 타임존)\n실행 환경: Claude Desktop → Cowork 모드 → Scheduled Tasks\n사이드바의 Scheduled 섹션에서 작업 상태 확인 및 수동 실행이 가능합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480149456312864809/2026-03-08_7.25.10.png?ex=69aea01a&is=69ad4e9a&hm=952048f0149f967613d9a6c90d64012694da6efddc4b150650037c713f99718a&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81e6-873e-c5a131700198",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://afterwork-kohl.vercel.app/",
      "content": "앱을 만들고 있어서 토스 대신 IAP 결제를 붙이고 있습니다. \n개인사업자등록이 승인 대기중이며, 승인되면 IAP도 정상 처리될 것으로 예상됩니다.\n\n랜딩페이지 디자인을 1주차에 제출한 것보다 조금 더 고도화했습니다. 🙂\nhttps://afterwork-kohl.vercel.app/",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480147718230905002/2026-03-08_7.15.58.png?ex=69ae9e7b&is=69ad4cfb&hm=4cf9e91a742ebc3af28b08c5991da9aec767170f9c9e9202faae60e6d6995c24&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480147718490947709/2026-03-08_7.17.23.png?ex=69ae9e7b&is=69ad4cfb&hm=f5ac48f7bda9f7196903c37fd63a96ecad71ec255456eb24b34ea282f284e702&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8150-8a39-c0c9053c64a5",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://pixel-perfect-clone-0045.lovable.app",
      "content": "3주차 과제 \n1. Design 개선\n2. 토스페이먼츠 결제 구현 \nhttps://pixel-perfect-clone-0045.lovable.app",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480146339743531090/image.png?ex=69ae9d33&is=69ad4bb3&hm=c5b5aff5c292ced05309e17a3133256325fa90047d2b5e8965b4cfdb2b0fb80e&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480146340267954186/image.png?ex=69ae9d33&is=69ad4bb3&hm=2e2206e25a62515c1439ae32a53cca65c4a222b748b4bd688f8608197b39d132&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480146340804689991/image.png?ex=69ae9d33&is=69ad4bb3&hm=8b0edc4690ba51b21f5b8cd91ff3ca458ff4521aa87d9087b4c380ecdf8ecf6e&"
      ]
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://amorebundang.notion.site/AI-31d2ecf5289f81779104e8c1f03cb9ed?source=copy_link",
      "content": "3주차 과제 제출 합니다. \n\n** MCP 연결\n- 노션  https://amorebundang.notion.site/AI-31d2ecf5289f81779104e8c1f03cb9ed?source=copy_link\n\n- 슬랙 \n\nhttps://the-kctest.slack.com/archives/C0AKM8PT4HF/p1772962575774139\n\n## 파트너 AI 콘텐츠 자동화 시스템                                                                                                    \n                                                                                                                                    \n  내용                                                                                                                              \n                                                                                                                                    \n  ■ 시스템 개요                                                                                                                     \n  - YouTube/웹사이트 URL 1개 입력 → 멀티플랫폼 콘텐츠 9종 자동 생성\n  - Claude Code 기반 9개 에이전트 협업 구조 (orchestrator + 전문 에이전트 8개)\n  - 타겟 고객·파트너 스타일을 반영한 개인화 콘텐츠 출력\n\n  ■ 타겟 고객 설정\n  - 주요 타겟: 50~70대 여성, 분당·판교·수지 인근 거주자\n  - 피부 노화·성분 기반 스킨케어에 관심 있는 고객\n  - 페르소나 A(꼼꼼한 60대), 페르소나 B(바쁜 50대) 2종 정의\n\n  ■ 파트너 스타일 개인화\n  - 최연옥 카운셀러: 따뜻한 언니 말투, 1:1 맞춤 상담 CTA\n  - Ken Berry MD: 과학적 근거 중심, 50~70대 눈높이 한국어 번역\n  - 커스텀 파트너 추가 가능 (이름·역할·말투·키워드 입력)\n\n  ■ 자동 생성 콘텐츠\n  - 뉴스레터, 블로그, 유튜브 대본, X 스레드 10개, 링크드인, 쇼츠 대본 3개\n  - 카드뉴스(1080×1350), 썸네일(1280×720) 비주얼 2종\n  - 쇼츠 영상 3개 자동 편집 (yt-dlp → Whisper → ffmpeg)\n\n  ■ MCP 연동 — 실시간 확인\n  - Notion MCP: 프로젝트별 브리프·산출물·검수 리포트 자동 기록\n  - Slack MCP: 콘텐츠 생성 완료 시 채널 알림 자동 발송\n  - 노션 허브에서 전체 진행 상태 실시간 조회 가능\n\n  ■ 워크플로우\n  - 1단계: planner → 타겟·파트너 분석 → brief.md 생성\n  - 2단계: 7개 에이전트 병렬 실행 (콘텐츠·비주얼 동시 생성)\n  - 3단계: 쇼츠 영상 편집 (YouTube URL 입력 시)\n  - 4단계: reviewer → 타겟 적합성·파트너 톤 일치 여부 검수 → 완료 보고",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVnmebpGafv?xmt=AQF05FZ5KB9BVUijAKO_J0eI03Y0iQMEmfmXo3RiYXi5U3F1B2s7gdfdZtnTn8Pukecg-EsB&slof=1",
      "content": "https://www.threads.com/@ai.profitwise/post/DVnmebpGafv?xmt=AQF05FZ5KB9BVUijAKO_J0eI03Y0iQMEmfmXo3RiYXi5U3F1B2s7gdfdZtnTn8Pukecg-EsB&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1480136917185200200/Screenshot_2026-03-08_at_6.31.43_PM.png?ex=69ae946c&is=69ad42ec&hm=7ce2b38bf4bab1315e3037b31574bdde39c545f9d496867074f9a8cd326842d6&",
      "content": "3주차 과제 제출합니다. 한국 법인 설립 전이라 운영중인 미국 서비스에 Stripe 연동한 페이지 올립니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1480136917185200200/Screenshot_2026-03-08_at_6.31.43_PM.png?ex=69ae946c&is=69ad42ec&hm=7ce2b38bf4bab1315e3037b31574bdde39c545f9d496867074f9a8cd326842d6&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8169-9c9a-d07a9bb198fd",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://dx.minu.best",
      "content": "**📌 [AI Agent 스터디 과제 #3] Claude 기반 AI 동료를 서비스에 붙여봤습니다**\n\n**🔎 Discovery-X가 뭔가요?**\nAX 사업개발팀 내부 도구입니다. 뉴스·리포트 신호를 수집해서 → 아이디어로 발전시키고 → 사업 제안까지 이어지는 파이프라인을 관리해요.\n여기에 Claude를 연결해서 **AI가 초안을 쓰고, 사람이 최종 결정하는 구조**로 만들었습니다.\n\n**🤖 Agent가 맡은 역할 3가지**\n\n```\n① AI 동료   — 매일 09:30 자동 실행, 신호 수집 → 아이디어 생성 → Discovery 등록까지\n② 분석 보조 — 채팅으로 질문하면 DB 조회 + 근거 인용해서 답변\n③ SOUL 페르소나 — 팀 스타일에 맞게 에이전트 개성을 커스터마이징 가능\n```\n\n**⚙️ 사람 vs Agent, 일을 어떻게 나눴나**\n\n```\n[자동 - Agent 담당]          [사람 담당]\n──────────────────          ──────────\n신호 수집 & 클러스터링  →   아이디어 채택 여부 결정\n아이디어 초안 생성      →   내용 편집 & 보완\nDiscovery 자동 등록     →   실험 설계 & Gate 승인\n사업 제안 초안 작성     →   최종 발표 & 의사결정\n```\n\n*\"AI는 편집장이 아니라 기자. 초고를 쓰고 사람이 데스킹한다\"*\n\n**🔧 서비스 구조 핵심 모듈**\n\n```\nexecutor-stream.ts   → SSE 스트리밍 실행 루프 (77개 도구 포함)\nsoul-engine.ts       → 페르소나/역할 로딩 & 커스터마이징\ncitation-builder.ts  → 답변에 DB 근거 자동 인용\nmemory-lifecycle.ts  → 대화 요약·장기기억 관리 (Cron)\nai-pipeline/         → Radar → Ideas → Discovery 자동화\n```\n\n**😅 어려웠던 것들 & 어떻게 풀었나**\n\n> **[토큰 폭증 문제]**\n> 대화가 길어지면 context가 넘쳐서 에러 발생\n> → `memory-lifecycle` Cron을 만들어 30+ 메시지마다 **결정 중심으로 자동 요약** 저장\n> → \"오늘 뭐 얘기했지?\" 수준이 아니라 \"어떤 판단이 내려졌지?\"로 요약 기준을 바꿨더니 훨씬 유용해짐\n\n> **[API 크레딧 소진 문제]**\n> 개발 중 Anthropic 크레딧이 갑자기 바닥남 🥲\n> → Fallback 체인 구축: `Anthropic → OpenAI → Google → Workers AI` 자동 전환\n> → 덕분에 서비스 중단 없이 운영 중\n\n\n**📊 현재 규모**\n`Agent 도구 77개` | `테스트 2,037개 100% PASS` | `Cron 14개 등록`\n배포: https://dx.minu.best (Cloudflare Pages + D1 + Anthropic API)\n\n*Claude Code로 개발했고, `/team` 스킬로 Worker 2~3명이 병렬 작업해서 파일 충돌 없이 구현했습니다. Claude가 Claude로 만든 서비스랄까요 😄*",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-9c9a-d07a9bb198fd",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://dx.minu.best",
      "content": "**📌 [AI Agent 스터디 과제 #3] Claude 기반 AI 동료를 서비스에 붙여봤습니다**\n\n---\n\n**🔎 Discovery-X가 뭔가요?**\nAX 사업개발팀 내부 도구입니다. 뉴스·리포트 신호를 수집해서 → 아이디어로 발전시키고 → 사업 제안까지 이어지는 파이프라인을 관리해요.\n여기에 Claude를 연결해서 **AI가 초안을 쓰고, 사람이 최종 결정하는 구조**로 만들었습니다.\n\n---\n\n**🤖 Agent가 맡은 역할 3가지**\n\n```\n① AI 동료   — 매일 09:30 자동 실행, 신호 수집 → 아이디어 생성 → Discovery 등록까지\n② 분석 보조 — 채팅으로 질문하면 DB 조회 + 근거 인용해서 답변\n③ SOUL 페르소나 — 팀 스타일에 맞게 에이전트 개성을 커스터마이징 가능\n```\n\n---\n\n**⚙️ 사람 vs Agent, 일을 어떻게 나눴나**\n\n```\n[자동 - Agent 담당]          [사람 담당]\n──────────────────          ──────────\n신호 수집 & 클러스터링  →   아이디어 채택 여부 결정\n아이디어 초안 생성      →   내용 편집 & 보완\nDiscovery 자동 등록     →   실험 설계 & Gate 승인\n사업 제안 초안 작성     →   최종 발표 & 의사결정\n```\n\n*\"AI는 편집장이 아니라 기자. 초고를 쓰고 사람이 데스킹한다\"*\n\n---\n\n**🔧 서비스 구조 핵심 모듈**\n\n```\nexecutor-stream.ts   → SSE 스트리밍 실행 루프 (77개 도구 포함)\nsoul-engine.ts       → 페르소나/역할 로딩 & 커스터마이징\ncitation-builder.ts  → 답변에 DB 근거 자동 인용\nmemory-lifecycle.ts  → 대화 요약·장기기억 관리 (Cron)\nai-pipeline/         → Radar → Ideas → Discovery 자동화\n```\n\n---\n\n**😅 어려웠던 것들 & 어떻게 풀었나**\n\n> **[토큰 폭증 문제]**\n> 대화가 길어지면 context가 넘쳐서 에러 발생\n> → `memory-lifecycle` Cron을 만들어 30+ 메시지마다 **결정 중심으로 자동 요약** 저장\n> → \"오늘 뭐 얘기했지?\" 수준이 아니라 \"어떤 판단이 내려졌지?\"로 요약 기준을 바꿨더니 훨씬 유용해짐\n\n> **[API 크레딧 소진 문제]**\n> 개발 중 Anthropic 크레딧이 갑자기 바닥남 🥲\n> → Fallback 체인 구축: `Anthropic → OpenAI → Google → Workers AI` 자동 전환\n> → 덕분에 서비스 중단 없이 운영 중\n\n---\n\n**📊 현재 규모**\n`Agent 도구 77개` | `테스트 2,037개 100% PASS` | `Cron 14개 등록`\n배포: https://dx.minu.best (Cloudflare Pages + D1 + Anthropic API)\n\n---\n\n*Claude Code로 개발했고, `/team` 스킬로 Worker 2~3명이 병렬 작업해서 파일 충돌 없이 구현했습니다. Claude가 Claude로 만든 서비스랄까요 😄*",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ca-b12f-cc1cb33d59bf",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480120522561032335/2026-03-08_5.28.53.png?ex=69ae8527&is=69ad33a7&hm=f0406da541befea8fcae9d1919c0e54602e5b2c869acf938acb2acf0833dbe6a&",
      "content": "3주차 과제 제출합니다.\n키워로 블로그 업로드한 글 기록 하게했습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480120522561032335/2026-03-08_5.28.53.png?ex=69ae8527&is=69ad33a7&hm=f0406da541befea8fcae9d1919c0e54602e5b2c869acf938acb2acf0833dbe6a&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480120523546558474/2026-03-08_5.26.22.png?ex=69ae8528&is=69ad33a8&hm=a414018175d6616712335b5494302f8f5a5735e5b15affad34a6f1ccdc486bf9&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480120524100210803/2026-03-08_5.30.10.png?ex=69ae8528&is=69ad33a8&hm=10c98e907bc2b85397607b8a592ef67bd4df572ac95edb23c2fd5d76d15806f2&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81ca-b12f-cc1cb33d59bf",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480120522561032335/2026-03-08_5.28.53.png?ex=69ae8527&is=69ad33a7&hm=f0406da541befea8fcae9d1919c0e54602e5b2c869acf938acb2acf0833dbe6a&",
      "content": "3주차 과제 제출합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480120522561032335/2026-03-08_5.28.53.png?ex=69ae8527&is=69ad33a7&hm=f0406da541befea8fcae9d1919c0e54602e5b2c869acf938acb2acf0833dbe6a&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480120523546558474/2026-03-08_5.26.22.png?ex=69ae8528&is=69ad33a8&hm=a414018175d6616712335b5494302f8f5a5735e5b15affad34a6f1ccdc486bf9&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480120524100210803/2026-03-08_5.30.10.png?ex=69ae8528&is=69ad33a8&hm=10c98e907bc2b85397607b8a592ef67bd4df572ac95edb23c2fd5d76d15806f2&"
      ]
    },
    {
      "memberId": "2df6400e-9268-807c-8701-d2dfa8c77dd2",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470030785615761593/1480119115623694487/2026-03-08_5.19.25.png?ex=69ae83d8&is=69ad3258&hm=05b927f7c01edf3bfc00c6d8845537f0b8c72d1daf7b45ed873e9268b5c5f47d&",
      "content": "리드 마그넷 실패 인증\n\n리드 마그넷으로 웹에서 무료 심리 리포트 발급을 해보려고 했는데\n생각처럼 결과가 잘 나오지 않아서 중단하기로 결정했어요. ㅠㅠ\n\n그리고 심리 테스트, 분석, 사주 도메인은 1회성 호기심 + 재미를 위한 결제 패턴을 보여서\n무료 분석 쿠폰 횟수를 줄이는 결정을 했습니다!\n\n꼭 심리 도메인이 아니더라도, 요즘 나오는 (자본력이 부족한) ai 래핑 서비스들의 패턴을 봤을 때\n무료 체험 기간을 아예 안 주고 호기심 유도 + 마케팅 + 일단 결제하고 쓰게 하는 패턴이 보입니다. (가끔 스캠 사이트도 눈에 띄네요)\n\n소규모 팀에게 꽤 유효한 방식 같아요.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1480119115623694487/2026-03-08_5.19.25.png?ex=69ae83d8&is=69ad3258&hm=05b927f7c01edf3bfc00c6d8845537f0b8c72d1daf7b45ed873e9268b5c5f47d&",
        "https://cdn.discordapp.com/attachments/1470030785615761593/1480119116202246258/2026-03-08_5.19.51.png?ex=69ae83d8&is=69ad3258&hm=9c34de5e5f0eb5cabf3be6b8a5ad112e1ac54592c3141729afbc7b834ad971ef&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81a1-b9a1-da8bcdf7dbbb",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://bobbobbob.lovable.app",
      "content": "https://bobbobbob.lovable.app\n(https://bobbobbob.lovable.app/components)\n디자인 개선 및 테스트 결제 기능 추가하였습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8198-a241-c89bdcc70956",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480114826905915516/image.png?ex=69ae7fd9&is=69ad2e59&hm=b6b650b60811d7079fc7dd3394c5cb794bde55a6df486411d2237236a3c58fa5&",
      "content": "3주차 과제 제출합니다.\n30페이지짜리 전자책을 발행 후 바로 노션에 전송되도록 작업했습니다. \n노션 API 연동 중에 문제(?) 가 생겨서 여러번 돌던 중 크레딧 한계로 우선 제출합니다.\n\n저는 과제 도중 거의 매번 크레딧이 완전 소모되는데 다들 이런 문제 없이 어떻게 하시는 지 의견 들어보고 싶습니다.ㅎㅎ",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480114826905915516/image.png?ex=69ae7fd9&is=69ad2e59&hm=b6b650b60811d7079fc7dd3394c5cb794bde55a6df486411d2237236a3c58fa5&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8198-a241-c89bdcc70956",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480114826905915516/image.png?ex=69ae7fd9&is=69ad2e59&hm=b6b650b60811d7079fc7dd3394c5cb794bde55a6df486411d2237236a3c58fa5&",
      "content": "3주차 과제 제출합니다.\n전자책을 발행 후 바로 노션에 전송되도록 작업했습니다. 노션 API 연동 중에 문제(?) 가 생겨서 여러번 돌던 중 크레딧 한계로 우선 제출합니다.\n\n저는 과제 도중 거의 매번 크레딧이 완전 소모되는데 다들 이런 문제 없이 어떻게 하시는 지 의견 들어보고 싶습니다.ㅎㅎ",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480114826905915516/image.png?ex=69ae7fd9&is=69ad2e59&hm=b6b650b60811d7079fc7dd3394c5cb794bde55a6df486411d2237236a3c58fa5&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8107-915c-df625d9e364f",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480114295655366739/image.png?ex=69ae7f5b&is=69ad2ddb&hm=7e8a4bbe436dc21d180c79941f3d8045c61e876bd3a68cd4e0d9432ba70ba5c4&",
      "content": "3주차 과제 제출합니다. \n2주차 과제에 이어서, 포럼 데이터를 여러가지 항목으로 분석하고, 이를 조직의 전략에 맞게 세부 실행 전략 문서를 생성했는데요. \n생성된 모든 폴더(하위 구조 폴더 포함)와 마크다운 문서(약 80개)들을 구글 드라이브에 자동으로 에이전트가 업로드 하는 기능입니다.\n구글 드라이브 MCP의 경우 Error 401: invalid_client Request details: flowName=GeneralOAuthFlow 에러가 발생해서 확인하는데 시간이 많이 걸렸습니다. \n결국 Google Cloud Client의 JSON 파일을 그대로 다운 받아, 프로젝트 폴더의 credentials.json으로 생성하고, 파일을 직접 읽어 인증하는 방식으로 해결했습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480114295655366739/image.png?ex=69ae7f5b&is=69ad2ddb&hm=7e8a4bbe436dc21d180c79941f3d8045c61e876bd3a68cd4e0d9432ba70ba5c4&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480114296028532802/image.png?ex=69ae7f5b&is=69ad2ddb&hm=c1e5632a4ca88381770e6a1e90b06741a723f0c2f671637c8a08df80dca0b0f3&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8107-915c-df625d9e364f",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480114295655366739/image.png?ex=69ae7f5b&is=69ad2ddb&hm=7e8a4bbe436dc21d180c79941f3d8045c61e876bd3a68cd4e0d9432ba70ba5c4&",
      "content": "3주차 과제 제출합니다. \n2주차 과제에 이어서, 포럼 데이터를 여러가지 항목으로 분석하고, 이를 조직의 전략에 맞게 세부 실행 전략 문서를 생성했는데요. \n생성된 모든 폴더(하위 구조 폴더 포함)와 마크다운 문서(약 80개)들을 구글 드라이브에 자동으로 에이전트가 업로드 하는 기능입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480114295655366739/image.png?ex=69ae7f5b&is=69ad2ddb&hm=7e8a4bbe436dc21d180c79941f3d8045c61e876bd3a68cd4e0d9432ba70ba5c4&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480114296028532802/image.png?ex=69ae7f5b&is=69ad2ddb&hm=c1e5632a4ca88381770e6a1e90b06741a723f0c2f671637c8a08df80dca0b0f3&"
      ]
    },
    {
      "memberId": "3006400e-9268-8121-ad2d-f0c76cb20143",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://www.zoopeterai.com/",
      "content": "3주차 과제\n1. shadcn/ui 활용하여 독자적인 Design System 구축\n2. 포트원 활용하여 KG 이니스시 테스트 결제 시스템 구축 (PG 심사 중)\n\nhttps://www.zoopeterai.com/",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480111141115134064/screencapture-localhost-3000-design-system-2026-03-08-16_46_53.png?ex=69ae7c6b&is=69ad2aeb&hm=f8a0580207dea951e48df6a31a2c0b7eba50b31dca902b70c70431f2078368f0&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480111141651873923/image.png?ex=69ae7c6b&is=69ad2aeb&hm=f49cdc3517930597e1e399f577348d210be9e5de0f9d4888fe5096916d4c0227&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1480111141995810959/image.png?ex=69ae7c6b&is=69ad2aeb&hm=452b28dc68e9f7f9086d64263f75382ca2c80569b190ac4a53043a61e627b69b&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81a1-b9a1-da8bcdf7dbbb",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://bobbobbob.lovable.app",
      "content": "https://bobbobbob.lovable.app\n\n디자인 개선 및 테스트 결제 기능 추가하였습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480085481172504606/image.png?ex=69ae6485&is=69ad1305&hm=7da0be244da1fc936cb0599d959b873dae1147817204941604f4cbf3fb2da075&",
      "content": "3주차 과제 제출합니다.\n영상에 시나리오4번을 해보았고, notion으로 출력까지 되는걸 확인하였습니다. \n하지만 그냥 단일 페이지로 나와서 DB 행으로 추가 하는 방식으로 수정중이고, tavily api 연결 예정이고, 출력물에 대한 템플릿은 조금 더 고민후 반영 예정입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480085481172504606/image.png?ex=69ae6485&is=69ad1305&hm=7da0be244da1fc936cb0599d959b873dae1147817204941604f4cbf3fb2da075&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480085481919086774/image.png?ex=69ae6485&is=69ad1305&hm=2b0c0d2de797c02d9121ed9788a62f63fae8bce8b63707836287075f454faabd&"
      ]
    },
    {
      "memberId": "2df6400e-9268-80e6-a976-f62af164bfe3",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://webtoon-pi.vercel.app/",
      "content": "3주차 과제 제출하비다\n토스페이먼츠 결제 연동 하였습니다\nhttps://webtoon-pi.vercel.app/",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1480084160902336694/image.png?ex=69ae634a&is=69ad11ca&hm=c37242a5700f0d054d9f3dd5ec9a1e8ce8229dc5a6198d893c8947d14b1e355e&",
        "https://cdn.discordapp.com/attachments/1470029883391348777/1480084161338277979/image.png?ex=69ae634a&is=69ad11ca&hm=f236a466f5f00007d8a04bb25382f7b15472e1f3734382b2418614381c8e6da0&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8112-b8b5-ee2f1ed40c98",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://teacher-helper-9tr.pages.dev/",
      "content": "https://teacher-helper-9tr.pages.dev/\n\n결제기능 구현 보안관련 수정했습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8185-b93b-e48e330e682b",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480080934169612371/CLAUDE.md?ex=69ae6049&is=69ad0ec9&hm=bb83405e3a63a465ee6cb0df0d41d0f5da72f8bee6498fd48cb767229aa61301&",
      "content": "3주차 과제 제출합니다. \n주간 세무이슈를 선별하여 스레드, 블로그, 카드뉴스로 만들고 노션에 업로드합니다.\n또한 블로그 글과 카드뉴스는 슬렉 각 채널에 공유되도록 구성하였습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480080934828114092/3_.png?ex=69ae6049&is=69ad0ec9&hm=6a5338b1afb826745f02645fefd6f4fcda1236486612afc1fac5cbbc1bc3b5a0&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480080935302074439/3_1.png?ex=69ae6049&is=69ad0ec9&hm=f639831910cccb273cdefdb71aad28ab22a06e3de1873ce44e409467bf1ccf7b&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DVnLDdUEw2S?xmt=AQF0B5aPWIbQQgUyZOoMkqWgsJ19NZs_CCPi5wUEoI5lrxFCiKycjgNUIEGau2thNg78JKAr&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DVnLDdUEw2S?xmt=AQF0B5aPWIbQQgUyZOoMkqWgsJ19NZs_CCPi5wUEoI5lrxFCiKycjgNUIEGau2thNg78JKAr&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8128-a649-c35d601c95a0",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480047899625656321/bmp_78.jpg?ex=69ae4185&is=69acf005&hm=cb0c8847bc51c2c52e5ca20df2126a606ee4523a2ae081a164d66819707466f1&",
      "content": "[장혜진/담백한 바람/6기] AI 에이전트 과제",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480047899625656321/bmp_78.jpg?ex=69ae4185&is=69acf005&hm=cb0c8847bc51c2c52e5ca20df2126a606ee4523a2ae081a164d66819707466f1&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480047900238282774/bmp_83.jpg?ex=69ae4185&is=69acf005&hm=ba0e95e65870ae285136c46f03b5573a1d000954c691224fc3023e85a82eb4d1&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480047900573696041/bmp_79.jpg?ex=69ae4185&is=69acf005&hm=ef10a83d7584f1b43b1b6dfa985e49a0d383bb3d1c207c3aa85d7c7d879b4b77&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1480047900984868956/bmp_80.jpg?ex=69ae4185&is=69acf005&hm=62fc8422d4ff0ea8ced7435b4266165d7861734c789cea7e6e495981f8b3720a&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8128-a649-c35d601c95a0",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480047309957103616/bmp_79.bmp?ex=69ae40f8&is=69acef78&hm=3a60d08dd2284d8ceea8041f04b7fa0e057341add80805f0d793c56066231dc5&",
      "content": "3주차 과제 제출합니다.\n인스타툰 리서치 기록을 슬랙과 노션에 정리해 보았습니다.\n클로드 에이전트와 스킬이 리서치 및 정리하고 노션에 리서치 한 것을 작성, 슬랙에는 리서치 완료 노티와 노션 리포트로 연결 되도록 해보았습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8128-a649-c35d601c95a0",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480047309067649105/bmp_78.bmp?ex=69ae40f8&is=69acef78&hm=17a1ffe5d6c908183ffb7e0d98ce63a5c7fa2755aba139a557b44fcddd7f6b49&",
      "content": "3주차 과제 제출합니다.\n인스타툰 리서치 기록을 슬랙과 노션에 정리해 보았습니다.\n클로드 에이전트와 스킬이 리서치 및 정리하고 노션에 리서치 한 것을 작성, 슬랙에는 리서치 완료 노티와 노션 리포트로 연결 되도록 해보았습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8128-a649-c35d601c95a0",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480047309067649105/bmp_78.bmp?ex=69ae40f8&is=69acef78&hm=17a1ffe5d6c908183ffb7e0d98ce63a5c7fa2755aba139a557b44fcddd7f6b49&",
      "content": "3주차 과제 제출합니다.\n인스타툰 리서치 기록을 슬랙과 노션에 정리해 보았습니다.\n클로드 에이전트와 스킬이 리서치 및 정리하고 노션에 리서치 한 것을 작성, 슬랙에는 리서치 완료 노티와 노션 리포트로 연결 되도록 해보았습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8128-a649-c35d601c95a0",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1480047309067649105/bmp_78.bmp?ex=69ae40f8&is=69acef78&hm=17a1ffe5d6c908183ffb7e0d98ce63a5c7fa2755aba139a557b44fcddd7f6b49&",
      "content": "3주차 과제 제출합니다.\n인스타툰 리서치 기록을 슬랙과 노션에 정리해 보았습니다.\n클로드 에이전트와 스킬이 리서치 및 정리하고 노션에 리서치 한 것을 작성, 슬랙에는 리서치 완료 노티와 노션 리포트로 연결 되도록 해보았습니다.",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://glamslow.com/",
      "content": "3주차 과제,  \n1. 원티드 디자인 시스템으로 디자인 변경\nhttps://glamslow.com/\n2. 라피드를 할용한 1회용 결제 시스템 추가\nhttps://www.latpeed.com/products/X_esc",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://scrapling.readthedocs.io/en/latest/index.html",
      "content": "과제 제출합니다.\n\n상품 URL 입력하면 Claude Code가 서브에이전트를 병렬로 돌려 웹 스크래핑 → AI 분석 → Notion 저장 → Slack 알림까지 자동으로 처리하는 파이프라인입니다.\n\n노션 - 상품 정보 제공\n슬랙 - 오늘의 추천 상품으로 제공\n\nScrapling를 활용하여 구성해보았습니다.\n최신형 파이썬 웹 스크래핑 라이브러리로, 복잡한 구조의 웹 데이터를 쉽고 빠르게 추출할 수 있도록 설계된 도구\n\n사이트 크롤링에 대한 이슈가 사이트에따라 남아있긴합니다.\n\n링크 : https://scrapling.readthedocs.io/en/latest/index.html",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479804321381220504/1_.jpg?ex=69ae076b&is=69acb5eb&hm=73d7fc0b93a96b1fab42e8e45af2084d37a7feb1530e3d08a11f09c5c87a7402&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479804321846792233/1_mcp_.jpg?ex=69ae076b&is=69acb5eb&hm=4ac1d6dcb91ed1e9ed23d077e15cf6dc1c9360da9f54800ef621d3e768378708&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479804323218194605/3_.jpg?ex=69ae076c&is=69acb5ec&hm=d3460c6712af13821a3b5efc6c3ca313632361d7ec0a1e4b3616469a3656b5e8&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479804324103065660/4_.jpg?ex=69ae076c&is=69acb5ec&hm=057acc83e21190473d1ae9d77bc052f4b6f56f348b573fc3420733549c91a3b3&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479804324698652672/4_.jpg?ex=69ae076c&is=69acb5ec&hm=922f3c0f74b85a9df6f729a032cb6b67a78c3a2394f1f3d594067b43d6d40690&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DVmDeJmiEky?xmt=AQF0jxOjmI4PV23fV-vE_dlyiYxDRBw3ggHX7qyfxz2oeg",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DVmDeJmiEky?xmt=AQF0jxOjmI4PV23fV-vE_dlyiYxDRBw3ggHX7qyfxz2oeg",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://vaulbo.tistory.com/entry/%EC%A7%81%EC%9E%A5%EC%9D%B8-%ED%8F%89%EA%B7%A0-%EC%A0%90%EC%8B%AC%EA%B0%92-9500%EC%9B%90-%E2%80%94-%EB%B0%80%ED%94%84%EB%9E%A9%EC%9C%BC%EB%A1%9C-%ED%95%9C-%EB%8B%AC%EC%97%90-%EC%96%BC%EB%A7%88%EB%82%98-%EC%A4%84%EC%9D%BC-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C",
      "content": "https://vaulbo.tistory.com/entry/%EC%A7%81%EC%9E%A5%EC%9D%B8-%ED%8F%89%EA%B7%A0-%EC%A0%90%EC%8B%AC%EA%B0%92-9500%EC%9B%90-%E2%80%94-%EB%B0%80%ED%94%84%EB%9E%A9%EC%9C%BC%EB%A1%9C-%ED%95%9C-%EB%8B%AC%EC%97%90-%EC%96%BC%EB%A7%88%EB%82%98-%EC%A4%84%EC%9D%BC-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C",
      "images": null
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-03-07",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVlhjrmD5do?xmt=AQF0sCqEKbgupPny1ofniByLxIb7Og1IhL-777DHa0B_xw",
      "content": "https://www.threads.com/@ghoiibaad/post/DVlhjrmD5do?xmt=AQF0sCqEKbgupPny1ofniByLxIb7Og1IhL-777DHa0B_xw",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://routine-chef-buddy.lovable.app",
      "content": "3주차과제: 식단 자동생성 프리미엄 결제\nhttps://routine-chef-buddy.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-814f-b0d4-c563a8c55273",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://kiosk-pjt.vercel.app/",
      "content": "3주차 과제: 키오스크 음성인식 주문 소프트웨어\n1. 핵심기능 디벨롭: https://kiosk-pjt.vercel.app/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470030785615761593/1479806087115968594/00d4e3d33f256451.jpg?ex=69ad6050&is=69ac0ed0&hm=7e0f89ad9b8d17269ead5de54245d306ae7abe0599b3b9d8ce026e49f1849259&",
      "content": "리드마그넷 홍보 인증 - [이만성]\n\n차주 무료강의로 리드 수집을 진행하고 있습니다.\n이커머스 셀러를 대상으로 무료강의를 진행예정입니다.\n\n운영중인 오픈채팅, 협업하는 외부 카페를 통해 홍보를 진행하고 있습니다.\n현재까지 165개의 리드 수집완료되었습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1479806087115968594/00d4e3d33f256451.jpg?ex=69ad6050&is=69ac0ed0&hm=7e0f89ad9b8d17269ead5de54245d306ae7abe0599b3b9d8ce026e49f1849259&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470030785615761593/1479806087115968594/00d4e3d33f256451.jpg?ex=69ad6050&is=69ac0ed0&hm=7e0f89ad9b8d17269ead5de54245d306ae7abe0599b3b9d8ce026e49f1849259&",
      "content": "리드마그넷 홍보 인증 - [이만성]\n\n차주 무료강의로 리드 수집을 진행하고 있습니다.\n이커머스 셀러를 대상으로 무료강의를 진행예정입니다.\n\n운영중인 오픈채팅, 협업하는 외부 카페를 통해 홍보를 진행하고 있습니다.\n현재까지 165개의 리드 수집완료되었습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1479806087115968594/00d4e3d33f256451.jpg?ex=69ad6050&is=69ac0ed0&hm=7e0f89ad9b8d17269ead5de54245d306ae7abe0599b3b9d8ce026e49f1849259&",
        "https://cdn.discordapp.com/attachments/1470030785615761593/1479806088626049116/2cb06d09b9fe0336.jpg?ex=69ad6050&is=69ac0ed0&hm=d4ae37f4b77d6d5ce734c9df885cf64a486287f162c273e0e39cd927264f16fc&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470030785615761593/1479806087115968594/00d4e3d33f256451.jpg?ex=69ad6050&is=69ac0ed0&hm=7e0f89ad9b8d17269ead5de54245d306ae7abe0599b3b9d8ce026e49f1849259&",
      "content": "리드마그넷 홍보 인증 - [이만성]\n\n차주 무료강의로 리드 수집을 진행하고 있습니다.\n오픈채팅, 외부 카페를 통해 홍보를 진행하고 있습니다.\n현재까지 165개의 리드 수집완료되었습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1479806087115968594/00d4e3d33f256451.jpg?ex=69ad6050&is=69ac0ed0&hm=7e0f89ad9b8d17269ead5de54245d306ae7abe0599b3b9d8ce026e49f1849259&",
        "https://cdn.discordapp.com/attachments/1470030785615761593/1479806088626049116/2cb06d09b9fe0336.jpg?ex=69ad6050&is=69ac0ed0&hm=d4ae37f4b77d6d5ce734c9df885cf64a486287f162c273e0e39cd927264f16fc&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://scrapling.readthedocs.io/en/latest/index.html",
      "content": "과제 제출합니다.\n\n상품 URL 입력하면 Claude Code가 서브에이전트를 병렬로 돌려 웹 스크래핑 → AI 분석 → Notion 저장 → Slack 알림까지 자동으로 처리하는 파이프라인입니다.\n\n노션 - 상품 정보 제공\n슬랙 - 오늘의 추천 상품으로 제공\n\nScrapling를 활용하여 구성해보았습니다.\n최신형 파이썬 웹 스크래핑 라이브러리로, 복잡한 구조의 웹 데이터를 쉽고 빠르게 추출할 수 있도록 설계된 도구\n\n링크 : https://scrapling.readthedocs.io/en/latest/index.html",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479804321381220504/1_.jpg?ex=69ad5eab&is=69ac0d2b&hm=57793dc8434f74edbd617bcfc13b86cc1d27a7973d812e93bf3fa3f07f13efdb&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479804321846792233/1_mcp_.jpg?ex=69ad5eab&is=69ac0d2b&hm=5e19ffedcb400f5bca6dca3f668404c70aaaef071c24994d4c7cfeb680729a48&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479804323218194605/3_.jpg?ex=69ad5eac&is=69ac0d2c&hm=157714bbe4120d4a56a1c0c48de6e8d1519caad806d993b2c1ee026251c300d4&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479804324103065660/4_.jpg?ex=69ad5eac&is=69ac0d2c&hm=b3d2815db2697da1902bb14ce611e039da506a687cd752b40b4dd8afbe8219ae&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479804324698652672/4_.jpg?ex=69ad5eac&is=69ac0d2c&hm=108e40ec2aa890e2d78d0620f4494867e9aad25f56f1653c2cea11c882a4b05b&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81e2-99de-cbc33a4cde1d",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1479754476998099057/image.png?ex=69ad303f&is=69abdebf&hm=63ac77de220aeec777bbe4a45ca46542c29eddb8295da4cdaef167cb81a1c6f9&",
      "content": "3주차 과제제출 노션 API 연결과 노션에 관련 자료를 구현하였습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479754476998099057/image.png?ex=69ad303f&is=69abdebf&hm=63ac77de220aeec777bbe4a45ca46542c29eddb8295da4cdaef167cb81a1c6f9&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479754477308350536/image.png?ex=69ad303f&is=69abdebf&hm=b6a8191f00cc24b1b421962fe95ce5749b90a8d87f590062a4dcb0db294bd814&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81ca-b12f-cc1cb33d59bf",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1479742572325900338/2026-03-07_4.23.42.png?ex=69ad2529&is=69abd3a9&hm=e67d3198cf9f9be597d2284ccd75d2f653c34d0bd15cd7bb2c0a963c0b4ae17e&",
      "content": "3주차 과제 제출합니다. \n포트원 kg이니시스로 결제 연동 진행했습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1479742572325900338/2026-03-07_4.23.42.png?ex=69ad2529&is=69abd3a9&hm=e67d3198cf9f9be597d2284ccd75d2f653c34d0bd15cd7bb2c0a963c0b4ae17e&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-03-07",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVkquQbgJk5?xmt=AQF0tFrFMvgSanH6nqM5uzzp4rMksJkEYNfK_v1JhMZ3LA",
      "content": "https://www.threads.com/@ai.profitwise/post/DVkquQbgJk5?xmt=AQF0tFrFMvgSanH6nqM5uzzp4rMksJkEYNfK_v1JhMZ3LA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-812f-a8a5-efa051d245ef",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1479713472970358905/1_mcp_.png?ex=69ad0a0f&is=69abb88f&hm=678d7325dcc3f936d649ff852db1a1ae3040fbbd279114df61008cff96c95591&",
      "content": "3주차 과제 제출",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479713472970358905/1_mcp_.png?ex=69ad0a0f&is=69abb88f&hm=678d7325dcc3f936d649ff852db1a1ae3040fbbd279114df61008cff96c95591&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1479713475478683748/3._.png?ex=69ad0a10&is=69abb890&hm=be37313d5aa342b3a267e2833e75d8624f7eb5968893825936a994b19c3ea9b8&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DVjAlivD5aP?xmt=AQF0ruQszjMZ5t0afNlUPzOULL2Zv6gNmFM2vkfgVpkx4UrSu9-L0ACvSX4VlpgW-Jq9Upb4&slof=1",
      "content": "https://www.threads.com/@swlbear/post/DVjAlivD5aP?xmt=AQF0ruQszjMZ5t0afNlUPzOULL2Zv6gNmFM2vkfgVpkx4UrSu9-L0ACvSX4VlpgW-Jq9Upb4&slof=1",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jakvis.labs/post/DVjAKa2iY1O?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "content": "https://www.threads.com/@jakvis.labs/post/DVjAKa2iY1O?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "images": null
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVi9B4tD54o?xmt=AQF0vdcVGV9kst4eidcR_lnsc6NvcyS3leSoCwGiTJNVKA",
      "content": "https://www.threads.com/@ghoiibaad/post/DVi9B4tD54o?xmt=AQF0vdcVGV9kst4eidcR_lnsc6NvcyS3leSoCwGiTJNVKA",
      "images": null
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVi9B4tD54o?xmt=AQF0vdcVGV9kst4eidcR_lnsc6NvcyS3leSoCwGiTJNVKA",
      "content": "https://www.threads.com/@ghoiibaad/post/DVi9B4tD54o?xmt=AQF0vdcVGV9kst4eidcR_lnsc6NvcyS3leSoCwGiTJNVKA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@stevejobboogtm/post/DVi7kOmgYU1?xmt=AQF0x-h0xJztXKTqC6bpm1Hd1cMztPCn7lDp8PqGo2mNiLjxJzYgj7pQY1m7e0jrPvUHhX4&slof=1",
      "content": "https://www.threads.com/@stevejobboogtm/post/DVi7kOmgYU1?xmt=AQF0x-h0xJztXKTqC6bpm1Hd1cMztPCn7lDp8PqGo2mNiLjxJzYgj7pQY1m7e0jrPvUHhX4&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simplyciety/post/DVi8ez2D-MX?xmt=AQF02EuQBie5oyl_KjBtVM-h5m9S5iLBsSqgmxMMmp1oGIS67X27uVNzBZx-muP3awlg7HTg&slof=1",
      "content": "https://www.threads.com/@simplyciety/post/DVi8ez2D-MX?xmt=AQF02EuQBie5oyl_KjBtVM-h5m9S5iLBsSqgmxMMmp1oGIS67X27uVNzBZx-muP3awlg7HTg&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DViyIdBk0Qx?xmt=AQF0JHSRBjtHw9CLnaGS3W2j6p2C1FXujgkr7_KlEp29SQ",
      "content": "https://www.threads.com/@jiyong.product/post/DViyIdBk0Qx?xmt=AQF0JHSRBjtHw9CLnaGS3W2j6p2C1FXujgkr7_KlEp29SQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DViq76ViHyy?xmt=AQF0YeAKzM1opdwa7Im5NBI8bpBSUC079QdimZvqmT3DLtEF2Dy7VUeHg9UaMNDyyKMuvdg&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DViq76ViHyy?xmt=AQF0YeAKzM1opdwa7Im5NBI8bpBSUC079QdimZvqmT3DLtEF2Dy7VUeHg9UaMNDyyKMuvdg&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/valueforyourbiz_ive-just-finished-my-first-week-at-a-new-activity-7435646292640456704-Hxrc?utm_source=share&utm_medium=member_ios&rcm=ACoAAC6L56oBcnSGNNosRJL25X2aGHLoxESQD-U",
      "content": "https://www.linkedin.com/posts/valueforyourbiz_ive-just-finished-my-first-week-at-a-new-activity-7435646292640456704-Hxrc?utm_source=share&utm_medium=member_ios&rcm=ACoAAC6L56oBcnSGNNosRJL25X2aGHLoxESQD-U",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSuRWKBy9/",
      "content": "https://vt.tiktok.com/ZSuRWKBy9/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVhbsApk6qk?xmt=AQF0YyrJngrNG80tCIECwgZpl6sa6gb0TQd8F1sEtINTgaVLm4obNpo4QqZH38j2vVy2agE5&slof=1",
      "content": "https://www.threads.com/@ai.profitwise/post/DVhbsApk6qk?xmt=AQF0YyrJngrNG80tCIECwgZpl6sa6gb0TQd8F1sEtINTgaVLm4obNpo4QqZH38j2vVy2agE5&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/p/DViWGnACU1n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "content": "https://www.instagram.com/p/DViWGnACU1n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@maker.evan/post/DVh3mTmEcmV?xmt=AQF0DxgU8LcPfK4CogviFsobPDt49D46SWAw4gA8oHJfrw",
      "content": "https://www.threads.com/@maker.evan/post/DVh3mTmEcmV?xmt=AQF0DxgU8LcPfK4CogviFsobPDt49D46SWAw4gA8oHJfrw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DVfYmk6k1g_?xmt=AQF0nsbUR2qp0PnfPvp1MAwSnYMNwj8bZlgj92I_aTxsOcqPC2zNIZspZ9rTmt5zPnQMjTkH&slof=1",
      "content": "이게 10만회 조회되었다는 건.. 잘 조회되는 스레드를 인용하고, 사람들이 궁금한 것을 대신 해주었기 때문일까요? 각 잡고 쓴 글은 357회, 흥미있는 글은 10만. 팔로워는 딱히 안 늘었음.\n\nhttps://www.threads.com/@rm.visualizer/post/DVfYmk6k1g_?xmt=AQF0nsbUR2qp0PnfPvp1MAwSnYMNwj8bZlgj92I_aTxsOcqPC2zNIZspZ9rTmt5zPnQMjTkH&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVhqqeUkrkT?xmt=AQF05RnzeHw8btgUO2giPaeyotLwGYvHDpY6yiCufTDg696HYrLDtptHtgaE_Z6wQUfNzRu_&slof=1",
      "content": "https://www.threads.com/@slowwbuilder/post/DVhqqeUkrkT?xmt=AQF05RnzeHw8btgUO2giPaeyotLwGYvHDpY6yiCufTDg696HYrLDtptHtgaE_Z6wQUfNzRu_&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/reel/DVhgK1PCqiR/?igsh=aWYzYmdvaGdtb2Q2",
      "content": "https://www.instagram.com/reel/DVhgK1PCqiR/?igsh=aWYzYmdvaGdtb2Q2",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-03-06",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dot.shef/post/DVhfXodgZvb?hl=ko",
      "content": "https://www.threads.com/@dot.shef/post/DVhfXodgZvb?hl=ko",
      "images": null
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVgcO00D8lT?xmt=AQF00B3V9ZtIkyrXiUiXKLjI_jaFsgq08auYMWWrYJkqZg",
      "content": "https://www.threads.com/@ghoiibaad/post/DVgcO00D8lT?xmt=AQF00B3V9ZtIkyrXiUiXKLjI_jaFsgq08auYMWWrYJkqZg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DVgYzaOk_4h?xmt=AQF0Pl6aDgTIWfaQiaD5bzldLDMwWZKdOu5qqr84d27zJg",
      "content": "https://www.threads.com/@jiyong.product/post/DVgYzaOk_4h?xmt=AQF0Pl6aDgTIWfaQiaD5bzldLDMwWZKdOu5qqr84d27zJg",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVgTPEuEjdj",
      "content": "https://www.threads.com/@makekim.kr/post/DVgTPEuEjdj",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dot.shef/post/DVgQ_VTgcVb?hl=ko",
      "content": "https://www.threads.com/@dot.shef/post/DVgQ_VTgcVb?hl=ko",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVgO_70kjn1",
      "content": "https://www.threads.com/@han_lab_/post/DVgO_70kjn1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSueaAFJn/",
      "content": "https://vt.tiktok.com/ZSueaAFJn/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVf5HoHE7oj?xmt=AQF0h7CN-6Yl11DcFB41gjk_7WsZcIZsvolm6NfHACz4StFLI4NN5VpFBpyPQD5bpH5pS7k&slof=1",
      "content": "https://www.threads.com/@ai.profitwise/post/DVf5HoHE7oj?xmt=AQF0h7CN-6Yl11DcFB41gjk_7WsZcIZsvolm6NfHACz4StFLI4NN5VpFBpyPQD5bpH5pS7k&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/p/DVf4iWCCbM1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "content": "https://www.instagram.com/p/DVf4iWCCbM1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVfTt3VCYSj?xmt=AQF0fgPh9Q6OSYSlbga7weMxJ_Z1bL-05xaazcRJJYFdWQ",
      "content": "https://www.threads.com/@dodo_list_/post/DVfTt3VCYSj?xmt=AQF0fgPh9Q6OSYSlbga7weMxJ_Z1bL-05xaazcRJJYFdWQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVfReD4knXW?xmt=AQF0pA9NrLMG5BGO58hQSuEJG6ic-0dVef6eVmtgJxo5SA",
      "content": "https://www.threads.com/@slowwbuilder/post/DVfReD4knXW?xmt=AQF0pA9NrLMG5BGO58hQSuEJG6ic-0dVef6eVmtgJxo5SA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://brunch.co.kr/@soulmagics/210",
      "content": "https://brunch.co.kr/@soulmagics/210\n\n오디오북\n\nhttps://youtu.be/_LyS4JoWr5o?si\n\n쇼츠\n1-1\nhttps://youtube.com/shorts/3kEH2mQajpk?si\n\n1-2\nhttps://youtube.com/shorts/8apQ3NC64yE?si\n\n1-3\nhttps://youtube.com/shorts/ujT1yCcwHh4?si",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DVfHFIAkwKM?xmt=AQF0JRmewgq9YaSvDcHWDzh90CNnwyLyi9nsZj0wP_HP0zr63OwKfQYr9qrUXUSn5egJG9U&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DVfHFIAkwKM?xmt=AQF0JRmewgq9YaSvDcHWDzh90CNnwyLyi9nsZj0wP_HP0zr63OwKfQYr9qrUXUSn5egJG9U&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@maker.evan/post/DVfKBWVj8rj?xmt=AQF0rwPvxSzqujH9Su3OQSDoDpv_IvHj6NXRIa0L3kaL_A",
      "content": "https://www.threads.com/@maker.evan/post/DVfKBWVj8rj?xmt=AQF0rwPvxSzqujH9Su3OQSDoDpv_IvHj6NXRIa0L3kaL_A",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-03-05",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/stevejobboo_gtm-swkruv-rpusqyrqdstasqbqzc-share-7435062531129438208-N32S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "content": "https://www.linkedin.com/posts/stevejobboo_gtm-swkruv-rpusqyrqdstasqbqzc-share-7435062531129438208-N32S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVd2riegS_d?xmt=AQF0RLMQKNVufrDZ2Bnx6qXDnsr6FEtTkCJp8WlXQK-TQQ",
      "content": "https://www.threads.com/@dodo_list_/post/DVd2riegS_d?xmt=AQF0RLMQKNVufrDZ2Bnx6qXDnsr6FEtTkCJp8WlXQK-TQQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DVd0qu7Eeir?xmt=AQF0nM-hgYbw81RW5NgStG7csY3I6v_PnZE1fybVOygqtg",
      "content": "https://www.threads.com/@inner.builder/post/DVd0qu7Eeir?xmt=AQF0nM-hgYbw81RW5NgStG7csY3I6v_PnZE1fybVOygqtg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DVdzZI1k7Lk?xmt=AQF0SX2tcXgQciYaYNV1dbn8Ib8-zNAzuuo5yEQsOQau-A",
      "content": "https://www.threads.com/@jiyong.product/post/DVdzZI1k7Lk?xmt=AQF0SX2tcXgQciYaYNV1dbn8Ib8-zNAzuuo5yEQsOQau-A",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DVdzQirEhhy?xmt=AQF0NQPHnVW1i3mSu4sYY3AJFiitGkZDeVL_jhJy5vNSBJKDwGvHfv5ZfpvfLAIZ0gzfyjw&slof=1",
      "content": "https://www.threads.com/@swlbear/post/DVdzQirEhhy?xmt=AQF0NQPHnVW1i3mSu4sYY3AJFiitGkZDeVL_jhJy5vNSBJKDwGvHfv5ZfpvfLAIZ0gzfyjw&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVdvBc_DwkM?xmt=AQF0jlg1PjYGOuRtksG016cm6kgRn6gVbcz20lcU1t0F3g",
      "content": "https://www.threads.com/@ghoiibaad/post/DVdvBc_DwkM?xmt=AQF0jlg1PjYGOuRtksG016cm6kgRn6gVbcz20lcU1t0F3g",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dot.shef/post/DVdtZBRgSHI?hl=ko",
      "content": "https://www.threads.com/@dot.shef/post/DVdtZBRgSHI?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSu1e1QUu/",
      "content": "https://vt.tiktok.com/ZSu1e1QUu/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simplyciety/post/DVcFnu7kjTc?xmt=AQF0E-uqcDtf6VYgPSmIHi828amguoDbedcQrpr44KjTUCCd6JA9tbs9i2I_Uq4tCuleNLA&slof=1",
      "content": "https://www.threads.com/@simplyciety/post/DVcFnu7kjTc?xmt=AQF0E-uqcDtf6VYgPSmIHi828amguoDbedcQrpr44KjTUCCd6JA9tbs9i2I_Uq4tCuleNLA&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f1-aa1e-f7250a0d3470",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1478709429720322210/1772622169251.png?ex=69a962f9&is=69a81179&hm=b8b7f77ff3d44b111c15ba337e3222f4cbe5e8da506e345c6003db5132a45116&",
      "content": "팀 단위의 에이전트를 시각화 하여 만들어보았습니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1478709429720322210/1772622169251.png?ex=69a962f9&is=69a81179&hm=b8b7f77ff3d44b111c15ba337e3222f4cbe5e8da506e345c6003db5132a45116&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8146-9d11-eed95d59dfb4",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1478706744086630430/k-beauty-multi-agent-system.md?ex=69a96078&is=69a80ef8&hm=2709b2c7b0fa81eaa77779355940294c4378a5014ea0f08e7d99c175969a4bce&",
      "content": "저는 뉴스레터를 만드는 멀티네이전트를 만들어 봤습니다.",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DVdWRTCD2Q3?xmt=AQF0AVz87s0HgxvtfYNO-0306RgoH7_6YxWiC0PRH8s8Blq6U1at1plR54JW8JubhD9H118P&slof=1",
      "content": "https://www.threads.com/@lawyerssm/post/DVdWRTCD2Q3?xmt=AQF0AVz87s0HgxvtfYNO-0306RgoH7_6YxWiC0PRH8s8Blq6U1at1plR54JW8JubhD9H118P&slof=1",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jakvis.labs/post/DVdXv5PEtz8?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "content": "https://www.threads.com/@jakvis.labs/post/DVdXv5PEtz8?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVdVDiUE6vK?xmt=AQF0jGMNkC7lA33a-CEgs8-CvjNh-pL41DEYcc9qQRA8vAKjqazTzcJ-cHu28uExWFtWxb1F&slof=1",
      "content": "https://www.threads.com/@ai.profitwise/post/DVdVDiUE6vK?xmt=AQF0jGMNkC7lA33a-CEgs8-CvjNh-pL41DEYcc9qQRA8vAKjqazTzcJ-cHu28uExWFtWxb1F&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVdLUv_gF2Z",
      "content": "https://www.threads.com/@makekim.kr/post/DVdLUv_gF2Z",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVc5pL_kv2n?xmt=AQF0SEyqHQY6kLH1BwGPwRoNwB7U26VI0_zi3YHUcgi5bg",
      "content": "https://www.threads.com/@slowwbuilder/post/DVc5pL_kv2n?xmt=AQF0SEyqHQY6kLH1BwGPwRoNwB7U26VI0_zi3YHUcgi5bg",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@maker.evan/post/DVctVmfj9fw?xmt=AQF0hxdOY1JjwF1gkGYBr-QPjRjvvRgoKX5oGDVx5IwvXg",
      "content": "https://www.threads.com/@maker.evan/post/DVctVmfj9fw?xmt=AQF0hxdOY1JjwF1gkGYBr-QPjRjvvRgoKX5oGDVx5IwvXg",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://m.blog.naver.com/svminseo/224202660671",
      "content": "https://m.blog.naver.com/svminseo/224202660671",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simplyciety/post/DVcFnu7kjTc?xmt=AQF05QZDGTqG6l28YO6S6N-u93urItnj-jesrCPd0f3cZ2EiXrcphltynSWMtWLBjQcTE5GP&slof=1",
      "content": "https://www.threads.com/@simplyciety/post/DVcFnu7kjTc?xmt=AQF05QZDGTqG6l28YO6S6N-u93urItnj-jesrCPd0f3cZ2EiXrcphltynSWMtWLBjQcTE5GP&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-03-04",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simplyciety/post/DVb-qF-EgvT?xmt=AQF0S-yrwtzTMzxw2731iIbiPSZIOTb0kG03M32ZGvEo-unpTqhmpKP30mha7emTo9ddhDBD&slof=1",
      "content": "https://www.threads.com/@simplyciety/post/DVb-qF-EgvT?xmt=AQF0S-yrwtzTMzxw2731iIbiPSZIOTb0kG03M32ZGvEo-unpTqhmpKP30mha7emTo9ddhDBD&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@gncut_official/post/DVbSia1if1j?xmt=AQF0hNAwfDsTP_C074-BMCal4n6DxMyQgGEH8hLbryZNWA",
      "content": "https://www.threads.com/@gncut_official/post/DVbSia1if1j?xmt=AQF0hNAwfDsTP_C074-BMCal4n6DxMyQgGEH8hLbryZNWA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DVbR8V_kjz1?xmt=AQF0_N309WK9_dgaWbmsbGWGnN_Kfawq1srGBDFN_E_iqxW1ceRubJjglwybf-9uVlCXxIka&slof=1",
      "content": "https://www.threads.com/@swlbear/post/DVbR8V_kjz1?xmt=AQF0_N309WK9_dgaWbmsbGWGnN_Kfawq1srGBDFN_E_iqxW1ceRubJjglwybf-9uVlCXxIka&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVaMFg9CU8E?xmt=AQF00hIphiuCYbt3QjxD0Emfswf5MJK7Ac53DQxrXbV_UMhQ7nm_mSeMiLYz-ugHvFNA13Ym&slof=1",
      "content": "https://www.threads.com/@dodo_list_/post/DVaMFg9CU8E?xmt=AQF00hIphiuCYbt3QjxD0Emfswf5MJK7Ac53DQxrXbV_UMhQ7nm_mSeMiLYz-ugHvFNA13Ym&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/pulse/%25EB%25A7%2581%25EA%25B8%2580-ceo-letter%25EB%25A5%25BC-%25EC%259D%25BD%25EA%25B3%25A0-%25EB%2582%2598%25EC%2584%259C-%25EA%25B8%25B0%25EC%2588%25A0-%25ED%258A%25B8%25EB%25A0%258C%25EB%2593%259C%25EB%25B3%25B4%25EB%258B%25A4-%25EC%259C%25A0%25EC%25A0%2580%25EC%259D%2598-%25EB%258B%2588%25EC%25A6%2588%25EC%2597%2590-%25EC%25A7%2591%25EC%25A4%2591%25ED%2595%2598%25EB%259D%25BC-sijun-park-pvdtc/",
      "content": "https://www.linkedin.com/pulse/%25EB%25A7%2581%25EA%25B8%2580-ceo-letter%25EB%25A5%25BC-%25EC%259D%25BD%25EA%25B3%25A0-%25EB%2582%2598%25EC%2584%259C-%25EA%25B8%25B0%25EC%2588%25A0-%25ED%258A%25B8%25EB%25A0%258C%25EB%2593%259C%25EB%25B3%25B4%25EB%258B%25A4-%25EC%259C%25A0%25EC%25A0%2580%25EC%259D%2598-%25EB%258B%2588%25EC%25A6%2588%25EC%2597%2590-%25EC%25A7%2591%25EC%25A4%2591%25ED%2595%2598%25EB%259D%25BC-sijun-park-pvdtc/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DVbGJoSD6Rm?xmt=AQF0eljez16Qw0Pkql5JvUMQ_PcH5rzH2Pv7mGQxdEgPzg",
      "content": "https://www.threads.com/@home_dad_sol/post/DVbGJoSD6Rm?xmt=AQF0eljez16Qw0Pkql5JvUMQ_PcH5rzH2Pv7mGQxdEgPzg",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVbLT5aEpm1?hl=ko",
      "content": "https://www.threads.com/@han_lab_/post/DVbLT5aEpm1?hl=ko",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DVbHh7-kbZ_?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DVbHh7-kbZ_?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSmKMvuGr/",
      "content": "https://vt.tiktok.com/ZSmKMvuGr/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVatxs4kzXy?xmt=AQF0ZtgGnuSfhjxbBR3q7o96IFfYl8-iImgA-tOV8QWMtA",
      "content": "https://www.threads.com/@ai.profitwise/post/DVatxs4kzXy?xmt=AQF0ZtgGnuSfhjxbBR3q7o96IFfYl8-iImgA-tOV8QWMtA",
      "images": null
    },
    {
      "memberId": "2fc6400e-9268-81bf-b5b8-f405c3666c00",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1478312260203188225/youtube_pipeline_chart.png?ex=69a7f114&is=69a69f94&hm=0dd0e8e73daa8f76217385707ec97b37faa13523a291d544ad6e05677821de4e&",
      "content": "2주차 과제 제출: 유튜브 자동화 에이전트\n타겟고객에게 중요한 주제를 리서치하고 스크립트와 ppt를 만든다음, 블로그 글 등으로 변환까지 합니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1478312260203188225/youtube_pipeline_chart.png?ex=69a7f114&is=69a69f94&hm=0dd0e8e73daa8f76217385707ec97b37faa13523a291d544ad6e05677821de4e&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8028-8dbe-ef8246e90b85",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://biz-ai-start.lovable.app",
      "content": "강의 플랫폼 웹페이지\n\n1. \n- 로그인 구현 https://biz-ai-start.lovable.app \n- 주요 기능 : 어필리에이트 , 강의를 소개하면 소개받은 사람이 구매한 강의료의 10% 적립금 (추후 타 강의 결제에 사용 가능 / 5만원 이상 모이면 출금 가능)\n\n2. ERD : 파일첨부",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1478310543994523728/2026-03-03_5.36.44.png?ex=69a7ef7b&is=69a69dfb&hm=b354539ea7ddfe3386994c7ba23ea0a8dffda689cd6e03074aaaaf9649f29230&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1478310544363749426/2026-03-03_5.35.20.png?ex=69a7ef7b&is=69a69dfb&hm=bcae4d13d47b4f81916182792224380d18c03fe16e4c4ff4ac19f5f006e6e99e&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVaUzJdAF5u",
      "content": "https://www.threads.com/@makekim.kr/post/DVaUzJdAF5u",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/p/DVaYGgOCYYc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "content": "https://www.instagram.com/p/DVaYGgOCYYc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DVaI7mCE6fT?xmt=AQF03TXM408jw-_PwB40wRe-d6RNgGf0kOZ-ae8F3b9RT24ErCsQsZRjjxLqxAkyIsP4MX7U&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DVaI7mCE6fT?xmt=AQF03TXM408jw-_PwB40wRe-d6RNgGf0kOZ-ae8F3b9RT24ErCsQsZRjjxLqxAkyIsP4MX7U&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVaGS-mjzKH?xmt=AQF0nNe6S_yLT_1anv1-ZmV7bKJ7UOdE1OIUesg8_XHo4x8jv0hrqhZurW4vqWCaaUx5i5g&slof=1",
      "content": "https://www.threads.com/@slowwbuilder/post/DVaGS-mjzKH?xmt=AQF0nNe6S_yLT_1anv1-ZmV7bKJ7UOdE1OIUesg8_XHo4x8jv0hrqhZurW4vqWCaaUx5i5g&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@maker.evan/post/DVaFVsMj31w?xmt=AQF0GBvP_hjlSHGtyeFrLpXYf5yL20bIPfyStjyw3-lOkw",
      "content": "https://www.threads.com/@maker.evan/post/DVaFVsMj31w?xmt=AQF0GBvP_hjlSHGtyeFrLpXYf5yL20bIPfyStjyw3-lOkw",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://maily.so/ai.insider.club/posts/2nzn7dj4rp5",
      "content": "https://maily.so/ai.insider.club/posts/2nzn7dj4rp5",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8139-82c8-cb21321cba9c",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1478233694274846730/image.png?ex=69a7a7e8&is=69a65668&hm=8edb707220d588cdd7e4bf50a80dc00efb0dbdd92ede506d3a04d47c0a2ff86d&",
      "content": "콘텐츠 생성 에이전트입니다~!",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1478233694274846730/image.png?ex=69a7a7e8&is=69a65668&hm=8edb707220d588cdd7e4bf50a80dc00efb0dbdd92ede506d3a04d47c0a2ff86d&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1478233694983553054/unnamed.png?ex=69a7a7e9&is=69a65669&hm=e72aa375b46c86498edf0752609b39127f332f813fd565c85b38e98785c73e3e&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8028-8dbe-ef8246e90b85",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1478221609109159956/2026-03-03_11.43.53.png?ex=69a79ca7&is=69a64b27&hm=92b5cc7c143fb834160a51978e0ff426ce464cb2e348b05c55944cbcfb541885&",
      "content": "과제 추가된 부분 공유합니다~",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1478221609109159956/2026-03-03_11.43.53.png?ex=69a79ca7&is=69a64b27&hm=92b5cc7c143fb834160a51978e0ff426ce464cb2e348b05c55944cbcfb541885&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DVY4aSACGsS?xmt=AQF02cHb4bHQ1nV1lykNCEnxmnO-IF1q8LMdre9v2WRWJpDxcy6UEParsgfzSSkZG1gAgtc&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DVY4aSACGsS?xmt=AQF02cHb4bHQ1nV1lykNCEnxmnO-IF1q8LMdre9v2WRWJpDxcy6UEParsgfzSSkZG1gAgtc&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-03-03",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@stevejobboogtm/post/DVZFBS2gQZS",
      "content": "https://www.threads.com/@stevejobboogtm/post/DVZFBS2gQZS",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e2-99de-cbc33a4cde1d",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1478046986883043448/image.png?ex=69a6fa06&is=69a5a886&hm=61692ed1435bab1e3dff65e25a66173902df1278676bcc0a09c543e96b45ba6d&",
      "content": "2주차 과제 제출합니다.\n저도 캡처본 송부드립니다.\napi 제미나이 연결하였습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1478046986883043448/image.png?ex=69a6fa06&is=69a5a886&hm=61692ed1435bab1e3dff65e25a66173902df1278676bcc0a09c543e96b45ba6d&",
        "https://cdn.discordapp.com/attachments/1470029883391348777/1478046987369709802/image.png?ex=69a6fa06&is=69a5a886&hm=78553a12488cfcabeb7a036184f011dce84cb0becce048158d3f77c39ecd03c7&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81ff-9f12-c3b31a1345d3",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1478044406165667850/medical-ai-agency-orgchart.png?ex=69a6f79f&is=69a5a61f&hm=d86f40b140c0f2ae579a7e82ef4f1d2deac59c1c6f3a29f2fcf6a5f3ec018a96&",
      "content": "메디컬 AI 마케팅팀 에이전시입니다. 피부과 오픈 이벤트 이미지 생성만 먼저 해봤습니다. API 결제 및 디테일을 잡아가려고 합니다!",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1478044406165667850/medical-ai-agency-orgchart.png?ex=69a6f79f&is=69a5a61f&hm=d86f40b140c0f2ae579a7e82ef4f1d2deac59c1c6f3a29f2fcf6a5f3ec018a96&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1478044406589161545/open_event_card_v3.png?ex=69a6f79f&is=69a5a61f&hm=960c0b3c29c02755d7c80e06d221ebb50f3beec5892fe2755bc633bd1f1e900d&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DVYtWlJkoxx?xmt=AQF069CjwZjM3s5CwzUt0ZlioC7uydWvDiOK54_sysEE9FnJUNue7XipQpBi392r5jbU3sel&slof=1",
      "content": "https://www.threads.com/@swlbear/post/DVYtWlJkoxx?xmt=AQF069CjwZjM3s5CwzUt0ZlioC7uydWvDiOK54_sysEE9FnJUNue7XipQpBi392r5jbU3sel&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8028-8dbe-ef8246e90b85",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1478038957332762734/2026-03-02_11.38.09.png?ex=69a6f28c&is=69a5a10c&hm=ab04b705c7a3406d02d1c6f1b96dd07b3c0546dd04df0e378b644283ab64743e&",
      "content": "저도 중간에 클로드 작동이 안되어서 제출이 늦었습니다,,,ㅎ \n판매 랜딩페이지를 주면 학습하고 메타광고 소재를 제작하는 멀티에이전트입니다~",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1478038957332762734/2026-03-02_11.38.09.png?ex=69a6f28c&is=69a5a10c&hm=ab04b705c7a3406d02d1c6f1b96dd07b3c0546dd04df0e378b644283ab64743e&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8028-8dbe-ef8246e90b85",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1478038957332762734/2026-03-02_11.38.09.png?ex=69a6f28c&is=69a5a10c&hm=ab04b705c7a3406d02d1c6f1b96dd07b3c0546dd04df0e378b644283ab64743e&",
      "content": "저도 중간에 클로드 작동이 안되어서 제출이 늦었습니다,,,ㅎ",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1478038957332762734/2026-03-02_11.38.09.png?ex=69a6f28c&is=69a5a10c&hm=ab04b705c7a3406d02d1c6f1b96dd07b3c0546dd04df0e378b644283ab64743e&"
      ]
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVYrU_Hj5aQ?xmt=AQF0SBIl1EtKrcPXN8Wwl8h_wlyHNgeO-flcSv0OdoSAmA",
      "content": "https://www.threads.com/@ghoiibaad/post/DVYrU_Hj5aQ?xmt=AQF0SBIl1EtKrcPXN8Wwl8h_wlyHNgeO-flcSv0OdoSAmA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@stevejobboogtm/post/DVYl-eyAZCE?xmt=AQF0O_se8qj81gfBXaj1geA6MtBDVwgDOjT31QIQ0naLM9UiO0iNTxuSOeNK-jzcBSY0p8Gu&slof=1",
      "content": "https://www.threads.com/@stevejobboogtm/post/DVYl-eyAZCE?xmt=AQF0O_se8qj81gfBXaj1geA6MtBDVwgDOjT31QIQ0naLM9UiO0iNTxuSOeNK-jzcBSY0p8Gu&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DVYkiR9kXM0?xmt=AQF0dCcFP12AKYN2Xazgr2bBU6tWdT-L2N8EXVIiyajVvg",
      "content": "https://www.threads.com/@inner.builder/post/DVYkiR9kXM0?xmt=AQF0dCcFP12AKYN2Xazgr2bBU6tWdT-L2N8EXVIiyajVvg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DVYkEI9E5vS?xmt=AQF0oIrkto9Wex1mQaVbJLln_pnSwDgjXVtZQYwXTjgEaQ",
      "content": "https://www.threads.com/@jiyong.product/post/DVYkEI9E5vS?xmt=AQF0oIrkto9Wex1mQaVbJLln_pnSwDgjXVtZQYwXTjgEaQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DVYbETKj2zd?xmt=AQF0ejdouzUBXv2i7xxCpDAS2Y9ZoYPqovxzPkxXlws95g",
      "content": "https://www.threads.com/@home_dad_sol/post/DVYbETKj2zd?xmt=AQF0ejdouzUBXv2i7xxCpDAS2Y9ZoYPqovxzPkxXlws95g",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVYe_UmE8IB?xmt=AQF0_AFMrzdcQ5eGkzdCJiJrkdlr3wqphcfTLufiZc8qgg",
      "content": "https://www.threads.com/@ai.profitwise/post/DVYe_UmE8IB?xmt=AQF0_AFMrzdcQ5eGkzdCJiJrkdlr3wqphcfTLufiZc8qgg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8146-9d11-eed95d59dfb4",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1QWFnOnU-4pX2hA9Qb638skOV-IFZVtFl5Dtuj8I9mBs/edit?usp=sharing",
      "content": "과제 1. 연습용 랜딩페이지 설문지\nhttps://docs.google.com/document/d/1QWFnOnU-4pX2hA9Qb638skOV-IFZVtFl5Dtuj8I9mBs/edit?usp=sharing\n\n과제2. 실전 랜딩페이지\nhttps://toothsome-sprint-dc5.notion.site/BEAUTY2WORLDWIDE-Landing-Page-Draft-3177b5b7b04a809ea2eac82bab5c548b?source=copy_link\n\n과제3. 곧 계약 예정입니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSm3sQhhm/",
      "content": "https://vt.tiktok.com/ZSm3sQhhm/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVYcG59EuAn",
      "content": "https://www.threads.com/@makekim.kr/post/DVYcG59EuAn",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8146-9d11-eed95d59dfb4",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1QWFnOnU-4pX2hA9Qb638skOV-IFZVtFl5Dtuj8I9mBs/edit?usp=sharing",
      "content": "과제 1. 연습용 랜딩페이지 설문지\nhttps://docs.google.com/document/d/1QWFnOnU-4pX2hA9Qb638skOV-IFZVtFl5Dtuj8I9mBs/edit?usp=sharing\n\n과제2. 실전 랜딩페이지\nTBU\n\n과제3. 곧 계약 예정입니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVYZDjJkhv6",
      "content": "https://www.threads.com/@han_lab_/post/DVYZDjJkhv6",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DVYZxSHiByD?xmt=AQF0nQc3l2xjc-lGxJ6sXMyodkVtPCndflsNztCtJGU8q8-vXWJteeMNPWjw5ILccOdNG1eo&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DVYZxSHiByD?xmt=AQF0nQc3l2xjc-lGxJ6sXMyodkVtPCndflsNztCtJGU8q8-vXWJteeMNPWjw5ILccOdNG1eo&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e0-8b9a-ec79b7a9c8ff",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477999261495988327/2026-02-28_12.14.21.png?ex=69a6cd93&is=69a57c13&hm=bdc2e62cdd99f915f8788b9b89037e7ec48502e539bfbe25bb5c450b5cc6b590&",
      "content": "유튜브의 주요 지표를 자동으로 분석해주고 알고리즘 변동을 감지해 \n솔루션을 제안하는 등  매주 채널 분석보고서를 만들어주고\n kpi관리, 최신 트렌드를 분석해 아이템도 제안 해주는 유튜브 채널 분석 및 관리에 특화된 '자비스'라는 에이전트를 만들고 있습니다. \n설계도 만들고 실제 만드는 중인데 구글 API 연결에서 자꾸 오류가 나서\n아직 완성을 못했습니다. ㅠㅠ 일단 만든 것까지 공유합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477999261495988327/2026-02-28_12.14.21.png?ex=69a6cd93&is=69a57c13&hm=bdc2e62cdd99f915f8788b9b89037e7ec48502e539bfbe25bb5c450b5cc6b590&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477999261823008922/2026-02-27_10.37.59.png?ex=69a6cd93&is=69a57c13&hm=b303b229d6eef5d01476430679df664d2d6ff82bb52c5aa1bc5468fd453d5cf1&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477999262573793375/2026-02-27_10.37.49.png?ex=69a6cd94&is=69a57c14&hm=a390da296894c36c012344b0012def1a04c1a60b136ea882cda527abdc0120a2&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVYCxIWEmMw?xmt=AQF0fZK9_L4WxBamLXlot3q3wv33q87LRZQ3Ja09q8oyRw",
      "content": "https://www.threads.com/@slowwbuilder/post/DVYCxIWEmMw?xmt=AQF0fZK9_L4WxBamLXlot3q3wv33q87LRZQ3Ja09q8oyRw",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81a0-9bc2-ce3cd8b4cc76",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477942566191108269/Screenshot_2026-03-02_at_5.09.51_PM.png?ex=69a698c6&is=69a54746&hm=27823bb2b708cee245108338f7c5c8015c17515aab98e8607e47af71a9d5d01e&",
      "content": "강의에서 해주셨던 내용과 비슷하게 리서치 에이전트팀을 구성해봤고,\n1번 검색은 속도에 초점을 맞춰 haiku로 시작하여\n2번 결과를 트랜드 분석가 및 시장분석 전문가 에이전트가 병렬로 \n진행되도록 셋업했습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477942566191108269/Screenshot_2026-03-02_at_5.09.51_PM.png?ex=69a698c6&is=69a54746&hm=27823bb2b708cee245108338f7c5c8015c17515aab98e8607e47af71a9d5d01e&"
      ]
    },
    {
      "memberId": "2df6400e-9268-813e-8bd2-d50dcf0e78aa",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/12d9T1O4Z0BN6rWTKopXWnY7G6e-Ma2w0EneTaTl_pWI/edit?usp=sharing",
      "content": "과제 1.  연습용 랜딩페이지 설문지 https://docs.google.com/document/d/12d9T1O4Z0BN6rWTKopXWnY7G6e-Ma2w0EneTaTl_pWI/edit?usp=sharing\n\n과제2. 실전 랜딩페이지 -> 제품 촬영을 이번주에 진행해서 곧 업로드 예정입니다.  html 파일 업로드합니다.  \n\n과제3. 판매하고자 하는 것은 아직 촬영이 남아서 업로드를 못 하였으나, 본 제품 판매를 위하여  모객한 계정에서 어필리에이트 수익이 발생하여 인증 샷 올립니다!",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1477921693509881986/image.png?ex=69a68556&is=69a533d6&hm=52df0979b44b080f62580f209b62fa545a814a30c093f3770824fa1c09b0cc75&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dot.shef/post/DVX1oMZgcHi?hl=ko",
      "content": "https://www.threads.com/@dot.shef/post/DVX1oMZgcHi?hl=ko",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVXqc5ODz9G?xmt=AQF0jcJZ14rin9fu9Sh95GyiTS_TdqgtYUWBe7ThjLpO-g",
      "content": "https://www.threads.com/@dodo_list_/post/DVXqc5ODz9G?xmt=AQF0jcJZ14rin9fu9Sh95GyiTS_TdqgtYUWBe7ThjLpO-g",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8115-b45c-d6f367a7c18a",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477916096290885692/image.png?ex=69a6801f&is=69a52e9f&hm=da4e898ba42398e9fe02789d097f58e651bc3e02c92e548133cb7383069af96d&",
      "content": "롱폼->숏폼으로 변환하는 에이전트 만들어보고 있는데 마음에 들지않아서 계속 수정중입니다\n전에 조쉬님 영상 올려주셨을때 안하고 이제서야 만들어보는데 생각보다 마음에 들지 않네요 ㅎㅎ..\n많이 다듬어야 할듯합니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477916096290885692/image.png?ex=69a6801f&is=69a52e9f&hm=da4e898ba42398e9fe02789d097f58e651bc3e02c92e548133cb7383069af96d&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477916096861569149/image.png?ex=69a6801f&is=69a52e9f&hm=dd0f4d8c2d2bc1808a8280bf3b3782d22fddaa55528612bae746010bca4f834d&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81b6-8773-e4e735274728",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477886204006502450/image.png?ex=69a66448&is=69a512c8&hm=171e92cd598fbdab19283499156921ea2fb4d02c1f67de32fbac3ba4a06c70de&",
      "content": "강의에서 보여주신 예시와 동일하게 저도 전자책 에이전트팀 따라 만들어보았습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477886204006502450/image.png?ex=69a66448&is=69a512c8&hm=171e92cd598fbdab19283499156921ea2fb4d02c1f67de32fbac3ba4a06c70de&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@maker.evan/post/DVXRb5YD65T?xmt=AQF0ycTqlBhSHMPjlizzo7xpi01SqqKuBvhHnM-oCxxRWA",
      "content": "https://www.threads.com/@maker.evan/post/DVXRb5YD65T?xmt=AQF0ycTqlBhSHMPjlizzo7xpi01SqqKuBvhHnM-oCxxRWA",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://inscape.my/",
      "content": "2주차 과제 제출합니다!\n✅  과제1. 연습용 랜딩페이지 설문지\n\n✅ 과제2. 실전 랜딩페이지 카피라이팅 초안\nhttps://inscape.my/\n\n✅ 과제3. 100원 팔아오기 챌린지\nLapeed로 1건 판매하였습니다.\n(AI한복 아이템이 아니라. 기존 AI심리시각화로 판매)",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1477829292288118824/image.png?ex=69a62f48&is=69a4ddc8&hm=f5d2b27c23399d3036ccd1735745ba7f07e675b87df0d21a22448da6e2f8af06&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8114-b66c-c76e8e022b02",
      "date": "2026-03-08",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477822192149336064/plan.png?ex=69a628ab&is=69a4d72b&hm=348db51b0b192fa8f9641446ff48a2bd3838ec391aad0d09a3499562b86ff699&",
      "content": "늦었지만 너무 재미있네요 새로운 깨달음 감사합니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477822192149336064/plan.png?ex=69a628ab&is=69a4d72b&hm=348db51b0b192fa8f9641446ff48a2bd3838ec391aad0d09a3499562b86ff699&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477822193961271487/preview.png?ex=69a628ab&is=69a4d72b&hm=2cbb9fb981d5526f05405aabb3a29a297f57963c35f481f68fd33bcd406b2914&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8137-8941-c3b05bd3ce53",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477810917017391186/IMG_2466.jpg?ex=69a61e2b&is=69a4ccab&hm=eeac39085e13d06d6cf3b2e07341b2288c4e855aa3ec0f90eca97e68d8307c85&",
      "content": "회사 형태의 조직구성을 생각해 보았습니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477810917017391186/IMG_2466.jpg?ex=69a61e2b&is=69a4ccab&hm=eeac39085e13d06d6cf3b2e07341b2288c4e855aa3ec0f90eca97e68d8307c85&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8137-8941-c3b05bd3ce53",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://goal.sbschool.co.kr/",
      "content": "https://goal.sbschool.co.kr/\n\n로그인 기능이 붙어있습니다\n회원정보는 supabase 데이터베이스로 관리하고 있습니다",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://x.com/the_byeongjin/status/2028190090355175489?s=46",
      "content": "https://x.com/the_byeongjin/status/2028190090355175489?s=46",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-02",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/valueforyourbiz_data-doesnt-make-you-smart-it-makes-you-share-7433954379159920640-_Ptj?utm_source=share&utm_medium=member_ios&rcm=ACoAAC6L56oBcnSGNNosRJL25X2aGHLoxESQD-U",
      "content": "https://www.linkedin.com/posts/valueforyourbiz_data-doesnt-make-you-smart-it-makes-you-share-7433954379159920640-_Ptj?utm_source=share&utm_medium=member_ios&rcm=ACoAAC6L56oBcnSGNNosRJL25X2aGHLoxESQD-U",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-819d-93b5-da9757bcc9b7",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://k-friend-route.lovable.app",
      "content": "2주차 과제\n로그인 기능 추가\nhttps://k-friend-route.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1gSjJLtg1mGsbdmQRDmSf1zH4TAPP0yyBiYEbVaEFTUA/edit?usp=sharing",
      "content": "2주차 과제 제출합니다!\n✅  과제1. 연습용 랜딩페이지 설문지\nhttps://docs.google.com/document/d/1gSjJLtg1mGsbdmQRDmSf1zH4TAPP0yyBiYEbVaEFTUA/edit?usp=sharing\n\n✅ 과제2. 실전 랜딩페이지 카피라이팅 초안\nhttps://appsintosssprint.lovable.app\n\n✅ 과제3. 100원 팔아오기 챌린지\n-인터뷰 할 때 Boilerplate / 템플릿에 대한 구매 의향이 있었으나, 실제 구매까지는 이루어지지 않았습니다.\n  현재는 앱인토스 템플릿의 내용이 담긴 전자책을 리드마그넷으로 해서 실제 서비스에서 실구매까지 이루어지는 프로세스를 구축하고자 합니다",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-9cd6-d0632ca3771a",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477690658302066791/attendance-multi-agent-plan.png?ex=69a5ae2b&is=69a45cab&hm=4778c1788817e0b32a2344f8a9ec5c7fa84e7a6dcab47cf8fa6a563976211a29&",
      "content": "병원 전체 직원의 근태 상황을 수동으로 파악하여 Notion에 정리하여 보고서를 써주는데 시간이 상당히 걸리는 작업이라고 하여 근태 엑셀 파일만 다운로드하여 전달하면 Agent가 이를 정리해주는 것을 구축해보았습니다.  결과물은 개인정보상 첨부하진 않았으나 사소한 오류가 있을 듯 해서 한동안 교차검증이 필요해보입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477690658302066791/attendance-multi-agent-plan.png?ex=69a5ae2b&is=69a45cab&hm=4778c1788817e0b32a2344f8a9ec5c7fa84e7a6dcab47cf8fa6a563976211a29&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81b8-a720-e96e913c55d0",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1RafpOYJFGECWbQn-n3xZhvOubIskUtBG/edit?usp=sharing&ouid=102616468122427169582&rtpof=true&sd=true",
      "content": "세일즈 실전 2주차 과제 제출합니다\n\n과제 1 : 연습용 랜딩페이지 설문지 채워오기\nhttps://docs.google.com/document/d/1RafpOYJFGECWbQn-n3xZhvOubIskUtBG/edit?usp=sharing&ouid=102616468122427169582&rtpof=true&sd=true\n\n과제 2 : 실전 랜딩페이지 카피라이팅 초안\nhttps://asset-manager--nimowa03.replit.app/\n\n과제 3 :  100원 팔아오기 챌린지\n랜딩페이지는 레플릿으로 만들었고 아직 브랜드, 서비스에 대해서는 방황중입니다 ㅠㅠ\n아직 리드 상품을 만들고 있어 판매는 하지 못하였지만 나이스 페이먼츠 결제 서비스 연동해서\n제대로 랜딩페이지 구축후 SNS 채널로 홍보 예정입니다!\nhttps://github.com/nicepayments/nicepay-manual/blob/main/common/preparations.md",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8159-b3d8-e1116d0b8b19",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://www.threads.com/@dalgom.bami/post/DUVhPRREn3i?xmt=AQF0gxVGSsl8KuULAcB_-bjIgFD1Zs9jpHr_gdAC8oZxXQ)에서",
      "content": "제가 스레드에서 팔로우하는 [dalgom.bami 님의 앱 개발 아이디어](https://www.threads.com/@dalgom.bami/post/DUVhPRREn3i?xmt=AQF0gxVGSsl8KuULAcB_-bjIgFD1Zs9jpHr_gdAC8oZxXQ)에서 영감을 받아, 해당 아이디어를 에이전트로 구축해보고자 했습니다.\n\n<개괄>\n1. 앱 아이디어를 얻을 때는 어플 순위 사이트를 참고\n2. 연속성이 없는 단순 기능 앱을 만든다\n3. 순위권에 있는 유료 앱을 무료로 만들고, 대신 기능 1회 수행시마다 전면광고를 띄운다\n4. 출시 후 바로 애드몹으로 유료 광고를 돌린다\n5. 트래픽을 보며 이후 방향성 결정\n\n(결과물은 아직 작업중입니다.)",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477682431950589992/image.png?ex=69a5a681&is=69a45501&hm=da9ea36b953fd125456cb51db5f714cd1df29e4aa4bed74432afc96a27074eae&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470028096370511893/1477681964617040063/image.png?ex=69a5a612&is=69a45492&hm=741753db6cf61f8a0f1da85060ccbc35beab01a847965e6998284072371441be&",
      "content": "[박진양/수려맘/6기] 빌더 기초 과제",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477681964617040063/image.png?ex=69a5a612&is=69a45492&hm=741753db6cf61f8a0f1da85060ccbc35beab01a847965e6998284072371441be&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81be-aee5-f8cd794f2b99",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477681601428328660/2026-03-01_11.58.29.png?ex=69a5a5bb&is=69a4543b&hm=50bc2774f646c7d21032149bfa22432195209f9bbce5bd5af1f591c508e96cee&",
      "content": "2주차 과제 제출 : 롱폼 아티클 글쓰기 에이전트 (산출물 추가 예정)",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477681601428328660/2026-03-01_11.58.29.png?ex=69a5a5bb&is=69a4543b&hm=50bc2774f646c7d21032149bfa22432195209f9bbce5bd5af1f591c508e96cee&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://memory-bridge-ai.lovable.app/",
      "content": "https://memory-bridge-ai.lovable.app/ 로그인 기능, 데이터베이스 추가",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVWJGltEnZA",
      "content": "https://www.threads.com/@makekim.kr/post/DVWJGltEnZA",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DVWI5Cmj6-n?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DVWI5Cmj6-n?hl=ko",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://yourpartnercoach.lovable.app",
      "content": "2주차 과제 제출합니다!\n\n주소: https://yourpartnercoach.lovable.app\n1. 로그인 기능 및 API(제미나이) 구현 \n2. 주요 기능: 해외 거주 한인(주재원 중심, 북미지역)을 위한 정체성 회복을 위한 커뮤니티 플랫폼\n3. 데이터테이블 구조 첨부",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477678956726583411/7aa47330754f480e.png?ex=69a5a345&is=69a451c5&hm=5f67b4a7c997e2d2f414312fb0e9db6bb0134892c538aea987ab8b6382597a99&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81ba-85ef-e17d1232093b",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470028096370511893/1477678956726583411/7aa47330754f480e.png?ex=69a5a345&is=69a451c5&hm=5f67b4a7c997e2d2f414312fb0e9db6bb0134892c538aea987ab8b6382597a99&",
      "content": "2주차 과제 제출합니다!\n\n주소: yourpartnercoach.lovable.app\n1. 로그인 기능 및 API(제미나이) 구현 \n2. 주요 기능: 해외 거주 한인(주재원 중심, 북미지역)을 위한 정체성 회복을 위한 커뮤니티 플랫폼\n3. 데이터테이블 구조 첨부",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477678956726583411/7aa47330754f480e.png?ex=69a5a345&is=69a451c5&hm=5f67b4a7c997e2d2f414312fb0e9db6bb0134892c538aea987ab8b6382597a99&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81a2-9270-ebe22111bc3f",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477678163361267933/1.png?ex=69a5a288&is=69a45108&hm=d54b1da6cb9dd482be727d1b1d684429e7b58cada2a0065ec2893ba7f5116824&",
      "content": "강의 실습내용 따라서 만들었습니다^^",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477678163361267933/1.png?ex=69a5a288&is=69a45108&hm=d54b1da6cb9dd482be727d1b1d684429e7b58cada2a0065ec2893ba7f5116824&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477678163642548437/1.png?ex=69a5a288&is=69a45108&hm=d703abf841cbedfe2638cf2fe667e83f79df43f710306ae387cc072dedbbad02&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477678163990548570/2.png?ex=69a5a288&is=69a45108&hm=834a21596738c8b44a829e4f719ed32024bc80a7e13990a254d82b5e59fecad4&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477678164300791921/3.png?ex=69a5a288&is=69a45108&hm=68c09251aebb85ec5c287287de79d1a6eb5cab15b6b4991115ea97d9869f8d27&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477678164653375498/4.png?ex=69a5a288&is=69a45108&hm=4e7005456e9d1060675c7447d3ac4234c4f69ba6540c7a46bc2de4c41f9965c2&"
      ]
    },
    {
      "memberId": "2df6400e-9268-819d-88e9-d4779a5f1f87",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477676294551638046/image.png?ex=69a5a0ca&is=69a44f4a&hm=fbc689fdb9adb7badb21ff5e0416cf78a13d061a9dacce29241d5a1a814276e4&",
      "content": "아직 새학기 시작 전이라 구글클래스룸이 생성이 안 되어서 결과물은 첨부하지 못했습니다. 학기 시작하면 바로 테스트 해볼 생각입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477676294551638046/image.png?ex=69a5a0ca&is=69a44f4a&hm=fbc689fdb9adb7badb21ff5e0416cf78a13d061a9dacce29241d5a1a814276e4&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477676294924664923/image.png?ex=69a5a0ca&is=69a44f4a&hm=c02f896e08ac87594bfcadf7d4aed7c811fdb0c44ec055727536c92ac31203e0&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477675576268427284/asc.png?ex=69a5a01f&is=69a44e9f&hm=295cf74ec088daabd66527c361072878b18d74c7df5b9311c8c1257d178aa23f&",
      "content": "2주차 과제 제출\n\n**블로그 글쓰기 자동화 에이전트 시스템\n이 시스템은 무엇인가요\nClaude Code의 에이전트(Subagent)와 스킬(Skill)을 조합하여, \"블로그 글 써줘\"라는 한마디로 주제 탐색부터 글 작성, 검토, 이미지 생성까지 전 과정을 자동화하는 멀티 에이전트 시스템입니다.\n사용자가 하는 일은 세 가지뿐입니다. 주제를 정하고, 초안을 확인하고, 최종 확정합니다. 나머지는 에이전트들이 알아서 처리합니다.\n왜 이런 구조인가요\n블로그 글 하나를 쓰려면 실제로는 여러 단계가 필요합니다. 플랫폼 특성 파악, 주제 기획, 자료 조사, 글 작성, 맞춤법 검토, 논리 검토, 이미지 삽입. 이걸 하나의 거대한 프롬프트로 처리하면 컨텍스트가 오염되고, 각 단계의 품질이 떨어집니다.\n이 시스템은 각 단계를 독립된 에이전트나 스킬로 분리했습니다. 각자 자기 역할에만 집중하고, 데이터는 파일 시스템을 통해 주고받습니다. 오케스트레이터가 전체 흐름을 제어하면서 사용자와 소통합니다.\n핵심 구조: 에이전트 4개 + 스킬 5개\n시스템은 크게 두 종류의 구성요소로 이루어져 있습니다.\n에이전트(Agent) — 독립적인 컨텍스트 윈도우를 가진 전문 AI 어시스턴트입니다. 사용자와 대화하거나, 복잡한 판단이 필요한 작업을 담당합니다.\n스킬(Skill) — 특정 작업을 수행하는 재사용 가능한 지침서입니다. 에이전트의 컨텍스트 안에서 로드되어 실행됩니다. 별도 컨텍스트 없이, 호출한 에이전트가 스킬의 지침을 따라 작업합니다.**\n\n네이버 블로그에 asc에 대한 글을 만들어줘 라는 명령과 추가 정보 제공으로 자동으로 만들어진 결과까지 첨부합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477675576268427284/asc.png?ex=69a5a01f&is=69a44e9f&hm=295cf74ec088daabd66527c361072878b18d74c7df5b9311c8c1257d178aa23f&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477672451394502857/blog-writer-overview_1.md?ex=69a59d36&is=69a44bb6&hm=04dd207dbccfc2b29343c811096372195f6f1a923f1ee50170b63b4e13afdd58&",
      "content": "네이버 블로그에 asc에 대한 글을 만들어줘라는 프롬프트와 추가 정보를 입력을 해서 나온 결과까지 첨부합니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477674667153035264/index.html?ex=69a59f46&is=69a44dc6&hm=32a16016b443007db677b7884749056edbd658fb5f5b407c896134218f8f6e1b&",
      "content": "[이종원/수리아/4기] AI 에이전트 과제",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477672451394502857/blog-writer-overview_1.md?ex=69a59d36&is=69a44bb6&hm=04dd207dbccfc2b29343c811096372195f6f1a923f1ee50170b63b4e13afdd58&",
      "content": "[이종원/수리아/4기] AI 에이전트 과제",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81f8-88dc-e980ca38527d",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477671680628363284/blog-writer.zip?ex=69a59c7e&is=69a44afe&hm=0f8d9f2b11b2ef3ff74afd0018b31cdcace4eb1db9c5f4cab741b3d740d8e2df&",
      "content": "2주차 과제 제출\n\n블로그 글쓰기 자동화 에이전트 시스템\n이 시스템은 무엇인가요\nClaude Code의 에이전트(Subagent)와 스킬(Skill)을 조합하여, \"블로그 글 써줘\"라는 한마디로 주제 탐색부터 글 작성, 검토, 이미지 생성까지 전 과정을 자동화하는 멀티 에이전트 시스템입니다.\n사용자가 하는 일은 세 가지뿐입니다. 주제를 정하고, 초안을 확인하고, 최종 확정합니다. 나머지는 에이전트들이 알아서 처리합니다.\n왜 이런 구조인가요\n블로그 글 하나를 쓰려면 실제로는 여러 단계가 필요합니다. 플랫폼 특성 파악, 주제 기획, 자료 조사, 글 작성, 맞춤법 검토, 논리 검토, 이미지 삽입. 이걸 하나의 거대한 프롬프트로 처리하면 컨텍스트가 오염되고, 각 단계의 품질이 떨어집니다.\n이 시스템은 각 단계를 독립된 에이전트나 스킬로 분리했습니다. 각자 자기 역할에만 집중하고, 데이터는 파일 시스템을 통해 주고받습니다. 오케스트레이터가 전체 흐름을 제어하면서 사용자와 소통합니다.\n핵심 구조: 에이전트 4개 + 스킬 5개\n시스템은 크게 두 종류의 구성요소로 이루어져 있습니다.\n에이전트(Agent) — 독립적인 컨텍스트 윈도우를 가진 전문 AI 어시스턴트입니다. 사용자와 대화하거나, 복잡한 판단이 필요한 작업을 담당합니다.\n스킬(Skill) — 특정 작업을 수행하는 재사용 가능한 지침서입니다. 에이전트의 컨텍스트 안에서 로드되어 실행됩니다. 별도 컨텍스트 없이, 호출한 에이전트가 스킬의 지침을 따라 작업합니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8195-a4a2-f00355c27e81",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://dataretriever.vercel.app/",
      "content": "2주차 과제 제출\nhttps://dataretriever.vercel.app/\napi: gemini 연동",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8195-a4a2-f00355c27e81",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://dataretriever.vercel.app/l",
      "content": "2주차 과제 제출\nhttps://dataretriever.vercel.app/l\napi: gemini 연동",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8195-a4a2-f00355c27e81",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477664916285558844/image.png?ex=69a59631&is=69a444b1&hm=7c7d229959f01aebb2a726621f5fd5a6f3212ed8f7cbb8619676a6cbd2c013ef&",
      "content": "2주차 과제 제출\n\n리서치부터 뉴스레터 작성, 카드뉴스등으로 제작하는 구조로 만들었습니다. 리서치와 이미지 제작은 서브 에이전트를 병렬로 사용, 전체적 구조는 시퀄션로 만들었습니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477664916285558844/image.png?ex=69a59631&is=69a444b1&hm=7c7d229959f01aebb2a726621f5fd5a6f3212ed8f7cbb8619676a6cbd2c013ef&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477664916638011392/slide-01.png?ex=69a59631&is=69a444b1&hm=4c75af5f85d231c8dfa1ae8b5798f4c807d6221d2c0e56547637fec387d1d8ec&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477664917120352368/slide-02.png?ex=69a59631&is=69a444b1&hm=24585ca9ae516454d39603845991beab28b306b21be1cbadbeaf73932eb09b31&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477664917497712660/slide-03.png?ex=69a59632&is=69a444b2&hm=8534c821a6790c75997d4ee78139abadcabc9d86809cf4a165247bc72c815913&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477664917870874767/slide-04.png?ex=69a59632&is=69a444b2&hm=91da8ef15bfa84b7f82998727de935ecc1c134956545e8e4fd5fd3cb01aa6559&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477664918273785938/slide-05.png?ex=69a59632&is=69a444b2&hm=303de6357640e5a20c9f151c58e72c9246d627782883f17b00f44a5f575ad3fa&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477664918722449610/slide-06.png?ex=69a59632&is=69a444b2&hm=426945eeb7d2ade939744272e375e51b90703c27a4ed9db01c59ee83e3f1b8ee&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477664919099805919/slide-07.png?ex=69a59632&is=69a444b2&hm=a17f15e456b2a39dde1a1ef4015f0c9a6ff4b5f1f78b2661f65d274a71dd87fa&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477664919557243162/slide-08.png?ex=69a59632&is=69a444b2&hm=fd3584b6b16d4d0988d6d1d3d495192e326e121bdf1a8605ef4572010c8790ef&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477664735360188548/image.png?ex=69a59606&is=69a44486&hm=344224eb4d1af47bf8224fb60acb67dd6bbcdcdd9baba5ad36b83a51acfb06b9&",
      "content": "2주차 과제\n\nsns 콘텐츠 작성을 위한 멀티에이전트 팀 입니다.\n\n개인적으로 claude opus 글 스타일이 마음에 안들어서 gemini cli를 같이 붙여서 고도화 해볼 생각입니다.\n\n---\n일기를 바탕으로 작성된 쓰레드글\n\n  \"안과 안가.\"\n\n  윤슬이 눈 검진날이었다. 안 간다고 버텼다.\n\n  막상 데려갔더니 번호표가 21번이었다. 대기실은 꽉 차 있었다.\n  밖에 나갔다 오자고 했더니 고개를 저었다.\n  전광판을 올려다보며 \"몇 번이야? 이제 몇 번이야?\"를 반복했다.\n  피노키오를 펼치고, 의사 선생님 진료하는 걸 구경했다.\n\n  2시간을 버틴 건 윤슬이였고, 다른 날 올까를 먼저 생각한 건 나였다.\n\n  #육아 #아빠육아 #한뼘의용기 #안과 #기다림",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477664735360188548/image.png?ex=69a59606&is=69a44486&hm=344224eb4d1af47bf8224fb60acb67dd6bbcdcdd9baba5ad36b83a51acfb06b9&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DVWBVXuCFc1?xmt=AQF0Pr8FiJNPQ3r2-SkVaEQrnx5q84o4x5TIwLnI0JjaEDnuxp4GkgguqXfSykSfhLKg-9uz&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DVWBVXuCFc1?xmt=AQF0Pr8FiJNPQ3r2-SkVaEQrnx5q84o4x5TIwLnI0JjaEDnuxp4GkgguqXfSykSfhLKg-9uz&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8150-8a39-c0c9053c64a5",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://pixel-perfect-clone-0045.lovable.app/",
      "content": "2주차 과제 제출합니다.\n\n1) 로그인 기능 구현 & 주요기능 탑재 : https://pixel-perfect-clone-0045.lovable.app/\n주요기능 : 챗봇, 운동 루틴 상세 피드백\n2) ERD (Supabase 데이터 테이블 캡쳐본) \n파일 첨부",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477662979863609555/ERD.png?ex=69a59464&is=69a442e4&hm=64fd5e047cc27cb6d57542b7a6bb204e6926bd3a4b6d9c7552dacd16ff7a15cf&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81b8-a720-e96e913c55d0",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477662864478310470/2026-03-01_9.40.27.png?ex=69a59448&is=69a442c8&hm=67a24ae6cfef7172480f8fca7e660c97d006779f7e2ec090b9ae0fc4648b4bc9&",
      "content": "2주차 과제 제출합니다.\n\n앱인토스 미니앱 개발을 위한 5인 멀티 에이전트 팀입니다.\n이번에 새롭게 출시한 Agent Teams로 구축해 보았습니다.\n\n프로젝트에 관계없이 적용 가능하며, \ntmux로 동시에 띄우고 각자 전용 스킬로 병렬 작업합니다.\n\n머메이드로 만든 멀티에이전트 도식화와\n실제 tmux로 띄운 분할 창과 실행 사진 첨부합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477662864478310470/2026-03-01_9.40.27.png?ex=69a59448&is=69a442c8&hm=67a24ae6cfef7172480f8fca7e660c97d006779f7e2ec090b9ae0fc4648b4bc9&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477662864964714598/2026-03-01_10.30.36.png?ex=69a59448&is=69a442c8&hm=3f2c9afa5681b73b9bd97eb2b8aed4fb34f33619e983a96d72442c30486949e4&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81bb-a643-e437acbb4e68",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://www.instagram.com/p/DVWAd6jkilh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "content": "2주차 과제 제출입니다.\n\n인스타툰 제작 시 주제만 넣으면 스토리 생성 -> 선택 -> 8컷 인스타툰 생성 하는 과정으로 만들어 봤습니다.\n\nhttps://www.instagram.com/p/DVWAd6jkilh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477662629832163431/2026-03-01_10.37.57.png?ex=69a59410&is=69a44290&hm=ca22bf89208b54d10e5a8c4dbf8973649eeaa27f8e0bae9440bea649aac8651e&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81e6-873e-c5a131700198",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477660473947328706/2026-03-01-qa-report.md?ex=69a5920e&is=69a4408e&hm=a931c90f820d66cd17ac214de0a448d6a34d39bd555d282fcc23375eb098c8a1&",
      "content": "2주차 과제 제출\n\n클로드 코드로 개발할때, hooks를 사용해서 정기적으로 QA 멀티에이전트가 실행되고, 버그는 바로 수정하도록 하였습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477660474366496808/2026-03-01_10.33.28.png?ex=69a5920e&is=69a4408e&hm=cbea6a9fd9a1a27f0e86ba3f99f8da3e635d4ebf8f4311deed080b4ff6e6df51&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81a8-b99f-d5dd37834c11",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477658472052035634/image.png?ex=69a59031&is=69a43eb1&hm=1f7b24d6d958c0142219b7d56d1bcd199b19222f43c06722687f4ece778373ba&",
      "content": "2주차 과제 제출\n\n강의 의뢰가 들어왔을 때, 주제/시간/대상 등을 입력하면 최신 트렌드와 사례를 조사해서 강의 준비 기초 자료를 생성하는 과정을 만들어 봤습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477658472052035634/image.png?ex=69a59031&is=69a43eb1&hm=1f7b24d6d958c0142219b7d56d1bcd199b19222f43c06722687f4ece778373ba&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477658472337244170/image.png?ex=69a59031&is=69a43eb1&hm=e42d46aafc2ab72f127daf7a96387b71a184926fd75527a2ccbb106881fa8194&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81ca-b12f-cc1cb33d59bf",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470029883391348777/1477656714261037191/076.png?ex=69a58e8e&is=69a43d0e&hm=710e0e981d198f6b1e8ef265bc4ff31094903e90bbb5e923c1fe95bbabc80613&",
      "content": "제미나이 api 를 활용해서 만들었습니다. 아직 도메인은 없어서 스샷으로 첨부합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470029883391348777/1477656714261037191/076.png?ex=69a58e8e&is=69a43d0e&hm=710e0e981d198f6b1e8ef265bc4ff31094903e90bbb5e923c1fe95bbabc80613&"
      ]
    },
    {
      "memberId": "2df6400e-9268-812f-a8a5-efa051d245ef",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477656673031164058/38cf167998bdacf7.pdf?ex=69a58e84&is=69a43d04&hm=455aba2fe7fa98e067b2d90fc80cb504b6e627bb11cbc5d741334377d6951947&",
      "content": "2주차 과제 제출\n\n강의 스크립트와 ppt 자동화 했습니다. 좀 더 디자인 보강 하고 멀티 에이전트 만들었습니다.\n\n1. 계획도(첨부파일)\n\n2. 결과물 : 첨부했습니다",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8109-bbe4-ea21d95278a3",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://marryos.lovable.app",
      "content": "2주차 과제\n\n토큰이 부족해서 api와 로그인기능 우선해서 구현했습니다.\n핵심 기능은 추후 추가할 예정입니다!\n\nhttps://marryos.lovable.app",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477654788295495690/KakaoTalk_Photo_2026-03-01-22-10-39.png?ex=69a58cc3&is=69a43b43&hm=d4ae855f9560e925edd4224d262b151f0a3333d42bab0df137fedc118af67a79&"
      ]
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://vaulbo.tistory.com/entry/%EC%83%9D%EA%B0%81%EC%9D%84-%EB%B0%94%EA%BE%B8%EB%8A%94-%EA%B2%8C-%EC%95%84%EB%8B%88%EB%9D%BC-%EC%83%9D%EA%B0%81%EC%9D%84-%EB%B3%B4%EB%8A%94-%EA%B2%83%EC%9D%B4-%ED%98%84%EC%8B%A4%EC%9D%84-%EB%B0%94%EA%BE%BC%EB%8B%A4",
      "content": "https://vaulbo.tistory.com/entry/%EC%83%9D%EA%B0%81%EC%9D%84-%EB%B0%94%EA%BE%B8%EB%8A%94-%EA%B2%8C-%EC%95%84%EB%8B%88%EB%9D%BC-%EC%83%9D%EA%B0%81%EC%9D%84-%EB%B3%B4%EB%8A%94-%EA%B2%83%EC%9D%B4-%ED%98%84%EC%8B%A4%EC%9D%84-%EB%B0%94%EA%BE%BC%EB%8B%A4",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8109-bbe4-ea21d95278a3",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://marryos.lovable.app",
      "content": "2주차 과제\n토큰이 부족해서 api와 로그인기능 우선해서 구현했습니다.\n\nhttps://marryos.lovable.app",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-8701-d2dfa8c77dd2",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://mind-planet.pages.dev/",
      "content": "2주차 과제 제출합니다. \n\nhttps://mind-planet.pages.dev/\n랜딩 페이지 전체 구조 및 워딩 완료. 이미지 추가 필요\n\nhttps://mind-planet.pages.dev/test\n바이럴을 위한 심리 테스트도 같이 배포해 보았습니다.\n\n100원 팔아오기 챌린지 \n-인터뷰 할 때 2000원대에 구매 의향 있음을 확인하였습니다. 실제로 구매 부탁까지는 못 했습니다 ㅠㅠ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://minion.toss.im/FyOtM1om",
      "content": "2주차 과제 제출\nApi : openai api 및 openai sdk 연동\n\nhttps://minion.toss.im/FyOtM1om",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVV4aQ6k9gp?xmt=AQF0znDZqQ8HskxOHOMmf50JyI7uEB5ZpaaB5Oi4HFdq5Q",
      "content": "https://www.threads.com/@ai.profitwise/post/DVV4aQ6k9gp?xmt=AQF0znDZqQ8HskxOHOMmf50JyI7uEB5ZpaaB5Oi4HFdq5Q",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-bd98-e20c158c9e9a",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477646389113786378/Screenshot_1.png?ex=69a584f0&is=69a43370&hm=43e55df29c7a9bae71b232cf60b49a90abdfc9d3c94cfa470741752a3eba9c8f&",
      "content": "[2주차 과제 제출]\n블로그 컨텐츠 생성 에이전트입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477646389113786378/Screenshot_1.png?ex=69a584f0&is=69a43370&hm=43e55df29c7a9bae71b232cf60b49a90abdfc9d3c94cfa470741752a3eba9c8f&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81ed-a523-e46ee7043bc8",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://ai-nine-ebon.vercel.app/",
      "content": "2주차 과제 제출\napi : gemini연동\nhttps://ai-nine-ebon.vercel.app/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81b0-8550-de5e956fa37c",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477638406568673571/2026-02-28_233354.png?ex=69a57d81&is=69a42c01&hm=7214d4f4b52858e58af39b5e1506a38e1147e9a071bf8d49adeb0da11aa14b75&",
      "content": "2주차 과제 제출합니다. \n뉴스레터, SNS 자동화 에이전트 입니다.\n이미지는 만족스럽지 못해서 뉴스레터 생성본만 공유 합니다. 조금더 스킬 고도화를 해봐야 하겠습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477638406568673571/2026-02-28_233354.png?ex=69a57d81&is=69a42c01&hm=7214d4f4b52858e58af39b5e1506a38e1147e9a071bf8d49adeb0da11aa14b75&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8172-994c-f2f75ab413b1",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://phrase-fix.lovable.app",
      "content": "2주차 과제 제출합니다.\n서비스를 갑자기 변경하였습니다. \n연인, 부부, 가족 대화 싸움 내용 분석해줍니다.\n\n1. 로그인 기능 구현 https://phrase-fix.lovable.app\n2. 비 로그인시 맛보기 서비스 이용 가능, 로그인시 풀 리포트 보기 가능\n3. DB 연동 완료",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477637526561882235/image.png?ex=69a57caf&is=69a42b2f&hm=2dca78f5269fc8ab3ebbc47c81cbf2b6e8558a73d70fb4eff7f838d5d7bb3a75&"
      ]
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://aligned-brand-flow.lovable.app/",
      "content": "2주차 과제 제출합니다.\n1. 로그인 기능 : https://aligned-brand-flow.lovable.app/\n2. 랜딩페이지 데이터 연계 필요",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-819b-99af-dc7716a5f96f",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477633437924986901/image.png?ex=69a578e0&is=69a42760&hm=a574b27ee0c4a7e82ca3dafecd560fd6aacb9506d84e0b7debcc5a0b91b05794&",
      "content": "2주차 과제 제출합니다. \n브랜드의 SNS 계정 게시글 자동기획,생성,업로드 수행하는 멀티에이전트 입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477633437924986901/image.png?ex=69a578e0&is=69a42760&hm=a574b27ee0c4a7e82ca3dafecd560fd6aacb9506d84e0b7debcc5a0b91b05794&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477633438466183188/image.png?ex=69a578e0&is=69a42760&hm=64e499f235fecf956b032b15d2b3c1c10fdbbf3d9e2fe817edf1fa08936801ba&"
      ]
    },
    {
      "memberId": "2df6400e-9268-818e-bcfd-cb87b9a53831",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477633149293826269/2026-03-01_8.42.13.png?ex=69a5789b&is=69a4271b&hm=528dc17d6f5e63e424aefdf71c4d15a19c73ce6d4a974f939d8400bbe429abe3&",
      "content": "[2주차 과제 제출]\n기존의 상세페이지를 다른 국가별로 로컬라이제이션 해주는 현지화 팀입니다.\n> 결과물은 기존 영문으로 되어있던 상세페이지 일부를 일본 버전으로 바꾼 결과입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477633149293826269/2026-03-01_8.42.13.png?ex=69a5789b&is=69a4271b&hm=528dc17d6f5e63e424aefdf71c4d15a19c73ce6d4a974f939d8400bbe429abe3&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477633149864247377/thumb02.jpg?ex=69a5789c&is=69a4271c&hm=1b27846c3518834ecf3f5b5e888bd040a5e7a68eeeb2cff2da0c2d7a156f8881&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477633150762094697/thumb02.png?ex=69a5789c&is=69a4271c&hm=01f883adda15510c030393fc6d96dfa4b36ac072573ac15a69687da0cb792eb0&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477633151160422531/thumb06.jpg?ex=69a5789c&is=69a4271c&hm=0f80db190b86ab28c62b1b8a3ac0c76e88e3bcd6af1326b39d105c90ecd038fc&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477633151567401114/thumb06.png?ex=69a5789c&is=69a4271c&hm=b3c7519f94bc083d07dccd7ca005ebebd67cceb9af81f7b07297c30653cbc017&"
      ]
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://routine-chef-buddy.lovable.app/",
      "content": "1. 로그인 기능 구현\n* https://routine-chef-buddy.lovable.app/\n2. DB",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477632986554826894/image.png?ex=69a57875&is=69a426f5&hm=873042ab85651eccca44a75949989ea2a0c76c66433fed594a6ca930b60760ba&"
      ]
    },
    {
      "memberId": "2df6400e-9268-818f-bd5a-de00ad0aebd9",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477628760789483551/image.png?ex=69a57485&is=69a42305&hm=fd43f7ec7e3d6c8321cd6f7c165a311b8b86dd651229617c69a83e3a366a4660&",
      "content": "[2주차 과제 제출]\n과제 제출합니다.\n스레드와 뉴스레터에 업로드할 1인기업가 뉴스레터 리서치 및 작성 에이전트입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477628760789483551/image.png?ex=69a57485&is=69a42305&hm=fd43f7ec7e3d6c8321cd6f7c165a311b8b86dd651229617c69a83e3a366a4660&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477628761116512346/image.png?ex=69a57485&is=69a42305&hm=b994100dec85635c8409da9d6707faad3e9db3be1398373424d63fe2d48ebec1&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/10-ercEESPSPw5DxN1PHrEOG_yhQHRIjOBDu_9NHlKfk/edit?usp=sharing",
      "content": "2주차 과제 제출합니다.\n\n✅ 과제1. 연습용 랜딩페이지 설문지\nhttps://docs.google.com/document/d/10-ercEESPSPw5DxN1PHrEOG_yhQHRIjOBDu_9NHlKfk/edit?usp=sharing\n\n✅ 과제2. 실전 랜딩페이지 카피라이팅 초안\nhttps://ai.studio/apps/1be7d766-a793-4dc4-8d0d-46da99c17f97?fullscreenApplet=true\n현재 판매중 사이트 : https://aiebrain.lovable.app/\n\n✅ 과제3. 100원 팔아오기 챌린지\n첨부 이미지",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1477628572008185888/3dc2ecebb43ca1ee.jpg?ex=69a57458&is=69a422d8&hm=70b54198d45ad971141f0efc48af5ff6cc84ef3b67a4978b320a50f6a201bf8c&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/10-ercEESPSPw5DxN1PHrEOG_yhQHRIjOBDu_9NHlKfk/edit?usp=sharing",
      "content": "2주차 과제 제출합니다.\n\n✅ 과제1. 연습용 랜딩페이지 설문지\nhttps://docs.google.com/document/d/10-ercEESPSPw5DxN1PHrEOG_yhQHRIjOBDu_9NHlKfk/edit?usp=sharing\n\n✅ 과제2. 실전 랜딩페이지 카피라이팅 초안\nhttps://ai.studio/apps/1be7d766-a793-4dc4-8d0d-46da99c17f97?fullscreenApplet=true\n\n✅ 과제3. 100원 팔아오기 챌린지\n첨부 이미지",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1477628572008185888/3dc2ecebb43ca1ee.jpg?ex=69a57458&is=69a422d8&hm=70b54198d45ad971141f0efc48af5ff6cc84ef3b67a4978b320a50f6a201bf8c&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81d6-9901-ce6520aefbf2",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477626089345126503/2026-03-01_201716.jpg?ex=69a57208&is=69a42088&hm=b10c912fdfcd76f1d7bd63a05fca1388e26c93c7f2d6b1d30c7356fb012b40de&",
      "content": "2주차 과제 제출합니다! 랜딩페이지 제작 에이전트입니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477626089345126503/2026-03-01_201716.jpg?ex=69a57208&is=69a42088&hm=b10c912fdfcd76f1d7bd63a05fca1388e26c93c7f2d6b1d30c7356fb012b40de&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477626090414538894/2026-03-01_201732.jpg?ex=69a57208&is=69a42088&hm=40ec1452c672e8d1f5b9e7740b43631eccef4a212835d50a11f535350b2dae1a&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477626091748462702/screencapture-localhost-3000-2026-03-01-20_15_18.png?ex=69a57209&is=69a42089&hm=917467eaab5a9eed296dd61147c023805ad129f972286a1143295d64c0344c0b&"
      ]
    },
    {
      "memberId": "2df6400e-9268-817f-8006-cc6b2816473d",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://health-checkup-parsing.vercel.app/",
      "content": "1. 로그인 기능 구현 https://health-checkup-parsing.vercel.app/\n- 비로그인시 서비스 이용 가능, 로그인/회원가입 시 데이터 저장 가능\n2. db \n- 랜딩페이지 데이터 연계 필요",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477624652548280372/image.png?ex=69a570b2&is=69a41f32&hm=1e3247a2d8bd54cd102fd76218a3bf5ed6ba96a2004bd1d1bf390e8d77d72093&"
      ]
    },
    {
      "memberId": "2df6400e-9268-811b-966b-dd8299203368",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477625424132571197/image.png?ex=69a5716a&is=69a41fea&hm=b8e8d214e44c2dd898105da8507f9197c45785cc1146b6ede818f6689294327b&",
      "content": "[2주차 과제 제출]\n과제 제출합니다. \n인테리어 트렌드를 리서치하고, 인스타그램 캐러셀 콘텐츠를 자동 생성합니다.\n결과물은 html 파일 첨부합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477625424132571197/image.png?ex=69a5716a&is=69a41fea&hm=b8e8d214e44c2dd898105da8507f9197c45785cc1146b6ede818f6689294327b&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477625424631697428/image.png?ex=69a5716a&is=69a41fea&hm=e1888b69e9c6b2b88918939b197dce2e9fc1740e7ca80ee386ea62966ff44428&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477625425168695471/image.png?ex=69a5716a&is=69a41fea&hm=f67b4861ab3ff75d2b4016ae79d89068ab9e10ff55e92273a8b142e7ed296df2&"
      ]
    },
    {
      "memberId": "2df6400e-9268-817f-8006-cc6b2816473d",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470028096370511893/1477624652548280372/image.png?ex=69a570b2&is=69a41f32&hm=1e3247a2d8bd54cd102fd76218a3bf5ed6ba96a2004bd1d1bf390e8d77d72093&",
      "content": "1. 로그인 기능 구현\n- 비로그인시 서비스 이용 가능, 로그인/회원가입 시 데이터 저장 가능\n2. db \n- 랜딩페이지 데이터 연계 필요",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477624652548280372/image.png?ex=69a570b2&is=69a41f32&hm=1e3247a2d8bd54cd102fd76218a3bf5ed6ba96a2004bd1d1bf390e8d77d72093&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-818c-b026-cd92d926f7b9",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://ai-care-call-web.vercel.app/",
      "content": "[2주차 과제]\n\n서비스: 소리AI - 노인분들에게 AI가 정기적으로 전화를 걸어주고 보호자가 리포트를 받아볼 수 있는 서비스\nhttps://ai-care-call-web.vercel.app/",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477624224075087963/image.png?ex=69a5704b&is=69a41ecb&hm=c6dad63243dcb701d9724e704bbc6e4744eb12b363282c3a6919726810daa9f7&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81e6-873e-c5a131700198",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470028096370511893/1477618133471858698/2026-03-01_7.43.04.png?ex=69a56a9f&is=69a4191f&hm=316e1588926d3026609e4e98304c4d9c1a5102de89f18582913cc04d1a9a31c3&",
      "content": "1. 앱에 로그인 기능을 추가하였습니다. 링크 대신 로그인, 로그아웃, 주요기능 화면 이미지를 업로드 합니다.\n2. 데이터베이스 테이블",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477618133471858698/2026-03-01_7.43.04.png?ex=69a56a9f&is=69a4191f&hm=316e1588926d3026609e4e98304c4d9c1a5102de89f18582913cc04d1a9a31c3&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477618134344138792/IMG_1157.png?ex=69a56aa0&is=69a41920&hm=0df1da0acffd556a42f82609538be534f4f4675845155d56cb29d867fd36dd51&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477618135015231509/IMG_1156.png?ex=69a56aa0&is=69a41920&hm=80960d38c85e2e771ace3d5f2db753ea38bb6938cd55cbef48ffa0026d395b22&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477618135396909109/unnamed.png?ex=69a56aa0&is=69a41920&hm=9c78fa46f9f79415c14d7f36784f7ffb77666c65172e24cba4a5a581ac9302a5&"
      ]
    },
    {
      "memberId": "2df6400e-9268-80e6-a976-f62af164bfe3",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477617934514782300/image.png?ex=69a56a70&is=69a418f0&hm=2ec3f96adb5c54178c0b09d30c837bf17f530a6c8c28d706d1bda66ffd7edf68&",
      "content": "2주차 과제 인증합니다\n광고 소재 경쟁사 광고 분석 후 자동 생성합니다",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477617934514782300/image.png?ex=69a56a70&is=69a418f0&hm=2ec3f96adb5c54178c0b09d30c837bf17f530a6c8c28d706d1bda66ffd7edf68&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477617934934347848/image.png?ex=69a56a70&is=69a418f0&hm=49ffa25599962f249e3f75abde9644e69410678ec1d60318e0d3b11e85085659&"
      ]
    },
    {
      "memberId": "3006400e-9268-8121-ad2d-f0c76cb20143",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1tLiAGW9NsPZ8UMn15P9Fe_BVWCNYPetBORxOL-PftZM/edit?usp=sharing",
      "content": "세일즈 실전 2주차 과제 제출합니다\n\n과제1. 연습용 랜딩페이지 설문지 채워오기\nhttps://docs.google.com/document/d/1tLiAGW9NsPZ8UMn15P9Fe_BVWCNYPetBORxOL-PftZM/edit?usp=sharing\n\n과제2. 실전 랜딩페이지 카피라이팅 (초안) 제작하기\nhttps://wild-paddleboat-b61.notion.site/315a30b728c6801da258f6425549fa69\n\n과제3. 100원 팔아오기 챌린지\n이미지 참조 부탁 드립니다!",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1477615309878853792/IMG_0278.jpg?ex=69a567fe&is=69a4167e&hm=0d29066f8cd8192cee1c6347c3f97c358b3fd89758ac37d8963d999bc7914fd3&",
        "https://cdn.discordapp.com/attachments/1470030785615761593/1477615310201688125/image.png?ex=69a567fe&is=69a4167e&hm=3c86fbd014151f66093ba4845a805a243953d6ff1332239afbf818072eb8898a&",
        "https://cdn.discordapp.com/attachments/1470030785615761593/1477615310537490555/image.png?ex=69a567fe&is=69a4167e&hm=9f438d05bb48db6566118bdda69c35043ad0a582e5ef59e19454b5a33bd9e786&"
      ]
    },
    {
      "memberId": "3006400e-9268-8121-ad2d-f0c76cb20143",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1tLiAGW9NsPZ8UMn15P9Fe_BVWCNYPetBORxOL-PftZM/edit?usp=sharing",
      "content": "세일즈 실전 2주차 과제 제출합니다\n\n과제1. 연습용 랜딩페이지 설문지 채워오기\nhttps://docs.google.com/document/d/1tLiAGW9NsPZ8UMn15P9Fe_BVWCNYPetBORxOL-PftZM/edit?usp=sharing\n\n과제2. 실전 랜딩페이지 카피라이팅 (초안) 제작하기\nhttps://wild-paddleboat-b61.notion.site/315a30b728c6801da258f6425549fa69\n\n과제3. 100원 팔아오기 챌린지\n이미지 참조 부탁 드립니다!",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ed-afee-c1b5690af250",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://homepage-weld-beta.vercel.app/",
      "content": "과제1. 연습용 랜딩페이지 설문지\n\n과제2. 실전 랜딩페이지\nhttps://homepage-weld-beta.vercel.app/\n\n과제3. 용역 특성상 고객 전환이 장기간 소요되어 판매하지 못하였습니다",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8112-b8b5-ee2f1ed40c98",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://fd01123d.teacher-helper-9tr.pages.dev/",
      "content": "2주차과제 제출입니다.\n1. 로그인기능 및 주요기능 추가 : https://fd01123d.teacher-helper-9tr.pages.dev/\n2. 데이터베이스 테이블",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477611903810408458/supabase-schema-fkttiwbfmdqknfilyzlu.png?ex=69a564d2&is=69a41352&hm=0a07de7d93e612218ea3fbd037d62558d3874a8c2214511920e79795fb771271&"
      ]
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://docs.google.com/document/d/1dIjmoVs3DZy-Z9Kb9bj2n-LBANdaFktl7-THB6Vuz3g/edit?usp=sharing",
      "content": "도메인 만들기 전이어서, 발행 전의 3주차 뉴스레터 입니다.\n\nhttps://docs.google.com/document/d/1dIjmoVs3DZy-Z9Kb9bj2n-LBANdaFktl7-THB6Vuz3g/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1_NCk6GRBCN9clnSATmeW1_rnrIFcrSBhR-zcPLi7sco/edit?usp=sharing",
      "content": "2주차 과제 제출합니다.\n\n과제1. 연습용 랜딩페이지 설문지\nhttps://docs.google.com/document/d/1_NCk6GRBCN9clnSATmeW1_rnrIFcrSBhR-zcPLi7sco/edit?usp=sharing\n\n과제2. 실전 랜딩페이지 카피라이팅 초안 \nhttps://aistudio.google.com/apps/9d\n\n과제3. 100원 팔아오기 챌린지\n아직 홍보를 진행하지 못한 상황이라 인터뷰를 진행해주신 분께 1,000원을 판매하였습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-818c-b026-cd92d926f7b9",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477609666983891085/image.png?ex=69a562bd&is=69a4113d&hm=5da7039f11ec5278c5e217af4370ce3a09942efe14266a4f92a60f3afbdfed44&",
      "content": "[2주차 과제 제출]\n\n주제: 간단한 아이디어를 입력하면 개발에 필요한 여러개의 문서들을 만들어 줍니다.\n\n멀티에이전트 아키택처\n```\n/idea-to-docs\n       │\n       ▼\n [Phase 1: 아이디어 인터뷰]\n  Claude가 자유롭게 질문하며 아이디어 구체화\n  → 구조화된 브리프 작성 후 사용자 확인\n       │\n       ▼\n [Phase 2: 문서 생성]\n  outputs/{timestamp}/ 폴더 생성\n       │\n       ├── 병렬: 1.비즈니스 분석 + 2.리스크 분석\n       │              │  (각자 파일 저장)\n       │         3. MVP 스코핑 (파일 저장)\n       │              │\n       │          4. PRD 작성 (파일 저장)\n       │              │\n       │    병렬: 5.유저 스토리 + 6.와이어프레임\n       │              │  (각자 파일 저장)\n       │          7. 기술 스펙 (파일 저장)\n       │              │\n       │          8. QA 시나리오 (파일 저장)\n       │\n       ▼\n  완료 시 생성된 파일 목록 출력\n```\n\n예시\n```\n❯ /idea-to-docs 핸드폰 사용하기 어려운 노인이나 어른들이 유튜브 링크나\n웹사이트 링크를 넣으면 ai가 자동으로 분류를 해서 나중에 쉽게 볼 수 있는\n서비스 만들고 싶어. 일단 모바일 웹으로 할게.\n```\n\n결과물\n```\n└── outputs\n    └── 20260301_175908\n        ├── 01_비즈니스분석.md\n        ├── 02_리스크분석.md\n        ├── 03_MVP스코핑.md\n        ├── 04_PRD.md\n        ├── 05_유저스토리.md\n        ├── 06_와이어프레임.md\n        ├── 07_기술스펙.md\n        └── 08_QA시나리오.md\n```",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477609666983891085/image.png?ex=69a562bd&is=69a4113d&hm=5da7039f11ec5278c5e217af4370ce3a09942efe14266a4f92a60f3afbdfed44&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477609667906502797/image.png?ex=69a562bd&is=69a4113d&hm=e3ca5b2549752d3fedd4e28d96658c78c06911ade871ef0b0e2ff54bc26f2f18&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81c7-a487-f94ece8a83e8",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477598741082144778/Prompt_Mermaid_Chart.png?ex=69a55890&is=69a40710&hm=6320798010100efe85f01f3fda6b92acd551101717816d816701d6f3015a12d7&",
      "content": "2주차 미션 제출합니다.\n\nPrompt Generator 고도화 작업 중에 있습니다.\n\n도식화 이미지 첨부합니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477598741082144778/Prompt_Mermaid_Chart.png?ex=69a55890&is=69a40710&hm=6320798010100efe85f01f3fda6b92acd551101717816d816701d6f3015a12d7&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://guestshots.vercel.app/",
      "content": "2주차 과제 제출 \n- 웹앱 링크: https://guestshots.vercel.app/\n- API: 소셜 로그인 (Supabase OAuth - 이메일, 카카오, Google) / 아직 도메인 구입 전이라 연동은 안했습니다",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-80e6-a976-f62af164bfe3",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://webtoon-pi.vercel.app/",
      "content": "빌드 트랙(심화) 2주차 과제 제출합니다\nAPI : \n1. GEMINI_API : 스토리 생성, 이미지 생성\n2. KIE_SUNO_API : 음악생성\n\n웹 링크 : https://webtoon-pi.vercel.app/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-819b-99af-dc7716a5f96f",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://tinful.lovable.app",
      "content": "2주차 과제 \n1. 로그인과 핵심기능 추가 https://tinful.lovable.app\n2. 데이터베이스 테이블",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477586412923523079/image.png?ex=69a54d15&is=69a3fb95&hm=d95a7e5074f8126c8465af24327009f4b9d1a86938368eb0eaf5e13ef87a26df&"
      ]
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://glamslow.com/",
      "content": "2주차 과제 - 실버 인지게임, 리드 확보     \n     \nhttps://glamslow.com/                    \n                                                            \n  AI 기반 뇌건강 플랫폼 GlamSlow는 시니어를 대상으로 한 인지  \n  게임과 뇌건강 검사를 통해 건강기능식품 카운셀러의 리드      \n  확보를 지원하는 B2B 서비스입니다.                           \n                                                              \n  - 기억력·계산력·집중력 등 6대 인지 영역 게임 및 검사 제공   \n  - 검사 결과 기반 AI 코치가 맞춤 뇌건강 루틴 및 제품 추천    \n  - 카운셀러 전용 대시보드로 고객 인지 점수 추이 모니터링     \n  - 하단 메뉴 '상담연결' 탭으로 담당 카운셀러에게 즉시 전화   \n  연결\n  - 초대 링크·공개 프로필 페이지로 신규 고객 유입 경로 확보\n\n  시니어가 게임을 즐기는 사이 카운셀러는 데이터 기반의 신뢰\n  있는 상담으로 자연스럽게 리드를 전환합니다.",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://glamslow.com/",
      "content": "2주차 과제 - 실버 인지게임, 리드 확보     \nwww.glamslow.com           \nhttps://glamslow.com/                    \n                                                            \n  AI 기반 뇌건강 플랫폼 GlamSlow는 시니어를 대상으로 한 인지  \n  게임과 뇌건강 검사를 통해 건강기능식품 카운셀러의 리드      \n  확보를 지원하는 B2B 서비스입니다.                           \n                                                              \n  - 기억력·계산력·집중력 등 6대 인지 영역 게임 및 검사 제공   \n  - 검사 결과 기반 AI 코치가 맞춤 뇌건강 루틴 및 제품 추천    \n  - 카운셀러 전용 대시보드로 고객 인지 점수 추이 모니터링     \n  - 하단 메뉴 '상담연결' 탭으로 담당 카운셀러에게 즉시 전화   \n  연결\n  - 초대 링크·공개 프로필 페이지로 신규 고객 유입 경로 확보\n\n  시니어가 게임을 즐기는 사이 카운셀러는 데이터 기반의 신뢰\n  있는 상담으로 자연스럽게 리드를 전환합니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8107-915c-df625d9e364f",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477579763966152804/image.png?ex=69a546e3&is=69a3f563&hm=b251d791dc57c5cf2c764edd1f89ef22d85133449d419857e136a421d22042b4&",
      "content": "1. 제목 : 포럼 및 강의 내용을 분석하고, 조직의 전략과의 연결성을 분석\n2. 에이전트 실행 순서 : 첨부 이미지 참조\n3. 멀티 에이전트 실행 특징 : Wave1~4를 지정해 멀티에이전트로 순차적으로 처리 하되, 각 Wave 안에서 별도의 팀원을 구성하여 Agent Teams로 병렬 처리",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477579763966152804/image.png?ex=69a546e3&is=69a3f563&hm=b251d791dc57c5cf2c764edd1f89ef22d85133449d419857e136a421d22042b4&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477579764347830465/image.png?ex=69a546e3&is=69a3f563&hm=8bbbbd377eb080e8755e1169a5ffd097147202015448b6439e0d5689f20f680c&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8180-92da-ca2d7cccaec1",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1AxKsz7FZq9WJPODWbwKIOn27Imcbf8wKsmsLGoWPduE/edit?usp=sharing",
      "content": "[ 2주차 과제 ]\n\n글목은 책을 읽고, 자기 언어로 쓰고, 소그룹에서 깊이 나누는 커뮤니티 프로그램입니다. 혼자 읽으면 휘발되던 경험을, 6명 내외의 작은 모임 안에서 인풋과 아웃풋의 순환으로 바꾸어 줍니다. 빠르게 많이 읽는 것보다, 천천히 깊어지는 것을 택한 사람들이 모이는 곳입니다. \n\n✅ 과제1. 연습용 랜딩페이지 설문지\nhttps://docs.google.com/document/d/1AxKsz7FZq9WJPODWbwKIOn27Imcbf8wKsmsLGoWPduE/edit?usp=sharing\n\n✅ 과제2. 실전 랜딩페이지 카피라이팅 초안\n버전1) https://www.notion.so/v1-3167b238405280afbbb3cb46ec8271dd?source=copy_link\n버전2) https://www.notion.so/v2-3167b2384052804ebe1fc64d8808c282?source=copy_link\n(버전1의 경우에는 IT 프로덕트나 솔루션향 제품에 더 잘 맞는 것 같아서 버전2로 다시 작성해보았습니다.)\n\n✅ 과제3. 100원 팔아오기 챌린지\n아직 홍보를 진행하지 못한 상황이라 인터뷰를 진행해주신 분께 0기 4900원을 판매하였습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1477568603136987217/IMG_1392.jpg?ex=69a53c7e&is=69a3eafe&hm=0ed006bdeceff6e6f7ce8914c433d3c70358efbcfc9797f148ed8c3ac0b23213&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8128-a649-c35d601c95a0",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477568340418629662/image.png?ex=69a53c40&is=69a3eac0&hm=1711e368a5ff7fee95d210980039cb55a558649e87a61961c5fc6d92bdd03236&",
      "content": "에이전트 과제 제출합니다.\n\n경제 숏애니 에이전시팀을 에이전트 및 스킬로 시도중입니다.\n짧은 경제 애니메이션을 영상으로 만들고 있는데, 테스트중이라 완성은 못했습니다.\n\n경제 관련 주제 인풋-씬 생성-텍스트 생성-영상 자동화까지 시도하고 있습니다.\n스토리 기획팀 에이전트-비쥬얼 제작팀 스킬-애니메이션과 영상팀 스킬을 사용하면서 테스트 중입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477568340418629662/image.png?ex=69a53c40&is=69a3eac0&hm=1711e368a5ff7fee95d210980039cb55a558649e87a61961c5fc6d92bdd03236&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477568340846444617/scene_01.png?ex=69a53c40&is=69a3eac0&hm=bad688c27e6205bcd01233560cf9e92af32d9a9c7037781eb5ed5bd2142d569f&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477568341253161062/scene_02.png?ex=69a53c40&is=69a3eac0&hm=3761976492971eb4b1308811cc094edbb0ed206fe3d72f7b0331ef559ae1f4e5&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477568341798555824/scene_03.png?ex=69a53c40&is=69a3eac0&hm=523d201dc9b20b94918d616c6dc578ddd55ff694376a65c762db886d8c3ba7d4&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477568342125707324/scene_04.png?ex=69a53c40&is=69a3eac0&hm=304974dc88aea0e80bfe26339a5aa66ef5fa9dd95f6e460779a74459fbe11cfe&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477568342410788955/scene_05.png?ex=69a53c40&is=69a3eac0&hm=c9b2776a793dc794ce5d6a7610e56d1274cbca391389d6f5dcd17d5832f966c0&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8180-92da-ca2d7cccaec1",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1AxKsz7FZq9WJPODWbwKIOn27Imcbf8wKsmsLGoWPduE/edit?usp=sharing",
      "content": "[ 2주차 과제 ]\n\n글목은 책을 읽고, 자기 언어로 쓰고, 소그룹에서 깊이 나누는 커뮤니티 프로그램입니다. 혼자 읽으면 휘발되던 경험을, 6명 내외의 작은 모임 안에서 인풋과 아웃풋의 순환으로 바꾸어 줍니다. 빠르게 많이 읽는 것보다, 천천히 깊어지는 것을 택한 사람들이 모이는 곳입니다. \n\n✅ 과제1. 연습용 랜딩페이지 설문지\nhttps://docs.google.com/document/d/1AxKsz7FZq9WJPODWbwKIOn27Imcbf8wKsmsLGoWPduE/edit?usp=sharing\n\n✅ 과제2. 실전 랜딩페이지 카피라이팅 초안\n버전1)",
      "images": null
    },
    {
      "memberId": "3016400e-9268-8139-b447-fcbb968d8bf7",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://ninety-day-cxo-proof.lovable.app/",
      "content": "과제 링크 : https://ninety-day-cxo-proof.lovable.app/\n\n1. 로그인 기능 추가\n2. 핵심 기능 API 추가(제미나이 챗봇)\n3. DB 구조 사진 첨부",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477566937792905329/image.png?ex=69a53af1&is=69a3e971&hm=643145c080be295eeb671ed4006e31beeb9dba895afe91418063f2de33a3ed19&"
      ]
    },
    {
      "memberId": "2fe6400e-9268-8143-b246-e53c29e5f2f9",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477557300427227147/diagram_orgchart.png?ex=69a531f8&is=69a3e078&hm=9feafd3a82f82058cafe8276d6049ddfd2d56af2f0a7d7336924acb8d9a7d30f&",
      "content": "- 제목: PPT 자동 생성 멀티 에이전트 시스템            \n  - 목적: 유튜브·PDF·PPT·문서·URL 등 다양한 소스를 AI로 분석해 사내      \n  교육·온보딩용 PPT(.pptx)를 자동 제작                                   \n  - 사용법: 소스 입력 → 리서치·시나리오·스타일·제작·수정 5단계 에이전트  \n  순차 실행 → 단계별 검토·승인 → .pptx 완성                              \n  - 스타일: 교육형(분당 1.7슬라이드) / 크리에이티브형(분당 1.2슬라이드)  \n  선택\n  - 출력: python-pptx로 16:9 와이드스크린 .pptx 직접 생성",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477557300427227147/diagram_orgchart.png?ex=69a531f8&is=69a3e078&hm=9feafd3a82f82058cafe8276d6049ddfd2d56af2f0a7d7336924acb8d9a7d30f&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477557301367017613/diagram_pipeline.png?ex=69a531f8&is=69a3e078&hm=4e5c732caed2adb6259fbaa22372781bccc674523c5ecb6d53e7d19a7d1980de&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81a1-b9a1-da8bcdf7dbbb",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://bobbobbob.lovable.app/",
      "content": "과제 링크 : https://bobbobbob.lovable.app/\n\n1. 로그인 기능 추가\n2. 핵심 기능 API (네이버 쇼핑 검색) 추가\n3. DB 구조 사진 첨부",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477553850272579655/IMG_5735.png?ex=69a52ec1&is=69a3dd41&hm=22027ca8cb16da8259cd81c471863776651d6123ef4f6808f86d10bc9ef8fc6c&"
      ]
    },
    {
      "memberId": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://rebirthcoaching.tistory.com/entry/%EC%9D%B8%ED%94%8C%EB%A3%A8%EC%96%B8%EC%84%9C%EC%B2%98%EB%9F%BC%EA%B8%80%EC%93%B0%EA%B8%B0-2026-AI-%ED%85%9C%ED%94%8C%EB%A6%BF%EC%9C%BC%EB%A1%9C%EB%81%9D",
      "content": "https://rebirthcoaching.tistory.com/entry/%EC%9D%B8%ED%94%8C%EB%A3%A8%EC%96%B8%EC%84%9C%EC%B2%98%EB%9F%BC%EA%B8%80%EC%93%B0%EA%B8%B0-2026-AI-%ED%85%9C%ED%94%8C%EB%A6%BF%EC%9C%BC%EB%A1%9C%EB%81%9D",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://whimsical.com/text-rpg-subagent-Et1ij1HjXfau79q1TDMMFF",
      "content": "https://whimsical.com/text-rpg-subagent-Et1ij1HjXfau79q1TDMMFF\n오케스트레이션 구성해서 텍스트 기반 게임의 세계관 및 시나리오 부분을 작성했습니다.\n아직은 테스트중이라 조금 더 연구가 필요해 보입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477491784316878940/image.png?ex=69a4f4f3&is=69a3a373&hm=1d5bb5db631a1a0842d774f41afc9cc97132407250212f1d79e43a65ea8bf083&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477491784757022770/image.png?ex=69a4f4f3&is=69a3a373&hm=de798af7b9af14cbec1033e153518b03ff7c19e30e348199d3ab5491f5b403f5&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://maily.so/jake/posts/vpzl8v80rk9",
      "content": "https://maily.so/jake/posts/vpzl8v80rk9",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8197-b9e2-f86b8440fc47",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1v6noqav5EWSDUfIv8PIDcxw6TuQNLFmxFPzNtubzC1M/edit?tab=t.0",
      "content": "2주차 과제 제출합니다!\n\n저는 내향적인 직장인을 위한 전자책 <내향인을 위한 에너지 누수 점검하기>를 100원에 판매하는 것을 기반으로 과제를 진행했습니다. \n\n평소 에너지 관리에 어려움을 겪는 내향인분들이 자신의 소모 패턴을 점검하고 회복할 수 있도록 구성한 콘텐츠입니다.\n\n✅ 과제1. 연습용 랜딩페이지 설문지\nhttps://docs.google.com/document/d/1v6noqav5EWSDUfIv8PIDcxw6TuQNLFmxFPzNtubzC1M/edit?tab=t.0\n\n타겟 고객의 문제와 해결 흐름을 정리하면서 USP가 더 선명해지는 느낌이었습니다.\n\n✅ 과제2. 실전 랜딩페이지 카피라이팅 초안\nhttps://www.latpeed.com/products/HXhy_\n\n✅ 과제3. 100원 팔아오기 챌린지\n총 6명 구매, 600원 판매 완료!\n100원짜리지만 실제 결제까지 이어지는 경험이 꽤 인상적이었습니다. 가격보다 '팔아본다'는 행위 자체가 큰 공부가 되었습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470030785615761593/1477470497989066802/image.png?ex=69a4e120&is=69a38fa0&hm=f6a6582a78013553097da9118dabd6fe15732e20bca463fc518de3b8d7d25db3&"
      ]
    },
    {
      "memberId": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@aron_aiconbia/post/DVUmnlokgDX?xmt=AQF0GeYxZlg1TSfQnOtIUnCTA2lsX_DDvEycDVzGEvcPOA",
      "content": "https://www.threads.com/@aron_aiconbia/post/DVUmnlokgDX?xmt=AQF0GeYxZlg1TSfQnOtIUnCTA2lsX_DDvEycDVzGEvcPOA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://blog.naver.com/teri_home/224199963139",
      "content": "https://blog.naver.com/teri_home/224199963139",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-814f-b0d4-c563a8c55273",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://kiosk-pjt.vercel.app",
      "content": "2주차 과제 링크: https://kiosk-pjt.vercel.app\n1. 로그인 기능 추가 → 점주 상대 로그인 기능 추가. 아이디별 매장명, 메뉴 등 개별관리 가능\n2. 핵심기능 및 API 추가 → 핵심기능인 음성인식은 1주차부터 탑재된 상태, 해당 기능은 Claude API를 통해 작동\n3. 나의 DB 테이블 구조",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477415699424215282/image.png?ex=69a4ae17&is=69a35c97&hm=7b4ee6576203fba327c838834023b06a027f76e980ff750f6b50f63595c6ea77&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-81ca-b12f-cc1cb33d59bf",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477379412164087858/image.png?ex=69a48c4c&is=69a33acc&hm=dcf29765aa36f6d6c7c23d6cd8a3491779e62465cc39d41c0a5e626e552474f6&",
      "content": "네이버카페 바이럴 마케팅 팀 입니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477379412164087858/image.png?ex=69a48c4c&is=69a33acc&hm=dcf29765aa36f6d6c7c23d6cd8a3491779e62465cc39d41c0a5e626e552474f6&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477379412704890982/test_3.png?ex=69a48c4c&is=69a33acc&hm=4b304c24eb7ad560d6af3e963dd94e91100d77d2fc187f8488993861263144f7&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8185-b93b-e48e330e682b",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://whimsical.com/VKyQsuSVGbZ1MWXm5vxgEX",
      "content": "Claude Code 멀티에이전트로 세무소식지 자동화한 후기\n\n세무사사무소 월간 소식지를 Claude Code 에이전트 5팀 병렬 구조로 자동 생성합니다. \"3월 세무소식지 만들어줘\" 한 마디면 끝.\n\n- 오케스트레이터(Opus) 가 월별 라우팅 규칙으로 팀을 분기 (신고월 → 신고안내팀 / 비신고월 → 컨설팅팀)\n- 3개 팀 병렬 실행: 세무일지(이미지 OCR+웹서칭) + 신고이슈(국세청 크롤링) + 세무뉴스(최신 개정사항) → 각각 JSON 산출\n- 디자인팀(Sonnet) 이 로고 Base64 삽입 + 브랜드 스타일 HTML 생성 → Edge headless로 PDF, python-docx로 DOCX 동시 출력\n- 에이전트 5개 .claude/agents/, 스킬 1개 .claude/skills/, 라우팅 규칙 5개로 12개월 전체 커버\n\n1.  계획도 https://whimsical.com/VKyQsuSVGbZ1MWXm5vxgEX\n2. 결과물 첨부파일 참고",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81ca-9eb7-cdeedff433d2",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://speak-quick-listen.lovable.app",
      "content": "2주차 과제\n1. 로그인과 핵심기능 추가: https://speak-quick-listen.lovable.app\n2. 나의 데이터베이스 테이블",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477330167390277844/2026-03-01_12.37.42.png?ex=69a45e6f&is=69a30cef&hm=10e21d376fc363f57955f2a19caa4ef28e95a36cfd2994ddeda834f699bb090b&"
      ]
    },
    {
      "memberId": "2df6400e-9268-8187-8ee7-f0f795165475",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://study-sparker.lovable.app/)",
      "content": "2주차 과제 \n1. 로그인 기능 추가  (https://study-sparker.lovable.app/)\n2. DB 테이블 캡쳐본",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477304283346112704/image.png?ex=69a44654&is=69a2f4d4&hm=aa37c809d699c8aca4f038d41b6b9b836587a42280ad1058ea21026e6be49902&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477304284222717962/image.png?ex=69a44654&is=69a2f4d4&hm=59af876cd179beb783bd59e1bcf1b20cee11de5270f2633bece0afa14bfb449f&"
      ]
    },
    {
      "memberId": "2df6400e-9268-81e2-99de-cbc33a4cde1d",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1477291115123048498/image.png?ex=69a43a10&is=69a2e890&hm=dbc4e53afbb2a6bc5d29e7df09ded52211455c546b2ae3ef746bdc96b6b7cef7&",
      "content": "2주차 과제를 제출합니다.\n[노동, 안전, HR 자동 분석 시스템]\n\n기업의 노동 관련 자문사항을 할루시네이션을 최소화하면서 판례, 학술, 실무 관점에서 답변할 수 있는 멀티에이전트를 만들었습니다.\n(큰일입니다...곧 제 일이...)\n\n1) 법령, 판례 팩트체커\n2) 학술리서치\n3) 실무 솔루션 설계자\n4) 통합 품질 관리자\n\n서브 에이전트들에게 성과중심 직무분석의 프로세스 개념을 적용해서 개인별 업무 성과 목표, 관리 지표 개념을 함께 적용했습니다.\n\n1. 계획도(첨부파일)\n\n2. 결과물 : 스킬을 활용해서 최근 기업들이 가장 많이 묻는 저성과자 관련 사항에 대한 보고서를 받았습니다.",
      "images": [
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477291115123048498/image.png?ex=69a43a10&is=69a2e890&hm=dbc4e53afbb2a6bc5d29e7df09ded52211455c546b2ae3ef746bdc96b6b7cef7&",
        "https://cdn.discordapp.com/attachments/1470031821134631004/1477291115483889867/image.png?ex=69a43a10&is=69a2e890&hm=7c7d4ed49c7c6ccc909b214cf805cad5aacad900dc8c6a81e94b920b6540e5f9&"
      ]
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-28",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVTWvyrksbH?xmt=AQF0di9irY8vdjJWfRoWzkEEAx7M7WTUFaogYRV0c_INeRDR5pETl8SwxbuvsmxsjrduGNQx&slof=1",
      "content": "https://www.threads.com/@makekim.kr/post/DVTWvyrksbH?xmt=AQF0di9irY8vdjJWfRoWzkEEAx7M7WTUFaogYRV0c_INeRDR5pETl8SwxbuvsmxsjrduGNQx&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-02-28",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVTMaN5j9xD?xmt=AQF0eN1CMGN7xtldy0I8VlOYgBnVkavzhc65rM9EY7c9gA",
      "content": "https://www.threads.com/@ghoiibaad/post/DVTMaN5j9xD?xmt=AQF0eN1CMGN7xtldy0I8VlOYgBnVkavzhc65rM9EY7c9gA",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-28",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVTIa10CctV",
      "content": "삼일절 기념(?) 스레드입니다. 매번 컨셉이 달라지는 것 같아. 이번 트랙도 위태위태합니다. ^^;\n다들 대단하세요!~\nhttps://www.threads.com/@han_lab_/post/DVTIa10CctV",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-28",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DVS7D0oE0wh?xmt=AQF01qS-NX9cVBAwQcG0gJYD1PlEjrxDLbRmsOedMvzNayaFQMImlr4feig8rSiqnTFlOiQ&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DVS7D0oE0wh?xmt=AQF01qS-NX9cVBAwQcG0gJYD1PlEjrxDLbRmsOedMvzNayaFQMImlr4feig8rSiqnTFlOiQ&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-28",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DVS-VrziISV?xmt=AQF0lrNmOU4cnUxeGWtbM-nxpLPdp-e-sRE3KVpAVqmUBSADtahyjl4J1AM_rIAYHDMXpgLU&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DVS-VrziISV?xmt=AQF0lrNmOU4cnUxeGWtbM-nxpLPdp-e-sRE3KVpAVqmUBSADtahyjl4J1AM_rIAYHDMXpgLU&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-28",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVSickqiSSF?xmt=AQF04-xY5aJkfRKEjfxrBHDm6hklk0NgZyPzLIRVAVNSDg",
      "content": "https://www.threads.com/@dodo_list_/post/DVSickqiSSF?xmt=AQF04-xY5aJkfRKEjfxrBHDm6hklk0NgZyPzLIRVAVNSDg",
      "images": null
    },
    {
      "memberId": "3006400e-9268-8121-ad2d-f0c76cb20143",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://www.zoopeterai.com",
      "content": "빌더 기초 2주차 과제\n과제 1 로그인과 핵심 기능(DB까지)이 들어간 내 서비스 제출\nhttps://www.zoopeterai.com\n\n과제 2 나의 데이터베이스 테이블 제출 캡처본",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477108639238983750/image.png?ex=69a3901e&is=69a23e9e&hm=2163603dd64d1247aa34a85c3eae6bb52ab7c0a37f8ab2aeca5e669984a408a0&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477108639612539054/Pasted_Graphic_1.png?ex=69a3901f&is=69a23e9f&hm=619204e7034c61b0e7d75f504cc911432e46ba589a1fe0896252617df480b8a7&"
      ]
    },
    {
      "memberId": "3006400e-9268-8121-ad2d-f0c76cb20143",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470028096370511893/1477108639238983750/image.png?ex=69a3901e&is=69a23e9e&hm=2163603dd64d1247aa34a85c3eae6bb52ab7c0a37f8ab2aeca5e669984a408a0&",
      "content": "빌더 기초 2주차 과제\n과제 1 로그인과 핵심 기능(DB까지)이 들어간 내 서비스 제출\nZoopeterai.com \n\n과제 2 나의 데이터베이스 테이블 제출 캡처본",
      "images": [
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477108639238983750/image.png?ex=69a3901e&is=69a23e9e&hm=2163603dd64d1247aa34a85c3eae6bb52ab7c0a37f8ab2aeca5e669984a408a0&",
        "https://cdn.discordapp.com/attachments/1470028096370511893/1477108639612539054/Pasted_Graphic_1.png?ex=69a3901f&is=69a23e9f&hm=619204e7034c61b0e7d75f504cc911432e46ba589a1fe0896252617df480b8a7&"
      ]
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-28",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DVRArTXjwqk",
      "content": "https://www.threads.com/@benji98760/post/DVRArTXjwqk",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DVQ9xMuE-nN?xmt=AQF0EKhjdpFlzQQF-6kcRLo2OP44PQ6qQouURmucZoRpfg",
      "content": "https://www.threads.com/@jiyong.product/post/DVQ9xMuE-nN?xmt=AQF0EKhjdpFlzQQF-6kcRLo2OP44PQ6qQouURmucZoRpfg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVQ3q2HE_l7?xmt=AQF0YxfFf7pBJzK8bbwF4awhBKkUHDQW7Z9n5lXoTb3pUA",
      "content": "https://www.threads.com/@ai.profitwise/post/DVQ3q2HE_l7?xmt=AQF0YxfFf7pBJzK8bbwF4awhBKkUHDQW7Z9n5lXoTb3pUA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simplyciety/post/DVQ2sBWkvES?xmt=AQF0rUsjbf0t4Feds7H7Yvlze4z0aDgqWKGkOcYFNYFRObgP6mklGGQebLC8WEOF-P_wefI&slof=1",
      "content": "https://www.threads.com/@simplyciety/post/DVQ2sBWkvES?xmt=AQF0rUsjbf0t4Feds7H7Yvlze4z0aDgqWKGkOcYFNYFRObgP6mklGGQebLC8WEOF-P_wefI&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8120-bd8b-f5af991a620a",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://whimsical.com/20260227-Rts6Noz7jmFSmNW2wWo9ps",
      "content": "2주차 과제 제출합니다.\n\n[뉴스레터 제작 멀티에이전트]\n상품과 유튜브 바이럴을 위한 뉴스레터 작성을 멀티에이전트로 만들어보았습니다.\n\n1) 최신 AI 뉴스\n2) 국내 이커머스 최신 뉴스\n3) 국내 바이럴 브랜드/제품\n4) 해외 바이럴 브랜드/제품\n5) CTA\n5개의 파트로 구성하여 제작해보았습니다.\n\n1. 계획도\nhttps://whimsical.com/20260227-Rts6Noz7jmFSmNW2wWo9ps\n\n2. 결과물\n첨부파일 - html 파일\n\n* 추가적으로 에이전트를 더 구성하여 붙여볼 예정입니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DVPY6lRAe14?xmt=AQF0tKTn5rboHdDJqDgbYpL9WKmyOeSx7-MbUo1e8cXnZQ",
      "content": "https://www.threads.com/@home_dad_sol/post/DVPY6lRAe14?xmt=AQF0tKTn5rboHdDJqDgbYpL9WKmyOeSx7-MbUo1e8cXnZQ",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVQsdzKEjf9",
      "content": "https://www.threads.com/@han_lab_/post/DVQsdzKEjf9",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dot.shef/post/DVQnt1egQ0u?hl=ko",
      "content": "https://www.threads.com/@dot.shef/post/DVQnt1egQ0u?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@gncut_official/post/DVQhdRhiSkG?xmt=AQF08KN7LPLYHMcyM3Y4w0uzfEakcRoHfrZzszjkNiex4g",
      "content": "https://www.threads.com/@gncut_official/post/DVQhdRhiSkG?xmt=AQF08KN7LPLYHMcyM3Y4w0uzfEakcRoHfrZzszjkNiex4g",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DVQXvJ2j9r3?xmt=AQF04mrsFDkBQ8kIDYxaTPFj9bwEVXx2OWgslONSlVO_YfKRz4dQFLJ4swXZ9wHvziDR7uNs&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DVQXvJ2j9r3?xmt=AQF04mrsFDkBQ8kIDYxaTPFj9bwEVXx2OWgslONSlVO_YfKRz4dQFLJ4swXZ9wHvziDR7uNs&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVQW61_j8Om?xmt=AQF0o44NpmXJClMiLLkufHH1DYH28lvewN4_Ks5Cup166Q",
      "content": "https://www.threads.com/@ghoiibaad/post/DVQW61_j8Om?xmt=AQF0o44NpmXJClMiLLkufHH1DYH28lvewN4_Ks5Cup166Q",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSmGJmXy4/",
      "content": "https://vt.tiktok.com/ZSmGJmXy4/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.reddit.com/r/koreatravel/comments/1rf640s/comment/o7hn9un/?context=3",
      "content": "https://www.reddit.com/r/koreatravel/comments/1rf640s/comment/o7hn9un/?context=3",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DVPsHjVDwwM?xmt=AQF0cFsQI4qzZUhV9eKF8xPHc5TYGdAxXftUpn6J0pgxvw",
      "content": "https://www.threads.com/@lawyerssm/post/DVPsHjVDwwM?xmt=AQF0cFsQI4qzZUhV9eKF8xPHc5TYGdAxXftUpn6J0pgxvw",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVQGMjvkhH0?hl=ko",
      "content": "https://www.threads.com/@makekim.kr/post/DVQGMjvkhH0?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8164-adb9-c6849e98bfb3",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@keep.going.ellie/post/DVQCsdikgNK?xmt=AQF0LKlhi1ezQ87EpCU5dDoBbbuDQ1LsVYPNeJdaF43LAxx6D5jjDUXSyaEyYPDF61aTi6I&slof=1",
      "content": "https://www.threads.com/@keep.going.ellie/post/DVQCsdikgNK?xmt=AQF0LKlhi1ezQ87EpCU5dDoBbbuDQ1LsVYPNeJdaF43LAxx6D5jjDUXSyaEyYPDF61aTi6I&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVQAzckkorE?xmt=AQF0XE8q5l8zRO7vVxPxoJR0i_7AYpLswkntSv6ustOx3w",
      "content": "https://www.threads.com/@slowwbuilder/post/DVQAzckkorE?xmt=AQF0XE8q5l8zRO7vVxPxoJR0i_7AYpLswkntSv6ustOx3w",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVP8vryiYdX?xmt=AQF02nvAt06Vq7jE4ds8UGsnOApRNb-uBIv40Yf8ik2mnQ",
      "content": "https://www.threads.com/@dodo_list_/post/DVP8vryiYdX?xmt=AQF02nvAt06Vq7jE4ds8UGsnOApRNb-uBIv40Yf8ik2mnQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-27",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DVPw1jGk71S?xmt=AQF06KIHUr91es_SfoLY28q67cNkhmnkQbowUdjFzLIpVulEx9lyUYFs4-79VfZpKdCNdP8Q&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DVPw1jGk71S?xmt=AQF06KIHUr91es_SfoLY28q67cNkhmnkQbowUdjFzLIpVulEx9lyUYFs4-79VfZpKdCNdP8Q&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DVOaHK4j9Wo?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DVOaHK4j9Wo?hl=ko",
      "images": null
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVOSlHJj7_t?xmt=AQF0doeVqhufUF7rhcahtBuu5VPwCn-f49LWxtLZdaSEWQ",
      "content": "https://www.threads.com/@ghoiibaad/post/DVOSlHJj7_t?xmt=AQF0doeVqhufUF7rhcahtBuu5VPwCn-f49LWxtLZdaSEWQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVOPP40EzSr?xmt=AQF0msVG1RaQc465N4CPMyWbd4NN0SIDrNvnLRJPWqDMdw",
      "content": "https://www.threads.com/@ai.profitwise/post/DVOPP40EzSr?xmt=AQF0msVG1RaQc465N4CPMyWbd4NN0SIDrNvnLRJPWqDMdw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DVOPMsbEQTG?xmt=AQF0_ylkksWTkukY9ssDGiKQ85IohVN-Iop0VF4Vo5YgUg",
      "content": "https://www.threads.com/@inner.builder/post/DVOPMsbEQTG?xmt=AQF0_ylkksWTkukY9ssDGiKQ85IohVN-Iop0VF4Vo5YgUg",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVL3ETYErfx",
      "content": "https://www.threads.com/@han_lab_/post/DVL3ETYErfx",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DVOJZaCkwYt?xmt=AQF0Jq1v58Y5BF2iHH9uL2PiwOdUwAO6ixG58D6-JJH5sA",
      "content": "https://www.threads.com/@jiyong.product/post/DVOJZaCkwYt?xmt=AQF0Jq1v58Y5BF2iHH9uL2PiwOdUwAO6ixG58D6-JJH5sA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simpliciety/post/DVOJHmbEky9?xmt=AQF00gggZaAmKyXB4Zj8aK0h2qIDA8u3rnsFeupLulUvHLibDBTMlEoAcnQeYcrKVafNwVQ&slof=1",
      "content": "https://www.threads.com/@simpliciety/post/DVOJHmbEky9?xmt=AQF00gggZaAmKyXB4Zj8aK0h2qIDA8u3rnsFeupLulUvHLibDBTMlEoAcnQeYcrKVafNwVQ&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVODz6VkhjP?xmt=AQF0MosBD6SPrTi7_X7Dq1b2zkWPv2CCMlxqKdUFpV1ZwQ",
      "content": "https://www.threads.com/@slowwbuilder/post/DVODz6VkhjP?xmt=AQF0MosBD6SPrTi7_X7Dq1b2zkWPv2CCMlxqKdUFpV1ZwQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DVNrEW7AGUC?xmt=AQF0Vk-XcopvvUh_9AxKentnyVqExV7fwMN1OntL04XzLw",
      "content": "https://www.threads.com/@home_dad_sol/post/DVNrEW7AGUC?xmt=AQF0Vk-XcopvvUh_9AxKentnyVqExV7fwMN1OntL04XzLw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSmgT8N3r/",
      "content": "https://vt.tiktok.com/ZSmgT8N3r/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://claude.ai/public/artifacts/164ca295-d358-44e4-b986-16585be063a0",
      "content": "2주차 과제 \n1. 계획도\nhttps://claude.ai/public/artifacts/164ca295-d358-44e4-b986-16585be063a0",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@gncut_official/post/DVN6zFEiRmq?xmt=AQF0bSmd4zkEtxQ4XnkghNP3bjetsJP6jro_GCO5DS_mYLAtmMyTyyCXE746T9AppnU57vLK&slof=1",
      "content": "https://www.threads.com/@gncut_official/post/DVN6zFEiRmq?xmt=AQF0bSmd4zkEtxQ4XnkghNP3bjetsJP6jro_GCO5DS_mYLAtmMyTyyCXE746T9AppnU57vLK&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVNjtgBEqx-",
      "content": "https://www.threads.com/@makekim.kr/post/DVNjtgBEqx-",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVNH8nmiSGK?xmt=AQF0I_B1XooT358XE8dOTp303Pgc9ELRxqwsKJ37_XNc6NPzbeoiFb8_boA5GW6RC3V9ddM&slof=1",
      "content": "https://www.threads.com/@dodo_list_/post/DVNH8nmiSGK?xmt=AQF0I_B1XooT358XE8dOTp303Pgc9ELRxqwsKJ37_XNc6NPzbeoiFb8_boA5GW6RC3V9ddM&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DVNDQ-yk3L0?xmt=AQF0OXf4w3OTlOPlKmjqmpXQU4kB7_xscxNjqcC9Ref-8zkuGIffj2yfsAwiwGjJXm1ZSNw&slof=1",
      "content": "https://www.threads.com/@interior.pulse/post/DVNDQ-yk3L0?xmt=AQF0OXf4w3OTlOPlKmjqmpXQU4kB7_xscxNjqcC9Ref-8zkuGIffj2yfsAwiwGjJXm1ZSNw&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/pulse/%25EC%2586%2594%25EB%25A1%259C%25ED%2594%2584%25EB%25A6%25AC%25EB%2584%2588-%25EC%25A1%25B0%25EB%25B3%2584-%25EB%25AA%25A8%25EC%259E%2584-%25ED%259A%258C%25EA%25B3%25A0-sijun-park-vuwkc/",
      "content": "https://www.linkedin.com/pulse/%25EC%2586%2594%25EB%25A1%259C%25ED%2594%2584%25EB%25A6%25AC%25EB%2584%2588-%25EC%25A1%25B0%25EB%25B3%2584-%25EB%25AA%25A8%25EC%259E%2584-%25ED%259A%258C%25EA%25B3%25A0-sijun-park-vuwkc/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/stevejobboo_srarxguikreequcslq-tmereeslsstwtps-tgotqytaoswkruv-activity-7432602765048061952-2N4Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "content": "https://www.linkedin.com/posts/stevejobboo_srarxguikreequcslq-tmereeslsstwtps-tgotqytaoswkruv-activity-7432602765048061952-2N4Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB0VZoQBkVmUDVZv3DuILrpczRa57dmKl7U",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://maily.so/youngwon/posts/x1zgwv33oqg",
      "content": "https://maily.so/youngwon/posts/x1zgwv33oqg",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-81e0-86cd-ea72e6a3d2b1",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/share-7432626977276198912-LmH2?utm_source=share&utm_medium=member_android&rcm=ACoAAGRq29gB9Bua5GCO9wUo6-ViDVOTmPGME6U",
      "content": "https://www.linkedin.com/posts/share-7432626977276198912-LmH2?utm_source=share&utm_medium=member_android&rcm=ACoAAGRq29gB9Bua5GCO9wUo6-ViDVOTmPGME6U",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8164-adb9-c6849e98bfb3",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@keep.going.ellie/post/DVM9SpmElZP?xmt=AQF0BRYHLT8hZWSjBAxuZL7LnCW1GFJQCVh3cIpTbAZTBBjkSiOZgB3zJs3geKHSRsE0fiRK&slof=1",
      "content": "https://www.threads.com/@keep.going.ellie/post/DVM9SpmElZP?xmt=AQF0BRYHLT8hZWSjBAxuZL7LnCW1GFJQCVh3cIpTbAZTBBjkSiOZgB3zJs3geKHSRsE0fiRK&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DVM1Tc6kzWj?xmt=AQF0n3JpxEJ4vJV-kVyDZyQ0KJXbVcGB5PuwuZXVHklMbwrsgq7pKvRHvvcTuf7g5Z9gEC09&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DVM1Tc6kzWj?xmt=AQF0n3JpxEJ4vJV-kVyDZyQ0KJXbVcGB5PuwuZXVHklMbwrsgq7pKvRHvvcTuf7g5Z9gEC09&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DVM_cPqD5NT?xmt=AQF0fFnK_Va0V5M72O2Rez5p-Klawu51RO-5UPnA3EFjVQ",
      "content": "https://www.threads.com/@ai.vibecoding/post/DVM_cPqD5NT?xmt=AQF0fFnK_Va0V5M72O2Rez5p-Klawu51RO-5UPnA3EFjVQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DVM1Tc6kzWj?xmt=AQF0lXjhV9nSS0yNMOrExd3N3KvEruxpS2ZBaOCcyTnWQzr7KczvygiYXvbZFClbbi6kM9Ef&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DVM1Tc6kzWj?xmt=AQF0lXjhV9nSS0yNMOrExd3N3KvEruxpS2ZBaOCcyTnWQzr7KczvygiYXvbZFClbbi6kM9Ef&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-26",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVL2NvKkqZp",
      "content": "https://www.threads.com/@han_lab_/post/DVL2NvKkqZp",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@gncut_official/post/DVLy89-Empo?xmt=AQF06Fb5TN8H5uuvdHiBP1j4VJJoIIeU2PxXGLMzt62_Vw",
      "content": "https://www.threads.com/@gncut_official/post/DVLy89-Empo?xmt=AQF06Fb5TN8H5uuvdHiBP1j4VJJoIIeU2PxXGLMzt62_Vw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DVLx99Ej2uv?xmt=AQF0djqPGOVkeT_JVeYr_t29iayl_7j0rTaYBXz1rxKkrM0gLcLwOinTwaA4yatA5JqCzDBs&slof=1",
      "content": "https://www.threads.com/@swlbear/post/DVLx99Ej2uv?xmt=AQF0djqPGOVkeT_JVeYr_t29iayl_7j0rTaYBXz1rxKkrM0gLcLwOinTwaA4yatA5JqCzDBs&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVLvg5mE-cU?xmt=AQF02pX8Je76mO5G4yGwyk47nXM5QW6vxfbal22O1l53Nw",
      "content": "https://www.threads.com/@ai.profitwise/post/DVLvg5mE-cU?xmt=AQF02pX8Je76mO5G4yGwyk47nXM5QW6vxfbal22O1l53Nw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DVLteOikmFw?xmt=AQF0UZjLR2CGSvkKYL8POI90wxsWJI_f-ZCib5NCFB4EAA",
      "content": "https://www.threads.com/@fortunecat_saju/post/DVLteOikmFw?xmt=AQF0UZjLR2CGSvkKYL8POI90wxsWJI_f-ZCib5NCFB4EAA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DVLsiytk8Oh?xmt=AQF0d_QwUB8xk75a1qoxUEfWk08Ygve5EtkT8UnQbU4NyA",
      "content": "https://www.threads.com/@jiyong.product/post/DVLsiytk8Oh?xmt=AQF0d_QwUB8xk75a1qoxUEfWk08Ygve5EtkT8UnQbU4NyA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSmqxbgCN/",
      "content": "https://vt.tiktok.com/ZSmqxbgCN/",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simpliciety/post/DVLg7YtEnoe?xmt=AQF0DXOYlwwtCNehTi9RxZ1nX3SB6RzR0Xh-Owry3_Rr9bhfY3cX43fDMVulSnysrP10-bw&slof=1",
      "content": "https://www.threads.com/@simpliciety/post/DVLg7YtEnoe?xmt=AQF0DXOYlwwtCNehTi9RxZ1nX3SB6RzR0Xh-Owry3_Rr9bhfY3cX43fDMVulSnysrP10-bw&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVLe3g0D1kU?xmt=AQF0QKwXf3eG9eXfROPgTqyWhf7xnAlyWIWIYUkCrhu_2A",
      "content": "https://www.threads.com/@ghoiibaad/post/DVLe3g0D1kU?xmt=AQF0QKwXf3eG9eXfROPgTqyWhf7xnAlyWIWIYUkCrhu_2A",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DVLdfz2EUUJ?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DVLdfz2EUUJ?hl=ko",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVLaExpibCG?xmt=AQF0oZvPBLackEWiSm_-Z9c1tV49G1bi8pc0OJBKdOiS7A",
      "content": "https://www.threads.com/@dodo_list_/post/DVLaExpibCG?xmt=AQF0oZvPBLackEWiSm_-Z9c1tV49G1bi8pc0OJBKdOiS7A",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVLFev_koZx?xmt=AQF0k4VAtINW-VmOsxMHtEbKcusAt3jss4ZaHgSPzDz62g",
      "content": "https://www.threads.com/@slowwbuilder/post/DVLFev_koZx?xmt=AQF0k4VAtINW-VmOsxMHtEbKcusAt3jss4ZaHgSPzDz62g",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://blog.naver.com/svminseo/224195547255",
      "content": "https://blog.naver.com/svminseo/224195547255",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DVK-0-dDzQ8?xmt=AQF0lRRW40tuU3q7ejbdbVsYMx_rUotvLfrJNR2UmSlOPw",
      "content": "https://www.threads.com/@lawyerssm/post/DVK-0-dDzQ8?xmt=AQF0lRRW40tuU3q7ejbdbVsYMx_rUotvLfrJNR2UmSlOPw",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dot.shef/post/DVKzKRTAYYM?hl=ko",
      "content": "https://www.threads.com/@dot.shef/post/DVKzKRTAYYM?hl=ko",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVKYwwmkvgf",
      "content": "https://www.threads.com/@makekim.kr/post/DVKYwwmkvgf",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DVKPYJIEnsu?xmt=AQF0VcNLjmSh8g-5xWGeI-QevGMHiKtN6FScrTll-G-o0w",
      "content": "https://www.threads.com/@home_dad_sol/post/DVKPYJIEnsu?xmt=AQF0VcNLjmSh8g-5xWGeI-QevGMHiKtN6FScrTll-G-o0w",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://open.substack.com/pub/daddoctordeveloper/p/the-1-bad-luck-that-rewrote-my-entire?utm_campaign=post&utm_medium=email",
      "content": "https://open.substack.com/pub/daddoctordeveloper/p/the-1-bad-luck-that-rewrote-my-entire?utm_campaign=post&utm_medium=email",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/valueforyourbiz_%ED%81%B4%EB%A1%9C%EB%93%9C%EC%BD%94%EB%93%9C-%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4%ED%8C%80%EC%97%90%EA%B2%8C-v9%EA%B9%8C%EC%A7%80-%EA%B0%80%EB%A5%B4%EC%B9%98%EA%B3%A0-%EB%82%98%EC%84%9C%EC%95%BC-%EB%B9%84%EB%A1%9C%EC%86%8C-%EC%96%B4%EB%8A%90-%EC%A0%95%EB%8F%84-%EB%A7%88%EC%9D%8C%EC%97%90-ugcPost-7432112617684488192-gV9w?utm_source=share&utm_medium=member_ios&rcm=ACoAAC6L56oBcnSGNNosRJL25X2aGHLoxESQD-U",
      "content": "https://www.linkedin.com/posts/valueforyourbiz_%ED%81%B4%EB%A1%9C%EB%93%9C%EC%BD%94%EB%93%9C-%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4%ED%8C%80%EC%97%90%EA%B2%8C-v9%EA%B9%8C%EC%A7%80-%EA%B0%80%EB%A5%B4%EC%B9%98%EA%B3%A0-%EB%82%98%EC%84%9C%EC%95%BC-%EB%B9%84%EB%A1%9C%EC%86%8C-%EC%96%B4%EB%8A%90-%EC%A0%95%EB%8F%84-%EB%A7%88%EC%9D%8C%EC%97%90-ugcPost-7432112617684488192-gV9w?utm_source=share&utm_medium=member_ios&rcm=ACoAAC6L56oBcnSGNNosRJL25X2aGHLoxESQD-U",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DVJ7E4aiHwD?xmt=AQF0I3oP7zd8fqWTjZn2EU1UJglXLaxA7DQBr9knwZZAzyoh5vd3WSUGud_xYg2b6CFN4cfd&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DVJ7E4aiHwD?xmt=AQF0I3oP7zd8fqWTjZn2EU1UJglXLaxA7DQBr9knwZZAzyoh5vd3WSUGud_xYg2b6CFN4cfd&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DVGdmHMkUNx?xmt=AQF0uXUorpHYlS3b68ocsP4fNgKJCCmrCwUOvV1wHzq28MGARznAhWk9nBSCL7aNeWioNO8w&slof=1",
      "content": "https://www.threads.com/@interior.pulse/post/DVGdmHMkUNx?xmt=AQF0uXUorpHYlS3b68ocsP4fNgKJCCmrCwUOvV1wHzq28MGARznAhWk9nBSCL7aNeWioNO8w&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-25",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DVIgtweEzRB?xmt=AQF00bOK6IuSVzG1ab0u7peF9I_Tt5wD4CvFFns_g74z1cMGGebcf1pXXmGL5H57Ve47pX8&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DVIgtweEzRB?xmt=AQF00bOK6IuSVzG1ab0u7peF9I_Tt5wD4CvFFns_g74z1cMGGebcf1pXXmGL5H57Ve47pX8&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DVGnPP-D4YN?xmt=AQF022eq2pIgLI61zrR-2kUzWcuhqAShh1t5S5KBLjaOyg",
      "content": "https://www.threads.com/@inner.builder/post/DVGnPP-D4YN?xmt=AQF022eq2pIgLI61zrR-2kUzWcuhqAShh1t5S5KBLjaOyg",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jakvis.labs/post/DVJMhJ4Ekko?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "content": "https://www.threads.com/@jakvis.labs/post/DVJMhJ4Ekko?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVJAk4jkkZZ",
      "content": "https://www.threads.com/@han_lab_/post/DVJAk4jkkZZ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simpliciety/post/DVJGkmyEl-b?hl=ko",
      "content": "https://www.threads.com/@simpliciety/post/DVJGkmyEl-b?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DVI6PeJE80t?xmt=AQF0ECGRUpqdv0smaGRD9PcmOBhlPer92FNWfvPM2BQGIw",
      "content": "https://www.threads.com/@home_dad_sol/post/DVI6PeJE80t?xmt=AQF0ECGRUpqdv0smaGRD9PcmOBhlPer92FNWfvPM2BQGIw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSm429fVv/",
      "content": "https://vt.tiktok.com/ZSm429fVv/",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVI8ybWklzr?xmt=AQF06ACDRoLDLJ1tDu-2eig1rPm2rqlyXQdeaq2jOkRZut9YwXtVWvKgaVp5otwjCi8WcNc&slof=1",
      "content": "https://www.threads.com/@makekim.kr/post/DVI8ybWklzr?xmt=AQF06ACDRoLDLJ1tDu-2eig1rPm2rqlyXQdeaq2jOkRZut9YwXtVWvKgaVp5otwjCi8WcNc&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DVI7KCZEYhg?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DVI7KCZEYhg?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVIvYv-EwSW?xmt=AQF0Hy7xhcxOv_s_tdj8p3GO-TTdyb-VAWNiNduRMgPUdQ",
      "content": "https://www.threads.com/@ai.profitwise/post/DVIvYv-EwSW?xmt=AQF0Hy7xhcxOv_s_tdj8p3GO-TTdyb-VAWNiNduRMgPUdQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DVIs8aHk_dv?xmt=AQF0F6DCDSoaHCpvfrn9scnk9YzbdPm0bx_Vvk2pyL3W-g",
      "content": "https://www.threads.com/@jiyong.product/post/DVIs8aHk_dv?xmt=AQF0F6DCDSoaHCpvfrn9scnk9YzbdPm0bx_Vvk2pyL3W-g",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVInw8ciUST?xmt=AQF0fDcRDxX3HguAY3RTlUhPUvtBy59HW0jqMY8oJtAHmw",
      "content": "https://www.threads.com/@dodo_list_/post/DVInw8ciUST?xmt=AQF0fDcRDxX3HguAY3RTlUhPUvtBy59HW0jqMY8oJtAHmw",
      "images": null
    },
    {
      "memberId": "3016400e-9268-81bd-9654-c77433264b00",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ghoiibaad/post/DVIm_ybD3Ka?xmt=AQF0x0kHdHLt-UZ8lPdTTDeSvamwgzdBRcC7rtQJs1XuBA",
      "content": "https://www.threads.com/@ghoiibaad/post/DVIm_ybD3Ka?xmt=AQF0x0kHdHLt-UZ8lPdTTDeSvamwgzdBRcC7rtQJs1XuBA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVIkRyOEtHo?xmt=AQF0ib2zG87aRS1mDhngzySV4q-fGjSeIwQHWIEIKmdlgg",
      "content": "https://www.threads.com/@slowwbuilder/post/DVIkRyOEtHo?xmt=AQF0ib2zG87aRS1mDhngzySV4q-fGjSeIwQHWIEIKmdlgg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DVIikgNkXnV?xmt=AQF0UZjLR2CGSvkKYL8POI90wxsWJI_f-ZCib5NCFB4EAA",
      "content": "https://www.threads.com/@fortunecat_saju/post/DVIikgNkXnV?xmt=AQF0UZjLR2CGSvkKYL8POI90wxsWJI_f-ZCib5NCFB4EAA",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DVIaN1Nj-Er?xmt=AQF0rSgURPfG5N8ZOC3JjYn-aHig5HqSHM2bhbSGbB9jWIk_UoLEqt36WbkUFjdml_ICEoM&slof=1",
      "content": "https://www.threads.com/@lawyerssm/post/DVIaN1Nj-Er?xmt=AQF0rSgURPfG5N8ZOC3JjYn-aHig5HqSHM2bhbSGbB9jWIk_UoLEqt36WbkUFjdml_ICEoM&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dot.shef/post/DVIJ3HWASOE?hl=ko",
      "content": "https://www.threads.com/@dot.shef/post/DVIJ3HWASOE?hl=ko",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DVHyUmVD6wv?xmt=AQF021UMXoIQdh0aeP5al0jTPbTE9fVMF8LH5dJOGHiRbQ",
      "content": "https://www.threads.com/@ai.vibecoding/post/DVHyUmVD6wv?xmt=AQF021UMXoIQdh0aeP5al0jTPbTE9fVMF8LH5dJOGHiRbQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://maily.so/youngwon/posts/x1zgwv33oqg",
      "content": "https://maily.so/youngwon/posts/x1zgwv33oqg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@stevejobboogtm/post/DVHngGRkg7C?xmt=AQF0_QRNxtW7ADUkMfMYpMU6N-QSvStgyCgi9rMryIjnMA",
      "content": "https://www.threads.com/@stevejobboogtm/post/DVHngGRkg7C?xmt=AQF0_QRNxtW7ADUkMfMYpMU6N-QSvStgyCgi9rMryIjnMA",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-24",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DVGsjOAkqid",
      "content": "https://www.threads.com/@han_lab_/post/DVGsjOAkqid",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@gncut_official/post/DVGpHeiCX4o?xmt=AQF0la-gsC919Py3b8HzYptFoZ0FVQJAIfejDN3CffD_Bg",
      "content": "https://www.threads.com/@gncut_official/post/DVGpHeiCX4o?xmt=AQF0la-gsC919Py3b8HzYptFoZ0FVQJAIfejDN3CffD_Bg",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVGo5K_kr-A",
      "content": "https://www.threads.com/@makekim.kr/post/DVGo5K_kr-A",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DVGnPP-D4YN?xmt=AQF0lcWRNwpedafMLPoKOqzBbiRGIL4grkPygrNjcn0B2g",
      "content": "https://www.threads.com/@inner.builder/post/DVGnPP-D4YN?xmt=AQF0lcWRNwpedafMLPoKOqzBbiRGIL4grkPygrNjcn0B2g",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DVGe6Ezk8T7?xmt=AQF0F6DCDSoaHCpvfrn9scnk9YzbdPm0bx_Vvk2pyL3W-g",
      "content": "https://www.threads.com/@jiyong.product/post/DVGe6Ezk8T7?xmt=AQF0F6DCDSoaHCpvfrn9scnk9YzbdPm0bx_Vvk2pyL3W-g",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DVGbS9GknAa?xmt=AQF0UZjLR2CGSvkKYL8POI90wxsWJI_f-ZCib5NCFB4EAA",
      "content": "https://www.threads.com/@fortunecat_saju/post/DVGbS9GknAa?xmt=AQF0UZjLR2CGSvkKYL8POI90wxsWJI_f-ZCib5NCFB4EAA",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DVGbNFKDzdY?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DVGbNFKDzdY?hl=ko",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jakvis.labs/post/DVGZ9RAkkkS?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "content": "https://www.threads.com/@jakvis.labs/post/DVGZ9RAkkkS?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DVF8vTHCHqc?xmt=AQF0Ju-w_M7MPWauGTulvHSG4ox6vPemmDmrOg7zYUw9FA",
      "content": "https://www.threads.com/@home_dad_sol/post/DVF8vTHCHqc?xmt=AQF0Ju-w_M7MPWauGTulvHSG4ox6vPemmDmrOg7zYUw9FA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://vt.tiktok.com/ZSmQgxQka/",
      "content": "https://vt.tiktok.com/ZSmQgxQka/",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@lawyerssm/post/DVGRhZKj9Sn?xmt=AQF0ouu-SSpU49dGfChCSlSR_MusoZoM2fN7xh0t4ADTtbyBVOipx-GkDKjAwLC48UvwYRU&slof=1",
      "content": "https://www.threads.com/@lawyerssm/post/DVGRhZKj9Sn?xmt=AQF0ouu-SSpU49dGfChCSlSR_MusoZoM2fN7xh0t4ADTtbyBVOipx-GkDKjAwLC48UvwYRU&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8164-adb9-c6849e98bfb3",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@keep.going.ellie/post/DVFOY9fkrPL?xmt=AQF0J6NDkkGj95Yjw59x8ukSrZl0MZPbqcJ6d8a4cOdAPV5MwWhePLzLGzqqxHNfL6S4Jys2&slof=1",
      "content": "https://www.threads.com/@keep.going.ellie/post/DVFOY9fkrPL?xmt=AQF0J6NDkkGj95Yjw59x8ukSrZl0MZPbqcJ6d8a4cOdAPV5MwWhePLzLGzqqxHNfL6S4Jys2&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVFPJ4lk4tL?xmt=AQF0qQpgSYRWkl2z0CBMh6X8Okigm1abhjXf6lxGpH7hJw",
      "content": "https://www.threads.com/@ai.profitwise/post/DVFPJ4lk4tL?xmt=AQF0qQpgSYRWkl2z0CBMh6X8Okigm1abhjXf6lxGpH7hJw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8150-b060-d7e281a7c073",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://postflow-a3b5.vercel.app/ko",
      "content": "2주차\n웹 앱 링크: https://postflow-a3b5.vercel.app/ko\napi : gemini와 연동했습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DVF_WECEt0l?xmt=AQF0KAhN0Av8gvCtGZhRrbevkSonrlEyFhSDrE9r3UKobA",
      "content": "https://www.threads.com/@slowwbuilder/post/DVF_WECEt0l?xmt=AQF0KAhN0Av8gvCtGZhRrbevkSonrlEyFhSDrE9r3UKobA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai",
      "content": "https://www.threads.com/@newsdaddy.ai",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DVFs2ziCRWY?xmt=AQF0EwRtyL6PpIZdd6Vl5XF_JvJM0AgilN_o-Vh1zpmKBQ",
      "content": "https://www.threads.com/@dodo_list_/post/DVFs2ziCRWY?xmt=AQF0EwRtyL6PpIZdd6Vl5XF_JvJM0AgilN_o-Vh1zpmKBQ",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@bagsijun765/post/DVBI-7vAQLP?xmt=AQF0OLZDgJjmR2Gpu2FCYm99iT6z6k5z0NiwlEZPLewIKk6sIMI6aiqBAdwrXtP2J4mYq8M",
      "content": "https://www.threads.com/@bagsijun765/post/DVBI-7vAQLP?xmt=AQF0OLZDgJjmR2Gpu2FCYm99iT6z6k5z0NiwlEZPLewIKk6sIMI6aiqBAdwrXtP2J4mYq8M",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://maily.so/ai.insider.club/posts/1gz27jkdr3q",
      "content": "https://maily.so/ai.insider.club/posts/1gz27jkdr3q",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DVEue5_k3D6?xmt=AQF0OLZDgJjmR2Gpu2FCYm99iT6z6k5z0NiwlEZPLewIKk6sIMI6aiqBAdwrXtP2J4mYq8M&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DVEue5_k3D6?xmt=AQF0OLZDgJjmR2Gpu2FCYm99iT6z6k5z0NiwlEZPLewIKk6sIMI6aiqBAdwrXtP2J4mYq8M&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/p/DVEZBCNCpzM/?igsh=bG45dnNvZnl3NzJw",
      "content": "https://www.instagram.com/p/DVEZBCNCpzM/?igsh=bG45dnNvZnl3NzJw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DVESOdTiMqM?xmt=AQF0Nr41xikmVm4ZI2hXKypdlmZG4RSaGYDZI0FRrp7V-xlguRykIStdPaXf1nj1O0N02WNQ&slof=1",
      "content": "광고 없이 팔로워 5k 분들과\n함께 하게 됐습니다.\n마케팅 경험이 없어\n이런 kpi를 꼭 만들어보고\n싶었는데, 마일드 스톤 하나\n세워놓게 됐습니다.\n바이브코딩 FOMO가 심한\n요즘, 저처럼 완전 초보분들\n함께 배우고 성장할 수 있는\n파트너가 되겠습니다🔥🙌🏻\n\nhttps://www.threads.com/@newsdaddy.ai/post/DVESOdTiMqM?xmt=AQF0Nr41xikmVm4ZI2hXKypdlmZG4RSaGYDZI0FRrp7V-xlguRykIStdPaXf1nj1O0N02WNQ&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-23",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DVEIA45DwqQ?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DVEIA45DwqQ?hl=ko",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://docs.google.com/document/d/1ASVjptfn3OtDBsZhZ7TaMtKowaKZMc2-tYgkPvpnFgg/edit?tab=t.0",
      "content": "도메인 만들기 전이어서, 발행 전의 2주차 뉴스레터입니다. \nhttps://docs.google.com/document/d/1ASVjptfn3OtDBsZhZ7TaMtKowaKZMc2-tYgkPvpnFgg/edit?tab=t.0",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://maily.so/youngwon/posts/1gz27j84r3q",
      "content": "https://maily.so/youngwon/posts/1gz27j84r3q",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8150-b060-d7e281a7c073",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://postflow-a3b5.vercel.app/ko",
      "content": "웹 앱 링크: https://postflow-a3b5.vercel.app/ko\napi : gemini와 연동했습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470030785615761593/1475123279642755169/96cb95ac67559ece.pdf?ex=699c571c&is=699b059c&hm=ff9150db3e51a31665b16617836d8c3e93a6522ff3cc96ab5e30a2bdfc5d6c4e&",
      "content": "[김정환/됴냐/0기] 세일즈 실전 과제",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://docs.google.com/document/d/1YWG5GMUL7_O_gS943Z5x_sYYe3CJybntEOfP7CWphQA/edit?usp=sharing",
      "content": "1. 세일즈 퍼널 : pdf 첨부\n2. USP 정의 : https://docs.google.com/document/d/1YWG5GMUL7_O_gS943Z5x_sYYe3CJybntEOfP7CWphQA/edit?usp=sharing\n3. 고객 인터뷰\nhttps://docs.google.com/document/d/1jiRobaT1pamP-uO0qtyRSJBeuXtnchZn0sUQbjMIs78/edit?usp=sharing",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVC5UFokjcD",
      "content": "https://www.threads.com/@makekim.kr/post/DVC5UFokjcD",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-03-01",
      "status": "submitted",
      "tracks": [
        "Builder Advanced"
      ],
      "link": "https://ddalggak.store/fortune)",
      "content": "```diff\n빌드 트랙(심화) 2주차 과제 제출합니다\n```\n\n[랜딩페이지 연결](https://ddalggak.store/fortune)\n스타트업 딸각 사이트 : 사업 리포트\n현재 사용 API : OpenAI\n추후 구현할 기능 : 로그인, 결제",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81bb-a643-e437acbb4e68",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1475097483410542612/SKILL.md?ex=699c3f16&is=699aed96&hm=8f852d81ccad0b03267bcdded10acb4349851f2274fc31a6755ca08f64cebb88&",
      "content": "1주차 과제 제출합니다. 웹툰 프롬프트 생성 스킬입니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-818e-bcfd-cb87b9a53831",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://zoey.day/claude-code-agent-product-page-localization-pipeline",
      "content": "https://zoey.day/claude-code-agent-product-page-localization-pipeline",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8114-b66c-c76e8e022b02",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1475094653735796856/SKILL.md?ex=699c3c73&is=699aeaf3&hm=6e88f7e7054024ffa1e43c4401a3318208b49ab133f5aadd51c2c89d8cf040b6&",
      "content": "운수업체 금융 콜라보 및 보험 단순 반복 업무 자동화 시스템 구축 스킬을 만들었습니다",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8188-b07b-d8bca73c9f7d",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1475052862881927239/SKILL.md?ex=699c1587&is=699ac407&hm=ea5cfcea61b349330bab03ca48ffa842fdeccbd68aadeb3c56cf5e60434a4aa5&",
      "content": "1주차 과제 제출합니다.\n할일이나 일정이 생각날때 추가해달라고 부탁하면, llm이 자체 판단해서 태스크(things3), 태스크(things3)+스케줄(apple calendar)로 등록하는 스킬을 만들었습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVC_SqTk4jT?xmt=AQF0yvLBlC5qJVS1SvfJ7Y3LuAhaKq5Jl4xBHCGw0fG5rw",
      "content": "https://www.threads.com/@ai.profitwise/post/DVC_SqTk4jT?xmt=AQF0yvLBlC5qJVS1SvfJ7Y3LuAhaKq5Jl4xBHCGw0fG5rw",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8180-92da-ca2d7cccaec1",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Sales"
      ],
      "link": "https://whimsical.com/P2CXCa2b6nbVrnAjzaSxdt",
      "content": "1주차 과제 제출합니다.\n\n[ 1. 글목 세일즈 퍼널 ]\nhttps://whimsical.com/P2CXCa2b6nbVrnAjzaSxdt\n\n[ 2. USP 정의 ]\nhttps://docs.google.com/document/d/1woqHHG1hxYBH3KZy7IUvhnIB4W8qd26i8FTgHUCToms/edit?usp=sharing\n\n[ 3. 고객 인터뷰 ]\nhttps://docs.google.com/document/d/1g-rbxOJgSGN-siUSqzCRm8TpJ3yaTFrx-KyqlRK6MS4/edit?usp=sharing\n(2명을 인터뷰하고 문서를 작성했습니다. 차주에 2명 인터뷰를 더 잡아두었는데 인터뷰 후 문서를 업데이트하도록 하겠습니다.)",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DVC-wKAk0lc?xmt=AQF0JwUABMBMqwEG292cmI6I-JpkHVHqBXVvV4Zij5rmez5vGRj5hyEQnsYUhTDwtO9dtNbH&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DVC-wKAk0lc?xmt=AQF0JwUABMBMqwEG292cmI6I-JpkHVHqBXVvV4Zij5rmez5vGRj5hyEQnsYUhTDwtO9dtNbH&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DVCyWJFD52v?xmt=AQF0eTUoyOeO9YFXNiinpLjbo2e5HrwDzpQ1M9PkdfTr9Rlzojn9v58K8nm9h2AqXQ5-BrE&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DVCyWJFD52v?xmt=AQF0eTUoyOeO9YFXNiinpLjbo2e5HrwDzpQ1M9PkdfTr9Rlzojn9v58K8nm9h2AqXQ5-BrE&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DVCu9-XE8Nk?xmt=AQF0kkwGZJXfgL5iQa7zDpJpZ6AImu1pHcbE_FID8lNuMpx6rgEH5s6LYzL6b7-Osff4f1ZU&slof=1",
      "content": "https://www.threads.com/@interior.pulse/post/DVCu9-XE8Nk?xmt=AQF0kkwGZJXfgL5iQa7zDpJpZ6AImu1pHcbE_FID8lNuMpx6rgEH5s6LYzL6b7-Osff4f1ZU&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1474923771566489660/SKILL.md?ex=699b9d4d&is=699a4bcd&hm=f57c03b8a804733b18ff160a6cbd86e1a6dd2b7f2fe7eb1ac2b543c1f7934405&",
      "content": "1주차 과제 제출합니다. \n음성 파일을 전사 - 화자 분리 - 회의록 작성 - 요약하는 스킬입니다.\n모델을 사용하기 위한 python 스크립트 파일도 함께 구성되어 있습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://rebirthcoaching.tistory.com/entry/2026-%EC%A7%81%EC%9E%A5%EC%9D%B8-%ED%95%84%EC%88%98%EC%83%9D%EC%84%B1%ED%98%95-AI-%EB%B3%B4%EA%B3%A0%EC%84%9C%EB%A7%88%EC%8A%A4%ED%84%B0-%ED%8C%81-7%EA%B0%80%EC%A7%80",
      "content": "https://rebirthcoaching.tistory.com/entry/2026-%EC%A7%81%EC%9E%A5%EC%9D%B8-%ED%95%84%EC%88%98%EC%83%9D%EC%84%B1%ED%98%95-AI-%EB%B3%B4%EA%B3%A0%EC%84%9C%EB%A7%88%EC%8A%A4%ED%84%B0-%ED%8C%81-7%EA%B0%80%EC%A7%80",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DVBES9Gkrlh",
      "content": "https://www.threads.com/@makekim.kr/post/DVBES9Gkrlh",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/reel/DVA4Ua5DGrc/?igsh=b3I4dnowa3YwN2s3",
      "content": "https://www.instagram.com/reel/DVA4Ua5DGrc/?igsh=b3I4dnowa3YwN2s3",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DVAjFeIEV4k?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DVAjFeIEV4k?hl=ko",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DU-cUK6D0HP?xmt=AQF0H1CJsyy4VmLg4iRxUZqNaY02vy7GYf21Qz44fuD2jFQUpCaqjeexIolzramqPlPf4GoW&slof=1",
      "content": "https://www.threads.com/@ai.vibecoding/post/DU-cUK6D0HP?xmt=AQF0H1CJsyy4VmLg4iRxUZqNaY02vy7GYf21Qz44fuD2jFQUpCaqjeexIolzramqPlPf4GoW&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DVAGjEUE5wT?xmt=AQF0tc-7ZpUdcycQOrP27A6eZRsePpEkhAt5kjnkIE2vjJarFgx3s2F04lneg09E1QZGttU&slof=1",
      "content": "https://www.threads.com/@ai.profitwise/post/DVAGjEUE5wT?xmt=AQF0tc-7ZpUdcycQOrP27A6eZRsePpEkhAt5kjnkIE2vjJarFgx3s2F04lneg09E1QZGttU&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DU_50fTE7OC?xmt=AQF0WPcSMY1EuE1wb4WhBZ1kmzzigL3TojhDWml44enoyzy1bDC6ADtUV6hwAjpUrX9C5wiM&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DU_50fTE7OC?xmt=AQF0WPcSMY1EuE1wb4WhBZ1kmzzigL3TojhDWml44enoyzy1bDC6ADtUV6hwAjpUrX9C5wiM&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DU-xmeOiFNW?xmt=AQF0bV4_zn12aBA8r91_Ai2cmmJLdwJ5-uHC7VQzdpSa2g",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DU-xmeOiFNW?xmt=AQF0bV4_zn12aBA8r91_Ai2cmmJLdwJ5-uHC7VQzdpSa2g",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DU-xmeOiFNW?xmt=AQF0bV4_zn12aBA8r91_Ai2cmmJLdwJ5-uHC7VQzdpSa2g",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DU-xmeOiFNW?xmt=AQF0bV4_zn12aBA8r91_Ai2cmmJLdwJ5-uHC7VQzdpSa2g",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DU--Qd5j7si?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DU--Qd5j7si?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@stevejobboogtm/post/DU--O0aAcKE?xmt=AQF0x00NqBgZjVsoohuZ8ZEsz7EXr2m4piwzfsk8QwGY46Gd8bGZKHumqNt45s8q__zBD3Q&slof=1",
      "content": "https://www.threads.com/@stevejobboogtm/post/DU--O0aAcKE?xmt=AQF0x00NqBgZjVsoohuZ8ZEsz7EXr2m4piwzfsk8QwGY46Gd8bGZKHumqNt45s8q__zBD3Q&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DU--Ce0kzxE?xmt=AQF0vERY7kDeUdSrM7-lLTc2d0rsb78JwFvjOv3Sk_FfeQ",
      "content": "https://www.threads.com/@ai.profitwise/post/DU--Ce0kzxE?xmt=AQF0vERY7kDeUdSrM7-lLTc2d0rsb78JwFvjOv3Sk_FfeQ",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simpliciety/post/DU-9a-aEh07?xmt=AQF0DibmuDf64mKlpp0YKcmNW3GAvkbGLoD4bs0b5b_9zU4gAlHt7JsYVGfp5sDJZJqd_Yub&slof=1",
      "content": "https://www.threads.com/@simpliciety/post/DU-9a-aEh07?xmt=AQF0DibmuDf64mKlpp0YKcmNW3GAvkbGLoD4bs0b5b_9zU4gAlHt7JsYVGfp5sDJZJqd_Yub&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@gncut_official/post/DU-8zEVCVbb?xmt=AQF07ALynO7iShIfOIK31BikboU5tvBdREru6SIruJ2CCw",
      "content": "https://www.threads.com/@gncut_official/post/DU-8zEVCVbb?xmt=AQF07ALynO7iShIfOIK31BikboU5tvBdREru6SIruJ2CCw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DU-6G7ODzlt?xmt=AQF0n63u4iniGVpB0MKkZG-bPHK5tVu99EubU9p4pY54ce2bQnCKFGYjEh4bbqHrmVlxcbGM&slof=1",
      "content": "https://www.threads.com/@swlbear/post/DU-6G7ODzlt?xmt=AQF0n63u4iniGVpB0MKkZG-bPHK5tVu99EubU9p4pY54ce2bQnCKFGYjEh4bbqHrmVlxcbGM&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DU-6G7ODzlt?xmt=AQF0n63u4iniGVpB0MKkZG-bPHK5tVu99EubU9p4pY54ce2bQnCKFGYjEh4bbqHrmVlxcbGM&slof=1",
      "content": "https://www.threads.com/@swlbear/post/DU-6G7ODzlt?xmt=AQF0n63u4iniGVpB0MKkZG-bPHK5tVu99EubU9p4pY54ce2bQnCKFGYjEh4bbqHrmVlxcbGM&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DU-2ttiEt84",
      "content": "https://www.threads.com/@makekim.kr/post/DU-2ttiEt84",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-a52f-e0e6871e5fe5",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jiyong.product/post/DU-vfttk2qA?xmt=AQF0cbIT82vl2pzTGHDa_60W0Zy3MUC481ZxBH51fEQVAg",
      "content": "https://www.threads.com/@jiyong.product/post/DU-vfttk2qA?xmt=AQF0cbIT82vl2pzTGHDa_60W0Zy3MUC481ZxBH51fEQVAg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DU-u7RYksuf?xmt=AQF0siC89K01jmp5HSk3ibje-x60KIYr5s7LQOUbbecYhA",
      "content": "https://www.threads.com/@fortunecat_saju/post/DU-u7RYksuf?xmt=AQF0siC89K01jmp5HSk3ibje-x60KIYr5s7LQOUbbecYhA",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DU-rnBLknCl?xmt=AQF09FFOmGACu0fzSsXPz8mFVuComX-WzPxIq3ZtNbtbfg",
      "content": "https://www.threads.com/@han_lab_/post/DU-rnBLknCl?xmt=AQF09FFOmGACu0fzSsXPz8mFVuComX-WzPxIq3ZtNbtbfg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://maily.so/newsdaddyai/posts/g1o4g6p6ove",
      "content": "22명 AI에이전트 군단 제작하기 https://maily.so/newsdaddyai/posts/g1o4g6p6ove",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DU-UcBhj_pe?xmt=AQF0ItIncUfEn2aG2FCgzyyUwrUjQ-PMfrACkwYP8MaxGk41s9KQVU0uThQtBxeVed2nZQ9J&slof=1",
      "content": "https://www.threads.com/@home_dad_sol/post/DU-UcBhj_pe?xmt=AQF0ItIncUfEn2aG2FCgzyyUwrUjQ-PMfrACkwYP8MaxGk41s9KQVU0uThQtBxeVed2nZQ9J&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DU-UcBhj_pe?xmt=AQF0ItIncUfEn2aG2FCgzyyUwrUjQ-PMfrACkwYP8MaxGk41s9KQVU0uThQtBxeVed2nZQ9J&slof=1",
      "content": "https://www.threads.com/@home_dad_sol/post/DU-UcBhj_pe?xmt=AQF0ItIncUfEn2aG2FCgzyyUwrUjQ-PMfrACkwYP8MaxGk41s9KQVU0uThQtBxeVed2nZQ9J&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/p/DU-PqZRCWZZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "content": "https://www.instagram.com/p/DU-PqZRCWZZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-811b-966b-dd8299203368",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1474307456099418203/skill.md?ex=69995f50&is=69980dd0&hm=73fbb4bc92406ff62082a4d32fe1f31374f36846126b5a419695fe1b25f86900&",
      "content": "1주차 과제 제출합니다. 리빙 일부 브랜드 소식 리서치 스킬",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81e1-bd98-e20c158c9e9a",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1474293715362381845/SKILL.md?ex=69995284&is=69980104&hm=87ee91c38045a47eb491cf9b9153c58172e0baaccbc2e0cda33db98c3c758be9&",
      "content": "1주차 과제 제출\n뇌과학, 생산성 기반 스레드 글쓰기 스킬",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://naver.me/59lcQagj",
      "content": "https://naver.me/59lcQagj",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DU90hN6iXgu?xmt=AQF0zk1fuamH3cxI-lk7C_gc1qvUHvJAHTxDsjYldhTnbQ",
      "content": "https://www.threads.com/@dodo_list_/post/DU90hN6iXgu?xmt=AQF0zk1fuamH3cxI-lk7C_gc1qvUHvJAHTxDsjYldhTnbQ",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://blog.naver.com/svminseo/224188230537",
      "content": "https://blog.naver.com/svminseo/224188230537",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://blog.naver.com/svminseo/224188230537",
      "content": "https://blog.naver.com/svminseo/224188230537",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@bagsijun765/post/DU9o9CHAQy0?hl=ko",
      "content": "https://www.threads.com/@bagsijun765/post/DU9o9CHAQy0?hl=ko",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@bagsijun765/post/DU9o9CHAQy0?hl=ko",
      "content": "https://www.threads.com/@bagsijun765/post/DU9o9CHAQy0?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DU9mHWwE7ja?xmt=AQF0DkvQ2LpAkWlCx-EZbUCvGNKNeNI3slWfIdIH5999pAMD3Xj4POd6eLye6k_Ts82YbEhe&slof=1",
      "content": "https://www.threads.com/@interior.pulse/post/DU9mHWwE7ja?xmt=AQF0DkvQ2LpAkWlCx-EZbUCvGNKNeNI3slWfIdIH5999pAMD3Xj4POd6eLye6k_Ts82YbEhe&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@interior.pulse/post/DU9aDf7k-r0?xmt=AQF0Ooxik1qB4Xb7LlasUXMFHQyTfLcOnTj2G3AuSjeaGYWnhyZKZIbAvkl-DC3O6daP551t&slof=1",
      "content": "https://www.threads.com/@interior.pulse/post/DU9aDf7k-r0?xmt=AQF0Ooxik1qB4Xb7LlasUXMFHQyTfLcOnTj2G3AuSjeaGYWnhyZKZIbAvkl-DC3O6daP551t&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DU9VbpIk3_g?xmt=AQF0SBXGGmJCfXrvkwiWiHdf4NnnZyNpYOl6yeMBib8Ksg",
      "content": "https://www.threads.com/@ai.vibecoding/post/DU9VbpIk3_g?xmt=AQF0SBXGGmJCfXrvkwiWiHdf4NnnZyNpYOl6yeMBib8Ksg",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.vibecoding/post/DU9VbpIk3_g?xmt=AQF0SBXGGmJCfXrvkwiWiHdf4NnnZyNpYOl6yeMBib8Ksg",
      "content": "https://www.threads.com/@ai.vibecoding/post/DU9VbpIk3_g?xmt=AQF0SBXGGmJCfXrvkwiWiHdf4NnnZyNpYOl6yeMBib8Ksg",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-807c-9c1e-f0d5e668ffdf",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@simpliciety/post/DU8XUxEEo6s?xmt=AQF0yFs_Q9INa-sw1FZSbxmbiH3qEWWyyp1pN_k9e8iTXA",
      "content": "https://www.threads.com/@simpliciety/post/DU8XUxEEo6s?xmt=AQF0yFs_Q9INa-sw1FZSbxmbiH3qEWWyyp1pN_k9e8iTXA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-815c-9c55-ea7eac6e3841",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@stevejobboogtm/post/DU8VYkZAZSb?xmt=AQF0YHOUyR3y7yq9qWOdoAKLKBRVVyireNCZESp8uOQ2JIOVxR-bcCS2bdaDCcKkBUaBRus&slof=1",
      "content": "https://www.threads.com/@stevejobboogtm/post/DU8VYkZAZSb?xmt=AQF0YHOUyR3y7yq9qWOdoAKLKBRVVyireNCZESp8uOQ2JIOVxR-bcCS2bdaDCcKkBUaBRus&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@benji98760/post/DU8Ug8Aj6rU?hl=ko",
      "content": "https://www.threads.com/@benji98760/post/DU8Ug8Aj6rU?hl=ko",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/reel/DU8QiLJiquP/?igsh=MWM3bnc3aWxmOG52Mw==",
      "content": "https://www.instagram.com/reel/DU8QiLJiquP/?igsh=MWM3bnc3aWxmOG52Mw==",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://m.blog.naver.com/teri_home/224188313441",
      "content": "https://m.blog.naver.com/teri_home/224188313441",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81ab-b236-e695df448e47",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@home_dad_sol/post/DU7rRx4D4Mu?xmt=AQF0Mflg1nHScg6i6adGyAmWkbSsftbmZZ-hpYEpYi3dhkA-gpGYnnKlbcdNa4xI80JocbHS&slof=1",
      "content": "https://www.threads.com/@home_dad_sol/post/DU7rRx4D4Mu?xmt=AQF0Mflg1nHScg6i6adGyAmWkbSsftbmZZ-hpYEpYi3dhkA-gpGYnnKlbcdNa4xI80JocbHS&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DU8OT52Dw5E?xmt=AQF0EYboE4OgRexUo3OGOvJ_OEm9smgl_0gw3B1HBUcIo826E5q5AhvD9MXlyWnyyZPL0ZI&slof=1",
      "content": "https://www.threads.com/@swlbear/post/DU8OT52Dw5E?xmt=AQF0EYboE4OgRexUo3OGOvJ_OEm9smgl_0gw3B1HBUcIo826E5q5AhvD9MXlyWnyyZPL0ZI&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8135-a31c-d965505143f6",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@swlbear/post/DU8OT52Dw5E?xmt=AQF0EYboE4OgRexUo3OGOvJ_OEm9smgl_0gw3B1HBUcIo826E5q5AhvD9MXlyWnyyZPL0ZI&slof=1",
      "content": "https://www.threads.com/@swlbear/post/DU8OT52Dw5E?xmt=AQF0EYboE4OgRexUo3OGOvJ_OEm9smgl_0gw3B1HBUcIo826E5q5AhvD9MXlyWnyyZPL0ZI&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@gncut_official/post/DU8NUTACTIe?xmt=AQF0K_6ODQSjoI-cwJlOPJIs807CXuQ60l6uSzRVMzAB7A",
      "content": "https://www.threads.com/@gncut_official/post/DU8NUTACTIe?xmt=AQF0K_6ODQSjoI-cwJlOPJIs807CXuQ60l6uSzRVMzAB7A",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8182-80ec-f33a6a7fceaa",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@gncut_official/post/DU8NUTACTIe?xmt=AQF0K_6ODQSjoI-cwJlOPJIs807CXuQ60l6uSzRVMzAB7A",
      "content": "https://www.threads.com/@gncut_official/post/DU8NUTACTIe?xmt=AQF0K_6ODQSjoI-cwJlOPJIs807CXuQ60l6uSzRVMzAB7A",
      "images": null
    },
    {
      "memberId": "2f96400e-9268-81f6-9118-c3a00fbd6580",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@jakvis.labs/post/DU8M2vjEpKf?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "content": "https://www.threads.com/@jakvis.labs/post/DU8M2vjEpKf?xmt=AQF0P5cb6d7LFvV_9rGtwqQtiXs_YUpGMKmpWX3Mw_9pz3o",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DU8LTstEvML?xmt=AQF0F1T5LC4sTV5X_mIY8_Xh7B8zeEGjfkHBpO6jxl-qWp8",
      "content": "https://www.threads.com/@han_lab_/post/DU8LTstEvML?xmt=AQF0F1T5LC4sTV5X_mIY8_Xh7B8zeEGjfkHBpO6jxl-qWp8",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e3-8edc-f8a1b3ae5f26",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@han_lab_/post/DU8LTstEvML?xmt=AQF0F1T5LC4sTV5X_mIY8_Xh7B8zeEGjfkHBpO6jxl-qWp8",
      "content": "https://www.threads.com/@han_lab_/post/DU8LTstEvML?xmt=AQF0F1T5LC4sTV5X_mIY8_Xh7B8zeEGjfkHBpO6jxl-qWp8",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8105-b2fd-d5b845fc5ce3",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@inner.builder/post/DU8KqB4kZMG?xmt=AQF0c1BKZ5cJlWq62LyEVVROrE_FklvCUtqPGT8U9g5wJw",
      "content": "https://www.threads.com/@inner.builder/post/DU8KqB4kZMG?xmt=AQF0c1BKZ5cJlWq62LyEVVROrE_FklvCUtqPGT8U9g5wJw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8169-846d-ce04ade77650",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@ai.profitwise/post/DU7l9rJE9GH?xmt=AQF0vBiQ8MmEGDkRkeKrESk66rCvDfXbaYfXmDI6p_-uvA",
      "content": "https://www.threads.com/@ai.profitwise/post/DU7l9rJE9GH?xmt=AQF0vBiQ8MmEGDkRkeKrESk66rCvDfXbaYfXmDI6p_-uvA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DU8CE4CE8y4?xmt=AQF0Ds7-3Bs2tEguFDGvwi5QjXzeiSKdHTWYpNQmRcAF0lWFHTey1ZLK4vFUqH2wJODSJTo&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DU8CE4CE8y4?xmt=AQF0Ds7-3Bs2tEguFDGvwi5QjXzeiSKdHTWYpNQmRcAF0lWFHTey1ZLK4vFUqH2wJODSJTo&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@rm.visualizer/post/DU8CE4CE8y4?xmt=AQF0Ds7-3Bs2tEguFDGvwi5QjXzeiSKdHTWYpNQmRcAF0lWFHTey1ZLK4vFUqH2wJODSJTo&slof=1",
      "content": "https://www.threads.com/@rm.visualizer/post/DU8CE4CE8y4?xmt=AQF0Ds7-3Bs2tEguFDGvwi5QjXzeiSKdHTWYpNQmRcAF0lWFHTey1ZLK4vFUqH2wJODSJTo&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DU8ApYfiD9r?xmt=AQF0ImHV9QmWmosHY16NYpWB5nv6V7R5LebGrlxIREPUT1odHg2yy4UvyV7YTxa96RXMaCjw&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DU8ApYfiD9r?xmt=AQF0ImHV9QmWmosHY16NYpWB5nv6V7R5LebGrlxIREPUT1odHg2yy4UvyV7YTxa96RXMaCjw&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8145-b1b8-d2dc02094e51",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@newsdaddy.ai/post/DU8ApYfiD9r?xmt=AQF0ImHV9QmWmosHY16NYpWB5nv6V7R5LebGrlxIREPUT1odHg2yy4UvyV7YTxa96RXMaCjw&slof=1",
      "content": "https://www.threads.com/@newsdaddy.ai/post/DU8ApYfiD9r?xmt=AQF0ImHV9QmWmosHY16NYpWB5nv6V7R5LebGrlxIREPUT1odHg2yy4UvyV7YTxa96RXMaCjw&slof=1",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://x.com/dot_shef/status/2024447531598668005",
      "content": "https://x.com/dot_shef/status/2024447531598668005",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81af-82fd-d21d72e9d5f5",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://x.com/dot_shef/status/2024447531598668005",
      "content": "https://x.com/dot_shef/status/2024447531598668005",
      "images": null
    },
    {
      "memberId": "2fe6400e-9268-81e0-86cd-ea72e6a3d2b1",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.linkedin.com/posts/share-7430206441199894528-VLlM?utm_source=share&utm_medium=member_android&rcm=ACoAAGRq29gB9Bua5GCO9wUo6-ViDVOTmPGME6U",
      "content": "https://www.linkedin.com/posts/share-7430206441199894528-VLlM?utm_source=share&utm_medium=member_android&rcm=ACoAAGRq29gB9Bua5GCO9wUo6-ViDVOTmPGME6U",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8199-9968-e841144cd05e",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@fortunecat_saju/post/DU732RSElUM?xmt=AQF0fB_kkYEb9MWeMvkxqpBXCAjY4PxukKP2vq1LE1uWiA",
      "content": "https://www.threads.com/@fortunecat_saju/post/DU732RSElUM?xmt=AQF0fB_kkYEb9MWeMvkxqpBXCAjY4PxukKP2vq1LE1uWiA",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@aron_aiconbia/post/DU7x-bij7gj?xmt=AQF0u9CBT-hbbUQ5i7fPTh4MmZAm4qcT53FyUupjFubsSTEueVzGLUhfV7crooT5gKkvyaA&slof=1",
      "content": "https://www.threads.com/@aron_aiconbia/post/DU7x-bij7gj?xmt=AQF0u9CBT-hbbUQ5i7fPTh4MmZAm4qcT53FyUupjFubsSTEueVzGLUhfV7crooT5gKkvyaA&slof=1",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-814a-b27c-e51737db7b7a",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@aron_aiconbia/post/DU7x-bij7gj?xmt=AQF0u9CBT-hbbUQ5i7fPTh4MmZAm4qcT53FyUupjFubsSTEueVzGLUhfV7crooT5gKkvyaA&slof=1",
      "content": "https://www.threads.com/@aron_aiconbia/post/DU7x-bij7gj?xmt=AQF0u9CBT-hbbUQ5i7fPTh4MmZAm4qcT53FyUupjFubsSTEueVzGLUhfV7crooT5gKkvyaA&slof=1",
      "images": null
    },
    {
      "memberId": "3016400e-9268-810b-81a5-d1797af75675",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.instagram.com/p/DU7inEKiSXq/?igsh=MWd2YXZoMTZsenRncg==",
      "content": "https://www.instagram.com/p/DU7inEKiSXq/?igsh=MWd2YXZoMTZsenRncg==",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-8112-9aff-ccc87d661968",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@slowwbuilder/post/DU7ho7LErcH",
      "content": "https://www.threads.com/@slowwbuilder/post/DU7ho7LErcH",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DU7GGZjCU_F?xmt=AQF0HqsJ_mERO2B28Hnnq88ZYqypJ7Rp2qXdgVcaj37bzw",
      "content": "https://www.threads.com/@dodo_list_/post/DU7GGZjCU_F?xmt=AQF0HqsJ_mERO2B28Hnnq88ZYqypJ7Rp2qXdgVcaj37bzw",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81eb-801a-ed13c7acb4c6",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@dodo_list_/post/DU7GGZjCU_F?xmt=AQF0HqsJ_mERO2B28Hnnq88ZYqypJ7Rp2qXdgVcaj37bzw",
      "content": "https://www.threads.com/@dodo_list_/post/DU7GGZjCU_F?xmt=AQF0HqsJ_mERO2B28Hnnq88ZYqypJ7Rp2qXdgVcaj37bzw",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81eb-a6f4-cecebc61bfbb",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://naver.me/FriDOW7L",
      "content": "https://naver.me/FriDOW7L",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Shortform"
      ],
      "link": "https://www.threads.com/@makekim.kr/post/DU7Hc-SEmBZ",
      "content": "https://www.threads.com/@makekim.kr/post/DU7Hc-SEmBZ",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-15",
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
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Builder Basic"
      ],
      "link": "https://claim-safe-flow.lovable.app/",
      "content": "AI 기반 운수업 금융 운영 및 리스크 인프라 플랫폼\n\n\nPRD\n화일로 첨부\n\n랜딩 페이지\nhttps://claim-safe-flow.lovable.app/\n\n랜딩 페이지는 lovable 업글 후 재정비 해보도록 하겠습니다",
      "images": null
    },
    {
      "memberId": "3016400e-9268-812d-8baa-f9ec2f57a336",
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Longform"
      ],
      "link": "https://open.substack.com/pub/daddoctordeveloper/p/8-years-of-surgery-10-months-away?utm_campaign=post&utm_medium=email",
      "content": "https://open.substack.com/pub/daddoctordeveloper/p/8-years-of-surgery-10-months-away?utm_campaign=post&utm_medium=email",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472931281028251823/SKILL.md?ex=69945da7&is=69930c27&hm=ca45f769397a895c7845bc550ab399afc5a8b75da90706d79b10befb6b5eaba8&",
      "content": "연휴 이슈로 날짜를 착각해 뒤늦게 제출합니다.\n코드 리포지토리에서의 작업 이력을 (Git과 별개로) history.md 파일에 기록하는 스킬을 만들어 보았습니다. Git 커밋에는 명시적으로 포함되지 않는 작업들, 이를테면 코드 분석, 방향성 논의, 설계 문서 작성, 기존 PRD 보완 등의 작업을 수행하고 그 결과를 기록으로 남길 때 사용하고 있습니다.",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-8109-b7af-e8094d4e2c68",
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
      "date": "2026-02-15",
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
        "AI Agent"
      ],
      "link": "https://cdn.discordapp.com/attachments/1470031821134631004/1472635174973079575/skill.md?ex=699349e1&is=6991f861&hm=aa1b0e1519ac87f0c1673fd056eb346c7f1f4a6c281d700ffdd13353f2d2f70b&",
      "content": "클로드의 부족한점을 코덱스로 보완하기 위해 만든 스킬이고 예전부터 자주 애용하고 있습니다.",
      "images": null
    },
    {
      "memberId": "2df6400e-9268-81c7-966d-e2f1f6a8030c",
      "date": "2026-02-15",
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
        "AI Agent"
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
        "AI Agent"
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
        "Longform"
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
        "Longform"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "AI Agent"
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
        "Builder Basic"
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
        "AI Agent"
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
        "Builder Basic"
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
        "AI Agent"
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
        "AI Agent"
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
        "Sales"
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
        "Sales"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "AI Agent"
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
        "AI Agent"
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
        "Sales"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "Longform"
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
        "Sales"
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
        "Sales"
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
        "Sales"
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
        "AI Agent"
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
        "AI Agent"
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
        "Longform"
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
        "AI Agent"
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
        "Builder Basic"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "Builder Basic"
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
        "Sales"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "AI Agent"
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
        "Sales"
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
        "Sales"
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
        "AI Agent"
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
        "AI Agent"
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
        "Builder Basic"
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
        "AI Agent"
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
        "Builder Basic"
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
        "AI Agent"
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
        "Builder Basic"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "Sales"
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
        "AI Agent"
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
        "AI Agent"
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
        "Sales"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "Longform"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "Longform"
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
        "AI Agent"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "Sales"
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
        "Sales"
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
        "Builder Basic"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "Sales"
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
        "Sales"
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
        "Builder Basic"
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
        "AI Agent"
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
        "Builder Basic"
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
        "Longform"
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
        "Longform"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "Sales"
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
        "Sales"
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
        "Builder Basic"
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
        "Builder Basic"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "Sales"
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
        "Builder Basic"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "Builder Basic"
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
        "AI Agent"
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
        "AI Agent"
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
        "Builder Basic"
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
        "Builder Basic"
      ],
      "link": "https://k-friend-route.lovable.app",
      "content": "아직은 어설프지만 제출합니다~\n\nPRD : \n랜딩페이지 : https://k-friend-route.lovable.app",
      "images": null
    },
    {
      "memberId": "2fd6400e-9268-81e2-b354-c403515ec0de",
      "date": "2026-02-15",
      "status": "submitted",
      "tracks": [
        "Longform"
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
        "AI Agent"
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
        "AI Agent"
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
        "AI Agent"
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
        "Longform"
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
        "AI Agent"
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
        "Longform"
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
        "AI Agent"
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
        "Builder Basic"
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
        "Sales"
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
  "lastUpdated": "2026-03-10T20:27:39.339069"
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
