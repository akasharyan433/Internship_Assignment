import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteView from './components/NoteView';
import NoteEdit from './components/NoteEdit';
import NoteCreate from './components/NoteCreate';
import AuthenticatedApp from './components/AuthenticatedApp';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/notes/:id" element={<NoteView />} />
          <Route path="/notes/:id/edit" element={<NoteEdit />} />
          <Route path="/notes/create" element={<NoteCreate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;