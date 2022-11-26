function About() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Eleventy",
    "Node.js",
    "WordPress",
    "Golang",
    "Rust",
  ];

  return (
    <div
      className="about px-7 py-10 flex flex-col items-center justify-center max-w-7xl mx-auto"
      id="about"
    >
      <h2 className="about-heading flex items-center w-full mb-10 whitespace-nowrap leading-[1.1] font-bold text-indigo-700 text-step-5">
        About Me
      </h2>

      {/* starts here */}
      {/*  */}
      {/* sm : 640px */}
      <div
        className="content__container" /*flex gap-12 flex-col sm:flex-row ==> all
      these to be within the double inverted commas only*/
      >
        <div className="content__left">
          <div className="content__aboutme">
            <p className="text-fuchsia-900">
              Ut enim nisi temporibus qui ut ab qui laboriosam. Eveniet dolore
              et laborum iure voluptatem perferendis. Accusamus eveniet fugit
              neque. Et deserunt aut necessitatibus praesentium sapiente
              eveniet.
            </p>
            <p className="text-fuchsia-900 mt-4">
              Ut enim nisi temporibus qui ut ab qui laboriosam. Eveniet dolore
              et laborum iure voluptatem{" "}
              <span className="text-amber-500">perferendis</span>. Accusamus
              eveniet fugit neque. Et deserunt aut necessitatibus praesentium
              sapiente eveniet.
            </p>
          </div>

          <p className="font-bold mt-8">
            Here are some of the technologies I&apos;m familiar with :{" "}
          </p>
          <div className="content__technologies text-emerald-500 grid grid-cols-2 mt-4">
            {skills.map((skill) => {
              return <p key={skill}>{skill}</p>;
            })}
          </div>
        </div>

        <div className="content__right">
          <img src="/rick.gif" className="w-full sm:w-3/4" />
        </div>
      </div>
      {/* ends here */}
    </div>
  );
}

export default About;

/* the use of sm: 'sm' is used for Responsive design... so when we want to re-size
the images so that it fits into any device's apect ratios, we use responsive design.
these adjust their sizes automatically when the output screen size differs. 
the syntax goes smth like:
for sm, the min. width value is 640px.
let the formatting for width/the parameter for anything below 640 be <lower_px>
and let anything above it be <higher_px>
so the syntax goes smth like:

<lower_px> sm:<higher_px>

So in the code, it means:
if the text/pixels are below 640, then width of gif=full (i.e., it spans the whole area)
and it its higher than or equal to 640px, the width will be 3/4 (this is relative) */
