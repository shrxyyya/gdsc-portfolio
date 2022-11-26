function Hero() {
  return (
    <div
      className="hero flex flex-col items-start text-left 
      justify-center min-h-screen px-[25px] max-w-7xl mx-auto"
      id="hero"
    >
      <h1 className="text-xl font-mono">Hi, my name is</h1>
      <h2 className="text-7xl font-bold mt-5">Shreya Mittal</h2>
      <h3 className="text-4xl text-slate-500 font-bold mt-8">
        I&apos;m never gonna give you up
      </h3>
      <p className="max-w-4xl mt-2 text-gray-500">
        I&apos;m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I&apos;m focused
        on building accessible, human-centered products.
      </p>
    </div>
  );
}

export default Hero;

/* min-h = minimum height and min-h-screen = the element spans 
the entire height of the screen */
/*mx-auto class for horizontally centering fixed-width block level
 content—that is, content that has display: block and a width 
 set—by setting the horizontal margins to auto */
/*The id attribute specifies a unique id for an HTML element. An
  id name must only be used by one HTML element */
