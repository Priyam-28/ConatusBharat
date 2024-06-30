

const Navbar = () => {
  return (
    <nav className="w-screen h-[93px] flex flex-wrap items-center justify-center font-bold sticky top-0 bg-white">
      <span><img src="Logo_Conatus.png" className="fixed left-16 block h-12 top-4" alt="logo" /></span>
      <div className="content flex items-center cursor-pointer">
        <div className="flex text-xl space-x-6">
          <div >Features</div>
          <div >Contact</div>

        </div>
        <span className="text-[#487DFF] text-2xl block p-3 items-center ml-7 mr-7">Synapses</span>
        <div className="flex text-xl space-x-6">
          <div>Parents</div>
          <div  >Subject</div>
        </div>

        <button className=" rounded-2xl w-20 h-8 bg-black text-white flex-row-reverse right-16 fixed">Login</button>
      </div>
    </nav>
  )
}

export default Navbar
