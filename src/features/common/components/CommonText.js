import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';

const CommonText = (props) => {
    const fontFamily = props.weight === 'bold' ? 'ThaiSansNeue-Bold' : (props.weight === 'light' ? 'ThaiSansNeue-Light' : 'ThaiSansNeue-Regular' );

    return (
        <Text style={[{ fontFamily: fontFamily, fontSize: props.size, color: props.color }, props.style]}>
            {`${props.text}`}
        </Text>
    )
};

CommonText.propTypes = {
    weight: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

CommonText.defaultProps = {
    weight: 'regular',
    size: 24,
    color: s.black,
    text: ''
};

export default CommonText;
