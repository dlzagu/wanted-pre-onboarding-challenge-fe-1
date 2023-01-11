import styled from "styled-components";
import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("00:00");
  function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    setTime(`${hours}:${minutes}`);
  }

  useEffect(() => {
    setInterval(getTime, 1000);
  });
  return <Wrapper>{time}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 7rem;
  margin-bottom: 2rem;
`;

export default Clock;
