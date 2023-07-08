import React from 'react';
import './Article.css';

const ArticleDisplay = ({ article }) => {
  return (
    <div className="article-display">
      <h2>Generated Article</h2>
      <p>{article}</p>
    </div>
  );
};

export default ArticleDisplay;
