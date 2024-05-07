import React, { useState } from 'react';

const SearchNotes = ({ notes, setFilteredNotes }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setFilteredNotes(filterNotes);
  };

  return (
    <div className="flex items-center mb-4"> 
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button onClick={handleSearch} className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
        Search
      </button>
    </div>
  );
};

export default SearchNotes;
