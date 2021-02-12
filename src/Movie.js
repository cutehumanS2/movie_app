/*할 일: 실제로 movies를 render*/
import React from "react";
import PropTypes from "prop-types";

//movies component는 state를 필요로 하지 않음
//: class component로 안 만들어도 됨
function Movie({id, year, title, summary, poster}){
    return <h5>{title}</h5>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;