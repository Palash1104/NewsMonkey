import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0
  }

  apiKey = process.env.REACT_APP_NEWS_API

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
        <LoadingBar
          color='#03ddf1'
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
          height={3}
        />
        <NavBar />
        <News pageSize={15} apiKey={this.apiKey} setProgress={this.setProgress} />
      </div>
    )
  }
}

