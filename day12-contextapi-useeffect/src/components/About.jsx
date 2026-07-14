import React, { useEffect } from "react";

const About = () => {
  let interval = setInterval(() => {
    console.log("Hey I ma About");
  }, 1000);
  useEffect(() => {
    console.log("about rendering");

    return () => {
      clearInterval(interval);
      console.log("I am triggered kuki  about jaa chuka hai");
    };
  }, []);
  return <div>This is a About</div>;
};

export default About;
