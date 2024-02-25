import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/dist/Calendar.css";
import BookingContext from "../venues/BookingContext";

function VenuePage() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const { bookedVenues, addBookedVenue } = useContext(BookingContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchVenue() {
      try {
        const response = await fetch(
          `https://api.noroff.dev/api/v1/holidaze/venues/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch venue");
        }

        const venueData = await response.json();

        const isBooked = bookedVenues.some(
          (bookedVenue) => bookedVenue.venueId === id
        );
        if (!isBooked) {
          const bookingData = {
            dateFrom: "2024-02-25",
            dateTo: "2024-02-26",
            guests: "1",
            venueId: id,
            venueName: venueData.name,
          };

          addBookedVenue(bookingData);
        }

        setVenue(venueData);
      } catch (error) {
        console.error("Error fetching venue:", error);
      }
    }
    fetchVenue();
  }, [id, bookedVenues, addBookedVenue]);

  const handleBookVenue = () => {
    navigate(`/book-venue/${id}`);
  };

  if (!venue) {
    return <div>Loading...</div>;
  }

  const { meta, name, price, rating } = venue;

  return (
    <Container>
      <h1>{venue.name}</h1>
      <p>Description: {venue.description}</p>
      <Row>
        <Col xs={12} md={4}>
          {venue.media && venue.media.length > 0 ? (
            <Image src={venue.media[0]} alt={venue.name} fluid />
          ) : (
            <p>No images available</p>
          )}
        </Col>
        <Col xs={12} md={4}>
          <p>Contact: {venue.contact}</p>
          <p>Maximum Capacity: {venue.maxGuests}</p>
          <p>Rating: {venue.rating}</p>
          <p>Address: {venue.location.address}</p>
          <p>City: {venue.location.city}</p>
          <p>Zip: {venue.location.zip}</p>
          <p>Country: {venue.location.country}</p>
          <p>Price: {venue.price}</p>
          <p>Wi-Fi: {meta.wifi ? "Available" : "Not Available"}</p>
          <p>Parking: {meta.parking ? "Available" : "Not Available"}</p>
          <p>Breakfast: {meta.breakfast ? "Included" : "Not Included"}</p>
          <Button variant="primary" onClick={handleBookVenue}>
            Book Venue
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
}

export default VenuePage;
