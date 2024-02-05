import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Shubman Gill nervous his father will 'pull him up' despite scoring gritty 104 - Hindustan Times",
            "description": "More than a needless swing of the bat, Gill was undone by the mind game played by England captain Ben Stokes with the constant fielding shuffles. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/shubman-gill-nervous-his-father-will-pull-him-up-despite-scoring-gritty-104-on-day-3-of-india-vs-england-2nd-test-101707046193404.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/04/1600x900/India-England-Cricket-28_1707046240235_1707046261263.jpg",
            "publishedAt": "2024-02-04T12:04:02Z",
            "content": "Battling against a barren run of 12 innings without even a half-century, which sparked discussions on whether India should stick with him in the playing XI when the likes of Virat Kohli return, Shubm… [+2728 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "Love watching Jasprit Bumrah and Mohammed Shami bowl: Steve Harmison - Times of India",
            "description": "Cricket News: Former England pacer Steve Harmison expresses his admiration for India pacers Jasprit Bumrah and Mohammed Shami, credits their exceptional skills for making India a formidable force.",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/england-in-india/love-watching-jasprit-bumrah-and-mohammed-shami-bowl-steve-harmison/articleshow/107402309.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-107402291,width-1070,height-580,imgsize-43164,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-04T10:51:00Z",
            "content": "2nd Test: Jaiswal 209, Bumrah six-for put India on top"
        },
        {
            "source": {
                "id": null,
                "name": "Wisden.com"
            },
            "author": "Ben Gardner",
            "title": "Can England Make History? The Five Highest Test Run-Chases In India | IND Vs ENG | Cricket News Today - Wisden",
            "description": "England need a record run-chase if they are to secure a 2-0 Test series lead - Here are the highest run-chases and biggest fourth-innings totals in India.",
            "url": "https://wisden.com/series-stories/india-v-england-2024/can-england-make-history-the-five-highest-test-run-chases-in-india",
            "urlToImage": "https://cdn.wisden.com/wp-content/uploads/2024/02/Ben-Stokes-England-Test-captain-bats-in-the-first-innings-of-the-India-Test-his-side-will-need-a-record-total-to-win.png",
            "publishedAt": "2024-02-04T10:09:56Z",
            "content": "England need a record run-chase if they are to secure a 2-0 Test series lead against India – but are there precedents from history to boost their morale? Here is everything you need to know about the… [+2444 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Irfan Pathan reveals wife Safa Baig's face on 8th marriage anniversary - Hindustan Times",
            "description": "Irfan Pathan took to his official social media account to share a picture with wife Safa Baig on the couple's 8th marriage anniversary. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/irfan-pathan-reveals-wife-safa-baigs-face-on-8th-marriage-anniversary-pens-heartfelt-note-101707036610870.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/04/1600x900/irfan_pathan_india_1707039333178_1707039346968.jpg",
            "publishedAt": "2024-02-04T09:38:25Z",
            "content": "On February 3rd, Saturday, former Indian cricketer Irfan Pathan marked his 8th wedding anniversary with wife Safa Baig. Sharing a picture with his spouse, Pathan expressed his gratitude and admiratio… [+1819 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wisden.com"
            },
            "author": "Abhishek Mukherjee",
            "title": "Watch: Rachin Ravindra Reaches Maiden Test Hundred In Record Stand With Kane Williamson | NZ Vs SA | Cricket News Today - Wisden",
            "description": "A first Test hundred for Rachin Ravindra who continues his fine form in international cricket in his first innings in the middle order.",
            "url": "https://wisden.com/series-stories/new-zealand-v-south-africa-2023-24/watch-rachin-ravindra-maiden-test-hundred",
            "urlToImage": "https://cdn.wisden.com/wp-content/uploads/2024/02/Rachin-Ravindra-maiden-Test-hundred.png",
            "publishedAt": "2024-02-04T08:18:44Z",
            "content": "Watch: In the first Test of the two-match series against South Africa, at Mount Maunganui, Rachin Ravindra hit his maiden Test hundred.\r\nAsked to bat in the first Test match, New Zealand were reduced… [+1855 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "India vs England, 2nd Test: Joe Root forced off field with finger injury - Times of India",
            "description": "Cricket News: England's Joe Root sustains a finger injury during the 2nd Test against India, forcing him off the field. Get the latest updates and details on Root's condition.",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/england-in-india/india-vs-england-2nd-test-joe-roots-finger-injury-forces-him-off-field/articleshow/107399187.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-107399208,width-1070,height-580,imgsize-33886,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-04T07:36:00Z",
            "content": "2nd Test: Jaiswal 209, Bumrah six-for put India on top"
        },
        {
            "source": {
                "id": null,
                "name": "Cricket.one"
            },
            "author": "Jatin",
            "title": "[Watch] Rajat Patidar's Unlucky Dismissal on Debut Courtesy of Ben Foakes' Sharp Catch - OneCricket",
            "description": "Rajat Patidar was dismissed for 9 on his debut after Ben Foakes took a sharp catch off Rehan Ahmed's delivery, marking an unfortunate end to his innings.",
            "url": "https://cricket.one/match-hub/watch-rajat-patidars-unlucky-dismissal-on-debut-courtesy-of-ben-foakes-sharp-catch/65bf2aa2e8343f292369c5b6",
            "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1707027103432_Untitled design - 2024-02-04T114139.669.jpg",
            "publishedAt": "2024-02-04T06:11:46Z",
            "content": "Patidar registered scores of 32 &amp; 9 on Test debut (X)\r\nIn a rather unfortunate debut against England in the ongoing second Test of the five-match series in Vizag, Indian batsman Rajat Patidar fac… [+1627 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Jasprit Bumrah's strong message after Mukesh Kumar's dreadful outing in 2nd Test - Hindustan Times",
            "description": "Mukesh Kumar conceded 44 runs without a wicket in the first innings of the second Test in Visakhapatnam. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/jasprit-bumrahs-strong-message-for-mukesh-kumar-after-dreadful-outing-in-2nd-test-we-will-have-that-conversation-101707015474941.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/04/1600x900/CRICKET-IND-ENG-TEST-20_1707017663748_1707017681137.jpg",
            "publishedAt": "2024-02-04T03:40:16Z",
            "content": "Team India's star pacer Jasprit Bumrah produced a magnificent outing on Day 2 of the second Test of the series in Visakhapatnam, clinching a 10th five-wicket haul to dismantle the English batting lin… [+2412 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Yashasvi Jaiswal's record 209 vs England sparks 'Sachin, Sehwag' comparisons - Hindustan Times",
            "description": "With Yashasvi converting his overnight score to a record-breaking double-century on the second morning, cricket experts from India went ga-ga over the feat | Cricket",
            "url": "https://www.hindustantimes.com/cricket/ind-vs-eng-sachin-tendulkar-took-long-time-double-ton-virender-sehwag-yashasvi-jaiswal-record-209-legendary-comparisons-101706978081232.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/yash_legend_1706978590480_1706978600370.jpg",
            "publishedAt": "2024-02-04T01:33:52Z",
            "content": "A knock as epic as 209, scored by Yashasvi Jaiswal, is bound to spark comparisons with some of the legends of the game. On Friday, former India cricketer Aakash Chopra compared the youngster to Sir D… [+3025 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sportskeeda"
            },
            "author": "Sportz Connect",
            "title": "BPL 2024 Points Table: Updated Standings after Sylhet Strikers vs Rangpur Riders, Match 20 - Sportskeeda",
            "description": "It was an action-filled day as two matches were played in the ongoing BPL 2024 at the Sylhet International Cricket Stadium on Saturday, February 3.",
            "url": "https://www.sportskeeda.com/cricket/news-bpl-2024-points-table-updated-standings-sylhet-strikers-vs-rangpur-riders-match-20",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2024/02/f00cd-17069786285640-1920.jpg",
            "publishedAt": "2024-02-03T17:14:19Z",
            "content": "It was an action-filled day as two matches were played in the ongoing BPL 2024 at the Sylhet International Cricket Stadium on Saturday, February 3.\r\nKhulna Tigers locked horns with Fortune Barishal f… [+2095 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Cricket Times"
            },
            "author": "Anirudh Singh",
            "title": "AUS vs WI, 2nd ODI: Match Prediction, Dream11 Team, Fantasy Tips & Pitch Report | Australia vs West Indies 2024 - Cricket Times",
            "description": "Australia vs West Indies Dream11 Team for today's match - February 2, 03:30 am GMT | West Indies tour of Australia 2024, 1st ODI The iconic Melbourne Cricket Ground will host the contest.",
            "url": "https://crickettimes.com/2024/02/aus-vs-wi-2nd-odi-match-prediction-dream11-team-fantasy-tips-pitch-report-australia-vs-west-indies-2024/",
            "urlToImage": "https://crickettimes.com/wp-content/uploads/2024/02/Australia-vs-West-Indies-2024-2nd-ODI-Dream11-Prediction.webp",
            "publishedAt": "2024-02-03T16:30:52Z",
            "content": "Australia are set to face West Indies in the second ODI of the three-match series this Sunday.\r\nAfter securing victory in the opening fixture at the Melbourne Cricket Ground (MCG) on Friday, the Aust… [+1819 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "PTI",
            "title": "Sai Sudharsan hundred gives India A big edge over England Lions on Day 3 - Hindustan Times",
            "description": "Chasing 403 for an improbable win, the Lions are 83 for two in their second innings at stumps. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/sai-sudharsan-hundred-gives-india-a-big-edge-over-england-lions-on-day-3-101706974967106.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/sai_test_1706975310858_1706975333699.jpg",
            "publishedAt": "2024-02-03T15:51:48Z",
            "content": "Bhardwaj Sai Sudharsan underlined his growing status as a productive top-order batter with a hundred against England Lions, as India A reached a position of strength on the third day of their third u… [+2227 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Trisha Sengupta",
            "title": "MS Dhoni signs a fan's shoe. Netizens call him ‘lucky’, ask him to frame it - Hindustan Times",
            "description": "“Thank you MS Dhoni for making my day…,” reads a part of a post by an Instagram user who got an autograph of the cricketer. | Trending",
            "url": "https://www.hindustantimes.com/trending/ms-dhoni-signs-a-fans-shoe-netizens-call-him-lucky-ask-him-to-frame-it-101706942646444.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/Instagram_Video_Viral_Shoes_Fan_MS_Dhoni_1706942629738_1706942638133.png",
            "publishedAt": "2024-02-03T06:53:39Z",
            "content": "A video of a sweet moment between MS Dhoni and one of his fans was shared on social media. The clip shows the legendary cricketer signing the Nike shoes of the man. The share has prompted varied resp… [+1511 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricket World"
            },
            "author": "Cricket World Staff",
            "title": "ILT20 2024 Match 19 & 20: Cricket Betting Tips and Match Predictions - February 3 - Cricket World",
            "description": "Here are the Fantasy Cricket Predictions and Betting Tips for the International League T20  matches which will be played on the 3rd of February at Dubai International Cricket Stadium, Dubai and the Sheikh Zayed Stadium, Abu Dhabi.",
            "url": "https://www.cricketworld.com/cricket-betting-tips-and-match-predictions-bangladesh-premier-league-bpl-2024-matches-15-16-january-30/92446.htm",
            "urlToImage": "https://www.cricketworld.com/media/img/a/d/134589.jpg",
            "publishedAt": "2024-02-02T21:42:16Z",
            "content": "Match 19 - Desert Vipers vs Gulf Giants (Dubai International Cricket Stadium)\r\nCurrent Form Desert Vipers:Desert Vipers are currently placed at the bottom most position with 2 wins to their credit.\r\n… [+6420 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "PTI",
            "title": "Ranji Trophy: Shivam Dube fires as Mumbai seize control against sloppy Bengal - Hindustan Times",
            "description": "Shivam Dube was in hot form, smashing 12 fours and one six in his 73-ball 72. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/ranji-trophy-shivam-dube-fires-as-mumbai-seize-control-against-sloppy-bengal-101706896869001.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/02/1600x900/PTI02-02-2024-RPT409B-0_1706896965746_1706897037185.jpg",
            "publishedAt": "2024-02-02T18:09:33Z",
            "content": "India's T20 specialist Shivam Dube continued his recent streak of form with a counter-attacking fifty that proved to be the cornerstone of Mumbai's excellent 330 for six against Bengal on the opening… [+2470 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Crictoday.com"
            },
            "author": "CT Contributor",
            "title": "Shamar Joseph receives hero's welcome in Guyana, airport live streams his felicitation - Crictoday.com (Cricket News) ",
            "description": "He was a given a hero's welcome when he arrived in Guyana from Australia. His arrival was live streamed by Cheddi Jagan International Airport",
            "url": "http://crictoday.com/cricket/daily-cricket-news/shamar-joseph-receives-heros-welcome-in-guyana-airport-live-streams-his-felicitation/",
            "urlToImage": "https://crictoday.com/wp-content/uploads/2024/02/Shamar-Joseph.webp",
            "publishedAt": "2024-02-02T16:05:05Z",
            "content": "Shamar Joseph has become one of the most famous fast bowlers after his sensational bowling in the second innings of the second Test against Australia in Gaba. He is from Baracara, a remote village by… [+1687 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "Vithushan Ehantharajah",
            "title": "Shoaib Bashir's belated arrival well worth the wait - ESPNcricinfo",
            "description": "Putting last week's visa hassles behind him, the offspinner bowled 28 impressive overs on his first day as a Test cricketer",
            "url": "https://www.espncricinfo.com/story/ind-vs-eng-2nd-test-shoaib-bashir-belated-arrival-well-worth-the-wait-1419386",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/375100/375131.6.jpg",
            "publishedAt": "2024-02-02T14:58:09Z",
            "content": "Match AnalysisPutting last week's visa hassles behind him, the offspinner bowled 28 impressive overs on his first day as a Test cricketer"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <div className="container" style={{ textAlign: "center", fontWeight: "bolder" }}>
                    <h2>TOP HEADLINES</h2>
                </div>
                <div className='' style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    columnGap: "10px"
                }}>
                    {this.state.articles.map((e) => {
                        return <NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} />
                    })}
                </div >
            </div>
        )
    }
}

export default News