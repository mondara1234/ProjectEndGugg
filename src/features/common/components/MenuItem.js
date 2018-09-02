import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const MenuItem = (props) => {
    return(
        <TouchableOpacity style={styles.containerMenu} onPress={props.onPress}>
            <Image
                source={props.itemImage}
                style={styles.image}
            />
        </TouchableOpacity>
    )
};

MenuItem.propTypes = {
    onPress: PropTypes.func.isRequired,
    itemImage: PropTypes.number
};

MenuItem.defaultProps = {
    itemImage: null
};

const styles = StyleSheet.create({
    containerMenu: {
        width: '40%',
        height: '40%',
        padding: 20
    },
    image: {
        width: '100%',
        height: '100%',
        borderColor: '#fff',
        borderWidth: 3
    }

});

export default MenuItem;