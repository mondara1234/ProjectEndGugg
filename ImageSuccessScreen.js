import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from  'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonText from './src/features/common/components/CommonText';

class ImageSuccessScreen extends React.PureComponent{

    render(){
        return(
            <Container>
                <View style={styles.container}>
                    <View style={styles.viewIcon}>
                        <IconFontAwesome
                            name={'check'}
                            size={50}
                        />
                    </View>
                    <CommonText text={'อนุมัติสำเร็จ'} color={'#fff'} size={26} />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bfc4bf',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewIcon: {
        borderRadius: 50,
        backgroundColor: '#fff',
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    }
});

export default ImageSuccessScreen;