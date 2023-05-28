import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './Landing.styles';

class Landing extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Landing will mount');
  }

  componentDidMount = () => {
    console.log('Landing mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Landing will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Landing will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('Landing did update');
  }

  componentWillUnmount = () => {
    console.log('Landing will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LandingWrapper">
        Test content
      </div>
    );
  }
}

Landing.propTypes = {
  // bla: PropTypes.string,
};

Landing.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
