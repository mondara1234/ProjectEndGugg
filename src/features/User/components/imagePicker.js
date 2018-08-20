import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { Container, Thumbnail } from 'native-base'
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

class imagePicker extends React.Component{
    constructor(){
        super();
        this.state = {
            imageSource: null,
            data: null
        }
    }

    selectPhoto(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    imageSource: source,
                    data: response.data
                });
            }
        });
    }

    uploadPhoto(){
        RNFetchBlob.fetch('POST', 'http://192.168.1.28/My_SQL/upload.php', {
            Authorization : "Bearer access-token",
            otherHeader : "foo",
            'Content-Type' : 'multipart/form-data',
        }, [
            { name : 'image', filename : 'image.png', type:'image/png', data: this.state.data},
            console.log('Data',this.state.data)
        ]).then((resp) => {
            console.log('resp ='+ resp);
        }).catch((err) => {
            console.log('errror = '+ err);
        })
    }

    render (){

        return(
            <Container style={styles.container}>
                <Image  style={{width:120, height: 120, borderRadius: 80}}
                        source={this.state.imageSource != null ? this.state.imageSource :
                            require('../../../../pulic/assets/images/user.png')}/>
                <TouchableOpacity style={styles.button} onPress={this.selectPhoto.bind(this)}>
                   <Text> {'เลือกรูปภาพ'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.uploadPhoto.bind(this)}>
                    <Text> {'อัพโหลด'}</Text>
                </TouchableOpacity>
            </Container>
        );
    }

}

const options = {
    title: 'Select a photo',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    },
    takePhotoButtonTitle: 'ถ่ายรูป',
    chooseFromLibraryButtonTitle: 'เลือกรูปจากคลัง',
    quality: 1
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: '#636863',
        justifyContent: 'center',
        marginTop: 10
    }
});
export default imagePicker;