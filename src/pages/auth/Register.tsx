import { Link } from "react-router-dom";
import ButtonForm from "../../components/inputs/ButtonForm";
import InputText from "../../components/inputs/Text";

export default function Register() {
    return (
        <main className="flex-auto flex flex-col">
            <div className="border border-black mx-3 my-auto rounded-md pb-4">
                <div className="bg-color5 py-3 text-center font-bold text-xl">Buat Akun</div>
                <div className="mx-3 mt-4 flex flex-col gap-3">
                    <InputText name="fullName" placeholder="Nama Lengkap" />
                    <InputText name="username" placeholder="Nama Pengguna" />
                    <InputText name="password" placeholder="Sandi" type="password" />

                    <p className="break-words ml-2 mt-5">Sudah Punya Akun? <Link to={'/login'} className="text-color1">Masuk</Link></p>

                    <ButtonForm text="Buat Akun" />
                </div>
            </div>
        </main>
    )
}