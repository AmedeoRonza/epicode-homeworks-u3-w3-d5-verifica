import React from 'react';
import Sidebar from './components/Sidebar';
import MusicSection from './components/MusicSection';
import AlbumCard from './components/AlbumCard';
import PlayerControls from './components/PlayerControls';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10} className="mainPage">
          <Row className="mainLinks d-none d-md-flex">
            <Col xs={9} lg={11}>
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </Col>
          </Row>
          
          <MusicSection title="Search Results" id="searchResults" />
          <MusicSection title="Rock Classics" id="rock">
            
            <Row id="rockSection">
              <AlbumCard
                songInfo={{
                  id: 1,
                  title: 'Example Rock Song',
                  artist: { name: 'Example Rock Artist' },
                  album: { cover_medium: 'example_image_url' },
                }}
              />
              
            </Row>
          </MusicSection>
          <MusicSection title="Pop Culture" id="pop">
            
            <Row id="popSection">
              <AlbumCard
                songInfo={{
                  id: 2,
                  title: 'Example Pop Song',
                  artist: { name: 'Example Pop Artist' },
                  album: { cover_medium: 'example_image_url' },
                }}
              />
            
            </Row>
          </MusicSection>
          <MusicSection title="#HipHop" id="hiphop">
            
            <Row id="hipHopSection">
              <AlbumCard
                songInfo={{
                  id: 3,
                  title: 'Example Hip Hop Song',
                  artist: { name: 'Example Hip Hop Artist' },
                  album: { cover_medium: 'example_image_url' },
                }}
              />
            
            </Row>
          </MusicSection>
         
          <Row>
            <PlayerControls />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
