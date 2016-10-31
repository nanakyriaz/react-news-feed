import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NewsFeed from './NewsFeed';

injectTapEventPlugin();

const feedUrl = "http://feeds.reuters.com/Reuters/worldNews";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <NewsFeed url={feedUrl} category={this.props.params.category} />
      </MuiThemeProvider>
    );
  }
}

export default App;
