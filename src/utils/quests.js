export const categories = [
  'Fitness',
  'Learning',
  'Meditation',
];

const allQuests = [
  { title: 'Run for 30 minutes', category: 'Fitness', xp: 100 },
  { title: 'Do 50 push-ups', category: 'Fitness', xp: 100 },
  { title: 'Do 20 pull-ups', category: 'Fitness', xp: 100 },
  { title: 'Hold a plank for 2 minutes', category: 'Fitness', xp: 150 },
  { title: 'Go for a 45-minute walk', category: 'Fitness', xp: 80 },
  { title: 'Complete a 30-minute HIIT workout', category: 'Fitness', xp: 150 },

  { title: 'Learn a new word', category: 'Learning', xp: 50 },
  { title: 'Read 20 pages of a book', category: 'Learning', xp: 100 },
  { title: 'Watch a TED Talk', category: 'Learning', xp: 100 },
  { title: 'Practice a new language for 30 minutes', category: 'Learning', xp: 100 },
  { title: 'Write a short story', category: 'Learning', xp: 150 },
  { title: 'Complete a coding exercise', category: 'Learning', xp: 150 },

  { title: 'Meditate for 10 minutes', category: 'Meditation', xp: 50 },
  { title: 'Do 5 minutes of deep breathing exercises', category: 'Meditation', xp: 50 },
  { title: 'Practice yoga for 30 minutes', category: 'Meditation', xp: 100 },
  { title: 'Listen to a guided relaxation session', category: 'Meditation', xp: 50 },
  { title: 'Take a mindful nature walk', category: 'Meditation', xp: 100 },
  { title: 'Write down 5 things you are grateful for', category: 'Meditation', xp: 50 },
];

  
  export const getQuests = (category) => {
    return allQuests.filter((quest) => quest.category === category);
  };

export default allQuests;
  