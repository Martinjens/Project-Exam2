import React, { useState, useEffect } from "react";
import UseVenues from "../venues/UseVenues";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function HomePage() {
  const [venues, setVenues] = useState([]);
  const [visibleVenues, setVisibleVenues] = useState([]);
  const [displayCount, setDisplayCount] = useState(25);
  const venuesPerPage = 25;

  useEffect(() => {
    async function fetchVenues() {
      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/holidaze/venues"
        );
        const data = await response.json();
        setVenues(data);
        setVisibleVenues(data.slice(0, displayCount));
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    }

    fetchVenues();
  }, []);

  const handleViewMore = () => {
    setDisplayCount(displayCount + venuesPerPage);
    setVisibleVenues(venues.slice(0, displayCount + venuesPerPage));
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={12} className="mb-4">
          <h2 className="text-center">Discover Amazing Venues</h2>
          <p className="text-center">
            Explore our curated selection of venues for your next event
          </p>
        </Col>
      </Row>
      <Row>
        {visibleVenues.map((venue, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <UseVenues venues={[venue]} />
          </Col>
        ))}
      </Row>
      {venues.length > displayCount && (
        <Row>
          <Col md={12} className="text-center mt-4">
            <Button onClick={handleViewMore}>View More</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}
