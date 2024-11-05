import React, { useState } from 'react';
import supabase from '../supabaseClient'; 

const Create = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 
    setSuccess(null); 

   
    const { data, error } = await supabase
      .from('SonnyAngels') //  table name
      .insert([{ name, description }]);

    if (error) {
      console.error('Error inserting data:', error);
      setError('Failed to create Sonny Angel. Please try again.');
    } else {
      console.log('Data inserted:', data);
      setSuccess('Sonny Angel created successfully!');
      
      setName('');
      setDescription('');
    }
  };

  return (
    <div>
      <h2>Add New Sonny Angel</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
