import Image from 'next/image'
import {
  Button,
  Input,
} from "@chakra-ui/react"
import { Brand } from "@/components/brand"
import {
  FaGoogle,
  FaFacebook,
} from "react-icons/fa"
import SignUpForm from '../signup/SignUpComponent'

export default function GuestHome() {
  return (
    // pink section
    <div className='flex px-[150px] py-[100px] gap-[50px] bg-[#FBB6CE]'>
      {/* Content */}
      {/* left side */}
      <div className='flex flex-col w-full h-full bg-white content-evenly px-12 py-14 rounded-lg gap-10 z-1'>
        <div className='flex flex-col w-full gap-5'>
          <div className='flex flex-row items-center'>
            <Brand />
            <div className="felx w-full text-gray-900 text-4xl font-extrabold font-['Inter'] leading-10">, Coolest Workspace Ever!</div>
          </div>
          <div className="w-full text-gray-900 text-base font-normal font-['Inter'] leading-normal">
            Lelah dan ingin menemukan suasana kerja dan belajar baru agar harimu lebih sejuk? Ayo bergabung dengan kami menjadi bagian dari Sentrice Member untuk bisa merasakan sensasi belajar dan bekerja yang nyaman!
          </div>
        </div>
        <div className='flex flex-row w-full h-56 gap-5'>
          <img className="w-full h-56 object-cover rounded-lg" src="/assets/facility/cowork-1.jpg" />
          <img className="w-full h-56 object-cover rounded-lg" src="/assets/facility/cowork-2.jpg" />
          <img className="w-full h-56 object-cover rounded-lg" src="/assets/facility/cowork-3.jpg" />
        </div>
        <Button colorScheme='purple' size="lg" width="30%">
          Lihat lainnya
        </Button>
      </div>

      {/* sign up */}
      <div className='flex flex-col w-[1100px] bg-white gap-10 px-24 py-14 rounded-lg'>
        <SignUpForm />
      </div>
      {/* Background */}
      <div>
        asd
      </div>
    </div>
  )
}