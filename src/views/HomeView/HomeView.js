/* @flow */
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classes from './HomeView.scss'

type Props = {
}

export class HomeView extends React.Component {
  render() {
    return (
      <div className={classes.home}>
        <h1>Hello World</h1>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
  }
}
export default connect(mapStateToProps, {
})(HomeView)
