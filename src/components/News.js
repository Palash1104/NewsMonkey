import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePreviousClick = async () => {
        console.log("Previous Page")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        console.log("Next Page")

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }

    render() {
        return (
            <div className="container my-3 text-white">
                <div className="container" style={{ textAlign: "center", fontWeight: "bolder" }}>
                    <h1>TOP HEADLINES</h1>
                </div>
                <div className='' style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    columnGap: "10px"
                }}>
                    {this.state.articles.map((e, index) => {
                        return <NewsItem key={index} title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} />
                    })}
                </div >
                <div className="container d-flex justify-content-around my-5">
                    <button type="button" className="btn btn-dark" onClick={this.handlePreviousClick} disabled={this.state.page <= 1} > &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News