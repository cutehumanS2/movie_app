import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
/*<App /> ~> component
리액트는 component와 함께 동작, 모든 것은 component
component가 데이터를 보여주게 할 것
-component는 HTML을 반환하는 함수
*/

/*
<App /><Potato />, ~~오류 발생
: 리액트 Application이 하나의 component만을 
rendering해야 하기 때문에 
그 component => App
~~> Potato를 App 옆에 두는 대신 App 안에 넣을 것.

(*)리액트 Application은 한 번에 하나의 component만
rendering 할 수 있음
==>>모든 것은 App 안에 들어가야만 함
 */

