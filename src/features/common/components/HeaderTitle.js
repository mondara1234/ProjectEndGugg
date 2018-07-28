import React from 'react';
import CommonText from './CommonText';

const HeaderTitle = (props) => {
    return <CommonText text={props.text} color={props.color} size={props.size}  />
};

HeaderTitle.defaultProps = {
    text: '',
    color: '#f3f3f3',
    size : 20
};

export default HeaderTitle;
