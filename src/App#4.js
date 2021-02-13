/*
#4-0
-일반적으로 JS에서 data fetch 방법
: fetch 사용하는 것 
-더 좋아하는(?) 방법: Axios
-axios: 마치 fetch 위에 있는 작은 layer
    ex)땅콩 주위에 있는 멋진 초콜릿
-axios는 설치 해야 함 : npm install axios

-우리가 사용할 API: YTS에서 만든 API
 ~불법이라 계속 url 바뀌어서 짱남
-> 니콜라스가 만든 url
: https://github.com/serranoarevalo/yts-proxy

1. import axios from "axios";
2. componentDidMount에 axios.get(https://github.com/serranoarevalo/yts-proxy) 입력
: refresh하면 "Loading" 뜨는데 이건 중요하지 않고, 
 axios가 뭔가 요청하고 있음: f12~network~list_movies.json에서 알 수 있음

3. 우리는 axios로부터 온 data를 잡을 필요 있음
 : 그래야 state에서 사용 가능
-componentDidMount(){
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
-axios.get은 항상 빠르지 않기 때문에 잠시 기다려야 함
: JS에게 componentDidMount()가 끝날 때까지 약간 시간이 걸릴 수 있음을 전달해야 함
=>이를 위해 componentDidMount() 앞에 async 붙일 것(비동기로 만들 것)
  or getMoives라는 function 만듦
    ~JS에게 getMovies()은 시간이 좀 필요함을 말해야 함(그리고 기다려야 함)
    =>getMovies()를 비동기로 만들어줘야 함: async과 await 추가,
        +)async 안 쓰면 await 키워드 사용x

#4-1_movie data를 가져와서 state에 있는 render function에 보여줄 것
: movies를 state 안에 넣을 것
-this.setState({movies:movies})
-Movie.js 추가

-<Movie render하는 법>
1. App.js의 render()에서
 return <div>{ isLoading ? "Loading..." : movies.map() }</div>;

2. renderMovies()라는 다른 함수 생성


#4-2_react에서 component 꾸미기
: style component 사용할 것 _무료 수업 있다고 함

1. JS 방식 (비추)
: 각 태그에 style={{backgroundColor:"red"}} 추가

2.css file 만들기 : Movie.css
-모든 component에 대한 css파일 만들 수 있음
-아니면 하나의 css 파일에 모든 것 넣기

#4-3
-className _JS class 안에 있으면 component class에 의해 
혼란스러워짐, HTML의 class는 신경x
f12 보면 className이 class로 되었을 것임

*/