import { Link } from "react-router-dom";
import { PersonIcon, BurgerIcon, LogoutIcon, CloseIcon } from "../Icons";
import { useState } from "react";

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false)


    return (
        <>
            <header className="mb-6 relative z-50">
                <div className="bg-color5 flex justify-between items-center py-4 px-2">
                    <div>LOGO</div>
                    <button className="w-7 h-7" onClick={() => { setIsNavOpen(value => !value) }}>{isNavOpen ? <CloseIcon /> : <BurgerIcon />}</button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="-m-1" width="360" height="37" viewBox="0 0 360 37" fill="none">
                    <path d="M0 34.2018V1.20183L360.5 1.20182C350.5 -7.79809 404.9 36.7018 360.5 36.7018C305 36.7018 280.5 16.2018 254.5 11.7018C228.5 7.20184 222.5 25.7018 159 31.2018C95.5 36.7018 91.5 13.7018 56 11.7018C27.6 10.1018 6.83333 26.0352 0 34.2018Z" fill="#CDB4DB" />
                </svg>
            </header>

            {
                isNavOpen ?
                    <nav className="fixed top-0 bottom-0 left-0 right-0 bg-white pt-28 px-2 text-xl z-40">
                        <div className="flex justify-between px-2 border-b-2 border-black mb-5">
                            <div className="flex gap-1 items-center">
                                <div className="w-4 h-4"><PersonIcon /></div>
                                <p>Nana</p>
                            </div>
                            <button type="button" className="flex items-center py-3 px-2 bg-color3 rounded-md mb-px">Keluar <div className="w-5 h-5"><LogoutIcon /></div></button>
                        </div>

                        <div className="flex flex-col gap-5 px-5">
                            <Link to={'/'} className="border-b border-black w-full inline-block pl-3 pb-1">Home</Link>
                            <Link to={'/calculator'} className="border-b border-black w-full inline-block pl-3 pb-1">calculator</Link>

                            <div className="flex gap-3">
                                <Link to={'/login'} className="inline-block border border-black rounded-md py-2 basis-1/2 text-center">Masuk</Link>
                                <Link to={'/register'} className="inline-block border border-black rounded-md py-2 basis-1/2 text-center bg-color3">Buat Akun</Link>
                            </div>
                        </div>
                    </nav>
                    : ''
            }
        </>
    )
}