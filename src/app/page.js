import HeroSec from "@/components/heroSec/heroSec";
import ProblemSec from "@/components/problemSec/problemSec";
import SolutionSec from "@/components/solutionSec/solutionSec";
import ServicesSec from "@/components/servicesSec/servicesSec";
import WhyChooseUs from "@/components/whyChooseUs/whyChooseUs";
import TechStackSec from "@/components/techStackSec/techStackSec";
import HowWeWorkSec from "@/components/howWeWorkSec/howWeWorkSec";
import Testimonials from "@/components/testimonials/testimonials";
import LeadershipSec from "@/components/leadershipSec/leadershipSec";
import ProjectsSec from "@/components/projectsSec/projectsSec";
import BlogSec from "@/components/blogSec/blogSec";
import SupportSec from "@/components/supportSec/supportSec";

export default function Home() {
  return (
    <>
      <HeroSec />
      <ProblemSec />
      <SolutionSec />
      <ServicesSec />
      <WhyChooseUs />
      <TechStackSec />
      <HowWeWorkSec />
      <Testimonials />
      <LeadershipSec />
      <ProjectsSec />
      <BlogSec />
      <SupportSec />
    </>
  );
}
