import React from "react";

const Footer = () => {
    return(
        <footer className="w-full border-t border-[#33353F]">
            <div className="mb-14 w-full container mx-auto p-4 flex justify-between items-center text-slate-400">
                <span className="">Britney</span>
                <section className="text-white grid" id="herosection">
                           
                        <div>
                            <img src="/Hero-Section.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                        </div>
                    
                </section>
                <p>Copyright &copy; All rights reserved</p>
            </div>
        </footer>
    );
};
export default Footer;