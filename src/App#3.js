import React from "react";

/*<--Class Component-->
-클래스 컴포넌트는 함수가 아니기 때문에 return 가지지 않고,
  render method를 가짐 

-Class Component vs Function Component
: function은 함수이고 뭔가를 return하고 screen에 표시됨
: class는 react component로부터 확장되고 screen에 표시됨
  ~그걸 render method 안에 넣어야 함

-React는 자동적으로 class component의 render method를 실행
-class component는 state를 가짐

<--state-->
-state는 __**object**__이고 component의 data를 넣을 공간이 있음
-이 data는 변함(동적임) => 내가 바꿀 데이터를 state안에 넣어야 함
  =>state는 동적인 데이터 다룰 때 사용, props는 동적인 데이터x 

<--Component(App)에서 data를 어떻게 바꿀 것인지--> : setState()
-return에서 <div></div>부분 
-버튼 두 개 추가한 부분 : HTML 요소
-두 개의 function 추가 : react 코드 아닌 JS 코드
-각 function을 button 태그의 onClick이라는 props에 추가 : react 코드

-<button onClick={this.add}>에서 this.add와 this.add()의 차이
: 전자는 우리가 "click했을 때만" function 호출됨
: ()는 즉시 호출됨

- ==> Use setState()
: add function 주석 참고
: >>**__setState()을 호출하면 react는 새로운 state와 함께 render() 호출__**<<
: react는 변경된 부분만 업데이트하기 때문에 페이지 새로고침x,

-React가 기본적으로 component를 생성/제거하는 방법 
: life cycle method

<--component가 생성될 때, render 전에 호출되는 몇 가지 function-->
1. Mounting_________________________________________________________
-constructor() 호출: react에서 온 것x, JS에서 class 만들 때 호출
-constructor(){console.log("hello");}, console.log("render"); 추가
: hello - render 순 출력 ~ 생성자가 먼저 호출됨
: component가 mount될 때, component가 screen에 표시될 때,
  component가 Website에 갈 때 생성자 호출

-getDerivedStateFromProps : 범위 넘어가서 생략
-render()
: 이후 component가 render할 때, 처음 render됐다는 것을 알려줌

-componentDidMount()
: componentDidMount(){console.log("component redered");}, 
  console.log("i am rendering"); 추가
: i am rendering - component redered 순 출력

2. Updating_________________________________________________________
-Add 혹은 Minus를 클릭해서 state 변경 ==> 업데이트
-component가 업데이트 될 때, 호출되는 많은 function 중 하나
: getDerivedStateFromPops, shouldComponentUpdate, getSnapshotBeforeUpdate 
   ~언급x (범위 벗어남)

-componentDidUpdate
: componentDidUpdate(){console.log("I just updated");} 추가
: i am rendering - I just updated 순 출력
: setState호출 - component호출 - render호출 - 업데이트가 완료되었다고 말함
  - componentDidUpdate실행

3. Unmounting_________________________________________________________
: component가 죽는 것(페이지를 바꿀 때, state를 사용해서 component 교체 등)
-componentWillUnmount()
: component가 떠날 때 호출됨


*/
class App extends React.Component{
  /*
  constructor(props){
    super(props); //안 쓰면 에러 _ 딱히 중요x
    console.log("hello");
  }*/
  state = {
    count :  0 
  };

  //두 개의 함수 추가: JS코드 
  add = () => {
    //console.log("add");
    //this.state.count = 1;
    /*-Don't mutate state directly. Use setState()
      ∵이렇게 하면 react는 render function을 refresh x
      => 매번 state의 상태를 변경할 때 
      react가 render function을 호출해서 바꿔주길 기대한다는 말
    */
    //state는 object ~~∴setState는 새로운 state를 받아야 함
    //this.setState({ count: this.state.count+1 });
    //-this.state.count+1이 성능이 좋은 코드는 x
    //: 우리는 이 state에 의존하고 싶지 않아 함
    // 다른 방법이 존재하나 일단은 그냥 둠
    // 아래 코드는 그 다른 방법
    // : current를 이용하여 state을 set할 때, react에서
    //  외부의 상태에 의존하지 않는 가장 좋은 방법
    //  current가 현재 state를 얻어줌
    this.setState(current => ({ count: current.count+1 }));
  };
  minus = () => {
    //console.log("minus");
    //this.state.count = -1;//Don't mutate state directly. Use setState()
    //this.setState({ count: this.state.count-1 });
    this.setState(current => ({ count: current.count-1 }));
  };

  componentDidMount(){
    console.log("component redered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("Goodbyr, cruel world");
  }

  render(){
    console.log("i am rendering");
    //return <h1>Im a Class Component</h1>
    //-state를 render안에 넣으려면 아래와 같이
    //-이건 class이기 때문에 "this.state.~~~"와 같이 작성
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>  
      <button onClick={this.add}> Add </button>
      <button onClick={this.minus}> Minus </button>
    </div> 
    );
  }
}
export default App;
