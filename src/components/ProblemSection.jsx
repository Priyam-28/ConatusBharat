const ProblemSection = () => {
  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col md:flex-row pb-10 gap-6 md:gap-10">
        <div className="w-full md:w-1/3 flex text-3xl md:text-5xl font-bold ml-2 md:ml-10">
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

      <div className="flex justify-center md:justify-start">
        <img src="Frame 30.svg" alt="Problem Illustration" className="w-full md:w-auto" />
      </div>
    </div>
  );
}

export default ProblemSection;
