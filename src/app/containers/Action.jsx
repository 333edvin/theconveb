import Zoomout from "../components/Transitions/Zoomout";

function Action() {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-blue-800 to-sky-300 px-5 py-20 space-y-8">
      <h2 className="text-2xl md:text-4xl text-white leading-snug">
        We are just a message away! <br />
        <span className="text-3xl md:text-5xl font-bold flex flex-row items-center justify-center gap-3">
          Contact us 
          <Zoomout>
            <span className="text-cyan-200 md:text-cyan-100 text-4xl md:text-6xl">
              Today.
            </span>
          </Zoomout>
        </span>
      </h2>
      <a href="/contact" className="inline-block px-6 py-3 md:px-8 md:py-4 bg-cyan-600 text-white rounded-full font-bold shadow-lg transition transform hover:bg-cyan-300 hover:shadow-2xl hover:scale-105">
        Let&apos;s Discuss
      </a>
    </div>
  );
}

export default Action;
