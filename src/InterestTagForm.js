import React, { useState } from 'react';
import { db } from './firebase';

const InterestTagForm = () => {
  const [tagName, setTagName] = useState('');

  const handleAddTag = async () => {
    if (tagName.trim() === '') return;

    try {
      await db.collection('interestTags').add({
        name: tagName
      });
      setTagName('');
      console.log('Tag added successfully.');
    } catch (error) {
      console.error('Error adding tag:', error);
    }
  };

  return (
    <div>
      <h2>Create Interest Tag</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a new interest tag"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
        />
        <button onClick={handleAddTag}>Add Tag</button>
      </div>
    </div>
  );
};

export default InterestTagForm;