// src/components/Note.js
import React from "react";

function Note({ note, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{note.title}</h2>
      <p className="text-gray-700 mb-4">{note.content}</p>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => onEdit(note)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
