import React from 'react'
import ErrorMessage from './ErrorMessage';
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );

//   return (
//     <>
//     hello there...
//     </>
//   );
// }

class App extends React.Component{
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      error => {
        // console.log(error)
        this.setState({ errorMessage: error.message })
      }
    )
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <ErrorMessage error={this.state.errorMessage} />
    }

    if( !this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message='Please accept location request'/>
  }

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default App;

// {/* <div>Error:{this.state.errorMessage}</div> */}