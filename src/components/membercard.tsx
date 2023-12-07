import { Brand } from "./brand"

// FAAAAAAAAAAAAAAAAAAAAAAAAAAAAKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK

export default function MemberCard({ name }: { name: string }, { id }: { id: string }) {
    return (
        <div>
            <div className="w-96 h-64 rounded-2xl shadow border-2 border-white flex-col justify-start items-center inline-flex">
                <div className="w-14 h-96 relative origin-top-left bg-gradient-to-b from-white via-white to-white">
                    <Brand />
                    <div className="w-24 h-5 left-[17px] top-[397px] absolute origin-top-left -rotate-90" />
                </div>
                <div className="w-56 h-96 relative origin-top-left rotate-90 bg-gradient-to-l from-violet-500 to-violet-500">
                    <div className="left-[88px] top-[375px] absolute origin-top-left -rotate-90 mix-blend-darken text-indigo-900 text-lg font-normal font-['Monomaniac One'] leading-7">CENTRICE MEMBER CARD</div>
                    <div className="left-[113px] top-[400px] absolute origin-top-left -rotate-90 mix-blend-darken text-indigo-900 text-4xl font-normal font-['Monomaniac One'] leading-7">{id}</div>
                    <img className="w-52 h-36 left-[-53px] top-[397px] absolute origin-top-left -rotate-90" src="https://via.placeholder.com/210x147" />
                    <div className="pl-14 pr-20 left-[167px] top-[458px] absolute origin-top-left -rotate-90 bg-white rounded-lg justify-start items-center inline-flex">
                        <div className="mix-blend-darken text-indigo-900 text-lg font-normal font-['Monomaniac One'] leading-7">{name.toUpperCase()}</div>
                    </div>
                    <div className="w-80 h-56 left-[-0px] top-[428px] absolute origin-top-left -rotate-90 mix-blend-lighten bg-gradient-to-r from-white via-white to-white" />
                </div>
            </div>
        </div>
    )
}