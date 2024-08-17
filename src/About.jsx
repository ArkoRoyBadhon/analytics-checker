import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleView = () => {
    const eventKey = "unique_button_click";

    if (!localStorage.getItem(eventKey)) {
      localStorage.setItem(eventKey, "true");

      ReactGA.event({
        category: "User",
        action: "Clicked My Button",
        label: "Button Click",
      });

      navigate("/blog");
    }
  };

  useEffect(() => {
    const pageViewKey = `page_view_${window.location.pathname}`;

    if (!localStorage.getItem(pageViewKey)) {
      localStorage.setItem(pageViewKey, "true");

      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);

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
