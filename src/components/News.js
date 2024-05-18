import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';

const API_KEY = '29d12c4f38154ecc973e0c6011da8bcb';

export class News extends Component {
    state = {
        articles: [],
        page: 1,
        loading: true,
        totalResults: 0
    };

    async componentDidMount() {
        this.fetchNews(1);
    }

    fetchNews = async (page) => {
        this.setState({ loading: true });
        try {
            let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${API_KEY}&page=${page}`);
            let data = await response.json();
            if (data.articles) {
                this.setState({
                    articles: data.articles,
                    totalResults: data.totalResults,
                    page: page,
                    loading: false
                });
            } else {
                console.error('No articles found in the response');
                this.setState({ articles: [], loading: false });
            }
        } catch (error) {
            console.error('Error fetching news articles:', error);
            this.setState({ articles: [], loading: false });
        }
    }

    handlePrev = async () => {
        if (this.state.page > 1) {
            this.fetchNews(this.state.page - 1);
        }
    }

    handleNext = async () => {
        if (this.state.page < Math.ceil(this.state.totalResults / 20)) {
            this.fetchNews(this.state.page + 1);
        }
    }

    render() {
        const { articles, loading, page, totalResults } = this.state;

        return (
            <div className="container my-3">
                {loading && <Spinner />}
                <h2>Top Headlines</h2>
                <div className="row">
                    {!loading && articles.map((element) => (
                        <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title} des={element.description} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    ))}
                </div>

                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                    <button type="button" disabled={page >= Math.ceil(totalResults / 20)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;

