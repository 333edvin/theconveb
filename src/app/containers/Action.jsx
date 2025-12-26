import Zoomout from "../components/Transitions/Zoomout";
function Action() {
  return (
    <div className=" relative md:grid md:grid-cols-2 mx-auto ">
  <div className="w-full overflow-hidden ">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-[50vh] md:h-[70vh] scale-110 md:scale-100 object-cover "
  >
    <source
      src="https://res.cloudinary.com/dlfqobh58/video/upload/v1726137519/cta2_ipyp7d.webm"
      type="video/webm"
    />
    Your browser does not support the video tag.
  </video>
</div>




<div className="flex flex-col justify-center h-auto absolute md:static top-16 md:top-none m-5  md:m-0  p-5  rounded-2xl md:rounded-none space-y-4 bg-black/30 md:bg-gradient-to-r md:from-[#acadaa] md:to-stone-900">
  <h2 className="text-2xl md:text-4xl text-white leading-snug">
    We are just a message away! <br />Contact us Today.
  </h2>
  <a
    href="/contact"
    className="inline-block px-6 py-3 md:px-8 md:py-4 bg-cyan-600 text-white rounded-xl font-bold shadow-lg transition transform hover:bg-cyan-300 hover:shadow-2xl hover:scale-105 w-52 text-center"
  >
    Let&apos;s Discuss
  </a>
</div>

</div>
  );
}

export default Action;
