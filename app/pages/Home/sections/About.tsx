import StackIcon from "tech-stack-icons";

const About = () => {
  return (
    <section id="about" className="mx-40 mt-4 mb-40 border-amber-500">
      <div className="m-auto min-h-max  border-solid w-full">
        <div className="m-auto w-fit">
          <p className="text-4xl text-color1 text-shadow">About Me</p>
        </div>
        <div className="mt-4">
          <p className="text-color2 text-shadow-subtle">
            My name is Arpit Gahlot. I am studying Computer Science at Dalhousie
            University and currently in my third year. I really like coding and
            working with the cloud, and recently I have been into Artificial
            Intelligence and Machine Learning as well. I have professional work
            experience in Full Stack Development, Cybersecurity, and Data
            Engineering through my internship at Commissionaires Nova Scotia. I
            have also worked as a Freelance Full Stack Developer. Outside of
            school and work, I am a big fan of cooking and working out.
          </p>
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-center">
            <p className="text-xl text-color1 text-shadow-subtle mb-4">
              My Tech Stack
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
              <div className=" px-8 py-4 bg-white/10 rounded-xl">
                <p className="text-color1 text-shadow-subtle">Languages</p>
                <div className="text-sm mt-2 text-shadow-subtle grid grid-cols-4 gap-none">
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="java" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="python" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="html5" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="css3" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="js" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="typescript" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="c#" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="c++" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="php" />
                  </div>
                </div>
              </div>
              <div className=" px-8 py-4 bg-white/10 rounded-xl">
                <p className="text-color1 text-shadow-subtle">Frameworks</p>
                <ul className="text-sm flex flex-col gap-2 text-shadow-subtle">
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="nodejs" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="expressjs" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="nextjs2" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="netcore" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <StackIcon name="vuejs" />
                  </div>
                  <div style={{ height: 40, width: 40 }}>
                    <img src="Junit.png" />
                  </div>

                  <li>Aseba</li>
                </ul>
              </div>
              <div className=" px-8 py-4 bg-white/10 rounded-xl">
                <p className="text-color1 text-shadow-subtle">Libraries</p>
                <ul className="text-sm flex flex-col gap-2 text-shadow-subtle">
                  <li>React</li>
                  <li>OpenAI</li>
                  <li>Pygame</li>
                  <li>Three.js</li>
                  <li>TailwindCSS</li>
                  <li>DaisyUI</li>
                  <li>Shadcn UI</li>
                  <li>Clerk</li>
                </ul>
              </div>
              <div className=" px-8 py-4 bg-white/10 rounded-xl">
                <p className="text-color1 text-shadow-subtle">Dev Tools</p>
                <ul className="text-sm flex flex-col gap-2 text-shadow-subtle">
                  <li>Git / GitHub / GitLab</li>
                  <li>AWS</li>
                  <li>Azure</li>
                  <li>Google Cloud</li>
                  <li>Docker</li>
                  <li>Postman</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
