const qnaList = [
  {
    q: "1. 제주도에 도착한 당신!!! 어떤 여행을 선호하시나요?", //J와 P질문
    a: [
      {
        answer:
          "a. 이왕 제주도도 왔는데 이것저것 어떻게든 생각해둔 일정대로 다 해보자!!!",
        type: [1, 17, 5, 10, 1, 12, 6, 0],
        //type: ["추천 코스: 2코스 (광치기-온평 올레)", "추천 코스: 18코스 (제주-조천 올레)", "추천 코스: 6코스 (쇠소깍-하효 올레)", "추천코스: 11코스 (무릉-가파도 올레)", "추천 코스: 14코스 (저지-한림 올레)", "추천 코스: 13코스 (용수-저지 올레)", "추천 코스: 7코스 (서귀포 칠십리길)", "추천 코스: 1코스 (시흥-광치기 올레)" ],
      },
      {
        answer: "b. 언젠가 또 올 수도 있는데 여유롭게 다니지 뭐~~!",
        type: [7, 8, 9, 14, 15, 4, 3, 16],
        //type: ["추천 코스: 8코스 (월평-대평 올레)", "추천 코스: 9코스 (대평-화순 올레)", "추천 코스: 10코스 (화순-모슬포 올레)", "추천 코스: 15코스 (한림-고내 올레)", "추천 코스: 16코스 (고내-광령 올레)", "추천 코스: 5코스 (남원-쇠소깍 올레)", "추천 코스: 4코스 (표선-남원 올레)", "추천 코스: 17코스 (추자도 올레)"],
      },
    ],
  },
  {
    q: "2. 제주도에서 여행하다가 점심시간이 되었습니다~! 슬슬 배도 고픈데.. 무엇을 먹을까요?", //J와 P질문
    a: [
      {
        answer:"a. 후후.. 이미 유명 맛집부터 제주도민 맛집 플랜 C까지 생각해뒀지.",
        type: [1, 17, 5, 10, 1, 12, 6, 0],
        //type: ["추천 코스: 2코스 (광치기-온평 올레)", "추천 코스: 18코스 (제주-조천 올레)", "추천 코스: 6코스 (쇠소깍-하효 올레)", "추천코스: 11코스 (무릉-가파도 올레)", "추천 코스: 14코스 (저지-한림 올레)", "추천 코스: 13코스 (용수-저지 올레)", "추천 코스: 7코스 (서귀포 칠십리길)", "추천 코스: 1코스 (시흥-광치기 올레)" ],
},
      {
        answer: "b. 어? 저기 맛있겠는데? 한번 가볼까?! (즉흥적)",
        type: [7, 8, 9, 14, 15, 4, 3, 16],
       //type: ["추천 코스: 8코스 (월평-대평 올레)", "추천 코스: 9코스 (대평-화순 올레)", "추천 코스: 10코스 (화순-모슬포 올레)", "추천 코스: 15코스 (한림-고내 올레)", "추천 코스: 16코스 (고내-광령 올레)", "추천 코스: 5코스 (남원-쇠소깍 올레)", "추천 코스: 4코스 (표선-남원 올레)", "추천 코스: 17코스 (추자도 올레)"],
      }
    ],
  },
  {
    q: "3. 길을 걷던중 무슨 설명 표지판이..!! ‘설문대 할망’이 뭐지? 제주도 설화나 역사가 담긴 설명 표지판이 놓여있다. 이때 당신은?", //S와 N질문
    a: [
      {
        answer:
          "a. (훑어보고) ‘내가 설문대 할망이라면’…… ‘그러면 할아방도 있나?’….(상상의 나래를 펼친다.)",
        type: [5, 10, 9, 14, 3, 16, 6, 0],
        //type: ["추천 코스: 6코스 (쇠소깍-하효 올레)", "추천코스: 11코스 (무릉-가파도 올레)", "추천 코스: 10코스 (화순-모슬포 올레)", "추천 코스: 15코스 (한림-고내 올레)", "추천 코스: 4코스 (표선-남원 올레)", "추천 코스: 17코스 (추자도 올레)", "추천 코스: 7코스 (서귀포 칠십리길)", "추천 코스: 1코스 (시흥-광치기 올레)"],
      },
      {
        answer:
          "b. (한줄씩 읽어보고) 제주 신화에서 제주도를 만들었다고 전해지는 여신이구나! 흠 검색해볼까.. (사실 기반의 지식으로 기억해둔다.)",
        type: [1, 17, 7, 8, 15, 4, 13, 12],
        //type: ["추천 코스: 2코스 (광치기-온평 올레)", "추천 코스: 18코스 (제주-조천 올레)", "추천 코스: 8코스 (월평-대평 올레)", "추천 코스: 9코스 (대평-화순 올레)", "추천 코스: 16코스 (고내-광령 올레)", "추천 코스: 5코스 (남원-쇠소깍 올레)", "추천 코스: 14코스 (저지-한림 올레)", "추천 코스: 13코스 (용수-저지 올레)"],
      },
    ],
  },
  {
    q: "4. 올레길을 걷던 중 친구가 내게 말한다. 근데 26개의 올레길은 누가 만든거야? 이때 당신의 반응은?", //S와 N질문
    a: [
      {
        answer:
          "a. 헐!! 그러게? 올레길은 왜 올레길이야? 만약에 올레길이 100코스면 너는 걸을거야? 만약에 코스 걷다가 뱀이 나타나서 인사하면???…….",
        type: [5, 10, 9, 14, 3, 16, 6, 0],
        //type: ["추천 코스: 6코스 (쇠소깍-하효 올레)", "추천코스: 11코스 (무릉-가파도 올레)", "추천 코스: 10코스 (화순-모슬포 올레)", "추천 코스: 15코스 (한림-고내 올레)", "추천 코스: 4코스 (표선-남원 올레)", "추천 코스: 17코스 (추자도 올레)", "추천 코스: 7코스 (서귀포 칠십리길)", "추천 코스: 1코스 (시흥-광치기 올레)"],
      },
      {
        answer:
          "b. 검색해보자. 26개인 이유가 있겠지 뭐. 만든 사람이 전문가니까 알아서 잘 만든거 아닐까?",
        type: [1, 17, 7, 8, 15, 4, 13, 12],
        //type: ["추천 코스: 2코스 (광치기-온평 올레)", "추천 코스: 18코스 (제주-조천 올레)", "추천 코스: 8코스 (월평-대평 올레)", "추천 코스: 9코스 (대평-화순 올레)", "추천 코스: 16코스 (고내-광령 올레)", "추천 코스: 5코스 (남원-쇠소깍 올레)", "추천 코스: 14코스 (저지-한림 올레)", "추천 코스: 13코스 (용수-저지 올레)"],
      },
    ],
  },
  {
    q: "5. 황우치해변에서 뉴진스가 뮤직비디오를 촬영한뒤 쉬고있습니다. 몇몇 사람들이 가까이서 구경하고 환호하고 있습니다. 당신은 어떻게 행동하시겠습까?", //E와 I질문
    a: [
      {
        answer: "a. 싸인이랑 사진 받으러, 같이 환호하러 달려간다.",
        type: [15, 4, 3, 16, 13, 12, 6, 16],
        //type: ["추천 코스: 16코스 (고내-광령 올레)", "추천 코스: 5코스 (남원-쇠소깍 올레)", "추천 코스: 4코스 (표선-남원 올레)", "추천 코스: 17코스 (추자도 올레)", "추천 코스: 14코스 (저지-한림 올레)","추천 코스: 13코스 (용수-저지 올레)","추천 코스: 7코스 (서귀포 칠십리길)", "추천 코스: 17코스 (시흥-광치기 올레)"],
      },
      {
        answer: "b. 멀리서 구경하고 내 갈길로 다시 간다.",
        type: [1, 17, 5, 10, 7, 8, 9, 0],
        //type: ["추천 코스: 2코스 (광치기-온평 올레)", "추천 코스: 18코스 (제주-조천 올레)", "추천 코스: 6코스 (쇠소깍-하효 올레)", "추천코스: 11코스 (무릉-가파도 올레)", "추천 코스: 8코스 (월평-대평 올레)", "추천 코스: 9코스 (대평-화순 올레)", "추천 코스: 10코스 (화순-모슬포 올레)", "추천 코스: 1코스 (시흥-광치기 올레)"],
      },
    ],
  },
  {
    q: "6. 올레길을 걷다가 발견한 사진 명소!! 인생샷 스팟 발견!!!", //E와 I질문
    a: [
      {
        answer:
          "a. 어머어머!!!! 인생샷 꼭 건져야해!!!! (이리저리 포즈를 취해본다.) ",
        type: [15, 4, 3, 16, 13, 12, 6, 16],
        //type: ["추천 코스: 16코스 (고내-광령 올레)", "추천 코스: 5코스 (남원-쇠소깍 올레)", "추천 코스: 4코스 (표선-남원 올레)", "추천 코스: 17코스 (추자도 올레)", "추천 코스: 14코스 (저지-한림 올레)","추천 코스: 13코스 (용수-저지 올레)","추천 코스: 7코스 (서귀포 칠십리길)", "추천 코스: 17코스 (시흥-광치기 올레)"],
      },
      {
        answer:
          "b. 아 조금 부끄러운데…흠.. 그래도 이왕 찍어나 볼까…..?(조심스럽게 포즈를 취해본다.)",
        type: [1, 17, 5, 10, 7, 8, 9, 0],
        //type: ["추천 코스: 2코스 (광치기-온평 올레)", "추천 코스: 18코스 (제주-조천 올레)", "추천 코스: 6코스 (쇠소깍-하효 올레)", "추천코스: 11코스 (무릉-가파도 올레)", "추천 코스: 8코스 (월평-대평 올레)", "추천 코스: 9코스 (대평-화순 올레)", "추천 코스: 10코스 (화순-모슬포 올레)", "추천 코스: 1코스 (시흥-광치기 올레)"],
      },
    ],
  },
  {
    q: "7. 친구와 여행을 하던중 당신에게 이렇게 말합니다. 근데말이야, 우리 여행 취향 진짜 안맞는 것 같아. 이때 당신의 생각과 대답은?", //F와T 질문
    a: [
      {
        answer:
          "a. 아 그래…?ㅠㅜㅠ 나는 나름 괜찮은 것 같은데... 일단 남은 여행도 재밌게 마무리하자! (왜 이렇게 말하는거지ㅠㅜㅠ)",
        type: [17, 5, 8, 9, 4, 3, 12, 6],
        //type: ["추천 코스: 18코스 (제주-조천 올레)", "추천 코스: 6코스 (쇠소깍-하효 올레)", "추천 코스: 9코스 (대평-화순 올레)", "추천 코스: 10코스 (화순-모슬포 올레)", "추천 코스: 5코스 (남원-쇠소깍 올레)", "추천 코스: 4코스 (표선-남원 올레)", "추천 코스: 13코스 (용수-저지 올레)", "추천 코스: 7코스 (서귀포 칠십리길)" ],
      },
      {
        answer:
          "b. 엥? 여태 잘다닌거 아니였어? 뭐가 문제였어?? 일단 남은 여행도 재밌게 마무리하자! (왜 이렇게 말하는거지?)",
        type: [1, 10, 7, 14, 15, 16, 13, 0],
        //type: ["추천 코스: 2코스 (광치기-온평 올레)", "추천코스: 11코스 (무릉-가파도 올레)", "추천 코스: 8코스 (월평-대평 올레)", "추천 코스: 15코스 (한림-고내 올레)", "추천 코스: 16코스 (고내-광령 올레)", "추천 코스: 17코스 (추자도 올레)", "추천 코스: 14코스 (저지-한림 올레)", "추천 코스: 1코스 (시흥-광치기 올레)"],
      },
    ],
  },
  {
    q: "8. 제주도를 여행하던중..! 바다속 돌고래가 보인다 !! 이때 당신의 반응은?", //F와T 질문
    a: [
      {
        answer:
          "a. 어머ㅠㅜㅜㅠ 너무 예쁘다.. 우리의 여행이라고 나타나준건가봐!!!!",
        type: [17, 5, 8, 9, 4, 3, 12, 6],
        //type: ["추천 코스: 18코스 (제주-조천 올레)", "추천 코스: 6코스 (쇠소깍-하효 올레)", "추천 코스: 9코스 (대평-화순 올레)", "추천 코스: 10코스 (화순-모슬포 올레)", "추천 코스: 5코스 (남원-쇠소깍 올레)", "추천 코스: 4코스 (표선-남원 올레)", "추천 코스: 13코스 (용수-저지 올레)", "추천 코스: 7코스 (서귀포 칠십리길)" ],
      },
      {
        answer:
          "b. 오! 대박이다. 여기 돌고래 보이는 명소인가? 무슨 나오는 주기가 있는건가??",
        type: [1, 10, 7, 14, 15, 16, 13, 0],
        //type: ["추천 코스: 2코스 (광치기-온평 올레)", "추천코스: 11코스 (무릉-가파도 올레)", "추천 코스: 8코스 (월평-대평 올레)", "추천 코스: 15코스 (한림-고내 올레)", "추천 코스: 16코스 (고내-광령 올레)", "추천 코스: 17코스 (추자도 올레)", "추천 코스: 14코스 (저지-한림 올레)", "추천 코스: 1코스 (시흥-광치기 올레)"],
      },
    ],
  },
];
const infoList = [
  {
    name: "추천 코스: 2코스 (광치기-온평 올레)", // ISTJ
    desc: " 체계적이고 신뢰할 수 있는 경로를 선호하는 당신!! 광치기부터 온평까지 이어진 2코스는 어떠신가요?! 2코스는 비교적 평탄한 길을 따라 걷는 코스로, 실용적이고 계획적인 성향에 잘 맞습니다. 이 코스는 확실하고 분명하게 되어 있는 경로와 정돈된 환경을 통해, 안정적이고 신뢰할 수 있는 여정을 즐길 수 있을 것입니다. ",
  },
  {
    name: "추천 코스: 18코스 (제주-조천 올레)", // ISFJ
    desc: "안정적이고 친근한 환경을 선호하는 당신!!. 조천까지 이어진 18코스는 어떠신가요?! 18코스는 제주 시내를 지나며, 친근한 분위기와 함께 역사적인 명소들을 둘러볼 수 있습니다. 이 코스는 유적지와 전통 마을을 지나며, 당신이 좋아할 만한 안정감과 역사적인 깊이를 제공합니다. ",
  },
  {
    name: "추천 코스: 6코스 (쇠소깍-하효 올레)", // INFJ
    desc: "깊은 사색과 영감을 얻을 수 있는 환경을 선호하시는군요!! 쇠소깍에서부터 하효로 이어지는 6코스는 어떠신가요?! 6코스는 아름다운 자연 경관을 따라 걷는 코스로, 당신에세 마음의 평화를 찾을 수 있게 해주는 장소입니다. 이 코스는 맑은 물과 푸른 숲을 지나며, 당신에게 깊은 사색에 잠길 수 있는 환경을 제공합니다.",
  },
  {
    name: "추천코스: 11코스 (무릉-가파도 올레)", // INTJ
    desc: "계획적이고 깊은 사고를 즐기시군요!! 무릉에서부토 가파도까지 이어지는 11코스는 어떠신가요?! 11코스는 고요하고 한적한 길을 따라 걷다가 가파도의 독특한 경관을 볼 수 있는 코스로, 당신의 사고와 사색을 자극할 수 있는 환경을 제공합니다. 이 코스는 고요한 해안길과 가파도의 독특한 풍경을 통해, 당신의 계획적인 사고와 사색을 깊게 할 수 있는 기회를 제공합니다.",
  },
  {
    name: "추천 코스: 8코스 (월평-대평 올레)", // ISTP
    desc: "실용적이고 탐험을 즐기실 것 같네요!! 월평부터 대평까지 이어지는 8코스는 어떠신가요?! 8코스는 다양한 지형을 따라 걷는 경로로, 당신의 호기심을 자극하며 실제적인 경험을 할 수 있게 합니다. 이 코스는 해안선과 숲길, 농촌을 지나며 탐험정신을 발휘할 수 있는 다채로운 환경을 제공합니다.",
  },
  {
    name: "추천 코스: 9코스 (대평-화순 올레)", // ISFP
    desc: "자연을 사랑하고 자유로움을 추구하시는 편이시군요!! 대평부터 화순까지 이어지는 9코스는 어떠신가요?! 9코스는 아름다운 해안선과 조용한 마을을 지나며 자연 속에서 평온함을 느낄 수 있는 경로입니다. 이 코스는 조용한 해변과 평화로운 마을을 통하여 당신을 자연의 아름다움을 마음껏 즐길 수 있게 합니다.",
  },
  {
    name: "추천 코스: 10코스 (화순-모슬포 올레)", // INFP
    desc: "자연 속에서 사색을 즐기는걸 선호하시는군요!! 화순에서 모슬포까지 이어지는 10코스는 어떠신가요?! 10코스는 한적한 해안길을 따라 걷는 코스로, 당신이 좋아할 만한 고요하고 평화로운 분위기를 제공합니다. 이 코스는 해안선과 오름을 지나며, 당신에게 자연의 아름다움 속에서 내면의 평화를 찾을 수 있는 완벽한 경로입니다.",
  },
  {
    name: "추천 코스: 15코스 (한림-고내 올레)", // INTP
    desc: "깊은 사고와 탐구를 즐깁니다. 한림에서 고내로 이어지는 15코스는 어떠신가요?! 15코스는 고요한 농촌과 해안길을 따라 걷는 경로로, 당신에게 사색하며 새로운 아이디어를 얻을 수 있는 환경을 제공합니다. 이 코스는 조용한 시골길과 아름다운 해안선을 따라 걷는 동안 자신의 생각에 몰두할 수 있는 시간을 충분히 느끼며, 도중에 만나는 작은 마을과 자연경관이 당신의 창의성과 지적 호기심을 자극할 수 있습니다.",
  },
  {
    name: "추천 코스: 16코스 (고내-광령 올레)", // ESTP
    desc: "모험을 즐기고 활동적인 성향이 강하시군요!! 그렇다면 고내에서 광령까지 이어지는 16코는 어떠신가요?! 16코스는 다양한 지형을 지나며, 당신이 도전적이고 활동적으로 즐길 수 있는 코스입니다. 이 코스는 해안길과 숲길, 마을을 통해 당신에게 다양한 활동을 즐기며 모험심을 발휘할 수 있게 합니다.",
  },
  {
    name: "추천 코스: 5코스 (남원-쇠소깍 올레)", // ESFP
    desc: "활기차고 사람들과의 상호작용을 즐기시군요!! 남원부터 쇠소깍까지 이어지는 5코스는 어떠신가요?! 5코스는 해안과 강을 따라 다양한 경관을 즐길 수 있어 당신에게 추천합니다. 이 코스는 아름다운 해변과 강가를 따라 다양한 활동을 할 수 있어 당신의 활기찬 성격에 추천드립니다.",
  },
  {
    name: "추천 코스: 4코스 (표선-남원 올레)", // ENFP
    desc: "모험과 새로운 경험을 좋아하시는군요!!! 그렇다면 표선부터 남원까지 이어지는 4코스는 어떠신가요?! 4코스는 다양한 풍경과 함께 마을, 해변, 숲길을 지나며 즐길 수 있는 다양한 변화를 제공합니다. 이 코스는 매 순간 새로운 경관과 마주하며, 당신의의 호기심과 창의성을 자극할 것 입니다.",
  },
  {
    name: "추천 코스: 17코스 (추자도 올레)", // ENTP
    desc: "창의적이고 도전을 즐기시군요!! 그렇다면 추차도의 17코스는 어떠신가요?! 17코스는 추자도라는 독특한 섬을 탐험하는 코스로, 당신이 좋아할 만한 새로운 경험과 도전을 제공합니다. 이 코스는 추자도의 다양한 지형과 독특한 문화 속에서, 당신의 창의성과 모험심을 자극할 것 입니다.. ",
  },
  {
    name: "추천 코스: 14코스 (저지-한림 올레)", //ESTJ
    desc: "구조화된 환경을 선호하고 계획적이시군요!! 그렇다면 저지에서 한림까지 이어지는 14코스는 어떠신가요?! 14코스는 정돈된 농촌 마을을 지나며, 효율적으로 시간 관리할 수 있는 명확한 경로를 제공합니다. 이 코스는 농촌의 질서정연한 경관과 잘 정비된 길을 지나며, 당신의 실용적인 성향에 추천드립니다. ",
  },
  {
    name: "추천 코스: 13코스 (용수-저지 올레)", // ESFJ
    desc: "사람들과의 교류를 즐기고, 안정된 환경을 좋아하시군요!! 그렇다면  용수에서 저지까지 이어지는 13코스는 어떠신가요?! 13코스는 다양한 마을과 농장을 지나며, 지역 주민들과의 만남과 교류를 할 수 있는 기회를 제공합니다. 이 코스는 마을의 따뜻한 분위기와 농촌의 평온함을 통해, 당신에게 다른 사람들과의 관계를 더욱 활발하게 해주는 경험을 할 환경을 제공합니다. ",
  },
  {
    name: "추천 코스: 7코스 (서귀포 칠십리길)", // ENFJ
    desc: "사람들과의 상호작용을 즐기고, 사회적 활동을 선호하시는군요!! 그렇다면 서귀포 칠십리길 7코스는 어떠신가요?! 7코스는 서귀포 시내를 지나며 다양한 카페와 식당을 만날 수 있어 당신에게 추천드립니다. 서귀포 시내의 활기찬 분위기와 더불어 천지연 폭포, 정방 폭포 등 관광명소를 탐방할 수 있어 당신이 선호하는 다채로운 경험을 제공합니다. ",
  },
  {
    name: "추천 코스: 1코스 (시흥-광치기 올레)", // ENTJ
    desc: "도전적이고 모험적인 성향이시군요!! 시흥부터 광치기 까지 이어지는 1코스는 어떠신가요?! 1코스는 한라산의 아름다운 전경을 감상할 수 있는 경로로, 당신이 선호할 만한 다이나믹한 트레킹 경험을 제공합니다. 이 코스는 웅장한 한라산과 푸른 바다를 배경으로 하여, 당신의 도전정신을 발휘할 수 있는 환경을 제공합니다. ",
  },
];
