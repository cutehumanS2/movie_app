import React from "react";
import axios from "axios";
import Movie from "./Movie"; //Movie.js import
import "./App.css";

class App extends React.Component{
  //미래에 쓰고자하는 state를 선언하는 것 필수는x => 그저 좋은 습관
  state = {
    isLoading : true, //mount되자마자 isLoading은 기본적으로 true
    movie: []
  };
  //방법2: getMovies를 새로 정의하여 비동기로 만들기
  //getMovies = async () => {
    //-API로부터 data 불러옴
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //-axios가 끝날 때까지 기다림 _JS
    //console.log(movies); //-data만 신경씀_data-data-movies
                        //-=>movies.data.data.movies로 접근 가능
    //console.log(movies.data.data.movies); //별로 좋은 방법은x
  //-ES6으로 대체
  getMovies = async () => {
      const {data:{data:{movies}}}
        =await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
                                                  //?sort_by=rating ~~rating별로 sort
      //console.log(movies);
      //this.setState({movies:movies}) //state의 movies, axios에서 온 movies
      //this.setState({movies}); //위 문장 더 짧게 하면_최신의 JS 이용
                              //이렇게 하면 아무 변화x ~isLoading도 변화줘야 함
      this.setState({movies, isLoading: false});
  };

  componentDidMount(){
    this.getMovies();
  }
  /* 방법1: componentDidMount()를 비동기로 만들기
  async componentDidMount(){
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
 */
  render(){
    //JS ternary operator(삼항연산자)
    //이 isLoading은 동작x : 정의되지 않았기 때문
    //∴this.state 사용해야 함
    //return <div>{this.state.isLoading ? "Loading" : "We are ready"}</div>;
    //△, 항상 this.state 쓰고 싶지x ~> ES6 문법 사용
    const { isLoading, movies } = this.state; //state로부터 movies 갖고 와야 함
    
    //return <div>{ isLoading ? "Loading..." : "We are ready" }</div>;
    return (
      //className _JS class 안에 있으면 component class에 의해
      //혼란스러워짐, HTML의 class는 신경x
      //f12 보면 className이 class로 되었을 것임
      <section className="container">
        { isLoading ? (
          <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>)
          : (
          //moive를 movie component로 만듦
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}/>
            ))}
          </div>
        )}</section>
    );
  }
}

export default App;