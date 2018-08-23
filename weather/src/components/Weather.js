import React from 'react'

class Weather extends React.Component{
    render(){
        return(
            <div className="weather_info">
               {
                   this.props.temperature &&  <p className="weather_details">Temperature <br />
                   <span className="weather_value">{this.props.temperature}</span>
                   </p>
               }
               {
                   this.props.humidity && <p className="weather_details">Humidity <br /> 
                   <span className="weather_value">{this.props.humidity}</span>
                   </p>
               }
               {
                   this.props.description && <p className="weather_details">Conditions <br /> 
                   <span className="weather_value">{this.props.description}</span>
                   </p>
               }
            </div>
        )
    }
}

export default Weather