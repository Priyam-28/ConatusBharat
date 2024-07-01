const Footer = () => {
  return (
    <>
    <div className="w-screen h-96 flex p-10 relative">
      <div className="absolute bottom-0 left-0 p-10">
        <h1 className="text-4xl text-blue-500 ">Dream Big</h1>
        <h2 className="text-4xl text-blue-500 ">Embrace Wonders</h2>
      </div>
      <div className="absolute bottom-0 right-24 p-10 flex flex-col ">
        <p className="text-xl text-gray-900">Book a free trial</p>
        <button className="bg-blue-500 text-white rounded-full py-2 px-4 mt-2">Book</button>
      </div>
    </div>
    <div className="footer h-52 bg-black">

    </div>
    </>
  );
}

export default Footer;
