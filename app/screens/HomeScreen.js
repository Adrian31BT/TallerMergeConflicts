import { View, Text, StyleSheet } from 'react-native'
import { Button } from '@rneui/base'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi aplicación, soy Adrian Bacilio Tumbaco</Text>
        <Text>Arrecho nunca muere, y si muere, muere arrecho</Text>
        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button 
                    title='CONTACTS'
                    buttonStyle={{
                          backgroundColor:'red'
                    }}
                    onPress={() => {
                        navigation.navigate('ContactsNav');
                    }}
                />
            </View>
            <Button
                buttonStyle={{
                        backgroundColor:'red'
                }}
                title='PRODUCTOS'
                onPress={() => {
                    navigation.navigate('ProductNavigation');
                }}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "green"
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    boton1: {
        marginRight: 60
    },
});
