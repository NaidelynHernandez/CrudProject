import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient'; // supabase client
import "./Update.css";
const Update = () => {
  const [angels, setAngels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // dis Fetches data from Supabase
  useEffect(() => {
    const fetchAngels = async () => {
      const { data, error } = await supabase
        .from('SonnyAngels') // table name
        .select('*');

      if (error) {
        setError(error.message);
      } else {
        setAngels(data);
      }
      setLoading(false);
    };

    fetchAngels();
  }, []);

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="gallery">
      <h2>Sonny Angels Gallery</h2>
      <div className="gallery-grid">
        {angels.map((angel) => (
          <div key={angel.id} className="angel-item">
            <h3>{angel.name}</h3>
            <p>{angel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Update;
