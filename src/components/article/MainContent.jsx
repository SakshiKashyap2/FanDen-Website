import React, { useState } from 'react';
import ArticleForm from './ArticleForm';
import ArticleDisplay from './ArticleDisplay';
import './Article.css';

const MainContent = () => {
  const [generatedArticle, setGeneratedArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    setError('');

    try {
      // Make API request to generate article
      // ...

      // Example code using setTimeout to simulate API call
      setTimeout(() => {
        setGeneratedArticle('This is a generated article.');
        setIsLoading(false);
      }, 2000);
    } catch (err) {
      setError('Failed to generate article. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <main className="App-content">
      <ArticleForm onSubmit={handleFormSubmit} isLoading={isLoading} />
      {isLoading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {generatedArticle && <ArticleDisplay article={generatedArticle} />}
    </main>
  );
};

export default MainContent;
