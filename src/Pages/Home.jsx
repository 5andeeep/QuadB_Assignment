import { Link } from "react-router-dom";

const Home = ({ movies }) => {
  return (
    <div className="home-page">
      <h1>Book Your Show</h1>
      <div className="show-card-wrapper">
        {movies &&
          movies.map((item, key) => (
            <div key={key} className="show-card">
              <Link to={`/movie/${item.show.id}`}>
                <div className="img-box">
                  {item.show.image ? (
                    <img src={item.show.image.medium} alt="show-facade" />
                  ) : (
                    <img
                      src="https://dummyimage.com/210x295/000/fff"
                      alt="dummy-show-img"
                    />
                  )}
                </div>
                <div>
                  <h3>{item.show.name}</h3>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
