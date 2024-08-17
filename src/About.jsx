import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleView = () => {
    ReactGA.event({
      category: "User",
      action: "Clicked My Button",
      label: "Button Click",
    });
    navigate("/blog");
  };
  return (
    <div>
      this is about page
      <button onClick={() => handleView()} className="">
        view blog
      </button>
    </div>
  );
};

export default AboutPage;
