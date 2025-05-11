import { NavLink, useLoaderData } from "react-router-dom";

const Detail = () => {
  const {
    name,
    image,
    capital,
    region,
    subregion,
    languages,
    currencies,
    population,
    area,
    timezones,
    continents,
    startOfWeek,
    independent,
    googleMaps,
  } = useLoaderData();

  return (
    <div className="container detail-page py-5">
      <div className="text-center">
        <img src={image} alt={name} className="flag-img mb-3" />
        <h1 className="country-name">{name}</h1>
      </div>

      <div className="country-card mx-auto mt-4 p-4">
        <div className="row">
          <div className="col-sm-6 mb-3"><strong>Capital:</strong> {capital?.[0]}</div>
          <div className="col-sm-6 mb-3"><strong>Region:</strong> {region}</div>
          <div className="col-sm-6 mb-3"><strong>Subregion:</strong> {subregion}</div>
          <div className="col-sm-6 mb-3"><strong>Population:</strong> {population.toLocaleString()}</div>
          <div className="col-sm-6 mb-3"><strong>Area:</strong> {area} km</div>
          <div className="col-sm-6 mb-3"><strong>Continent:</strong> {continents?.[0]}</div>
          <div className="col-sm-6 mb-3"><strong>Start of Week:</strong> {startOfWeek}</div>
          <div className="col-sm-6 mb-3"><strong>Independent:</strong> {independent ? "Yes" : "No"}</div>
          <div className="col-12 mb-3"><strong>Timezones:</strong> {timezones?.join(", ")}</div>
        </div>

        <div className="mb-3">
          <strong>Languages:</strong>
          <ul className="custom-list">
            {languages &&
              Object.values(languages).map((lang, i) => (
                <li key={i}>{lang}</li>
              ))}
          </ul>
        </div>

        <div className="mb-3">
          <strong>Currencies:</strong>
          <ul className="custom-list">
            {currencies &&
              Object.entries(currencies).map(([code, currency]) => (
                <li key={code}>
                  {currency.name} ({currency.symbol})
                </li>
              ))}
          </ul>
        </div>
        <div className="mb-3">
          <strong>Google Map:</strong>{" "}
          <a href={googleMaps} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>

        <div className="text-center mt-4">
          <NavLink to="/" className="btn custom-btn px-4 ">
            Go Back Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Detail;



// api fetching here

export const fetCountry = async ({ id }) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
    const data = await response.json();
    const country = data[0];

    // Bordering countries ke names fetch karna
    let borderNames = [];
    if (country.borders && country.borders.length > 0) {
      const borderRes = await fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(',')}`);
      const borderData = await borderRes.json();
      borderNames = borderData.map(c => c.name.common);
    }

    return {
      name: country.name.common,
      image: country.flags.png,
      capital: country.capital,
      region: country.region,
      subregion: country.subregion,
      languages: country.languages,
      currencies: country.currencies,
      population: country.population,
      area: country.area,
      timezones: country.timezones,
      continents: country.continents,
      startOfWeek: country.startOfWeek,
      independent: country.independent,
      googleMaps: country.maps.googleMaps,
      borderCountries: borderNames
    };
  } catch (error) {
    console.error("Error fetching country details: ", error);
    throw error;
  }
};