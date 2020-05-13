import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../../actions';

class WeatherList extends Component {
    componentDidMount() {
        this.props.fetchWeather();
    }

    renderWeatherList() {
        if (this.props.weather) {
            return this.props.weather.map((item, index) => {
                return (
                    <div key={index}>
                        <p>Day: {item.dt}</p>
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

const mapStateToProps = (state) => {
    console.log(state);
    return ({
        weather: state.weather.list
    })
}

//the first argument of the connect function is the mapStateToProps for indicating that we have state to pass into this component, the second argument of the connect function is the action creator
export default connect(mapStateToProps, { fetchWeather })(WeatherList);