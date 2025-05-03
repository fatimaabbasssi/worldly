import { NavLink, useLoaderData} from "react-router-dom"


const Detail = () => {
  const { name, image, capital, region, subregion, languages, currencies , population } = useLoaderData();

  return (
    <>
      <div className="detail-main container py-5">
        <h1 className="text-center text-info pb-4">{name}</h1>

        <div className="country-body d-flex flex-wrap align-items-center justify-content-center gap-4">
          <img src={image} alt={name} className="rounded shadow" style={{ width: "300px" }} />

          <div className="country-inner">
            <div className="mb-2"><strong>Capital:</strong> {capital?.[0]}</div>
            <div className="mb-2"><strong>Region:</strong> {region}</div>
            <div className="mb-2"><strong>Population:</strong> {population}</div>
            <div className="mb-2"><strong>Subregion:</strong> {subregion}</div>

            <div className="mb-2">
              <strong>Languages:</strong>
              <ul>
                {languages && Object.values(languages).map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>

            <div className="mb-2">
              <strong>Currencies:</strong>
              <ul>
                {currencies && Object.entries(currencies).map(([code, currency]) => (
                  <li key={code}>{currency.name} ({currency.symbol})</li>
                ))}
              </ul>
            </div>
          </div> <NavLink to="/" className="btn btn-light mt-4 px-4  fw-bold">
              Go Back Home
            </NavLink>
        </div>

       
      </div>
    </>
  );
};

export default Detail;





export const fetCountry = async ({id}) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
      const data = await response.json();
      const country = data[0]; // API returns an array
  
      return {
        name: country.name.common,
        image: country.flags.png,
        capital: country.capital,
        region: country.region,
        subregion: country.subregion,
        languages: country.languages,
        currencies: country.currencies,
        population: country.population
      };
    } catch (error) {
      console.error("Error fetching country details: ", error);
      throw error;
    }
  };

