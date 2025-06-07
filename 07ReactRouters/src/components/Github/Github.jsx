import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.allorigins.win/raw?url=https://api.github.com/users/hiteshchoudhary')
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error: " + res.status);
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>GitHub User Profile</h2>
      {data ? (
        <>
          <h1>{data.name}</h1>
          <img className =''src={data.avatar_url} width="150" alt={data.name} />
          <p>{data.bio}</p>
          <p>Followers: {data.followers}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Github;

