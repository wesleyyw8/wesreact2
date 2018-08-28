import React from 'react';
import {connect} from 'react-redux';
import Group from '../group/Group';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.groups = [];
  }
  render() {
    console.log(this.props);
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        {this.props.groups.map(group => <span></span>)}        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups
  };
}
export default connect(mapStateToProps, null)(HomePage);