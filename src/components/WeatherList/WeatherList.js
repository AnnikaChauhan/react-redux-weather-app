import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../../actions';

class WeatherList extends Component {
    componentDidMount = () => {
        this.props.fetchWeather();
    }

    convertUTCToDay = (utc) => {
        let utcDate = new Date(utc * 1000);
        let actualDate = utcDate.toGMTString();
        let day = actualDate.substring(0,3);
        return day;
    }

    renderWeatherList = () => {
        if (this.props.weather) {
            return this.props.weather.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{this.convertUTCToDay(item.dt)}</p>
                        <p>{item.main.temp}</p>
                    </div>
                );
            });
        } 
        return <p>Unavailable</p>
    };

    render() {
        return (
            <div>
                {this.renderWeatherList()}
            </div>
        );
    }
}

//this is probably not the best way to do this, maybe do it when you receive the data in the reducer???
const conditionalState = (state) => {
    if(state.weather.length < 1){
        return state.weather.list
    }
    return state.weather.list.filter((item) => {
        return state.weather.list.indexOf(item)%8 === 0;
    })
}

const mapStateToProps = (state) => {
    console.log(state);
    return ({ weather: conditionalState(state) })
}

//the first argument of the connect function is the mapStateToProps for indicating that we have state to pass into this component, the second argument of the connect function is the action creator
export default connect(mapStateToProps, { fetchWeather })(WeatherList);