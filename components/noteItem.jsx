import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const NoteItem = ({ note, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(note.id)}>
      <Text style={styles.title}>{note.title}</Text>
      <Text numberOfLines={1} style={styles.content}>{note.content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default NoteItem;
