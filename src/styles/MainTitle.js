import React from 'react';

const mainTitleBaseStyle = {
  fontFamily: 'sans-serif',
  fontWeight: '800',
  fontSize: '4rem'
};

class MainTitle extends React.Component {
  render() {
    return(
      <h1 style={mainTitleBaseStyle}>
        {this.props.label}
      </h1>
    );
  }
}

export default MainTitle;
