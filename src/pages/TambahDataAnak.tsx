import ButtonForm from "../components/inputs/ButtonForm";

export default function TambahDataAnak() {
    return (
        <main className="flex-auto px-4 flex flex-col select-none">
            <form action="" className="flex flex-col gap-5 my-auto">

                <div>
                    <input type="text" name="name" id="name" className="w-full p-4 border border-black outline-none rounded-md" placeholder="Nama Anak" />
                </div>
                <div>
                    <input type="date" name="name" id="name" className="w-full p-4 border border-black outline-none rounded-md" placeholder="Nama Anak" />
                </div>
                <div className="flex border border-black p-4 rounded-md text-sm justify-between">
                    <span>Jenis Kelamin</span>
                    <div className="flex gap-2 items-center">
                        <div>
                            <input type="radio" name="JenisKelamin" id="lakilaki" value={"Laki - Laki"} />
                            <label htmlFor="lakilaki">Laki - Laki</label>
                        </div>
                        <div>
                            <input type="radio" name="JenisKelamin" id="JenisKelamin" value={"Perempuan"} />
                            <label htmlFor="perempuan">Perempuan</label>
                        </div>
                    </div>
                </div>


                <ButtonForm text="Tambah Data" />
            </form>
        </main>
    )
}