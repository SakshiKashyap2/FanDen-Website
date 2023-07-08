import React, { useState } from 'react';
import './Article.css';

const ArticleForm = ({ onSubmit, isLoading }) => {
  const [topic, setTopic] = useState('');
  const [length, setLength] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ topic, length, details });
  };

  return (
    <form className="article-form" onSubmit={handleSubmit}>
      <h2>Generate Trending Sports Article</h2>
      <label>
        Topic:
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          disabled={isLoading}
          required
        />
      </label>
      <label>
        Length:
        <select
          value={length}
          onChange={(e) => setLength(e.target.value)}
          disabled={isLoading}
          required
        >
          <option value="">Select length</option>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
      </label>
      <label>
        Details:
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          disabled={isLoading}
          required
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Article'}
      </button>
    </form>
  );
};

export default ArticleForm;
