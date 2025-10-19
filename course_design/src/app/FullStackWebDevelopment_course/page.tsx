import CourseLandingHeader from "../components/CourseLandingHeader";
import CourseLearnerReviews from "../components/CourseLearnerReviews";
import CourseOverview from "../components/CourseOverview";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import IntroTeacher from "../components/IntroTeacher";
import Navigation from "../components/Navigation";
import Plans from "../components/Plans";
import "./style.css";

const FullStackWebDevelopment_course = () => {
  return (
    <>
      <Navigation />
      <CourseLandingHeader />
      <CourseOverview />
      <Plans/>
      <CourseLearnerReviews/>
      <Faq/>
      <IntroTeacher/>
      <Footer/>
    </>
  );
};

export default FullStackWebDevelopment_course;
