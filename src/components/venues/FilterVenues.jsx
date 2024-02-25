import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Button from "react-bootstrap/Button";

const FilterVenues = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchOptions("");
  }, []);

  const fetchOptions = async (query) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.noroff.dev/api/v1/holidaze/venues?search=${query}`
      );
      const data = await response.json();
      setOptions(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching options:", error);
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    await fetchOptions(query);
    handleSelection(options);
  };

  const handleSelection = (selected) => {
    if (selected.length > 0) {
      const selectedVenueId = selected[0].id;
      navigate(`/venues/${selectedVenueId}`);
    }
  };

  return (
    <>
      <div className="d-flex">
        <AsyncTypeahead
          id="search-venues"
          labelKey="name"
          isLoading={isLoading}
          options={options}
          onSearch={setQuery}
          onChange={handleSelection}
          placeholder="Search for a venue..."
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </>
  );
};

export default FilterVenues;
