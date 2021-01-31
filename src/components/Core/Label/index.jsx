import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Label = styled.div`
  padding-top: 20px;
  font-size: 2em;
  font-weight: bold
`;

class LabelComponent extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Label className={className}>
        {children}
      </Label>
    );
  }
}

LabelComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default LabelComponent;
