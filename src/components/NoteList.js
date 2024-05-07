import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchNotes from './SearchNotes';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/notes/');
        setNotes(response.data);
        setFilteredNotes(response.data); // Set initial filtered notes to all notes
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchNotes();
  }, []);

  const notesToDisplay = filteredNotes.length > 0 ? filteredNotes : notes;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <SearchNotes notes={notes} setFilteredNotes={setFilteredNotes} />
      <ul className="list-disc pl-4">
        {notesToDisplay.map((note) => (
          <li key={note.id} className="mb-2">
            <Link
              to={`/notes/${note.id}`}
              className="text-blue-500 hover:underline"
            >
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/notes/create"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        Create New Note
      </Link>
    </div>
  );
};

export default NoteList;
