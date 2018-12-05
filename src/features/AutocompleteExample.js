import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import userHistory from '../features/history/api/userHistory';

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

class AutocompleteExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: userHistory,
            query: ''
        };
    }

    //ไว้รับค่าแล้วค้นหา
    findFilm(query) {
        if (query === '') {
            return [];
        }

        const { films } = this.state;
        return films.filter(searchData => searchData.user.name.search(query.trim()) >= 0);
       /* film.episode_id ต้องการค้นหาจากอะไร*/
       /* filter  trim  คิอไร*/
    }

    //ไว้แสดงข้อความ
    static renderFilm(getFilms) {
        const { user, dayhistory, history, episode_id } = getFilms;
        const roman = episode_id < ROMAN.length ? ROMAN[episode_id] : episode_id;

        return (
            <View>
                <Text style={styles.titleText}>{roman}. {user.name}</Text>
                <Text style={styles.directorText}>({dayhistory})</Text>
                <Text style={styles.openingText}>{history.detile}</Text>
            </View>
        );
    }

    render() {
        const films = this.findFilm(this.state.query);//ประกาศตัวแปร เพื่อรับค่า findFilm โดยส่งค่า query ไป

        return (
            <View style={styles.container}>
                <Autocomplete
                    autoCapitalize="none" /*ไม่ต้องมีก็ได้*/
                    autoCorrect={true} /*ไม่ต้องมีก็ได้*/
                    style={styles.containerSearch}/*กำหนดรูปแบบช่องค้นหา*/
                    containerStyle={styles.autocompleteContainer}/*กำหนดรูปแบบแถบแสดงค้นหา*/
                    data={films.length === 1 ? [] : films}  /*ตรวจสอบข้อมูลที่หาเจอถ้ามีแค่อันเดียว ไม่แสดงช่องค้นหา แต่ถ้ามีเยอะจะแสดงให้เลือก*/
                    defaultValue={this.state.query} /*กำหนดค่าเริ่มต้นให้กับ แวรู้*/
                    onChangeText={text => this.setState({ query: text })} /*setค่าให้กับตัวแปล query เป้นไปตามที่กรอก*/
                    placeholder="กรอกข้อมูลID" /*ลายน้ำเพื่อพิมจะหายไป*/
                    renderItem={({ episode_id, user }) => (
                        <TouchableOpacity onPress={() => alert(episode_id + user.name)}>
                            <Text style={styles.itemText}>
                                {user.name} ({'แสดงตรงค้นหา'})
                            </Text>
                        </TouchableOpacity>/*กำหนดรูปแบบการแสดงในช่่องค้นหาที่จะขึ้นเมื่อกรอกข้อความ*/
                    )}
                />
                <View style={styles.descriptionContainer}>
                    {films.length > 0 ? (
                        AutocompleteExample.renderFilm(films[0])//คือไรทำไมเขียนแบบนี้
                    ) : (
                        <Text style={styles.infoText}>
                            Enter Title of a Star Wars movie{'แสดงเนื้อหสด้านล่าง'}
                        </Text>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 25
    },
    autocompleteContainer: {
        flex: 1,
        left: 50,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
        backgroundColor: '#2233dd'
    },
    itemText: {
        fontSize: 15,
        margin: 2,
        color:'#dd1222'
    },
    containerSearch: {
        backgroundColor:'#a9dd9b',
        color:'#dd1222'
    },
    descriptionContainer: {
        // `backgroundColor` needs to be set otherwise the
        // autocomplete input will disappear on text input.
        backgroundColor: '#F5FCFF',
        marginTop: 25
    },
    infoText: {
        textAlign: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    directorText: {
        color: 'grey',
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'center'
    },
    openingText: {
        textAlign: 'center'
    }
});

export default AutocompleteExample;