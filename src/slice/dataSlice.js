import { createSlice } from "@reduxjs/toolkit";



const dataSlice = createSlice({
  name: 'data', //名稱
  initialState: { //初始數值
        themeData:[
                    {
                    id: "cat-城市漫遊者",
                    tip: "行.",
                    title: "城市漫遊者",
                    img: `${import.meta.env.BASE_URL}images/theme-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-1-sm.png`,
                    children: [
                    {
                    id: "sub-城市漫遊者-1",
                    title: "夜行咖啡的城市對話",
                    upLoadData: {
                    year: "2024",
                    month: "9",
                    day: "26"
                    },
                    Introduction: "夜行咖啡的城市對話是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-1-sm.png`,
                    MembersOnly: true,
                    contents: [],
                    tags: [
                    {
                    title: "靜謐"
                    },
                    {
                    title: "攝影"
                    },
                    {
                    title: "星空"
                    },
                    {
                    title: "森林"
                    }
                    ],
                    ctr: 5644
                    },
                    {
                    id: "sub-城市漫遊者-2",
                    title: "高樓之巔的冥想空間",
                    upLoadData: {
                    year: "2025",
                    month: "1",
                    day: "18"
                    },
                    Introduction: "高樓之巔的冥想空間是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-2-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "不經意地走入這個地方，卻讓我收穫滿滿，高樓之巔的冥想空間是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-2-sm.png`
                    },
                    {
                    type: "text",
                    content: "高樓之巔的冥想空間是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 我想，每個人都值得擁有這樣的一段體驗。"
                    }
                    ],
                    tags: [
                    {
                    title: "療癒"
                    },
                    {
                    title: "攝影"
                    },
                    {
                    title: "靜謐"
                    }
                    ],
                    ctr: 8762
                    },
                    {
                    id: "sub-城市漫遊者-3",
                    title: "黃昏地鐵的故事集",
                    upLoadData: {
                    year: "2024",
                    month: "12",
                    day: "3"
                    },
                    Introduction: "黃昏地鐵的故事集是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-3-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "這次的旅程真是令人難忘，黃昏地鐵的故事集是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-3-sm.png`
                    },
                    {
                    type: "text",
                    content: "黃昏地鐵的故事集是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "建築"
                    },
                    {
                    title: "靜謐"
                    },
                    {
                    title: "森林"
                    }
                    ],
                    ctr: 5045
                    },
                    {
                    id: "sub-城市漫遊者-4",
                    title: "街角舊書店的回憶錄",
                    upLoadData: {
                    year: "2025",
                    month: "1",
                    day: "5"
                    },
                    Introduction: "街角舊書店的回憶錄是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-4-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "這次的旅程真是令人難忘，街角舊書店的回憶錄是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-4-sm.png`
                    },
                    {
                    type: "text",
                    content: "街角舊書店的回憶錄是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 希望未來還能再次踏上這段旅程。"
                    }
                    ],
                    tags: [
                    {
                    title: "風景"
                    },
                    {
                    title: "森林"
                    },
                    {
                    title: "療癒"
                    },
                    {
                    title: "露營"
                    },
                    {
                    title: "建築"
                    }
                    ],
                    ctr: 7900
                    },
                    {
                    id: "sub-城市漫遊者-5",
                    title: "晨間慢跑的都市節奏",
                    upLoadData: {
                    year: "2024",
                    month: "11",
                    day: "3"
                    },
                    Introduction: "晨間慢跑的都市節奏是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-5.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-5-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "這場經歷讓我感受到生活中不一樣的節奏，晨間慢跑的都市節奏是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "晨間慢跑的都市節奏是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "藝術"
                    },
                    {
                    title: "生活"
                    },
                    {
                    title: "森林"
                    },
                    {
                    title: "秘境"
                    }
                    ],
                    ctr: 5010
                    }
                    ]
                    },
                    {
                    id: "cat-秘境尋蹤人",
                    tip: "行.",
                    title: "秘境尋蹤人",
                    img: `${import.meta.env.BASE_URL}images/theme-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-3-sm.png`,
                    children: [
                    {
                    id: "sub-秘境尋蹤人-1",
                    title: "私人島嶼的露營奇遇記",
                    upLoadData: {
                    year: "2024",
                    month: "11",
                    day: "8"
                    },
                    Introduction: "私人島嶼的露營奇遇記是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-6.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-6-sm.png`,
                    MembersOnly: true,
                    contents: [],
                    tags: [
                    {
                    title: "文化"
                    },
                    {
                    title: "旅程"
                    },
                    {
                    title: "攝影"
                    },
                    {
                    title: "星空"
                    }
                    ],
                    ctr: 5922
                    },
                    {
                    id: "sub-秘境尋蹤人-2",
                    title: "林間木屋的晨光冥想",
                    upLoadData: {
                    year: "2025",
                    month: "6",
                    day: "4"
                    },
                    Introduction: "林間木屋的晨光冥想是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-7.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-7-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "陽光與微風在這裡構築了最溫柔的畫面，林間木屋的晨光冥想是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-2-sm.png`
                    },
                    {
                    type: "text",
                    content: "林間木屋的晨光冥想是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "露營"
                    },
                    {
                    title: "旅程"
                    },
                    {
                    title: "城市"
                    },
                    {
                    title: "建築"
                    }
                    ],
                    ctr: 2153
                    },
                    {
                    id: "sub-秘境尋蹤人-3",
                    title: "山嶺雲海的夜間探險",
                    upLoadData: {
                    year: "2025",
                    month: "1",
                    day: "5"
                    },
                    Introduction: "山嶺雲海的夜間探險是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-8.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-8-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "陽光與微風在這裡構築了最溫柔的畫面，山嶺雲海的夜間探險是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-3-sm.png`
                    },
                    {
                    type: "text",
                    content: "山嶺雲海的夜間探險是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 也許每一次遠行，都是一次心靈的洗滌。"
                    }
                    ],
                    tags: [
                    {
                    title: "靜謐"
                    },
                    {
                    title: "生活"
                    },
                    {
                    title: "風景"
                    },
                    {
                    title: "沙灘"
                    },
                    {
                    title: "冥想"
                    }
                    ],
                    ctr: 6568
                    },
                    {
                    id: "sub-秘境尋蹤人-4",
                    title: "幽谷溪流的午後茶",
                    upLoadData: {
                    year: "2024",
                    month: "11",
                    day: "10"
                    },
                    Introduction: "幽谷溪流的午後茶是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-1-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "一切的開始源自於一次靈感的碰撞，幽谷溪流的午後茶是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-4-sm.png`
                    },
                    {
                    type: "text",
                    content: "幽谷溪流的午後茶是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 希望未來還能再次踏上這段旅程。"
                    }
                    ],
                    tags: [
                    {
                    title: "建築"
                    },
                    {
                    title: "自然"
                    },
                    {
                    title: "城市"
                    }
                    ],
                    ctr: 1140
                    },
                    {
                    id: "sub-秘境尋蹤人-5",
                    title: "沙洲日出攝影手記",
                    upLoadData: {
                    year: "2024",
                    month: "10",
                    day: "27"
                    },
                    Introduction: "沙洲日出攝影手記是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-2-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "一切的開始源自於一次靈感的碰撞，沙洲日出攝影手記是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "沙洲日出攝影手記是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 希望未來還能再次踏上這段旅程。"
                    }
                    ],
                    tags: [
                    {
                    title: "城市"
                    },
                    {
                    title: "建築"
                    },
                    {
                    title: "生活"
                    },
                    {
                    title: "風景"
                    }
                    ],
                    ctr: 7208
                    }
                    ]
                    },
                    {
                    id: "cat-品味設計家",
                    tip: "住.",
                    title: "品味設計家",
                    img: `${import.meta.env.BASE_URL}images/theme-5.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-5-sm.png`,
                    children: [
                    {
                    id: "sub-品味設計家-1",
                    title: "現代侘寂風的家居哲學",
                    upLoadData: {
                    year: "2025",
                    month: "5",
                    day: "13"
                    },
                    Introduction: "現代侘寂風的家居哲學是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-3-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "一切的開始源自於一次靈感的碰撞，現代侘寂風的家居哲學是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "現代侘寂風的家居哲學是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "森林"
                    },
                    {
                    title: "風格"
                    },
                    {
                    title: "城市"
                    }
                    ],
                    ctr: 6508
                    },
                    {
                    id: "sub-品味設計家-2",
                    title: "光影中的生活設計",
                    upLoadData: {
                    year: "2025",
                    month: "1",
                    day: "24"
                    },
                    Introduction: "光影中的生活設計是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-4-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "不經意地走入這個地方，卻讓我收穫滿滿，光影中的生活設計是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-2-sm.png`
                    },
                    {
                    type: "text",
                    content: "光影中的生活設計是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 我想，每個人都值得擁有這樣的一段體驗。"
                    }
                    ],
                    tags: [
                    {
                    title: "藝術"
                    },
                    {
                    title: "攝影"
                    },
                    {
                    title: "靜謐"
                    },
                    {
                    title: "探索"
                    }
                    ],
                    ctr: 1471
                    },
                    {
                    id: "sub-品味設計家-3",
                    title: "北歐風格的極簡靜謐",
                    upLoadData: {
                    year: "2025",
                    month: "4",
                    day: "11"
                    },
                    Introduction: "北歐風格的極簡靜謐是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-5.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-5-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "這場經歷讓我感受到生活中不一樣的節奏，北歐風格的極簡靜謐是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-3-sm.png`
                    },
                    {
                    type: "text",
                    content: "北歐風格的極簡靜謐是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 讓人不禁想要多停留幾日，細細品味這份靜謐。"
                    }
                    ],
                    tags: [
                    {
                    title: "自然"
                    },
                    {
                    title: "星空"
                    },
                    {
                    title: "城市"
                    },
                    {
                    title: "生活"
                    }
                    ],
                    ctr: 2814
                    },
                    {
                    id: "sub-品味設計家-4",
                    title: "設計師椅子的故事",
                    upLoadData: {
                    year: "2025",
                    month: "5",
                    day: "30"
                    },
                    Introduction: "設計師椅子的故事是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-6.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-6-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "陽光與微風在這裡構築了最溫柔的畫面，設計師椅子的故事是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-4-sm.png`
                    },
                    {
                    type: "text",
                    content: "設計師椅子的故事是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "攝影"
                    },
                    {
                    title: "冥想"
                    },
                    {
                    title: "風格"
                    },
                    {
                    title: "自然"
                    },
                    {
                    title: "森林"
                    }
                    ],
                    ctr: 9635
                    },
                    {
                    id: "sub-品味設計家-5",
                    title: "空間美學的日常詩意",
                    upLoadData: {
                    year: "2024",
                    month: "10",
                    day: "7"
                    },
                    Introduction: "空間美學的日常詩意是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-7.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-7-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "不經意地走入這個地方，卻讓我收穫滿滿，空間美學的日常詩意是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "空間美學的日常詩意是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 我想，每個人都值得擁有這樣的一段體驗。"
                    }
                    ],
                    tags: [
                    {
                    title: "攝影"
                    },
                    {
                    title: "藝術"
                    },
                    {
                    title: "旅程"
                    }
                    ],
                    ctr: 6977
                    }
                    ]
                    },
                    {
                    id: "cat-美食探險記",
                    tip: "食.",
                    title: "美食探險記",
                    img: `${import.meta.env.BASE_URL}images/theme-8.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-8-sm.png`,
                    children: [
                    {
                    id: "sub-美食探險記-1",
                    title: "老街裡的深夜拉麵",
                    upLoadData: {
                    year: "2025",
                    month: "6",
                    day: "27"
                    },
                    Introduction: "老街裡的深夜拉麵是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-8.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-8-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "一切的開始源自於一次靈感的碰撞，老街裡的深夜拉麵是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "老街裡的深夜拉麵是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 讓人不禁想要多停留幾日，細細品味這份靜謐。"
                    }
                    ],
                    tags: [
                    {
                    title: "生活"
                    },
                    {
                    title: "旅程"
                    },
                    {
                    title: "風格"
                    },
                    {
                    title: "風景"
                    },
                    {
                    title: "療癒"
                    }
                    ],
                    ctr: 5839
                    },
                    {
                    id: "sub-美食探險記-2",
                    title: "異國香料市集探訪",
                    upLoadData: {
                    year: "2025",
                    month: "4",
                    day: "1"
                    },
                    Introduction: "異國香料市集探訪是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-1-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "這次的旅程真是令人難忘，異國香料市集探訪是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-2-sm.png`
                    },
                    {
                    type: "text",
                    content: "異國香料市集探訪是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 我想，每個人都值得擁有這樣的一段體驗。"
                    }
                    ],
                    tags: [
                    {
                    title: "風格"
                    },
                    {
                    title: "風景"
                    },
                    {
                    title: "冥想"
                    }
                    ],
                    ctr: 3043
                    },
                    {
                    id: "sub-美食探險記-3",
                    title: "巷弄裡的私房甜點",
                    upLoadData: {
                    year: "2024",
                    month: "12",
                    day: "21"
                    },
                    Introduction: "巷弄裡的私房甜點是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-2-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "這場經歷讓我感受到生活中不一樣的節奏，巷弄裡的私房甜點是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-3-sm.png`
                    },
                    {
                    type: "text",
                    content: "巷弄裡的私房甜點是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 我想，每個人都值得擁有這樣的一段體驗。"
                    }
                    ],
                    tags: [
                    {
                    title: "探索"
                    },
                    {
                    title: "沙灘"
                    },
                    {
                    title: "生活"
                    },
                    {
                    title: "城市"
                    }
                    ],
                    ctr: 1267
                    },
                    {
                    id: "sub-美食探險記-4",
                    title: "原始炭火的肉香回憶",
                    upLoadData: {
                    year: "2024",
                    month: "10",
                    day: "1"
                    },
                    Introduction: "原始炭火的肉香回憶是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-3-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "不經意地走入這個地方，卻讓我收穫滿滿，原始炭火的肉香回憶是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-4-sm.png`
                    },
                    {
                    type: "text",
                    content: "原始炭火的肉香回憶是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 也許每一次遠行，都是一次心靈的洗滌。"
                    }
                    ],
                    tags: [
                    {
                    title: "星空"
                    },
                    {
                    title: "風格"
                    },
                    {
                    title: "藝術"
                    }
                    ],
                    ctr: 5994
                    },
                    {
                    id: "sub-美食探險記-5",
                    title: "露天市集的食物之旅",
                    upLoadData: {
                    year: "2025",
                    month: "7",
                    day: "16"
                    },
                    Introduction: "露天市集的食物之旅是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-4-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "一切的開始源自於一次靈感的碰撞，露天市集的食物之旅是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "露天市集的食物之旅是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 也許每一次遠行，都是一次心靈的洗滌。"
                    }
                    ],
                    tags: [
                    {
                    title: "沙灘"
                    },
                    {
                    title: "藝術"
                    },
                    {
                    title: "文化"
                    }
                    ],
                    ctr: 9892
                    }
                    ]
                    },
                    {
                    id: "cat-美學建築誌",
                    tip: "住.",
                    title: "美學建築誌",
                    img: `${import.meta.env.BASE_URL}images/theme-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-2-sm.png`,
                    children: [
                    {
                    id: "sub-美學建築誌-1",
                    title: "玻璃屋的晨光實驗",
                    upLoadData: {
                    year: "2025",
                    month: "5",
                    day: "1"
                    },
                    Introduction: "玻璃屋的晨光實驗是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-5.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-5-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "這場經歷讓我感受到生活中不一樣的節奏，玻璃屋的晨光實驗是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "玻璃屋的晨光實驗是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "攝影"
                    },
                    {
                    title: "自然"
                    },
                    {
                    title: "探索"
                    },
                    {
                    title: "城市"
                    },
                    {
                    title: "星空"
                    }
                    ],
                    ctr: 1580
                    },
                    {
                    id: "sub-美學建築誌-2",
                    title: "紅磚老宅的文青新生",
                    upLoadData: {
                    year: "2024",
                    month: "9",
                    day: "30"
                    },
                    Introduction: "紅磚老宅的文青新生是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-6.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-6-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "這次的旅程真是令人難忘，紅磚老宅的文青新生是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-2-sm.png`
                    },
                    {
                    type: "text",
                    content: "紅磚老宅的文青新生是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 也許每一次遠行，都是一次心靈的洗滌。"
                    }
                    ],
                    tags: [
                    {
                    title: "星空"
                    },
                    {
                    title: "露營"
                    },
                    {
                    title: "藝術"
                    },
                    {
                    title: "工藝"
                    }
                    ],
                    ctr: 2811
                    },
                    {
                    id: "sub-美學建築誌-3",
                    title: "曲面結構的建築奇想",
                    upLoadData: {
                    year: "2024",
                    month: "12",
                    day: "1"
                    },
                    Introduction: "曲面結構的建築奇想是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-7.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-7-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "這次的旅程真是令人難忘，曲面結構的建築奇想是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-3-sm.png`
                    },
                    {
                    type: "text",
                    content: "曲面結構的建築奇想是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 讓人不禁想要多停留幾日，細細品味這份靜謐。"
                    }
                    ],
                    tags: [
                    {
                    title: "星空"
                    },
                    {
                    title: "生活"
                    },
                    {
                    title: "藝術"
                    },
                    {
                    title: "露營"
                    },
                    {
                    title: "登山"
                    }
                    ],
                    ctr: 4231
                    },
                    {
                    id: "sub-美學建築誌-4",
                    title: "建築與自然的對話",
                    upLoadData: {
                    year: "2024",
                    month: "10",
                    day: "11"
                    },
                    Introduction: "建築與自然的對話是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-8.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-8-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "陽光與微風在這裡構築了最溫柔的畫面，建築與自然的對話是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-4-sm.png`
                    },
                    {
                    type: "text",
                    content: "建築與自然的對話是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "生活"
                    },
                    {
                    title: "風景"
                    },
                    {
                    title: "建築"
                    },
                    {
                    title: "靜謐"
                    }
                    ],
                    ctr: 5359
                    },
                    {
                    id: "sub-美學建築誌-5",
                    title: "地景中的建築詩篇",
                    upLoadData: {
                    year: "2025",
                    month: "1",
                    day: "19"
                    },
                    Introduction: "地景中的建築詩篇是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-1-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "陽光與微風在這裡構築了最溫柔的畫面，地景中的建築詩篇是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "地景中的建築詩篇是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 也許每一次遠行，都是一次心靈的洗滌。"
                    }
                    ],
                    tags: [
                    {
                    title: "藝術"
                    },
                    {
                    title: "風景"
                    },
                    {
                    title: "探索"
                    },
                    {
                    title: "建築"
                    }
                    ],
                    ctr: 3901
                    }
                    ]
                    },
                    {
                    id: "cat-慢活生活行",
                    tip: "行.",
                    title: "慢活生活行",
                    img: `${import.meta.env.BASE_URL}images/theme-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-4-sm.png`,
                    children: [
                    {
                    id: "sub-慢活生活行-1",
                    title: "日常慢旅的步調日記",
                    upLoadData: {
                    year: "2025",
                    month: "2",
                    day: "26"
                    },
                    Introduction: "日常慢旅的步調日記是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-2-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "這場經歷讓我感受到生活中不一樣的節奏，日常慢旅的步調日記是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "日常慢旅的步調日記是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 讓人不禁想要多停留幾日，細細品味這份靜謐。"
                    }
                    ],
                    tags: [
                    {
                    title: "工藝"
                    },
                    {
                    title: "生活"
                    },
                    {
                    title: "攝影"
                    },
                    {
                    title: "療癒"
                    }
                    ],
                    ctr: 7098
                    },
                    {
                    id: "sub-慢活生活行-2",
                    title: "市集晨光的微旅行",
                    upLoadData: {
                    year: "2025",
                    month: "6",
                    day: "4"
                    },
                    Introduction: "市集晨光的微旅行是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-3-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "不經意地走入這個地方，卻讓我收穫滿滿，市集晨光的微旅行是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-2-sm.png`
                    },
                    {
                    type: "text",
                    content: "市集晨光的微旅行是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 希望未來還能再次踏上這段旅程。"
                    }
                    ],
                    tags: [
                    {
                    title: "文化"
                    },
                    {
                    title: "旅程"
                    },
                    {
                    title: "風景"
                    }
                    ],
                    ctr: 8078
                    },
                    {
                    id: "sub-慢活生活行-3",
                    title: "午後書店的沉靜時光",
                    upLoadData: {
                    year: "2025",
                    month: "1",
                    day: "25"
                    },
                    Introduction: "午後書店的沉靜時光是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-4-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "陽光與微風在這裡構築了最溫柔的畫面，午後書店的沉靜時光是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-3-sm.png`
                    },
                    {
                    type: "text",
                    content: "午後書店的沉靜時光是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 也許每一次遠行，都是一次心靈的洗滌。"
                    }
                    ],
                    tags: [
                    {
                    title: "冥想"
                    },
                    {
                    title: "秘境"
                    },
                    {
                    title: "城市"
                    },
                    {
                    title: "登山"
                    },
                    {
                    title: "探索"
                    }
                    ],
                    ctr: 6353
                    },
                    {
                    id: "sub-慢活生活行-4",
                    title: "巷弄花園的觀察筆記",
                    upLoadData: {
                    year: "2024",
                    month: "12",
                    day: "5"
                    },
                    Introduction: "巷弄花園的觀察筆記是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-5.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-5-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "這次的旅程真是令人難忘，巷弄花園的觀察筆記是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-4-sm.png`
                    },
                    {
                    type: "text",
                    content: "巷弄花園的觀察筆記是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "攝影"
                    },
                    {
                    title: "冥想"
                    },
                    {
                    title: "靜謐"
                    }
                    ],
                    ctr: 2774
                    },
                    {
                    id: "sub-慢活生活行-5",
                    title: "單車小徑的隨想",
                    upLoadData: {
                    year: "2025",
                    month: "7",
                    day: "12"
                    },
                    Introduction: "單車小徑的隨想是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-6.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-6-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "一切的開始源自於一次靈感的碰撞，單車小徑的隨想是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "單車小徑的隨想是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 也許每一次遠行，都是一次心靈的洗滌。"
                    }
                    ],
                    tags: [
                    {
                    title: "風景"
                    },
                    {
                    title: "生活"
                    },
                    {
                    title: "森林"
                    },
                    {
                    title: "文化"
                    }
                    ],
                    ctr: 7209
                    }
                    ]
                    },
                    {
                    id: "cat-工藝匠心賞",
                    tip: "玩.",
                    title: "工藝匠心賞",
                    img: `${import.meta.env.BASE_URL}images/theme-6.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-6-sm.png`,
                    children: [
                    {
                    id: "sub-工藝匠心賞-1",
                    title: "陶土之間的溫度記憶",
                    upLoadData: {
                    year: "2025",
                    month: "4",
                    day: "10"
                    },
                    Introduction: "陶土之間的溫度記憶是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-7.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-7-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "陽光與微風在這裡構築了最溫柔的畫面，陶土之間的溫度記憶是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "陶土之間的溫度記憶是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 也許每一次遠行，都是一次心靈的洗滌。"
                    }
                    ],
                    tags: [
                    {
                    title: "森林"
                    },
                    {
                    title: "旅程"
                    },
                    {
                    title: "攝影"
                    },
                    {
                    title: "登山"
                    }
                    ],
                    ctr: 5998
                    },
                    {
                    id: "sub-工藝匠心賞-2",
                    title: "木雕工坊的創作瞬間",
                    upLoadData: {
                    year: "2025",
                    month: "6",
                    day: "10"
                    },
                    Introduction: "木雕工坊的創作瞬間是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-8.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-8-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "這場經歷讓我感受到生活中不一樣的節奏，木雕工坊的創作瞬間是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-2-sm.png`
                    },
                    {
                    type: "text",
                    content: "木雕工坊的創作瞬間是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 希望未來還能再次踏上這段旅程。"
                    }
                    ],
                    tags: [
                    {
                    title: "登山"
                    },
                    {
                    title: "探索"
                    },
                    {
                    title: "生活"
                    },
                    {
                    title: "沙灘"
                    },
                    {
                    title: "旅程"
                    }
                    ],
                    ctr: 3246
                    },
                    {
                    id: "sub-工藝匠心賞-3",
                    title: "手工皂的氣味故事",
                    upLoadData: {
                    year: "2025",
                    month: "5",
                    day: "13"
                    },
                    Introduction: "手工皂的氣味故事是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-1-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "這次的旅程真是令人難忘，手工皂的氣味故事是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-3-sm.png`
                    },
                    {
                    type: "text",
                    content: "手工皂的氣味故事是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 我想，每個人都值得擁有這樣的一段體驗。"
                    }
                    ],
                    tags: [
                    {
                    title: "靜謐"
                    },
                    {
                    title: "風景"
                    },
                    {
                    title: "文化"
                    },
                    {
                    title: "攝影"
                    }
                    ],
                    ctr: 5025
                    },
                    {
                    id: "sub-工藝匠心賞-4",
                    title: "藍染的時光與圖騰",
                    upLoadData: {
                    year: "2024",
                    month: "12",
                    day: "13"
                    },
                    Introduction: "藍染的時光與圖騰是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-2-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "陽光與微風在這裡構築了最溫柔的畫面，藍染的時光與圖騰是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-4-sm.png`
                    },
                    {
                    type: "text",
                    content: "藍染的時光與圖騰是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "風景"
                    },
                    {
                    title: "旅程"
                    },
                    {
                    title: "工藝"
                    },
                    {
                    title: "沙灘"
                    }
                    ],
                    ctr: 7209
                    },
                    {
                    id: "sub-工藝匠心賞-5",
                    title: "編織生活的靜心時刻",
                    upLoadData: {
                    year: "2025",
                    month: "5",
                    day: "21"
                    },
                    Introduction: "編織生活的靜心時刻是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-3-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "一切的開始源自於一次靈感的碰撞，編織生活的靜心時刻是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "編織生活的靜心時刻是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 希望未來還能再次踏上這段旅程。"
                    }
                    ],
                    tags: [
                    {
                    title: "冥想"
                    },
                    {
                    title: "露營"
                    },
                    {
                    title: "探索"
                    }
                    ],
                    ctr: 5886
                    }
                    ]
                    },
                    {
                    id: "cat-時尚先鋒派",
                    tip: "衣.",
                    title: "時尚先鋒派",
                    img: `${import.meta.env.BASE_URL}images/theme-7.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-7-sm.png`,
                    children: [
                    {
                    id: "sub-時尚先鋒派-1",
                    title: "解構剪裁的時尚革命",
                    upLoadData: {
                    year: "2024",
                    month: "9",
                    day: "26"
                    },
                    Introduction: "解構剪裁的時尚革命是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-4-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "陽光與微風在這裡構築了最溫柔的畫面，解構剪裁的時尚革命是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "解構剪裁的時尚革命是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 也許每一次遠行，都是一次心靈的洗滌。"
                    }
                    ],
                    tags: [
                    {
                    title: "冥想"
                    },
                    {
                    title: "風格"
                    },
                    {
                    title: "療癒"
                    },
                    {
                    title: "文化"
                    }
                    ],
                    ctr: 2800
                    },
                    {
                    id: "sub-時尚先鋒派-2",
                    title: "前衛街頭的潮流軌跡",
                    upLoadData: {
                    year: "2025",
                    month: "2",
                    day: "4"
                    },
                    Introduction: "前衛街頭的潮流軌跡是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-5.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-5-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "一切的開始源自於一次靈感的碰撞，前衛街頭的潮流軌跡是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-2.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-2-sm.png`
                    },
                    {
                    type: "text",
                    content: "前衛街頭的潮流軌跡是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "旅程"
                    },
                    {
                    title: "星空"
                    },
                    {
                    title: "工藝"
                    }
                    ],
                    ctr: 1693
                    },
                    {
                    id: "sub-時尚先鋒派-3",
                    title: "廢材再製的風格創意",
                    upLoadData: {
                    year: "2024",
                    month: "10",
                    day: "22"
                    },
                    Introduction: "廢材再製的風格創意是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-6.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-6-sm.png`,
                    MembersOnly: false,
                    contents: [
                    {
                    type: "text",
                    content: "這次的旅程真是令人難忘，廢材再製的風格創意是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-3.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-3-sm.png`
                    },
                    {
                    type: "text",
                    content: "廢材再製的風格創意是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 也許每一次遠行，都是一次心靈的洗滌。"
                    }
                    ],
                    tags: [
                    {
                    title: "秘境"
                    },
                    {
                    title: "沙灘"
                    },
                    {
                    title: "生活"
                    },
                    {
                    title: "森林"
                    }
                    ],
                    ctr: 4464
                    },
                    {
                    id: "sub-時尚先鋒派-4",
                    title: "時裝週的幕後故事",
                    upLoadData: {
                    year: "2025",
                    month: "6",
                    day: "20"
                    },
                    Introduction: "時裝週的幕後故事是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-7.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-7-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "陽光與微風在這裡構築了最溫柔的畫面，時裝週的幕後故事是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-4.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-4-sm.png`
                    },
                    {
                    type: "text",
                    content: "時裝週的幕後故事是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 是我近期最深刻的一段記憶。"
                    }
                    ],
                    tags: [
                    {
                    title: "登山"
                    },
                    {
                    title: "探索"
                    },
                    {
                    title: "森林"
                    },
                    {
                    title: "旅程"
                    },
                    {
                    title: "生活"
                    }
                    ],
                    ctr: 8130
                    },
                    {
                    id: "sub-時尚先鋒派-5",
                    title: "時尚與態度的界線挑戰",
                    upLoadData: {
                    year: "2025",
                    month: "3",
                    day: "23"
                    },
                    Introduction: "時尚與態度的界線挑戰是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感...",
                    img: `${import.meta.env.BASE_URL}images/theme-8.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/theme-8-sm.png`,
                    MembersOnly: true,
                    contents: [
                    {
                    type: "text",
                    content: "這次的旅程真是令人難忘，時尚與態度的界線挑戰是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感..."
                    },
                    {
                    type: "text",
                    content: "這一切的感動無法用言語形容，只希望用文字留下紀錄。"
                    },
                    {
                    type: "img",
                    img: `${import.meta.env.BASE_URL}images/content-1.png`,
                    imgSm: `${import.meta.env.BASE_URL}images/content-1-sm.png`
                    },
                    {
                    type: "text",
                    content: "時尚與態度的界線挑戰是一段獨特的生活旅程，用不同視角發現日常中的不凡故事與美感... 讓人不禁想要多停留幾日，細細品味這份靜謐。"
                    }
                    ],
                    tags: [
                    {
                    title: "沙灘"
                    },
                    {
                    title: "森林"
                    },
                    {
                    title: "風景"
                    },
                    {
                    title: "藝術"
                    }
                    ],
                    ctr: 7036
                    }
                    ]
                    }
                  ],

        allThemeTabData:"所有文章",

        aboutUsPageData:{
          introImg:`${import.meta.env.BASE_URL}images/about-banner.png`,
          introImgSm:`${import.meta.env.BASE_URL}images/about-banner-sm.png`,
          introduce:[
            {
              img:`${import.meta.env.BASE_URL}images/about-1.png`,
              imgSm:`${import.meta.env.BASE_URL}images/about-1-sm.png`,
              title:"Vivre",
              text:[
                {
                  content:`vivre 這個品牌名稱源自法語,意為"生活"、"活著"。它象徵著我們對於高品質生活的熱愛與追求。vivre 旨在成為一個分享美好生活體驗、發掘生活質感的平台。`,
                }
              ],
              detail:{
                title:"我們的品牌價值",
                items:[
                  {title:"熱愛生活,好奇心永存"},
                  {title:"品味獨具,講究生活質感"},
                  {title:"分享真實生活,啟發生活靈感"},
                  {title:"推廣慢生活哲學,注重內在修為"},
                ]
              }
            },
            {
              img:`${import.meta.env.BASE_URL}images/about-2.png`,
              imgSm:`${import.meta.env.BASE_URL}images/about-2-sm.png`,
              title:"風格特色",
              text:[
                {
                  content:`vivre 所展現的風格特色,可以用知性、親和、用心、優雅與獨特這些詞語來概括。我們講求內容的原創性與探索精神,不跟風追隨潮流話題,而是真誠分享獨特的生活視角與體驗。無論是旅行、美食、居家、時尚等生活領域,我們都希望能夠呈現出與眾不同、縝密入微、內外兼具的見解,給讀者帶來嶄新的感受和啟迪。`,
                },
                {
                  content:`無論您是對美食、旅行、居家生活還是時尚風尚有獨到的見解和體會,只要切合vivre的價值理念與風格調性,我們都熱烈歡迎您加入這個平台,與我們一起分享和交流生活的點點滴滴。`,
                }
              ],
              detail:{
                
              }
            },
          ],
          history:{
            title:"大事記",
            items:[
              {
                timeYear:"2020",
                itemDetail:[
                  {
                    timeMonth:"5",
                    event:"創辦人茱麗葉、亞歷山大和幾個好友在巴黎開設 vivre 生活部落格,紀錄分享他們對美好生活的想法和體驗。"
                  },
                  {
                    timeMonth:"10",
                    event:"部落格內容和讀者人數逐漸累積,決定成立 vivre 品牌,開發更多元豐富的內容。"
                  },
                ]
              },
              {
                timeYear:"2021",
                itemDetail:[
                  {
                    timeMonth:"3",
                    event:"vivre網站正式上線,除了原創文字內容,還加上了視訊、音訊等多媒體形式。"
                  },
                  {
                    timeMonth:"7",
                    event:"與法國本土品牌合作,推出 vivre 首個自有產品線,包括家飾、餐飲用品等生活品味商品。"
                  },
                  {
                    timeMonth:"12",
                    event:"總瀏覽人次突破 100 萬大關,獲得實體出版社青睞,出版 vivre 生活風格書籍。"
                  },
                ]
              },
              {
                timeYear:"2022",
                itemDetail:[
                  {
                    timeMonth:"3",
                    event:"推出 vivre 生活風格線上課程,聘請各領域專家開設有深度的付費課程。"
                  },
                  {
                    timeMonth:"8",
                    event:"vivre 舉辦首屆 vivre 生活節,線上線下同步展開,現場湧入大批品牌粉絲朋友。"
                  },
                  {
                    timeMonth:"10",
                    event:"vivre 完成  A 輪融資,獲得知名風投資金青睞。"
                  },
                ]
              },
              {
                timeYear:"2023",
                itemDetail:[
                  {
                    timeMonth:"1",
                    event:`vivre 宣布品牌願景"探索更美好的生活",並推出全新視覺形象。`
                  },
                  {
                    timeMonth:"5",
                    event:"正式推出付費訂閱會員服務,提供高階獨家內容和會員優惠。"
                  },
                  {
                    timeMonth:"9",
                    event:`首次評選年度" vivre 生活風格大獎",表彰在各領域具有開創性的人物及品牌。`
                  },
                  {
                    timeMonth:"11",
                    event:`首次登場的" vivre 生活節沙龍"在全球主要城市同步舉行,線上線下吸引百萬人觀看。`
                  },
                ]
              },
            ]
          },
        },

        SubscriptionPageData:{
          title:"訂閱方案",
          dayType:[
            {
              type:"年繳",
              items:[
                {
                  type:"輕量型",
                  price:1000,
                  originPrice:1600,
                  time:"年",
                  detail:[
                    {
                      content:"每月最新文章無限閱讀",
                    },
                    {
                      content:"專屬會員限定內容",
                    },
                    {
                      content:"定期電子報",
                    },
                  ]
                },
                {
                  type:"玩咖型",
                  price:1500,
                  originPrice:2300,
                  time:"年",
                  detail:[
                    {
                      content:"每月最新文章無限閱讀",
                    },
                    {
                      content:"專屬會員限定內容",
                    },
                    {
                      content:"定期電子報",
                    },
                    {
                      content:"年度精選禮物",
                    },
                  ]
                },
                {
                  type:"家庭型",
                  price:6000,
                  originPrice:7800,
                  time:"年",
                  detail:[
                    {
                      content:"每月最新文章無限閱讀",
                    },
                    {
                      content:"專屬會員限定內容",
                    },
                    {
                      content:"定期電子報",
                    },
                    {
                      content:"年度精選禮物",
                    },
                    {
                      content:"24/7 優先客戶服務",
                    },
                    {
                      content:"為每個成員量身打造專屬行程",
                    },
                    {
                      content:"最多 5 個家庭成員共享",
                    },
                  ]
                },
              ]
            },
            {
              type:"月繳",
              items:[
                {
                  type:"輕量型",
                  price:99,
                  originPrice:180,
                  time:"月",
                  detail:[
                    {
                      content:"每月最新文章無限閱讀",
                    },
                    {
                      content:"專屬會員限定內容",
                    },
                    {
                      content:"定期電子報",
                    },
                  ]
                },
                {
                  type:"玩咖型",
                  price:159,
                  originPrice:350,
                  time:"月",
                  detail:[
                    {
                      content:"每月最新文章無限閱讀",
                    },
                    {
                      content:"專屬會員限定內容",
                    },
                    {
                      content:"定期電子報",
                    },
                    {
                      content:"年度精選禮物",
                    },
                  ]
                },
                {
                  type:"家庭型",
                  price:599,
                  originPrice:900,
                  time:"月",
                  detail:[
                    {
                      content:"每月最新文章無限閱讀",
                    },
                    {
                      content:"專屬會員限定內容",
                    },
                    {
                      content:"定期電子報",
                    },
                    {
                      content:"年度精選禮物",
                    },
                    {
                      content:"24/7 優先客戶服務",
                    },
                    {
                      content:"為每個成員量身打造專屬行程",
                    },
                    {
                      content:"最多 5 個家庭成員共享",
                    },
                  ]
                },
              ]
            },
          ]
        },

        search:null,
        
  },
  reducers: {
      allThemeTabDataUp:(state,action) => {
        state.allThemeTabData = action.payload;
      },
      searchInput: (state,action) => {
        state.search = action.payload;
      },
      
  },
});

export const { allThemeTabDataUp,searchInput } = dataSlice.actions; //是為了在外部可以使用函式
export default dataSlice.reducer;