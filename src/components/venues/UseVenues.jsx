import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UseVenues({ venues }) {
  return (
    <div className="container">
      <div className="row">
        {venues.map((venue) => (
          <div className="col-md-6" key={venue.id}>
            <Card className="m-2" style={{ width: "18rem" }}>
              {venue.media && venue.media.length > 0 && (
                <Card.Img
                  variant="top"
                  src={venue.media[0]}
                  alt={venue.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              )}
              <Card.Body>
                <Card.Title>{venue.name}</Card.Title>
                <Card.Text>{venue.description}</Card.Text>
                <Link to={`/venues/${venue.id}`}>
                  <Button variant="primary">View Venue</Button>
                </Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Address:{" "}
                  {venue.location
                    ? venue.location.address
                    : "Address not available"}
                </small>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseVenues;
