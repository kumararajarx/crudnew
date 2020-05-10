import React, { Component } from 'react';
import { WidgetWrapper } from './style';

export default class IsoWidgetsWrapper extends Component {
  render() {
    // eslint-disable-next-line no-empty-pattern
    const {
      // width,
      // gutterTop,
      // gutterRight,
      // gutterBottom,
      // gutterLeft,
      // padding,
      // bgColor,
      // children,
    } = this.props;
    // const wrapperStyle = {
    //   width: width,
    //   marginTop: gutterTop,
    //   marginRight: gutterRight,
    //   marginBottom: gutterBottom,
    //   marginLeft: gutterLeft,
    //   padding: padding,
    //   backgroundColor: bgColor,
    // };

    return (
      <WidgetWrapper className="isoWidgetsWrapper" >
        {/* {children} */}
      </WidgetWrapper>
    );
  }
}
