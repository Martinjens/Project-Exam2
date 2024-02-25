import React, { useContext, useEffect, useState } from "react";
import BookingContext from "./BookingContext";
import { Button, Card, ListGroup } from "react-bootstrap";

function BookedVenues() {
  const { bookedVenues, removeBookedVenue } = useContext(BookingContext);
  const [venueNames, setVenueNames] = useState({});

  useEffect(() => {
    const fetchVenueNames = async () => {
      const names = {};
      await Promise.all(
        bookedVenues.map(async (venue) => {
          const response = await fetch(
            `https://api.noroff.dev/api/v1/holidaze/venues/${venue.venueId}`
          );
          if (response.ok) {
            const data = await response.json();
            names[venue.venueId] = data.name;
          }
        })
      );
      setVenueNames(names);
    };

    fetchVenueNames();
  }, [bookedVenues]);

  const handleDelete = (index) => {
    removeBookedVenue(index);
  };

  return (
    <div className="container mt-4">
      <h2>Booked Venues</h2>
      <div className="row">
        {bookedVenues.map((venue, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card>
              <Card.Header>{venueNames[venue.venueId]}</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Date From:</strong> {venue.dateFrom}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Date To:</strong> {venue.dateTo}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Guests:</strong> {venue.guests}
                  </ListGroup.Item>
                </ListGroup>
                <Button
                  variant="danger"
                  className="mt-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookedVenues;
