import React from 'react'

function SearchInventory() {

  useEffect(() => {
    const getInventory = async () => { 
      setItem(await fetchItem(id));
      setLoading(false);
    };
    getInventory();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }


  return ( 
    <div>
      <input className="search-bar" type="text" placeholder="Search Wear It, Baby!" />
      <button>Search</button>
    </div>
  )
}

export default SearchInventory
