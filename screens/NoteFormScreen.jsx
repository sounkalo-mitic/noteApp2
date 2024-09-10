import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createNote, updateNote } from '../api/api';

const NoteFormScreen = ({ route, navigation }) => {
  const note = route.params?.note; // Récupérer la note depuis les paramètres de navigation
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  // Effacer les champs du formulaire lors du retour à l'écran
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [note]);

  const handleSubmit = async () => {
    try {
      if (note) {
        // Si une note existe, mettre à jour la note
        await updateNote(note.id, title, content);
        Alert.alert('Succès', 'Note modifiée avec succès');
      } else {
        // Sinon, créer une nouvelle note
        await createNote(title, content);
        Alert.alert('Succès', 'Note ajoutée avec succès');
      }
      navigation.goBack(); // Retourner à l'écran précédent après la soumission
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la note:', error);
      Alert.alert('Erreur', 'Erreur lors de l\'enregistrement de la note');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Titre"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Contenu"
        value={content}
        onChangeText={setContent}
        style={[styles.input, styles.textArea]}
        multiline
      />
      <Button title={note ? 'Modifier' : 'Ajouter'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  textArea: {
    height: 100,
  },
});

export default NoteFormScreen;
