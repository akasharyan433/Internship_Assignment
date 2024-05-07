import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const NoteEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', content: '' });

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

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/notes/${id}/`, note);
      navigate(`/notes/${id}`);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Edit Note</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={note.content}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 h-48 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default NoteEdit;
