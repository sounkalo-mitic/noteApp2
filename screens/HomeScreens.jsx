import React, { useState, useCallback } from 'react';
import { View, FlatList, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getAllNotes } from '../api/api';
import NoteItem from '../components/noteItem';

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer les notes
  const fetchNotes = async () => {
    try {
      setLoading(true); // Commencer le chargement
      const data = await getAllNotes();
      setNotes(data); // Mettre à jour les notes
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Arrêter le chargement
    }
  };

  // Utilisation de useFocusEffect pour recharger les données lorsque l'écran est focalisé
  useFocusEffect(
    useCallback(() => {
      fetchNotes(); // Récupérer les notes à chaque fois que l'écran est focus
    }, [])
  );

  const navigateToDetail = (id) => {
    navigation.navigate('NoteDetail', { id });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteItem note={item} onPress={navigateToDetail} />}
      />
      <Button title="Ajouter une note" onPress={() => navigation.navigate('NoteForm')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
});

export default HomeScreen;
