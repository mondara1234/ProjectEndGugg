import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Content , Container, Button } from  'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonText from '../../common/components/CommonText';
import HeaderLeftMenu from '../../common/components/HeaderLeftMenu';

class HowToFoodScreen extends React.Component{

    render(){
        const { data, otherParam } = this.props.navigation.state.params;
        console.log('sss',data);
        return(
            <Container>
                <Content>
                    <View>
                        <Image
                            style={styles.image}
                            source={require('../../../../pulic/assets/images/photo.png')}
                        />
                        <View style={styles.containerText}>
                            <CommonText text={'ชื่อ :'} />
                            <CommonText text={data.name} />
                        </View>
                        <View style={styles.containerText}>
                            <CommonText text={'จำนวน แคลลอรี่ :'} />
                            <CommonText text={data.calorie} />
                        </View>
                        <View style={styles.containerText}>
                            <CommonText text={'รายละอียด :'} />
                            <CommonText text={otherParam} />
                        </View>
                    </View>
                </Content>
                <Button
                    full
                    style={styles.button}
                >
                    <IconFontAwesome name={'save'} color={'#fff'} size={20} />
                    <CommonText text={'วิธีการทำ'} color={'#fff'} />
                </Button>
            </Container>
        )
    }
}

HowToFoodScreen.navigationOptions  = ({navigation}) => ({
    headerTitle: <CommonText text={'ขั้นตอนการทำอาหาร'} />,
});

const styles = StyleSheet.create({
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: '100%',
        height: 40,
        marginBottom: 10,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    button: {
        width: '100%',
        paddingVertical: 8,
        backgroundColor: '#c41f27',
        borderRadius: 7,
        marginVertical: 20
    },
    image: {
        flex: 1,
        width: '100%',
        height: 160
    }

});

export default HowToFoodScreen;
