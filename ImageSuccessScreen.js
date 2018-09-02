import React from 'react';
import { StyleSheet, View, Alert, TouchableHighlight } from 'react-native';
import { Container } from  'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonText from './src/features/common/components/CommonText';

class ImageSuccessScreen extends React.PureComponent{

    render(){
        return(
            <Container>
                <TouchableHighlight onPress={()=> Alert.alert(
                    'monara'
                )}>
                    <View style={styles.container}>
                            <IconFontAwesome
                                name={'close'}
                                size={30}
                                style={{position: 'absolute',
                                    top: 10,
                                    left: '90%'}}
                                onPress={()=> Alert.alert(
                                    'mosasasaara'
                                )}
                            />
                        <View style={styles.viewIcon}>
                            <IconFontAwesome
                                name={'check'}
                                size={50}
                            />
                        </View>
                        <CommonText text={'อนุมัติสำเร็จ'} color={'#fff'} size={26} />
                    </View>
                </TouchableHighlight>
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