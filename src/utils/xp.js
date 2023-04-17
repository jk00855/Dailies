import AsyncStorage from '@react-native-async-storage/async-storage';

const calculateLevel = (xp) => {
  // Example formula: level = floor(sqrt(xp / 100))
  return Math.floor(Math.sqrt(xp / 100));
};

export const addXP = async (category, xp) => {
  const currentXP = await getXP(category);
  const newXP = currentXP + xp;
  await AsyncStorage.setItem(`xp_${category}`, newXP.toString());
};

export const getXP = async (category) => {
  const xp = await AsyncStorage.getItem(`xp_${category}`);
  return xp ? parseInt(xp, 10) : 0;
};

export const getLevel = async (category) => {
  const xp = await getXP(category);
  return calculateLevel(xp);
};
