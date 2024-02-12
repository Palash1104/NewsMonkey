import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Categories from './Categories';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setarticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageSize, setPageSize] = useState(1)
    const [page, setPage] = useState(1)
    const [category, setCategory] = useState("general")
    const [country, setCountry] = useState("in")

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        document.title = `NewsMonkey - ${capitalizeFirstLetter(category)}`;
    }, [category]);


    useEffect(() => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;

        setLoading(true);

        fetch(url)
            .then((data) => {
                if (!data.ok) {
                    throw new Error(`HTTP error! Status: ${data.status}`);
                }
                return data.json();
            })
            .then((parsedData) => {
                props.setProgress(50);

                // Check if articles array is empty before updating
                if (parsedData.articles && parsedData.articles.length > 0) {
                    setarticles(parsedData.articles);
                }

                setPageSize(parsedData.totalResults);
                setLoading(false);
                props.setProgress(100);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle error, e.g., show an error message to the user
                setLoading(false);
            });
    }, []);

    const handleCategoryChange = async (c) => {
        props.setProgress(10)
        setCategory(c)
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${c}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(50)
        setarticles(parsedData.articles)
        setPageSize(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    const fetchMoreData = async () => {
        let nextPage = page + 1;
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setPage(nextPage)
        setarticles(prevArticles => prevArticles.concat(parsedData.articles))
        setPageSize(parsedData.totalResults)
        setLoading(false)
    };

    return (
        <div className="container my-3 text-white">

            <div className="container d-flex justify-content-between">
                <Categories category="Business" onClick={() => handleCategoryChange("business")} />
                <Categories category="Entertainment" onClick={() => handleCategoryChange("entertainment")} />
                <Categories category="Science" onClick={() => handleCategoryChange("science")} />
                <Categories category="Sports" onClick={() => handleCategoryChange("sports")} />
                <Categories category="General" onClick={() => handleCategoryChange("general")} />
                <Categories category="Health" onClick={() => handleCategoryChange("health")} />
                <Categories category="Technology" onClick={() => handleCategoryChange("technology")} />
            </div>

            <div className="container my-5" style={{ textAlign: "center", fontWeight: "bolder" }}>
                <h1>TOP {(category).toUpperCase()} HEADLINES</h1>
            </div>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== pageSize}
                loader={<Spinner />}
            >
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    columnGap: "10px"
                }}>
                    {articles.map((e, index) => {
                        return <NewsItem key={index} title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                    })}
                </div >

            </InfiniteScroll>

        </div >
    )
}

export default News

News.defaultProps = {
    category: "general",
    country: "in",
    pageSize: 15
}

News.propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string.isRequired
}