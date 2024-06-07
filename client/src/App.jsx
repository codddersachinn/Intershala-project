import React, { useState } from 'react';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import { Container } from '@mui/material';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PostList searchQuery={searchQuery} />
    </Container>
  );
};

export default App;