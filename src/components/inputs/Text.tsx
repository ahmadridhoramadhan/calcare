interface InputTextInterface {
    placeholder: string,
    type?: string,
    name: string
}

export default function InputText({ name, type = 'text', placeholder }: InputTextInterface) {
    return (
        <div>
            <input type={type} name={name} id={name} placeholder={placeholder} className="py-4 px-3 text-lg border border-black w-full rounded-md" />
        </div>
    )
}