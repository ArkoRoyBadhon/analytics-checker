import { useEffect } from "react";
import ReactGA from "react-ga4";


const Blog = () => {

    useEffect(() => {
        const pageViewKey = `page_view_${window.location.pathname}`;
    
        if (!localStorage.getItem(pageViewKey)) {
          localStorage.setItem(pageViewKey, "true");
    
          ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        }
      }, []);
    return (
        <div>
            This is blog page
        </div>
    );
};

export default Blog;