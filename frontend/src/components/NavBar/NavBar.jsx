const NavBar = () => {
    return (
       <nav className=" text-white text-5xl  navBar py-4 ">
        <div className=" flex items-center justify-center gap-5">
            <div className=" h-20 w-20">
                <img src="/images/more/logo1.png" alt="logo" className=" w-full h-full object-contain" />
            </div>
            <h1>Espresso Emporium</h1>
        </div>
       </nav>
    )
}

export default NavBar
