import React from 'react';
import PropTypes from 'prop-types';

export default class Collapsible extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false
  }
}

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
  
  render() {
    const {title, children} = this.props;
    const {isExpanded} = this.state;
    const icon = isExpanded ? < i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>;

    return (
      <div className={`panel ${isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleToggle(e)}>
        <div className="panel-heading">
          <div className="img-small"><img src={title[0]} alt=""/></div>
          <span>{title[1]}</span>
          <span>{title[2]}</span>
          <span>{title[3]}</span>
          <span>{title[4]}</span>
          <span>{title[5]}</span>
          {icon}
        </div>
        <div className="panel-collapse">
          <div className="panel-body" ref="inner">
            {children}
          </div>
        </div>
      </div>
    )
  }
}