import Image from 'next/image'
import {
  Button
} from "@chakra-ui/react"
import { Brand } from "@/components/brand"
import {
  FaGoogle,
  FaFacebook,
} from "react-icons/fa"

export default function GuestHome() {
  return (
    // pink section
    <div className='flex px-[150px] py-[100px] gap-[50px] bg-[#FBB6CE]'>
      <div className='flex  flex-col w-full bg-white gap-10 px-24 py-14 rounded-lg'>
        <div className='flex flex-row items-center'>
          <Brand />
          <div className="text-gray-900 text-4xl font-extrabold font-['Inter'] leading-10">, Coolest Workspace Ever!</div>
        </div>
      </div>
      <div className='flex flex-col w-[1100px] bg-white gap-10 px-24 py-14 rounded-lg'>
        <div className='flex flex-col w-full justify-start items-center gap-2.5 inline-flex'>
          <div className="text-gray-900 text-4xl font-extrabold font-['Inter'] leading-10">Join Us Now!</div>
          <div className="w-96 text-center text-gray-900 text-base font-semibold font-['Inter'] leading-normal">Bergabung menjadi bagian dari Sentrice Member!<br />Pilih metode sign up:</div>
        </div>
        <div className='flex w-full gap-5'>
          <Button leftIcon={<FaGoogle />} colorScheme='purple' variant='outline' size="lg" width="100%">
            Google
          </Button>
          <Button leftIcon={<FaFacebook />} colorScheme='purple' variant='outline' size="lg" width="100%">
            Facebook
          </Button>
        </div>
        <div className="w-full h-fit justify-center items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 h-px border border-slate-400"></div>
          <div className="text-center text-slate-400 text-sm font-semibold font-['Inter'] leading-tight">atau lanjut menggunakan email</div>
          <div className="grow shrink basis-0 h-px border border-slate-400"></div>
        </div>
      </div>
    </div>
  )
}