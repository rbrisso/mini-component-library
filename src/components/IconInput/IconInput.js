import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--borderBottom': 1 + 'px',
    '--fontSize': 14 +'px',
    iconSize: 16,
    '--height': 24 +'px',
  },
  large: {
    '--borderBottom': 2 + 'px',
    '--fontSize': 18 +'px',
    iconSize: 24,
    '--height': 36 +'px',
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon size={styles.iconSize} id={icon} strokeWidth={1} />
      </IconWrapper>
      <InputComponent  placeholder={placeholder} styles={{ '--width': width + 'px' }} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
     color: ${COLORS.black};
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`

const InputComponent = styled.input`
  border: none;
  border-bottom: var(--borderBottom) solid ${COLORS.black};
  font-weight: 700;
  color: inherit;
  padding-left: var(--height);
  font-size: var(--fontSize);
  width: var(--width);
  height: var(--height);
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

export default IconInput;
