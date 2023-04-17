import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { categories } from '../utils/quests';
import { getXP, getLevel } from '../utils/xp';

const CategorySelection = ({ navigation }) => {
  const [xp, setXP] = useState({});
  const [level, setLevel] = useState({});

  const fetchData = async () => {
    const xpData = {};
    const levelData = {};
    for (const category of categories) {
      xpData[category] = await getXP(category);
      levelData[category] = await getLevel(category);
    }
    setXP(xpData);
    setLevel(levelData);
  };

  useEffect(() => {
    fetchData();
    const unsubscribe = navigation.addListener('focus', fetchData);
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dailies</Text>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() =>
            navigation.navigate('QuestSelection', {
              category,
            })
          }
        >
          <Text style={styles.buttonText}>{category}</Text>
          <Text style={styles.buttonText}>
            Level: {level[category]} | XP: {xp[category]}
          </Text>
        </TouchableOpacity>
      ))}
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
});


export default CategorySelection;
