import React from "react";
import PropTypes from "prop-types";

const foodILike = [
{
  id:1,
  name: "Kimchi",
  image:
    "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png"
  ,rating:5
  },
{
  id:2,
  name: "Samgyeopsal",
  image:
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg"
    ,rating:4.9
  },
{
  id:3,
  name: "Bibimbap",
  image:
    "https://lh3.googleusercontent.com/proxy/NQvgrdMYjk_Ob6y8183p8efOZaZpsD4riPUYYIfHn-HHnZYBOJk9yGps8FvmjHQeee9aAGUm0VAUU945K6Pk3LhVSGSfbmVZWrE"
    ,rating:4.8
  },
{
  id:4,
  name: "Dongaseu",
  image:
    "http://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/038/961/medium/IMG_7060.jpeg?2019"
    ,rating:5.5
  },
{
  id:5,
  name: "Kimbap",
  image: 
    "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg"
    ,rating:4.7
  }
];

function Food({name, picture, rating}){
  //console.log(props.name); //~{name}와 같은 것
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
    </div>; //I like kimchi 출력
}

//여기서 props 체크
//isRequired는 필수로 제공해야한다는 말
//~~안 붙이면 해당 props 없어도 됨
//이름은 propType으로 지어야 함 _다른 이름은 안 됨
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (<div>
      {foodILike.map(dish => (
      <Food 
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}/>))}
    </div>);
}

/*
function renderFood(dish){
  //console.log(dish);
  return <Food name={dish.name} picture={dish.image}/>
}

function App() {
  return (<div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>);
}*/


//위에서 dish는 object

export default App;

/*
<컴포넌트 -> 컴포넌트_자식 컴포넌트로 정보 보내는 방법>
: App에서 Food로 정보를 보내고 Food에서 그 정보를
어떻게 사용하는 지

*) <Food fav="kimchi"/>
-Food : 컴포넌트
-fav : property의 이름
-kimchi : property의 value
~~>propertys를 강의에서의 호칭 props 

*) react magic을 이용해서 props 사용
-react magic에서 react는 우리가 전달한 props를 가져가는 일
-string, boolean, array 등 보낼 수 있음
(부모 컴포넌트에서 자식 컴포넌트로 원하는 많은 props 보낼 수 o)
-ex) <Food fav="kimchi" somthing={true} 
    papapa={["hello", 1,2,3,4,true]}/>에서 누군가가
  컴포넌트 Food로 정보를 보내려고 하면, react는 이 모든 속성을 가져옴
  /그리고 함수 컴포넌트 Food의 argument로 넣어줌
  */

  /*
  props object 내부에는 fav가 있음
<같은 것>

1) function Food({fav}){
  return <h1>I like Potato</h1>;
~~내부에서 fav 얻는 방법


2) function Food(props){
  console.log(props.fav); //~{fav}와 같은 것
  return <h1>I like Potato</h1>;
}
  */


//**  jsx = HTML + JavaScript **
//component는 대문자로 시작해야 함


/*
<--웹사이트에 동적 데이터 추가하는 방법-->
데이터를 배열로 만들어서 JS에서 함수를 이용해 읽어옴
~>map: function을 취해서 그 function을 array의 
각 item에 적용

const friends=["chenle","jeno","jiseong","renjun",];

//각 item에 대해 실행되는 function를 인자로 줌
friends.map(current => {
  console.log(current);
  return 0 //각 연산의 result로 array를 만들고 
          //여기서 result는 항상 0
} );

//각 친구에게 하트 추가
friends.map(function(friend){
  return friends + " 💗";
});
*/
//map은 늘 array로 돌려줌

/*
<--우리가 원하는 props가 우리가 갖고 있는 props 인지 체크-->
:우리가 예상한 props인지
==>props-types 설치
-이를 위해 list에 있는 이들 각각에 rating 추가해봄


*/