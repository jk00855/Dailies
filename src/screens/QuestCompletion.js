import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { addXP, getXP, getLevel } from '../utils/xp';

const QuestCompletion = ({ route, navigation }) => {
  const { selectedQuests, category } = route.params;
  const [completedQuests, setCompletedQuests] = useState([]);

  const [level, setLevel] = useState(0);
  const [xp, setXP] = useState(0);

  const fetchData = async () => {
    const currentXP = await getXP(category);
    const currentLevel = await getLevel(category);
    setXP(currentXP);
    setLevel(currentLevel);
  };

  useEffect(() => {
    fetchData();
    const unsubscribe = navigation.addListener('focus', fetchData);
    return () => {
      unsubscribe();
    };
  }, [completedQuests, navigation]);
  

  const toggleCompleted = async (quest) => {
    if (completedQuests.includes(quest)) {
      setCompletedQuests(completedQuests.filter((q) => q !== quest));
    } else {
      setCompletedQuests([...completedQuests, quest]);
      await addXP(quest.category, quest.xp);
      fetchData(); // Refresh the XP and level after adding XP
      if (completedQuests.length + 1 === 3) {
        navigation.navigate('CategorySelection');
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Quests</Text>
      <Text style={styles.levelInfo}>
        Level: {level} | XP: {xp}/{(level + 1) ** 2 * 100}
      </Text>
      {selectedQuests.map((quest, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            completedQuests.includes(quest) ? styles.buttonCompleted : {},
          ]}
          onPress={() => toggleCompleted(quest)}
        >
          <Text style={styles.buttonText}>{quest.title}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('CategorySelection')}
      >
        <Text style={styles.homeButtonText}>Go Home</Text>
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
    buttonCompleted: {
      backgroundColor: '#28a745',
    },
    homeButton: {
      backgroundColor: '#ffc107',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
      marginTop: 20,
    },
    homeButtonText: {
      fontSize: 18,
      color: '#fff',
    },
    levelInfo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
  });
  
export default QuestCompletion;
