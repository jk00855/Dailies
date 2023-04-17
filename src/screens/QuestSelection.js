import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getQuests } from '../utils/quests';

const QuestSelection = ({ route, navigation }) => {
  const { category } = route.params;
  const quests = getQuests(category);
  const [selectedQuests, setSelectedQuests] = useState([]);

  const toggleQuest = (quest) => {
    if (selectedQuests.includes(quest)) {
      setSelectedQuests(selectedQuests.filter((q) => q !== quest));
    } else if (selectedQuests.length < 3) {
      setSelectedQuests([...selectedQuests, quest]);
    }
  };

  const startQuests = () => {
    if (selectedQuests.length === 3) {
      navigation.navigate('QuestCompletion', { selectedQuests });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select 3 Quests</Text>
      {quests.map((quest, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            selectedQuests.includes(quest) ? styles.buttonSelected : {},
          ]}
          onPress={() => toggleQuest(quest)}
        >
          <Text style={styles.buttonText}>{quest.title}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.startButton} onPress={startQuests}>
        <Text style={styles.startButtonText}>Start Quests</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
      marginVertical: 5,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
    },
    buttonSelected: {
      backgroundColor: '#0056b3',
    },
    startButton: {
      backgroundColor: '#dc3545',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
      marginTop: 20,
    },
    startButtonText: {
      fontSize: 18,
      color: '#fff',
    },
  });  

export default QuestSelection;
