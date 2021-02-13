/*할 일: 실제로 movies를 render*/
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//movies component는 state를 필요로 하지 않음
//: className component로 안 만들어도 됨
function Movie({year, title, summary, poster, genres}){
    //className _JS class 안에 있으면 component class에 의해
      //혼란스러워짐, HTML의 class는 신경x
      //f12 보면 className이 class로 되었을 것임
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key= {index} className="genres_genre">
                       {genre}
                    </li>))}
            </ul>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>;
}
//+) 원한다면 genre라는 또 다른 component를 만들 수 있음
//여기서는 ul로 할 거임
//map에 또 다른 인자를 줄 수 있음 (cur_item, item_num)

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;