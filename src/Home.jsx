import { useEffect } from "react";
import ReactGA from "react-ga4";

const HomePage = () => {
    useEffect(() => {
        const pageViewKey = `page_view_${window.location.pathname}`;
    
        if (!localStorage.getItem(pageViewKey)) {
          localStorage.setItem(pageViewKey, "true");
    
          ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        }
      }, []);
    return (
        <div>
            This is home page
        </div>
    );
};

export default HomePage;