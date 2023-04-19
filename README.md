# 할일 목록 리스트 만들기

### 1. 구현 기능

- 전체 아이템 보여주기
- 아이템 추가
- 아이템 삭제
- 아이템 체크박스
- 아이템 필터링 ( 전체 / 할일 / 완료)
- 상시로 띄워질 중요메모 플로팅 형태 UI
- 달성률
- 로컬스토리지 활용

### 2. 필요한 기능 및 lib

- localStorage
- react-icons
- uuid

### 3. 만들면서 부족했던 부분

1. 상단 tab 부분 클릭 이벤트 제어 부분

- 자바스크립트로 직접 dom요소에 접근하여 class를 지정했음 css module을 사용하고 있기에 class는 붙어도 스타일이 적용되지 않음

- 개선 :
  - 클릭된 elem의 값을 저장할 state 생성
  - menu를 배열에 담아 전달할 text와
    각각 클릭시 실행할 함수를 불러올 action 설정
  - menu render

```javascript
// current tab 값 저장
const [currentTab, setCurrentTab] = useState('All');

// menu data
const menuArr = [
  { name: 'All', action: 'showAll' },
  { name: 'Active', action: 'showActive' },
  { name: 'Complete', action: 'showCompeleted' },
];

// tab handle function
const handleTabAction = (elem) => {
  setCurrentTab(elem.name);

  switch (elem.action) {
    case 'showAll':
      showAll();
      break;
    case 'showActive':
      showAcitve();
      break;
    case 'showCompeleted':
      showCompeleted();
      break;

    default:
      break;
  }
};

//menu render 부분
<ul className={`${styles.flx_c} ${styles.nav_btn_con}`}>
  {menuArr.map((el, idx) => (
    <li
      key={idx}
      className={el.name === currentTab ? styles['on'] : ''}
      onClick={() => handleTabAction(el)}
    >
      {el.name}
    </li>
  ))}
</ul>;
```

2. 리팩토링

- localStorage와 관련된 등록,삭제,수정에 관한 로직 reducer을 사용하여 재사용 가능하게 분리해보기
