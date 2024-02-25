import { useState } from "react";
import Calendar from "react-calendar";
import "../../../node_modules/react-calendar/dist/Calendar.css";

function MyApp() {
  const [value, onChange] = useState(null);
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default MyApp;
