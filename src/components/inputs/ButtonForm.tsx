import { Link } from "react-router-dom"

interface ButtonFormInterface {
    text: string
}

export default function ButtonForm({ text }: ButtonFormInterface) {
    return (
        <div className="flex justify-evenly gap-2">
            <Link to={'/'} type="button" className="text-center py-4 basis-1/2 rounded-md border-black border">Batal</Link>
            <button type="submit" className="py-4 basis-1/2 bg-color3 rounded-md border-black border">{text}</button>
        </div>
    )
}