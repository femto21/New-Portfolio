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
            <div className="grid grid-cols-4 grid-rows-1 gap-4 ">
              <div className="col-start-1 px-8 py-4 bg-white/10 rounded-xl">
                <p className="text-color1 text-shadow-subtle">Languages</p>
                <ul className="text-sm mt-2 text-shadow-subtle flex flex-col gap-2 ">
                  <li>Java</li>
                  <li>Python</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>C#</li>
                  <li>C/C++</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div className="col-start-2 px-8 py-4 bg-white/10 rounded-xl">
                <p className="text-color1 text-shadow-subtle">Frameworks</p>
                <ul className="text-sm flex flex-col gap-2 text-shadow-subtle">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Next.js</li>
                  <li>.NET</li>
                  <li>Vue.js</li>
                  <li>JUnit</li>
                  <li>Aseba</li>
                </ul>
              </div>
              <div className="col-start-3 px-8 py-4 bg-white/10 rounded-xl">
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
              <div className="col-start-4 px-8 py-4 bg-white/10 rounded-xl">
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
