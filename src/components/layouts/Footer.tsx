import { EmailIcon, FacebookIcon, InstagramIcon, TiktokIcon, WhatsAppIcon } from "../Icons";

export default function Footer() {
    return (
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" width="360" height="31" viewBox="0 0 360 31" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 23.1986V30.9968H360V25.6981C323.525 25.6169 300.488 16.6696 281.568 9.32175C271.883 5.56014 263.277 2.21772 254.5 0.698624C242.325 -1.40867 234.535 1.52777 223.173 5.81104C210.271 10.6744 192.764 17.2742 159 20.1986C120.227 23.5569 103.638 16.2897 88.5156 9.66539C78.8714 5.44068 69.824 1.47744 56 0.698624C27.6 -0.901376 6.83333 15.032 0 23.1986Z" fill="#CDB4DB" />
            </svg>
            <div className="px-2 bg-color5 py-2">
                <div>
                    <span>LOGO</span>
                    <div className="ml-6">
                        <p className="break-words text-sm text-[#264562]">Kenali tonggak penting dalam pertumbuhan bayi Anda dan dapatkan tips berguna untuk perawatan mereka. Bersama CALCARE, Anda selalu dapat mengikuti perkembangan anak Anda dengan mudah dan yakin.</p>
                        <div className="flex gap-2 mt-2">
                            <a href="" className="w-5 h-5 inline-block"><WhatsAppIcon /></a>
                            <a href="" className="w-5 h-5 inline-block"><FacebookIcon /></a>
                            <a href="" className="w-5 h-5 inline-block"><InstagramIcon /></a>
                            <a href="" className="w-5 h-5 inline-block"><TiktokIcon /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <span className="font-semibold text-lg">Kontak</span>
                    <div className="flex items-center gap-1 ml-6">
                        <div className="w-5 h-5"><EmailIcon /></div>
                        <a href="">isfi.rpl@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}