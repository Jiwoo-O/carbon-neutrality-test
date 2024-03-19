const qnaList = [
  {
    q: '1. 분리수거 안 하는 친구를 보면 드는 생각은?',
    a: [
      { answer: '나도 그럴 때가 있으니까 이해한다', score: 2 },
      { answer: '아무 생각이 없다', score: 1 },
      { answer: '분리수거 방법과 필요성을 자세히 설명해준다', score: 4 },
      { answer: '순간 친구에게 정이 떨어져서 더이상 친구로 지내고 싶지 않다', score: 3}
    ]
  },
  {
    q: '2. 환경 문제에 대한 나의 생각은?',
    a: [
      { answer: '지구의 문제이니 다함께 노력해야 한다', score: 4 },
      { answer: '다른 사람들이 알아서 할 테니 내가 신경 쓸 필요 없다', score: 1 },
      { answer: '지금 당장 심각해보이지 않아 관심이 없다', score: 2 },
      { answer: '환경 문제의 심각성을 알고 있지만 무엇을 해야 할지 모른다', score: 3 }
    ]
  },
  {
    q: '3. 탄소 중립에 대한 나의 생각은?',
    a: [
      { answer: '탄소 중립이 뭔지 모른다', score: 1 },
      { answer: '탄소 중립이란 탄소 순배출량이 0이 되는 것이며 탄소 중립을 실천하기 위해 무엇을 해야 하는지 알고 있다', score: 4 },
      { answer: '들어는 봤지만 별 생각 없다', score: 2 },
      { answer: '가만히 있으면 자연에 의해 흡수량이 조절되어 무언가를 할 필요가 없다', score: 3 }
    ]
  },
  {
    q: '4. 서랍 속에서 3년 동안 방치된 화장품을 찾았다. 어떻게 버려야 할까?',
    a: [
      { answer: '이물질이 있으니 일반 쓰레기로 버린다', score: 1 },
      { answer: '대충 씻어서 분리수거한다', score: 2 },
      { answer: '재료별로 분리하고 세척하여 분리수거한다', score: 4 },
      { answer: '아까우니 버리지 않고 모아둔다', score: 3 }
    ]
  },
  {
    q: '5. 00기업에서 공병 수거 캠페인을 진행 중이다. 이 캠페인을 본 나의 생각은?',
    a: [
      { answer: '예전에도 참여해 본 적이 있어 관심이 간다', score: 4 },
      { answer: '뭘 하는 캠페인인지 감이 안 온다', score: 1 },
      { answer: '보상이 없어서 참여하고 싶지 않다', score: 2 },
      { answer: '저번에 화장품 매장에서 본 공병 수거함이 떠오른다', score: 3}
    ]
  },
  {
    q: '6. IPCC에서 정한 탄소 중립 목표는?',
    a: [
      { answer: '2030년까지 이산화탄소 배출량을 2010년 대비 45% 이상 감축한다', score: 4 },
      { answer: '2030년까지 탄소중립(Netzero)을 달성한다', score: 1 },
      { answer: '2050년까지 이산화탄소 배출량을 2010년 대비 70% 이상 감축한다', score: 2 },
      { answer: '2100년까지 지구 평균온도 상승폭을 2도 이내로 제한한다', score: 3 }
    ]
  },
  {
    q: '7. 다음 중 한 가지 환경 봉사를 선택해야 한다면?',
    a: [
      { answer: '플로깅', score: 3 },
      { answer: '피켓 들기 캠페인', score: 1 },
      { answer: '그린피스 자원봉사', score: 4 },
      { answer: '나무 심기', score: 2 }
    ]
  },
  {
    q: '8. 환경 관련 다큐를 볼 때 드는 생각은?',
    a: [
      { answer: '현재의 상황이 안타깝다', score: 3 },
      { answer: '어떤 해결책이 있을지 궁금해진다', score: 4 },
      { answer: '다큐 내용이 진짜인지 의심한다', score: 2 },
      { answer: '지구가 망하는 편이 편할 것 같다', score: 1 }
    ]
  },
  {
    q: '9. 식약처 인증 화장품의 기준은?',
    a: [
      { answer: '동식물 및 그 유래 원료 등 천연 또는 천연유래 원료가 완제품의 90% 이상 함유한 화장품은 천연 화장품이다', score: 2 },
      { answer: '동식물 및 그 유래 원료 등 천연 또는 천연유래 원료가 완제품의 95% 이상 함유한 화장품은 천연 화장품이다', score: 4 },
      { answer: '천연화장품으로써 유기농 원료가 완제폼의 15% 이상 함유한 화장품은 유기농 화장품이다', score: 3 },
      { answer: '천연화장품으로써 유기농 원료가 완제폼의 20% 이상 함유한 화장품은 유기농 화장품이다', score: 1 }
    ]
  },
  {
    q: '10. 테스트를 마치며 드는 생각은?',
    a: [
      { answer: '탄소 중립에 대해 더 알아보고 싶다', score: 2 },
      { answer: '탄소 중립 실천 이벤트에 참여하고 싶다', score: 4 },
      { answer: '탄소 중립 테스트 스토리 공유 이벤트에 참여하고 싶다', score: 3 },
      { answer: '아무 생각이 없다', score: 1 }
    ]
  }
]

const infoList = [
  {
    from: 10,
    to: 25,
    mLeft: '20%',
    name: '지구 파괴자, 아델리 펭귄',
    desc: '당신은 환경 문제에 관심을 가져 본 적이 없으며 탄소 중립에 대해 아는 것이 없습니다. 누군가는 당신이 일부러 지구를 파괴하기 위해 환경을 더럽히고 있다고 생각하고 있을지지도 모릅니다. 학창시절 공동체 의식이 다소 부족하다는 평가를 자주 들었습니다. 하지만 자존심이 강해 이 모든 것들을 고치고 싶지 않은 당신! 탄소 중립 전문가 친구를 찾아 함께 탄소 중립 실천 이벤트에 참여해보아요.'
  },
  {
    from: 26,
    to: 30,
    mLeft: '40%',
    name: '내로남불의 정석, 북극 여우',
    desc: '탄소 중립이 무엇인지, 현재 환경 문제가 얼마나 심각한지 충분히 잘 알고 있는 당신! 그러나 지구를 지키기 위해 탄소 중립을 실천하고 환경을 보호하는 일에는 관심이 없습니다. 자신이 알고 있는 지식으로 남에게 훈수두는 것이 일상이지만 정작 본인은 손가락 하나 움직이지 않는 내로남불의 정석입니다. 소시민적 환경 운동가 친구를 찾아 함께 탄소 중립을 실천해보세요.'
  },
  {
    from: 31,
    to: 36,
    mLeft: '60%',
    name: '소시민적 환경 운동가, 범고래',
    desc: '온실 효과와 지구 온난화로 인해 망가져가는 지구를 지키고 싶은 마음이 가득한 당신! 분별 있고 현실적이며 겸손하다는 평가를 받곤 합니다. 탄소 중립 실천을 혼자 하기에는 부끄럽고 사소한 행동이 무슨 도움이 될까 싶기도 해요. 당신에 대한 신뢰가 가득한 내로남불의 정석 친구를 찾아 탄소 중립 실천을 하나씩 도전해보아요.'
  },
  {
    from: 37,
    to: 40,
    mLeft: '80%',
    name: '탄소 중립 마스터, 비버',
    desc: '사람들은 당신이 인기 있는 데다가 침착함과 꾸밈없는 솔직함까지 지녔다고 생각합니다. 또래 친구들보다는 윗사람과 대화하는 것이 편하게 느낄 때도 있어요. 언제나 친구들을 위하는 이해심이 가득한 몇 안 되는 탄소 중립 마스터 유형의 당신! 탄소 중립 마스터의 도움이 필요한 지구 파괴자 친구를 찾아 탄소 중립 실천 이벤트에 참여할 수 있도록 당신의 능력을 발휘해보아요.'
  }
]