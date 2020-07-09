import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Card } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    };

    render() {

        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );
        };

        return (
            <ScrollView>


                <Card title='Our Mission' wrapperStyle={{margin: 10}}
                >
                    {/* <View> */}
                    {/* <Text style={{ marginBottom: 20, textAlign:'center', fontWeight: 'bold' }}>Our Mission</Text> */}
                    <Text>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</Text>

                    {/* </View> */}

                </Card>

                <Card title='Community Partners' wrapperStyle={{margin: 10}}
                >
                    <View>
                    {/* <Text style={{ marginBottom: 20, textAlign:'center', fontWeight: 'bold' }}>Community Partners</Text> */}


                    </View>
                        <FlatList
                            data={this.state.partners}
                            renderItem={renderPartner}
                            keyExtractor={item => item.id.toString()}
                        />
                </Card>


            </ScrollView>
        );
    }

}

export default About;