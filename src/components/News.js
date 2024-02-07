import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {

    
     state={articles:[],
        page:1,
        loading:true
    };
    

      async componentDidMount(){
       
        let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=29d12c4f38154ecc973e0c6011da8bcb&page=1`);
       this.setState({loading:true})
       let data=await response.json();
       this.setState({articles:data.articles,pagesize:data.totalResults,loading:false});

    }
    handleprev =async()=>{
    let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=29d12c4f38154ecc973e0c6011da8bcb&page=${this.state.page-1}`);
    this.setState({loading:true})
    let data=await response.json();

    this.setState({page:this.state.page-1, articles:data.articles,loading:false
    })

    }
    handlenext = async()=>{
    // let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&categogy29d12c4f38154ecc973e0c6011da8bcb&page=${this.state.page+1}`);
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=29d12c4f38154ecc973e0c6011da8bcb&page=${this.state.page + 1}`);
    this.setState({loading:true})

    let data=await response.json();

    this.setState({page:this.state.page+1, articles:data.articles,loading:false
    });
    let a=Math.ceil(this.state.pagesize/20)
    console.log(a)

   }





  render() {
   
    return (
   
      <div className='container my-3' >
        {this.state.loading&& <Spinner/>}
        <h2>Top Headlines</h2>
        <div className="row" >
       {!this.state.loading && this.state.articles.map((element)=>{return <div className="col-md-4"key={element.url}>
            <Newsitem title={element.title} des={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
            </div>})}
        </div>

        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark"onClick={this.handleprev}>&larr; Previous</button>
        <button type="button" disabled={Math.ceil(this.state.pagesize/20)===this.state.page}className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>

        </div>
        
        
      </div>
    )
  }
}

export default News
