
export default function FnBCard(name: string, image: string, price:number) {
    return (
        <div className="flex w-[540px] h-[75px] items-start justify-center relative bg-white rounded-[var(--prototype-design-corner-8)] overflow-hidden border border-solid border-gray-200">
            <img className="relative self-stretch w-[142px] object-cover" alt="image" src="image-1.png"/>
            <div className="flex flex-col items-start justify-senter px-[20px py-0 relative flex-1 self-stretch grow">
                <div className="relative self-stretch font-text-lg-lineheight-7-font-bold font-[number:var(--text-lg-lineheight-7-font-bold)] text-gray-800 text-[length:var(--text-lg-lineheight-7-font-bold-font-size)] text-justify">
                    {name}
                </div>
                <div className="self-stretch text-justify text-slate-500 text-base font-medium font-['Inter'] leading-normal">
                    {price}
                </div>

            </div>

        </div>
    )
}