import React from 'react';
import { View, Flatlist } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props) {

    const renderMenuItem = ({ item, index }) => {

        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/uthappiza.png') }}
            />
        );
    };

    return (
        <Flatlist
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}
export default Menu;