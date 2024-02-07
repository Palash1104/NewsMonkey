import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Categories from './Categories';

export class News extends Component {

    // static defaultProps = {
    //     category: "general",
    // }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            category: "general"
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePreviousClick = async () => {
        console.log("Previous Page")
        let url = `https://newsapi.org/v2/top-headlines?country=incategory=${this.state.category}&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        console.log("Next Page")

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleCategoryChange = (category) => {
        this.setState({ category });
    }

    render() {
        return (
            <div className="container my-3 text-white">

                <div className="container my-4 d-flex justify-content-between" style={{ textAlign: "center" }} >
                    <Categories category="Business" onClick={this.handleCategoryChange("business")} />
                    <Categories category="Entertainment" onClick={this.handleCategoryChange("entertainment")} />
                    <Categories category="General" onClick={this.handleCategoryChange("general")} />
                    <Categories category="Health" onClick={this.handleCategoryChange("health")} />
                    <Categories category="Science" onClick={this.handleCategoryChange("science")} />
                    <Categories category="Sports" onClick={this.handleCategoryChange("sports")} />
                    <Categories category="Technology" onClick={this.handleCategoryChange("technology")} />
                </div>

                <div className="container my-5" style={{ textAlign: "center", fontWeight: "bolder" }}>
                    <h1>TOP HEADLINES</h1>
                </div>

                {this.state.loading && <Spinner />}

                {
                    !this.state.loading && <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        columnGap: "10px"
                    }}>
                        {this.state.articles.map((e, index) => {
                            return <NewsItem key={index} title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} />
                        })}
                    </div >
                }

                <div className="container d-flex justify-content-around my-5">
                    <button type="button" className="btn btn-dark" onClick={this.handlePreviousClick} disabled={this.state.page <= 1} > &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}>Next &rarr;</button>
                </div>

            </div >
        )
    }
}

export default News