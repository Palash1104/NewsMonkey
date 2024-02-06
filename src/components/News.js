import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=034bb2eac2564a259ea677a6c0f8fcbe"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
    }

    render() {
        return (
            <div className="container my-3">
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
            </div>
        )
    }
}

export default News