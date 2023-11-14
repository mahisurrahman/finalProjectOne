import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className="bg-[#111827] text-white flex items-center justify-center">
                <div className="py-10 md:py-28 text-center px-2 md:px-32 bg-[#1F2937] flex-[1]">
                    <h2 className="mb-2 md:mb-4 text-lg md:text-3xl uppercase">Contact Us</h2>
                    <p className="text-sm md:text-lg">123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="py-10 md:py-28 flex flex-col justify-center px-2 md:px-32 bg-[#111827] h-full flex-[1]">
                    <h2 className=" mb-2 text-xl md:text-4xl uppercase">Follow Us</h2>
                    <h2 className=" mb-2 text-sm md:text-md uppercase">Join us on Social Media</h2>
                    <div className=" my-3 text-3xl md:text-5xl flex gap-4 md:gap-10">
                        <BiLogoFacebook className="hover:text-blue-400 hover:cursor-pointer"></BiLogoFacebook>
                        <BiLogoInstagram className="hover:text-blue-400 hover:cursor-pointer"></BiLogoInstagram>
                        <BiLogoTwitter className="hover:text-blue-400 hover:cursor-pointer"></BiLogoTwitter>
                    </div>
                </div>
            </footer>
            <div className="footer footer-center p-4 bg-black text-white">
                <aside>
                    <p>Copyright © {currentYear} - All right reserved by Mahisur Rahman LTD</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;