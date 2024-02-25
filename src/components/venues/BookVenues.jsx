import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BookingContext from "./BookingContext";

function BookVenue({ venueData }) {
  const { addBookedVenue } = useContext(BookingContext);
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    dateFrom: "",
    dateTo: "",
    guests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookedVenue({ ...bookingData, venueData });

    navigate("/booked-venues");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1 className="text-center mb-4">Book Venue</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="dateFrom">
              <Form.Label>Date From</Form.Label>
              <Form.Control
                type="date"
                name="dateFrom"
                value={bookingData.dateFrom}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="dateTo">
              <Form.Label>Date To</Form.Label>
              <Form.Control
                type="date"
                name="dateTo"
                value={bookingData.dateTo}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="guests">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control
                type="number"
                name="guests"
                value={bookingData.guests}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Book Venue
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default BookVenue;
