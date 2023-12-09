import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="flex w-screen h-fit py-[150px] bg-[#FBB6CE] justify-center items-center">
            <Image src="/assets/image/Fatal error.png" width={811} height={456} alt='error' />
        </div>
    );
}