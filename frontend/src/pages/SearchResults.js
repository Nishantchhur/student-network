import React, { useEffect, useState } from 'react';
import { searchContent } from '../services/api';

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await searchContent(query);
        setResults(response.data.results);
      } catch (error) {
        console.error('Failed to fetch search results:', error);
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results">
      <h1>Search Results</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result._id}>{result.name || result.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
