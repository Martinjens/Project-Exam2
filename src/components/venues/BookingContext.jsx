import React, { createContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookedVenues, setBookedVenues] = useState([]);

  const addBookedVenue = (venue) => {
    setBookedVenues([...bookedVenues, venue]);
  };

  const removeBookedVenue = (index) => {
    const updatedBookedVenues = [...bookedVenues];
    updatedBookedVenues.splice(index, 1);
    setBookedVenues(updatedBookedVenues);
  };

  return (
    <BookingContext.Provider
      value={{ bookedVenues, addBookedVenue, removeBookedVenue }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
