import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const Home = () => {

  // API data
  let { countries } = useLoaderData();
  let navigate = useNavigate();

  // input
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);  
  
 // allow to write on input
  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  // details page navigation
  let handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  //search Filter
  const handleSearch = () => {
    const filtered = countries.filter((country) => {
      return country.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredCountries(filtered);  
  };

  return (
    <>

      <div className="input-section">
        <h1 className='text-dark'>Search Here...</h1>
        <div className="main-input">
          <div className="input-div">
            <input type="text" placeholder='Search by country name'
             value={search}  onChange={handleSearchInput} />
            <button onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>

   {/* cards main */}
      <div className="card-main">
        {
          // all countries nad filtered country display here
          filteredCountries.map((country, index) => (
            <div className="card position-relative overflow-hidden" key={index + country.id} onClick={() => handleClick(country?.id)}>
              <img src={country?.image} className="card-img-top" alt={country?.name} />
              <div className="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                <h5 className="text-white fw-bold">{country?.name}</h5>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Home;

export let fetCountries = async () => {
  try {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();

    let formatted = data.map((item) => ({
      id: item.cca3, // id
      name: item.name.common, // name
      image: item.flags.png // image
    }));

    return { countries: formatted };
  } catch (error) {
    console.log(error, 'Fetch API error');
  }
};










