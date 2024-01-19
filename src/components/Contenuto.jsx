import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { fetchData } from '../Redux/action';
import "../Assets/Style.css";

function Contenuto() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const renderAlbums = () => {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {Array.isArray(data) &&
          data.map((item) => (
            <div key={item.id} className="col text-center">
              <img className="img-fluid" src={item.album.cover_medium} alt="track" />
              <p>
                Track: "{item.title.length < 16 ? item.title : `${item.title.substring(0, 16)}...`}"<br />
                Artist: {item.artist.name}
              </p>
            </div>
          ))}
      </div>
    );
  };

  return (
    <Row>
      <Col>
        <div className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="searchResults" style={{ display: 'none' }}>
              <h2>Search Results</h2>
              {renderAlbums()}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Contenuto;
