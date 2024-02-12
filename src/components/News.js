import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Categories from './Categories';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps = {
        category: "general",
        country: "us",
        pageSize: 15
    }

    static propTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            category: "general",
            totalResults: 0,
            country: "in"
        };
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    componentDidUpdate(prevState) {
        if (prevState.category !== this.state.category) {
            document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.state.category)}`;
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    // handlePreviousClick = async () => {
    //     console.log("Previous Page")
    //     let url = `https://newsapi.org/v2/top-headlines?country=incategory=${this.state.category}&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //     this.setState({ loading: true })
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }

    // handleNextClick = async () => {
    //     console.log("Next Page")

    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true })
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }

    handleCategoryChange = async (c) => {
        this.setState({ category: c, page: 1, totalResults: 0, articles: [] }, async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=1&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            })
        });
    }

    fetchMoreData = async () => {
        let nextPage = this.state.page + 1;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=034bb2eac2564a259ea677a6c0f8fcbe&page=${nextPage}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: nextPage,
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };

    render() {
        return (
            <div className="container my-3 text-white">

                <div className="container d-flex justify-content-between">
                    <Categories category="Business" onClick={() => this.handleCategoryChange("business")} />
                    <Categories category="Entertainment" onClick={() => this.handleCategoryChange("entertainment")} />
                    <Categories category="Science" onClick={() => this.handleCategoryChange("science")} />
                    <Categories category="Sports" onClick={() => this.handleCategoryChange("sports")} />
                    <Categories category="General" onClick={() => this.handleCategoryChange("general")} />
                    <Categories category="Health" onClick={() => this.handleCategoryChange("health")} />
                    <Categories category="Technology" onClick={() => this.handleCategoryChange("technology")} />
                </div>

                <div className="container my-5" style={{ textAlign: "center", fontWeight: "bolder" }}>
                    <h1>TOP {(this.state.category).toUpperCase()} HEADLINES</h1>
                </div>

                {/* {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        columnGap: "10px"
                    }}>
                        {this.state.articles.map((e, index) => {
                            return <NewsItem key={index} title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                        })}
                    </div >

                </InfiniteScroll>

                {/* <div className="container d-flex justify-content-around my-5">
                    <button type="button" className="btn btn-dark" onClick={this.handlePreviousClick} disabled={this.state.page <= 1} > &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}>Next &rarr;</button>
                </div> */}

            </div >
        )
    }
}

export default News