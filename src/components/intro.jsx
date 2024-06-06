import Avatar from "@mui/material/Avatar";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-12">
      <Avatar alt="Kevin Williams" src="/kevin.jpeg" sx={{ width: 200, height: 200 }} />
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white">Kevin Williams</h1>
      <p className="text-base md:text-xl mb-3 font-medium dark:text-white">Web Developer</p>
      <p className="text-sm max-w-xl mb-6 font-bold dark:text-white">
        Based in North Carolina, USA, I am a dedicated Fullstack Web Developer with a passion for building responsive, user-friendly websites from the ground up. My expertise spans both front-end and back-end technologies, ensuring seamless integration and optimal performance. Each of my projects reflects a commitment to excellence and a keen eye for detail, showcasing my ability to transform ideas into functional and aesthetically pleasing web applications. Whether it’s crafting intuitive interfaces or developing robust server-side logic, I take pride in delivering top-notch solutions that meet and exceed client expectations.
        <br />
        Check out my{' '}
        <a href="https://www.linkedin.com/in/kevin-e-williams" target="_blank" className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600" rel="noreferrer noopener">LinkedIn</a> to learn more about my professional experience and technical skills.
      </p>
    </div>
  )
}

export default Intro;
