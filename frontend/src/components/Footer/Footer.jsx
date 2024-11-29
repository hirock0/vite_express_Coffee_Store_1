const Footer = () => {
    return (
        <footer className={` py-10 bg-[url("/images/more/13.jpg")] bg-cover bg-no-repeat bg-center mt-32 flex items-center flex-col`}>
                    <div className=" w-full">
                        <img src="/images/more/logo1.png" alt="logo-1" className=" w-12" />
                    </div>
            <div className=" flex max-md:flex-col gap-5 ">
                
                <div className=" w-1/2 space-y-3 max-md:w-full">

                    <h1 className=" text-3xl font-semibold">Espresso Emporium</h1>
                    <p>
                    Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                    </p>
                    <div className=" flex items-center gap-3">
                        <div className="">face</div>
                        <div className="">Twit</div>
                        <div className="">ins</div>
                        <div className="">in</div>
                    </div>
                    <h1 className=" text-3xl font-semibold">
                        Get in Touch
                    </h1>
                    <div className="">
                        <div className="">+8801700554293</div>
                        <div className="">hirockdutta0@gmail.com</div>
                        <div className="">Bahadurpur, Manirampur, Jashore</div>
                    </div>
                </div>

                <div className=" w-1/2 max-md:w-full ">
                    <h1 className=" text-3xl font-semibold">Connect with Us </h1>
                    <form className=" flex flex-col gap-4">
                        <input type="text" name="name" placeholder="Name" className=" pl-2 h-12 rounded-md outline-none" />
                        <input type="email" name="email" placeholder="Email" className=" pl-2 h-12 rounded-md outline-none" />
                        <textarea name="message" placeholder="Message" className=" p-2 h-32 rounded-md outline-none"></textarea>
                        <button className=" px-5 py-2 rounded-full border-2 border-black w-fit">Send Message</button>
                    </form>
                </div>
            </div>
        </footer>  
    )
}

export default Footer
