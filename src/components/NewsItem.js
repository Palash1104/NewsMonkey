import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="card bg-dark text-white" style={{ width: "maxContent", height: "700px", marginTop: "2rem" }}>
                <img style={{
                    height: "250px",
                    objectFit: "cover"
                }} src={imageUrl ? imageUrl : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} className="card-img-top" alt="..." />
                <div className="card-body" style={{ height: "14rem" }}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text my-2">{description}</p>
                </div>
                <ul className="list-group list-group-flush my-3">
                    <li className="list-group-item" style={{ backgroundColor: "#868e96", color: "black", border: "none" }}><b>Time Updated:</b> {new Date(date).toGMTString()}</li>
                    <li className="list-group-item" style={{ backgroundColor: "#868e96", color: "black", border: "none" }}><b>Author:</b> {author ? author : <span>"Unknown"</span>}</li>
                    <li className="list-group-item" style={{ backgroundColor: "#868e96", color: "black", border: "none" }}><b>Source:</b> {source}</li>
                </ul>
                <div className="card-body" style={{ textAlign: "center" }}>
                    <a href={newsUrl} target='_blank' className="card-link">More Details</a>
                </div>
            </div>
        )
    }
}

export default NewsItem

NewsItem.defaultProps = {
    title: "Card title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
}