const qnaList = [
  {
    q: '1. 이성 사이에 진정한 친구는 있다, 없다?',
    a: [
      { type: [1, 2, 4, 9] },
      { type: [0, 3, 6, 5, 10, 8] },
    ]
  },
  {
    q: '2. 좋아하는 사람이 생겨 연락하고자 한다 ',
    a: [
      { type: [0, 3, 2, 8] },
      { type: [1, 6, 5, 10] },
    ]
  },
  {
    q: '3. 당신의 고백 스타일은?',
    a: [
      { type: [1, 3, 2, 10, 8] },
      { type: [7, 9, 11] },
    ]
  },
  {
    q: '3. 당신의 고백 스타일은?',
    a: [
      { type: [1, 3, 2, 10, 8] },
      { type: [7, 9, 11] },
    ]
  },
  {
    q: '3. 당신의 고백 스타일은?',
    a: [
      { type: [1, 3, 2, 10, 8] },
      { type: [7, 9, 11] },
    ]
  },
  {
    q: '3. 당신의 고백 스타일은?',
    a: [
      { type: [1, 3, 2, 10, 8] },
      { type: [7, 9, 11] },
    ]
  },
  {
    q: '3. 당신의 고백 스타일은?',
    a: [
      { type: [1, 3, 2, 10, 8] },
      { type: [7, 9, 11] },
    ]
  },
  {
    q: '3. 당신의 고백 스타일은?',
    a: [
      { type: [1, 3, 2, 10, 8] },
      { type: [7, 9, 11] },
    ]
  },
]
const infoList = [
  {
    name: '추천 코스: 2코스 (광치기-온평 올레)', // ISTJ
    desc: ' 체계적이고 신뢰할 수 있는 경로를 선호하는 당신!! 광치기부터 온평까지 이어진 2코스는 어떠신가요?! 2코스는 비교적 평탄한 길을 따라 걷는 코스로, 실용적이고 계획적인 성향에 잘 맞습니다. 이 코스는 확실하고 분명하게 되어 있는 경로와 정돈된 환경을 통해, 안정적이고 신뢰할 수 있는 여정을 즐길 수 있을 것입니다. '
  },
  {
    name: '추천 코스: 18코스 (제주-조천 올레)', // ISFJ
    name: '18코스 (제주-조천 올레)', // ISFJ
    desc: '안정적이고 친근한 환경을 선호하는 당신!!. 조천까지 이어진 18코스는 어떠신가요?! 18코스는 제주 시내를 지나며, 친근한 분위기와 함께 역사적인 명소들을 둘러볼 수 있습니다. 이 코스는 유적지와 전통 마을을 지나며, 당신이 좋아할 만한 안정감과 역사적인 깊이를 제공합니다. '
  },
  {
    name: '추천 코스: 6코스 (쇠소깍-하효 올레)', // INFJ
    name: '6코스 (쇠소깍-하효 올레)', // INFJ
    desc: '깊은 사색과 영감을 얻을 수 있는 환경을 선호하시는군요!! 쇠소깍에서부터 하효로 이어지는 6코스는 어떠신가요?! 6코스는 아름다운 자연 경관을 따라 걷는 코스로, 당신에세 마음의 평화를 찾을 수 있게 해주는 장소입니다. 이 코스는 맑은 물과 푸른 숲을 지나며, 당신에게 깊은 사색에 잠길 수 있는 환경을 제공합니다.'
  },
  {
    name: '추천코스: 11코스 (무릉-가파도 올레)', // INTJ
    desc: ' 계획적이고 깊은 사고를 즐기시군요!! 무릉에서부토 가파도까지 이어지는 11코스는 어떠신가요?! 11코스는 고요하고 한적한 길을 따라 걷다가 가파도의 독특한 경관을 볼 수 있는 코스로, 당신의 사고와 사색을 자극할 수 있는 환경을 제공합니다. 이 코스는 고요한 해안길과 가파도의 독특한 풍경을 통해, 당신의 계획적인 사고와 사색을 깊게 할 수 있는 기회를 제공합니다.'
  },
  {
    name: '추천 코스: 8코스 (월평-대평 올레)', // ISTP
    desc: '실용적이고 탐험을 즐기실 것 같네요!! 월평부터 대평까지 이어지는 8코스는 어떠신가요?! 8코스는 다양한 지형을 따라 걷는 경로로, 당신의 호기심을 자극하며 실제적인 경험을 할 수 있게 합니다. 이 코스는 해안선과 숲길, 농촌을 지나며 탐험정신을 발휘할 수 있는 다채로운 환경을 제공합니다.'
  },
  {
    name: '추천 코스: 9코스 (대평-화순 올레)', // ISFP
    desc: '자연을 사랑하고 자유로움을 추구하시는 편이시군요!! 대평부터 화순까지 이어지는 9코스는 어떠신가요?! 9코스는 아름다운 해안선과 조용한 마을을 지나며 자연 속에서 평온함을 느낄 수 있는 경로입니다. 이 코스는 조용한 해변과 평화로운 마을을 통하여 당신을 자연의 아름다움을 마음껏 즐길 수 있게 합니다.'
  },
  {
    name: '추천 코스: 10코스 (화순-모슬포 올레)', // INFP
    desc: '자연 속에서 사색을 즐기는걸 선호하시는군요!! 화순에서 모슬포까지 이어지는 10코스는 어떠신가요?! 10코스는 한적한 해안길을 따라 걷는 코스로, 당신이 좋아할 만한 고요하고 평화로운 분위기를 제공합니다. 이 코스는 해안선과 오름을 지나며, 당신에게 자연의 아름다움 속에서 내면의 평화를 찾을 수 있는 완벽한 경로입니다.'
  },
  {
    name: '추천 코스: 15코스 (한림-고내 올레)', // INTP 
    desc: '깊은 사고와 탐구를 즐깁니다. 한림에서 고내로 이어지는 15코스는 어떠신가요?! 15코스는 고요한 농촌과 해안길을 따라 걷는 경로로, 당신에게 사색하며 새로운 아이디어를 얻을 수 있는 환경을 제공합니다. 이 코스는 조용한 시골길과 아름다운 해안선을 따라 걷는 동안 자신의 생각에 몰두할 수 있는 시간을 충분히 느끼며, 도중에 만나는 작은 마을과 자연경관이 당신의 창의성과 지적 호기심을 자극할 수 있습니다.'
  },
  {
    name: '추천 코스: 16코스 (고내-광령 올레)', // ESTP
    desc: '모험을 즐기고 활동적인 성향이 강하신가요? 그렇다면 고내에서 광령까지 이어지는 16코는 어떠신가요?! 16코스는 다양한 지형을 지나며, 당신이 도전적이고 활동적으로 즐길 수 있는 코스입니다. 이 코스는 해안길과 숲길, 마을을 통해 당신에게 다양한 활동을 즐기며 모험심을 발휘할 수 있게 합니다.'
  },
  {
    name: '추천 코스: 5코스 (남원-쇠소깍 올레)', // ESFP
    desc: '활기차고 사람들과의 상호작용을 즐기시군요?! 남원부터 쇠소깍까지 이어지는 5코스는 어떠신가요?! 5코스는 해안과 강을 따라 다양한 경관을 즐길 수 있어 당신에게 추천합니다. 이 코스는 아름다운 해변과 강가를 따라 다양한 활동을 할 수 있어 당신의 활기찬 성격에 추천드립니다.'
  },
  {
    name: '추천 코스: 4코스 (표선-남원 올레)', // ENFP 
    desc: '모험과 새로운 경험을 좋아하시나요?! 그렇다면 표선부터 남원까지 이어지는 4코스는 어떠신가요?! 4코스는 다양한 풍경과 함께 마을, 해변, 숲길을 지나며 즐길 수 있는 다양한 변화를 제공합니다. 이 코스는 매 순간 새로운 경관과 마주하며, 당신의의 호기심과 창의성을 자극할 것 입니다.'
  },
  {
    name: '추천 코스: 17코스 (추자도 올레)', // ENTP
    desc: '창의적이고 도전을 즐기시나요?! 그렇다면 추차도의 17코스는 어떠신가요?! 17코스는 추자도라는 독특한 섬을 탐험하는 코스로, 당신이 좋아할 만한 새로운 경험과 도전을 제공합니다. 이 코스는 추자도의 다양한 지형과 독특한 문화 속에서, 당신의 창의성과 모험심을 자극할 것 입니다.. '
  },
  {
    name: '추천 코스: 14코스 (저지-한림 올레)', //ESTJ
    desc: '구조화된 환경을 선호하고 계획적이시나요?! 그렇다면 저지에서 한림까지 이어지는 14코스는 어떠신가요?! 14코스는 정돈된 농촌 마을을 지나며, 효율적으로 시간 관리할 수 있는 명확한 경로를 제공합니다. 이 코스는 농촌의 질서정연한 경관과 잘 정비된 길을 지나며, 당신의 실용적인 성향에 추천드립니다. '
  },
  {
    name: '산은 산이요 연애는 연애로다, 느긋하고 온순한 <돼지>', // ESFJ
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
  {
    name: '산은 산이요 연애는 연애로다, 느긋하고 온순한 <돼지>', // ENFJ
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
  {
    name: '산은 산이요 연애는 연애로다, 느긋하고 온순한 <돼지>', // ENTJ
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
]
Footer
© 202
