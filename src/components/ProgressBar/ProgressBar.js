/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--heightBar': 8 + 'px',
    '--padding': 0,
    '--borderRadius': 4 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--heightBar': 12 + 'px',
    '--padding': 0,
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--heightBar': 16 + 'px',
    '--padding': 4 + 'px',
    '--borderRadius': 8 + 'px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return  (
    <ProgressBarComponent 
      ole='progressbar' 
      aria-valuemin='0'
      aria-valuemax='100'
      aria-valuenow={value}
      style={styles}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <ProgressBarValue style={styles} value={value}/>
    </ProgressBarComponent>);
};

export default ProgressBar;


const ProgressBarComponent =  styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border: 0;
  border-radius: var(--borderRadius);
  height: var(--height);
  padding: var(--padding);
`

const ProgressBarValue = styled.div`
  width: ${p => p.value + '%' };
  border-radius: ${p => (p.value < 98.9) ? '4px 0px 0px 4px' : '4px' } ;
  height: var(--heightBar);
  background-color: ${COLORS.primary};
`