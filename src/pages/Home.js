import CTAblock from "../components/CTAblock";
import HomeCarousel from "../components/HomeCarousel";
import { Helmet }from 'react-helmet';


function Home(props) {
  

    return (
      <section>
         <Helmet>
            <title>DinnerBell</title>
        </Helmet>
       <HomeCarousel />
       <CTAblock />
      </section>
    );
  }
  
  export default Home;