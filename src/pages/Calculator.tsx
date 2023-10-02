import { Link } from "react-router-dom";
import { ArrowIcon, SaveIcon } from "../components/Icons";

export default function Calculator() {
    return (
        <main className="flex-auto px-4 select-none">
            <Link to={'/TambahDataAnak'} className="py-3 px-3 bg-color3 rounded-md border border-black">Tambah Data Anak</Link>

            <section className="mt-4 flex flex-col gap-4">
                <div className="">
                    <span className="text-sm">Nama Anak</span>
                    <p className="capitalize break-words border-b-2 border-black pl-3 mt-2 text-lg">Peter Parker</p>
                </div>

                <div className="flex gap-5">
                    <div className="">
                        <span className="text-sm">Berat Badan</span>
                        <div className="border-b-2 border-black relative mt-2">
                            <input type="number" name="beratBadan" id="beratBadan" className="text-lg w-full outline-none pl-7" />
                            <span className="absolute right-3 text-lg">Kg</span>
                        </div>
                    </div>

                    <div className="">
                        <span className="text-sm">Tinggi Badan</span>
                        <div className="border-b-2 border-black relative mt-2">
                            <input type="number" name="beratBadan" id="beratBadan" className="text-lg w-full outline-none pl-7" />
                            <span className="absolute right-3 text-lg">Cm</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <div>
                        <span className="text-sm">Tanggal Cek</span>
                        <div className="mt-2 text-lg border-b-2 border-black pl-1">
                            <input type="date" name="tanggalCek" id="tanggalCek" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-auto">
                        <p className="break-words capitalize text-xl text-gray-700">5 Bulan 0 Hari</p>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                    <button type="button" className="flex flex-auto justify-center gap-1 items-center py-3 bg-color1 rounded-md border border-black">Simpan Data <span className="w-5 h-5 inline-block"><SaveIcon /></span></button>
                    <button type="button" className="flex flex-auto justify-center gap-1 items-center py-3 bg-color3 rounded-md border border-black">Cek Sekarang <span className=""><ArrowIcon /></span></button>
                </div>
            </section>

            <section>

            </section>
        </main>
    )
}