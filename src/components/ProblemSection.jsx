/* eslint-disable react/prop-types */
const ProblemSection = ({ darkMode }) => {
  return (
    <div className={`p-6 md:p-10 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-col md:flex-row pb-10 gap-6 md:gap-10">
        <div className="w-full md:w-1/2 flex text-3xl md:text-5xl font-bold ml-2 md:ml-10">
          The <h1 className="text-[#6187FA] pl-2 md:pl-5">Problem</h1>
        </div>
        <div className="w-full md:w-1/2 text-sm md:text-lg">
          <p>
            The traditional one-size-fits-all approach has neglected individual student needs, leaving graduates ill-equipped for the demands of the modern workforce.
          </p>
          <p className="mt-2">
            The development of essential skills such as critical thinking and adaptability, crucial for navigating an ever-changing job market is hindered.
          </p>
          <p className="mt-2">
            While teachers are vital, the responsibility for addressing these issues extends beyond the classroom. A collaborative effort is needed to chart their own paths to fulfilling careers.
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <img
          src={'Frame.png'}
          alt="Problem Illustration"
          className="w-full md:w-hidden"
          draggable="false"
        />
      </div>
      <div className="flex flex-col lg:hidden space-y-8">
        <div className="flex flex-col space-y-2 text-left">
          <h1 className="text-[#6187FA] text-7xl font-bold">01</h1>
          <h2 className="font-semibold text-2xl">What is Wonder?</h2>
          <p className="text-lg">Wonder is an adaptive learning platform that personalizes education to each child&apos;s unique strengths and learning style. We empower students to reach their full potential and become lifelong learners who embrace their individuality.</p>
        </div>
        <div className="flex flex-col space-y-2 text-right">
          <h1 className="text-[#6187FA] text-7xl font-bold">02</h1>
          <h2 className="font-semibold text-2xl">What makes us different ? </h2>
          <p className="text-lg">Wonder isn&apos;t just about grades; it&apos;s about nurturing the spark in every child.We lovingly blend academics with skills and personalized insights,guiding students to discover their hidden talents and embrace their unique way of learning</p>
        </div>
        <div className="flex flex-col space-y-2 text-left">
          <h1 className="text-[#6187FA] text-7xl font-bold">03</h1>
          <h2 className="font-semibold text-2xl">What more do we offer ?</h2>
          <p className="text-lg">We offer a gamified learning experience,fostering collaboration between teachers and parents,while providing comprehensive reports on each child&apos;s growth and potential.</p>
        </div>
      </div>



    </div>
  );
};

export default ProblemSection;
