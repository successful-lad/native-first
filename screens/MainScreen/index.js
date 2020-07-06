import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableHighlight,
  Modal,
} from 'react-native';
// import NumericInput from "../../components/NumericInput";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    alignSelf: 'center',
  },
  table: {
    display: 'flex',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    flexWrap: 'wrap'
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardName: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '50%'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
}); 

const MainScreen = () => {

  const [ tableData, setTableData ] = useState([
    { accountTitle: 'Первая карта', accountScore: 100, id: 0 },
    { accountTitle: 'Карта на стартап', accountScore: 232, id: 1 }]);
  const [modalVisible, setModalVisible] = useState(false);

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <View style={styles.table}>
          {tableData.map(card =>
            <View key={card.id} style={styles.cardWrapper}>
              <Text style={styles.cardName}>
                {card.accountTitle}
              </Text>
              <Text style={styles.cardName}>
                {card.accountScore}
              </Text>
            </View>
          )}
        </View>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
        {/*<NumericInput/>*/}
      </View>
    );
};



export default MainScreen;
