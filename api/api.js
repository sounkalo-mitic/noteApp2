import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.5:3000/api'; // Remplace par l'URL de ton backend Node.js si nécessaire

// Obtenir toutes les notes
export const getAllNotes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/notes`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des notes:', error);
    throw error;
  }
};

// Créer une nouvelle note
export const createNote = async (title, content) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/notes`, { title, content });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de la note:', error);
    throw error;
  }
};

// Obtenir une note spécifique
export const getNoteById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de la note:', error);
    throw error;
  }
};

// Mettre à jour une note
export const updateNote = async (id, title, content) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/notes/${id}`, { title, content });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la note:', error);
    throw error;
  }
};

// Supprimer une note
export const deleteNote = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/notes/${id}`);
    return response.status === 204;
  } catch (error) {
    console.error('Erreur lors de la suppression de la note:', error);
    throw error;
  }
};
