import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const NoteCreate = () => {
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/notes/', note);
      navigate(`/notes/${response.data.id}`);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Create New Note</h2>
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
          Create
        </button>
      </form>
    </div>
  );
};

export default NoteCreate;
