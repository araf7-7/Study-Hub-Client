import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import FeatureCard from "./Feature/FeatureCard";
import AssignmentCard from "./AssignmentCard/AssignmentCard";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
import Footer from './../Head&Foot/Footer';


const Home = () => {
  const assignments = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="my-20">
        <h1 className="text-center font-bold text-lg my-10"><TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Assi',
            1000,
            'Assignments ',
            2000,
          ]}
          speed={50}
          style={{ fontSize: '2em' }}
          repeat={Infinity}
        /></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center container mx-auto gap-10">

          {
            assignments?.slice(4, 7).map(assignment =>
              <AssignmentCard key={assignment._id} assignment={assignment}>
              </AssignmentCard>
            )
          }
        </div>
      </div>
      <Faq></Faq>
      <FeatureCard> </FeatureCard>

      <Footer></Footer>
    </div>
    
  );
};

export default Home;