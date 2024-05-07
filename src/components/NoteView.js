import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';

const NoteView = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

 // const history = useHistory(); // For programmatic navigation

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/notes/${id}/`);
        setNote(response.data);
        
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };
    fetchNote();
  }, [id]);

  const handleDeleteNote = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/notes/${id}/`);
      //history.push('/'); // Redirect to main page after successful deletion
      navigate('/');
    } catch (error) {
      console.error('Error deleting note:', error);
      // Optionally display an error message to the user
    }
  };

  return (
    <div className="container mx-auto px-4 py-8"> {/* Container with margins and padding */}
      {note ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{note.title}</h2> {/* Title styling */}
          <p className="text-lg">{note.content}</p> {/* Content styling */}
          <Link to={`/notes/${id}/edit`} className="text-blue-500 hover:underline">
            Edit Note
          </Link>
          <button className="text-red-500 hover:underline ml-4" onClick={handleDeleteNote}>
            Delete Note
          </button>
          <Link to={`/`} className="text-blue-500 hover:underline ml-4">
            Home
          </Link>
        </>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default NoteView;
