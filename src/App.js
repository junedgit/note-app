// src/App.js
import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const handleSaveNote = (note) => {
    if (noteToEdit) {
      setNotes(notes.map((n) => (n.id === note.id ? note : n)));
    } else {
      setNotes([...notes, note]);
    }
    setNoteToEdit(null);
  };

  const handleEditNote = (note) => {
    setNoteToEdit(note);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleCancelEdit = () => {
    setNoteToEdit(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Note Taking App</h1>
      <NoteForm
        noteToEdit={noteToEdit}
        onSave={handleSaveNote}
        onCancel={handleCancelEdit}
      />
      <NoteList
        notes={notes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

export default App;
