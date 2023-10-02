import { Link } from "react-router-dom";
import InputText from "../../components/inputs/Text";
import ButtonForm from "../../components/inputs/ButtonForm";

export default function Login() {
    return (
        <main className="flex-auto flex flex-col">
            <div className="border border-black mx-3 my-auto rounded-md pb-4">
                <div className="bg-color5 py-3 text-center font-bold text-xl">Masuk</div>
                <div className="mx-3 mt-4 flex flex-col gap-3">
                    <InputText name="username" placeholder="Nama Pengguna" />
                    <InputText name="password" placeholder="Sandi" type="password" />

                    <p className="break-words ml-2 mt-5">Tidak Punya Akun? <Link to={'/register'} className="text-color1">Buat Akun</Link></p>

                    <ButtonForm text="Masuk" />
                </div>
            </div>
        </main>
    )
}