import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getNoteById, deleteNote } from '../api/api';

const NoteDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [note, setNote] = useState(null);

  // Fonction pour récupérer la note
  const fetchNote = useCallback(async () => {
    try {
      const data = await getNoteById(id);
      setNote(data);
    } catch (error) {
      console.error('Erreur lors de la récupération de la note:', error);
    }
  }, [id]);

  //useFocusEffect pour exécuter fetchNote chaque fois que l'écran devient visible
  useFocusEffect(
    useCallback(() => {
      fetchNote();
    }, [fetchNote])
  );

  const handleDelete = async () => {
    try {
      await deleteNote(id);
      navigation.goBack();
    } catch (error) {
      console.error('Erreur lors de la suppression de la note:', error);
    }
  };

  if (!note) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
      <Button title="Supprimer" onPress={handleDelete} />
      <Button title="Modifier" onPress={() => navigation.navigate('NoteForm', { note })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default NoteDetailScreen;
