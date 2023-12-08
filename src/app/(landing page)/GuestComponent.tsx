'use client';
import Image from 'next/image'
import {
  Button,
  Card, Heading
} from "@chakra-ui/react"
import SignUpForm from '../signup/SignUpComponent'
import {
  MdOutlineHomeWork,
  MdRoomPreferences,
  MdSecurity,
} from 'react-icons/md'
import {
  AiOutlineTeam,
} from 'react-icons/ai'
import {
  IoWifiSharp,
  IoFastFood
} from 'react-icons/io5'
import {
  BsCheckCircleFill,
  BsXCircleFill
} from 'react-icons/bs'
import {
  FaClock,
  FaMapPin
} from 'react-icons/fa'

import { useRef } from 'react'

// Data
const features = [
  {
    title: "Fleksibel",
    description: "Dari area terbuka yang dinamis hingga ruang pribadi yang nyaman, Centrice menawarkan beragam pilihan tempat kerja yang dapat disesuaikan dengan kebutuhan Anda.",
    icon: <MdOutlineHomeWork className='w-[36px] h-[36px]' />
  },
  {
    title: "Teknologi Canggih",
    description: "Terhubunglah dengan kecepatan tinggi dan akses internet yang handal di seluruh lokasi kami. Dilengkapi dengan teknologi terdepan untuk mendukung produktivitas Anda.",
    icon: <IoWifiSharp className='w-[36px] h-[36px]' />
  },
  {
    title: "Modern",
    description: "Ruang meeting yang dilengkapi dengan teknologi konferensi canggih untuk memastikan pertemuan Anda berjalan lancar.",
    icon: <MdRoomPreferences className='w-[36px] h-[36px]' />
  },
  {
    title: "Kolaborasi",
    description: "Pecahkan batasan dengan berkolaborasi di area kreatif kami. Didesain untuk memicu ide-ide inovatif dan solusi brilian, tempat ini mengundang untuk berbagi ide dan meningkatkan kreativitas.",
    icon: <AiOutlineTeam className='w-[36px] h-[36px]' />
  },
  {
    title: "Layanan Pendukung",
    description: "Dari layanan resepsionis yang ramah hingga akses ke dapur dan area istirahat yang nyaman, kami memiliki segala yang Anda butuhkan untuk mendukung kesuksesan Anda sepanjang hari.",
    icon: <IoFastFood className='w-[36px] h-[36px]' />
  },
  {
    title: "Keamanan dan Privasi",
    description: "Kami mengutamakan keamanan dan privasi. Dengan sistem keamanan terkini, Anda dapat bekerja dengan tenang dan fokus tanpa khawatir tentang keamanan data.",
    icon: <MdSecurity className='w-[36px] h-[36px]' />
  },
]

const prices = [
  {
    package: "Virtual Office",
    price: "15",
    duration: "HARI",
    virtualOffice: true,
    flexDesk: false,
    wifi: false,
    meetingRoom: false,
    communityAccess: false,
    freeCoffee: false,
    color: 'purple-200',
    py: 'py-14',
    button: 'outline'
  },
  {
    package: "Monthly",
    price: "1199",
    duration: "BULAN",
    virtualOffice: true,
    flexDesk: true,
    wifi: true,
    meetingRoom: true,
    communityAccess: true,
    freeCoffee: true,
    color: 'purple-400',
    py: 'py-20',
    button: 'solid'
  },
  {
    package: "Day Pass",
    price: "45",
    duration: "HARI",
    virtualOffice: true,
    flexDesk: true,
    wifi: true,
    meetingRoom: false,
    communityAccess: true,
    freeCoffee: false,
    color: 'purple-200',
    py: 'py-14',
    button: 'outline'
  }
]

type Location = {
  id: string;
  name: string;
  contact: string;
  location: string;
  created_at: string;
  city: string;
}

const locationsDummy: Location[] = [
  {
    id: "1",
    name: "Centrice Dago",
    contact: "08123456789",
    location: "Jl. Sumur Bandung No.20, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
    created_at: "2021-09-01",
    city: "Bandung"
  },
  {
    id: "2",
    name: "Centrice UI",
    contact: "08123456789",
    location: "Ruko AVI River View, Jl. Komjen.Pol.M.Jasin No.1, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451",
    created_at: "2021-09-01",
    city: "Depok"
  },
  {
    id: "3",
    name: "Centrice Margonda",
    contact: "08123456789",
    location: "Jl. Margonda Raya No.358, Depok, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16431",
    created_at: "2021-09-01",
    city: "Depok"
  }
]



export default function GuestHome() {
  const facilityRef = useRef<HTMLDivElement>(null)

  
  const executeScroll = () => {
    if (facilityRef.current) {
      facilityRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }


  return (
    <div>
      {/* pink section */}
      <div className='flex px-[150px] py-[100px] gap-[50px] relative'>
        {/* background image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src="/assets/image/landing-background.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        {/* Content */}
        <div className='z-10'>
          {/* left side */}
          <div className='flex flex-col w-full h-full bg-white content-evenly px-12 py-14 rounded-lg gap-10'>
            <div className='flex flex-col w-full gap-5'>
              <Heading className="flex w-full text-gray-900 text-4xl font-extrabold leading-10">Centrice, Coolest Workspace Ever!</Heading>
              <div className="w-full text-gray-900 text-base font-normal leading-normal">
                Lelah dan ingin menemukan suasana kerja dan belajar baru agar harimu lebih sejuk? Ayo bergabung dengan kami menjadi bagian dari Sentrice Member untuk bisa merasakan sensasi belajar dan bekerja yang nyaman!
              </div>
            </div>
            <div className='flex flex-row w-full h-full gap-5 bg-cover bg-center'>
              <div className='flex flex-col h-fit rounded-lg overflow-hidden'>
                <Image
                  src="/assets/image/facility/cowork-1.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className='flex flex-col h-fit rounded-lg overflow-hidden'>
                <Image
                  src="/assets/image/facility/cowork-2.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className='flex flex-col h-fit rounded-lg overflow-hidden'>
                <Image
                  src="/assets/image/facility/cowork-3.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <Button colorScheme='purple' size="lg" width="30%" height={"20"} onClick={executeScroll}>
              Lihat lainnya
            </Button>
          </div>
        </div>

        {/* sign up */}
        <div className='flex flex-col w-[1000px] bg-white gap-10 px-24 py-14 rounded-lg z-10'>
          <SignUpForm />
        </div>
      </div>

      {/* Facility */}
      <div className='flex flex-col w-full h-fit px-[150px] py-[100px] gap-[50px] bg-white' ref={facilityRef}>
        <Heading className="flex w-full text-gray-900 text-4xl font-extrabold leading-10">Facility</Heading>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          outlineColor='gray.200'
        >
          <div className="w-[700px] h-fit text-gray-900 text-base font-normal leading-normal break-word text-justify py-16 px-8">
            Centrice adalah smart coworking space yang menyediakan lingkungan kerja yang modern, terkoneksi secara digital, dan dirancang untuk meningkatkan produktivitas para profesional.
            <br></br><br></br>Dengan ruang kerja fleksibel yang dapat disesuaikan, teknologi canggih untuk mendukung kinerja, ruang meeting yang modern, area kolaborasi yang inspiratif, fasilitas pendukung lengkap, serta sistem keamanan dan privasi yang terjamin, Centrice hadir sebagai tempat ideal bagi individu yang ingin bekerja secara efisien sambil terhubung dengan komunitas yang dinamis.
          </div>
          <Image
            src="/assets/image/facility/cowork-1.jpg"
            alt="Picture of the author"
            width={1000}
            height={1000}
            className='w-full h-[420px] object-cover overflow-hidden'
          />
        </Card>

        <div className='grid grid-cols-3 gap-[50px]'>
          {features.map((feature, index) => (
            <Card
              key={index}
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              outlineColor='gray.200'
            >
              <div className='flex flex-col p-[40px] gap-[20px]'>
                <div className='flex w-full gap-[20px] items-center'>
                  {feature.icon}
                  <div className="text-gray-900 text-2xl font-bold leading-loose">{feature.title}</div>
                </div>
                <div className="text-gray-900 text-base font-normal leading-normal break-word text-justify">
                  {feature.description}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Community */}
      <div className='flex flex-col w-full h-fit px-[150px] py-[100px] gap-[50px] bg-gray-100'>
        <Heading className="flex w-full text-gray-900 text-4xl font-extrabold leading-10">Community</Heading>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          outlineColor='gray.200'
        >
          <Image
            src="/assets/image/facility/cowork-2.jpg"
            alt="Picture of the author"
            width={1000}
            height={1000}
            className='w-full h-[400px] object-cover overflow-hidden'
          />
          <div className="w-[700px] h-fit text-gray-900 text-base font-normal leading-normal break-word text-justify py-16 px-8">
            Di sini, kami menyediakan platform yang mendukung interaksi antaranggota, baik melalui acara-acara khusus, sesi networking, atau program pengembangan diri. Dari diskusi panel yang menginspirasi hingga workshop praktis, komunitas kami menjadi tempat bagi para profesional untuk saling bertukar gagasan, pengalaman, dan mendapatkan inspirasi baru. Dengan fasilitas ini, kami bertujuan untuk menciptakan iklim kerja yang berdaya dorong, di mana kolaborasi dan pertukaran ide adalah inti dari pertumbuhan dan kesuksesan bersama.
          </div>
        </Card>
        <div className='flex flex-row w-full h-full gap-5 bg-cover bg-center'>
          <div className='flex flex-col h-fit rounded-lg overflow-hidden'>
            <Image
              src="/assets/image/community/event-1.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className='flex flex-col h-fit rounded-lg overflow-hidden'>
            <Image
              src="/assets/image/community/event-2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className='flex flex-col h-fit rounded-lg overflow-hidden'>
            <Image
              src="/assets/image/community/event-3.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className='flex flex-col h-fit rounded-lg overflow-hidden'>
            <Image
              src="/assets/image/community/event-4.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Prices */}
      <div className='flex px-[150px] py-[100px] h-full w-full bg-[#FBB6CE] relative'>
        {/* background image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src="/assets/image/prices-background.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        {/* Content */}
        <div className='flex w-full flex-col px-10 gap-[50px] z-10 items-center'>
          <Heading className="flex w-fit text-white text-4xl font-extrabold ">Prices</Heading>
          <div className='flex w-full h-fit gap-[25px] items-center'>
            {prices.map((data, index) => (
              <div className='flex w-full flex-col rounded-lg overflow-hidden'>
                <div className={`h-12 px-10 py-2.5 flex-col justify-center items-center inline-flex`}>
                  <div className="text-center text-purple-900 text-2xl font-bold leading-loose">{data.package}</div>
                </div>
                <div className={`flex px-20 ${data.py} bg-white shadow border-4 border-slate-200 flex-col justify-center items-center gap-10 inline-flex rounded-lg`}>
                  <div className="flex gap-1 inline-flex">
                    <div className="flex items-start text-justify text-gray-900 text-base font-bold  ">RP</div>
                    <Heading className="flex items-center text-justify text-gray-900 text-6xl font-extrabold ">{data.price}K</Heading>
                    <div className="flex items-end text-justify text-gray-900 text-base font-bold ">/{data.duration}</div>
                  </div>
                  <div className='flex flex-col justify-center items-start gap-5 inline-flex'>
                    <div className='flex gap-[25px]'>
                      {data.virtualOffice ? <BsCheckCircleFill className='w-[20px] h-[20px] fill-green-400'/> : <BsXCircleFill className='w-[20px] h-[20px] fill-red-300' />}
                      <div className="text-gray-900 text-base font-normal leading-normal">Virtual Office</div>
                    </div>
                    <div className='flex gap-[25px]'>
                      {data.flexDesk ? <BsCheckCircleFill className='w-[20px] h-[20px] fill-green-400'/> : <BsXCircleFill className='w-[20px] h-[20px] fill-red-300' />}
                      <div className="text-gray-900 text-base font-normal leading-normal">Flex Desk</div>
                    </div>
                    <div className='flex gap-[25px]'>
                      {data.wifi ? <BsCheckCircleFill className='w-[20px] h-[20px] fill-green-400'/> : <BsXCircleFill className='w-[20px] h-[20px] fill-red-300' />}
                      <div className="text-gray-900 text-base font-normalleading-normal">Wifi</div>
                    </div>
                    <div className='flex gap-[25px]'>
                      {data.meetingRoom ? <BsCheckCircleFill className='w-[20px] h-[20px] fill-green-400'/> : <BsXCircleFill className='w-[20px] h-[20px] fill-red-300' />}
                      <div className="text-gray-900 text-base font-normal leading-normal">Meeting Room</div>
                    </div>
                    <div className='flex gap-[25px]'>
                      {data.communityAccess ? <BsCheckCircleFill className='w-[20px] h-[20px] fill-green-400'/> : <BsXCircleFill className='w-[20px] h-[20px] fill-red-300' />}
                      <div className="text-gray-900 text-base font-normal leading-normal">Community Access</div>
                    </div>
                    <div className='flex gap-[25px]'>
                      {data.freeCoffee ? <BsCheckCircleFill className='w-[20px] h-[20px] fill-green-400'/> : <BsXCircleFill className='w-[20px] h-[20px] fill-red-300' />}
                      <div className="text-gray-900 text-base font-normal leading-normal">Free Coffee</div>
                    </div>
                  </div>
                  <Button
                    as={"a"}
                    color={'white'}
                    bg={'purple.300'}
                    px={6}
                    _hover={{
                      bg: 'purple.500',
                    }}
                    variant={data.button}
                    href="/login"
                  >
                    Daftar Sekarang
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className='flex flex-col w-full h-fit px-[150px] py-[100px] gap-[50px] bg-white'>
        <div className="flex w-full text-gray-900 text-4xl font-extrabold leading-10">Locations</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0420833059343!2d107.61051291145665!3d-6.885562793084668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6f8f33f8a33%3A0x12b7301534d13a23!2sJl.%20Sumur%20Bandung%20No.20%2C%20RW.01%2C%20Lb.%20Siliwangi%2C%20Kecamatan%20Coblong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040132!5e0!3m2!1sen!2sid!4v1701981011213!5m2!1sen!2sid"
          width="1548"
          height="450"
          style={{border:"0"}}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <div className='grid grid-cols-3 gap-[50px]'>
          {locationsDummy.map((location, index) => (
            <Card
              key={index}
              direction={{ base: 'row', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              outlineColor='gray.200'
            >
              <div className='flex flex-col h-fit'>
                <div className='flex flex-col h-[40%] rounded-lg overflow-hidden'>
                  <Image
                    src="/assets/image/facility/cowork-1.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
                <div className='flex flex-col h-fit p-[40px] gap-[20px]'>
                  <div className='flex w-full flex-col justify-start items-start inline-flex'>
                    <div className="text-gray-900 text-2xl font-bold ">{location.name}</div>
                    <div className="self-stretch text-slate-600 text-lg font-semibold leading-7">{location.city}</div>
                  </div>
                  <div className='flex flex-row justify-start items-start gap-[20px]'>
                    <FaMapPin className='w-[28px] h-[21px] pt-[5px]' />
                    <div className="text-gray-900 text-base font-normal leading-normal break-word text-justify">{location.location}</div>
                  </div>
                  <div className='flex flex-row justify-start items-start gap-[20px]'>
                    <FaClock className='w-[16px] h-[16px]' />
                    <div className="text-gray-900 text-base font-normal leading-normal break-word text-justify">{location.contact}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

    </div>
  )
}