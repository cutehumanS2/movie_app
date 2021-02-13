import React from "react";

/*
Quiz. 우리가 처음에 render하면 호출되는 life-cycle method
: componentDidMount() => component가 mount되자 마자 호출
=>우리가 할 일: componentDedMount에서 data fetch
  그리고나서 API로부터 data fetching이 완료되면,
  "we are ready"대신에 movie를 Render하고 map을 만들고
  moive를 render하는 것
*/

class App extends React.Component{
  //미래에 쓰고자하는 state를 선언하는 것 필수는x => 그저 좋은 습관
  state = {
    isLoading : true, //mount되자마자 isLoading은 기본적으로 true
    movie: []
  };

  componentDidMount(){
    //delay function _JS
    setTimeout( () =>  { //6초 후 isLoading을 false로 setState
      this.setState({isLoading: false});
    }, 6000 );

    //-axios: 마치 fetch 위에 있는 작은 layer
    axios()
  }

  render(){
    //JS ternary operator(삼항연산자)
    //이 isLoading은 동작x : 정의되지 않았기 때문
    //∴this.state 사용해야 함
    //return <div>{this.state.isLoading ? "Loading" : "We are ready"}</div>;
    //△, 항상 this.state 쓰고 싶지x ~> ES6 문법 사용
    const { isLoading } = this.state;
    return <div>{ isLoading ? "Loading..." : "We are ready" }</div>;

  }
}
export default App;