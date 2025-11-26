import StackIcon from "tech-stack-icons";
import Frameworks from "../../components/icons/Frameworks";
import Languages from "../../components/icons/Languages";
import Libraries from "../../components/icons/Libraries";
import DevTools from "../../components/icons/DevTools";
import { SparklesCore } from "@/components/ui/sparkles";
import Divider from "@/components/Divider";

const About = () => {
  return (
    <section id="about" className="mt-24 border-amber-500">
      <div className="m-auto min-h-max border-solid w-3/4">
        <div className="relative">
          <div className="m-auto w-fit">
            <p className="text-l mb-1 text-color2 text-shadow w-fit m-auto">
              Get To Know
            </p>
            <p className="text-3xl text-color1 text-shadow w-fit m-auto">
              About Me
            </p>
          </div>

          <div className="mt-4">
            <p className="text-color2 text-center text-shadow-subtle">
              My name is Arpit Gahlot. I am studying Computer Science at
              Dalhousie University and currently in my third year. I really like
              coding and working with the cloud, and recently I have been into
              Artificial Intelligence and Machine Learning as well. I have
              professional work experience in Full Stack Development,
              Cybersecurity, and Data Engineering through my internship at
              Commissionaires Nova Scotia. I have also worked as a Freelance
              Full Stack Developer. Outside of school and work, I am a big fan
              of cooking and working out.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col items-center">
            <p className="text-xl text-color1 text-shadow-subtle mb-4">
              My Tech Stack
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
              <Languages />
              <Frameworks />
              <Libraries />
              <DevTools />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
