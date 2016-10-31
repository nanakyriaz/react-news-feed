import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import NewsPiece from './NewsPiece';
import MainTitle from './styles/MainTitle';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class NewsFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Loading news...",
      newsPieces: [],
      loading: true
    };
  }

  componentDidMount() {
    window.setTimeout(this.loadFeed.bind(this), 1000);
  }

  loadFeed() {
    let url = this.props.url;
    let component = this;

    $.ajax({
       type: "GET",
       url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
       dataType: 'json',
       error: function(){
         console.log('Error - cannot load feed');
       },
       success: function(xml){
         component.setState({
           title: xml.responseData.feed.title,
           newsPieces: xml.responseData.feed.entries,
           loading: false
         });
       }
     });
  }

  renderNewsPiece(item, index) {
    // Get the image from the HTML content snippet
    var content = $("<div/>").html(item.content);
    var image = $("img", content).attr("src");

    return (
      <NewsPiece
        key={index}
        image={image}
        item={item}
        link={item.link} />
    );
  }

  renderList() {
    let title = this.state.title;
    let newsPieces = this.state.newsPieces;
    let category = this.props.category;

    if(category){
      newsPieces = _.filter(newsPieces, function(item){return _.includes(item.categories, category); });

    }

    return (
      <div>
        <MainTitle label={title} />

        <div>
          {newsPieces.map(this.renderNewsPiece.bind(this))}
        </div>
      </div>
    );
  }

  renderLoading() {
    return(
      <RefreshIndicator
        top={100}
        left={window.innerWidth / 2 - 50}
        size={50}
        loadingColor={"#b1efcc"}
        status="loading" />
    );
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    }

    return this.renderList();
  }
}

export default NewsFeed;
