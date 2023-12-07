'use client';

import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react";
import { Heading, Text, Stack, Image } from '@chakra-ui/react';
import { createIcon, PhoneIcon, TimeIcon } from '@chakra-ui/icons';
import MemberCard from '@/components/membercard'

export const locationCustom = createIcon({
  displayName: "locationCustom",
  viewBox: "0 0 200 200",
  path: (
    <path fill='black' d='M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 8.53043 13.7893 9.03914 13.4142 9.41421C13.0391 9.78929 12.5304 10 12 10C11.4696 10 10.9609 9.78929 10.5858 9.41421C10.2107 9.03914 10 8.53043 10 8ZM5 20V22H19V20H5Z' />
  ),
});

async function getEvents() {
  try {
    const res = await fetch('http://localhost:3000/api/event')
    const data = await res.json()
    return data['data']
  } catch (err) {
    console.log(err)
  }
}

async function getFoods() {
  try {
    const res = await fetch('http://localhost:3000/api/fnb')
    const data = await res.json()
    return data['data']
  } catch (err) {
    console.log(err)
  
  }
}

function dateToText(date: string | null) {
  if (!date) return 'TBA'
  const dateObj = new Date(date)
  const month = dateObj.toLocaleString('default', { month: 'long' })
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()
  return `${day} ${month} ${year}`
}



export default function CustomerHome() {
  const [data, setData] = useState<
    {
      id: string;
      name: string | null;
      date: string | null;
      start_time: string | null;
      end_time: string | null;
      contact: string | null;
      desc: string | null;
      workspace_id: string | null;
      workspace_name: string | null;
      location: string | null;
    }[]
  >([]);

  const [foods, setFoods] = useState<
  {
    id: string;
    name: string | null;
    desc: string | null;
    price: number | null;
    created_at: string | null;
  }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getEvents()
      setData(res)
      const res2 = await getFoods()
      setFoods(res2)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className='px-[150px] py-[100px] gap-[50px] bg-[#FBB6CE] flex gap-2'>
        <div className='w-6/12'>
          <div className="rounded-t-md w-full h-20 px-7 py-4 bg-white shadow">
            <Heading className="text-gray-900 text-4xl font-extrabold">Workspace</Heading>
          </div>
          <div className="w-full h-32 px-7 py-6 bg-slate-100 shadow justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch h-14 flex-col justify-start items-start flex">
                <div className="self-stretch text-gray-900 text-lg font-bold leading-loose">Ruang Kerja Private Lt. 4</div>
                <div className="self-stretch text-slate-600 text-base font-semibold leading-7">Centrice Dago</div>
              </div>
              <div className="px-1 bg-pink-200 rounded-sm justify-start items-start gap-2.5 inline-flex">
                <div className="text-fuchsia-900 text-xs font-bold uppercase leading-none">Kursi 33A</div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-end inline-flex">
              <div className="text-violet-900 text-xl font-bold leading-loose">05:38</div>
              <div className="text-slate-600 text-sm font-semibold leading-7">Mulai 15:02</div>
            </div>
          </div>

          <div className="w-full h-80 relative bg-violet-400 rounded-bl-lg rounded-br-lg shadow border-4 border-white">
            {/* <MemberCard name='COK' /> */}
          </div>
        </div>



        <div className='w-5/12'>
          <div className="rounded-t-md w-full h-20 px-7 py-4 bg-white shadow">
            <Heading className="text-gray-900 text-4xl font-extrabold">Pesan Makanan</Heading>
          </div>
          <div className="w-full h-11/12 px-7 py-10 bg-slate-100 shadow flex-col justify-start items-center gap-7 inline-flex">
            <div className='bg-red'>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                maxW='sm'
                maxH={{ base: '100%', sm: '90px' }}
                className='h-24 w-12/12'
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '120px' }}
                  src='https://via.placeholder.com/142x75'
                  alt='Caffe Latte'
                  // height={{ base: '75px', sm: '1px' }}
                />

                <Stack>
                  <CardBody className='w-48'>
                    <Heading size='md'>Nasi Goreng</Heading>
                    <Text py='2'>
                      Rp10.000,00
                    </Text>
                  </CardBody>
                </Stack>
                <div className="w-9 h-full px-3 bg-slate-50 rounded-tr rounded-br border border-slate-200 justify-center items-center gap-4 inline-flex">
                  <div className="grow shrink basis-0 text-justify text-gray-900 text-lg font-bold leading-7">0</div>
                </div>
                <div className='flex-column h-full'>
                  <div className="w-9 h-1/2 px-3 bg-slate-50 rounded-tr rounded-br border border-slate-200 justify-center items-center gap-4">
                    <div className="grow shrink basis-0 text-justify text-gray-900 text-lg font-bold leading-7">+</div>
                  </div>
                  <div className="w-9 h-full px-3 bg-slate-50 rounded-tr rounded-br border border-slate-200 justify-center items-center gap-4">
                    <div className="grow shrink basis-0 text-justify text-gray-900 text-lg font-bold leading-7">-</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

      </div>

      <div className='w-fit bg-white px-36 py-20'>
        <Heading className="text-gray-900 text-4xl font-extrabold leading-10">Community</Heading>
        <div className='grid grid-cols-3 justify-evenly my-10 py-4 gap-9'>
          {data ? data.map((event) => (
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src='https://via.placeholder.com/443x200'
                  alt='event image'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{event.name}</Heading>
                  <Text className='text-slate-600 text-lg font-semibold leading-7'>{event.workspace_name}
                  </Text>
                  <Text className='mb-4 leading-0'>
                    {event.desc}
                  </Text>
                </Stack>
                <div className='flex gap-3 my-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 8.53043 13.7893 9.03914 13.4142 9.41421C13.0391 9.78929 12.5304 10 12 10C11.4696 10 10.9609 9.78929 10.5858 9.41421C10.2107 9.03914 10 8.53043 10 8ZM5 20V22H19V20H5Z" fill="black" />
                  </svg>
                  <Text className='w-80 text-gray-900'>{event.location}</Text>
                </div>
                <div className='flex gap-3 my-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 21.5999C14.546 21.5999 16.9878 20.5885 18.7881 18.7881C20.5885 16.9878 21.5999 14.546 21.5999 11.9999C21.5999 9.45382 20.5885 7.01203 18.7881 5.21168C16.9878 3.41133 14.546 2.3999 11.9999 2.3999C9.45382 2.3999 7.01203 3.41133 5.21168 5.21168C3.41133 7.01203 2.3999 9.45382 2.3999 11.9999C2.3999 14.546 3.41133 16.9878 5.21168 18.7881C7.01203 20.5885 9.45382 21.5999 11.9999 21.5999ZM13.1999 7.1999C13.1999 6.88164 13.0735 6.57642 12.8484 6.35137C12.6234 6.12633 12.3182 5.9999 11.9999 5.9999C11.6816 5.9999 11.3764 6.12633 11.1514 6.35137C10.9263 6.57642 10.7999 6.88164 10.7999 7.1999V11.9999C10.8 12.3181 10.9264 12.6233 11.1515 12.8483L14.5451 16.2431C14.6566 16.3546 14.789 16.443 14.9346 16.5034C15.0803 16.5637 15.2364 16.5948 15.3941 16.5948C15.5518 16.5948 15.7079 16.5637 15.8536 16.5034C15.9993 16.443 16.1316 16.3546 16.2431 16.2431C16.3546 16.1316 16.443 15.9993 16.5034 15.8536C16.5637 15.7079 16.5948 15.5518 16.5948 15.3941C16.5948 15.2364 16.5637 15.0803 16.5034 14.9346C16.443 14.789 16.3546 14.6566 16.2431 14.5451L13.1999 11.5031V7.1999Z" fill="black" />
                  </svg>
                  <Text className='w-80 text-gray-900'>              {dateToText(event.date)}, pukul {(event.start_time)?.slice(0, 5)} - {(event.end_time)?.slice(0, 5)}</Text>
                </div>
                <div className='flex gap-3 my-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M2.3999 3.5999C2.3999 3.28164 2.52633 2.97642 2.75137 2.75137C2.97642 2.52633 3.28164 2.3999 3.5999 2.3999H6.1835C6.46755 2.40003 6.74234 2.50092 6.959 2.68461C7.17565 2.86831 7.32012 3.1229 7.3667 3.4031L8.2547 8.7251C8.29713 8.97856 8.25707 9.23895 8.14042 9.46794C8.02377 9.69693 7.83668 9.88242 7.6067 9.9971L5.7491 10.9247C6.41523 12.5755 7.4073 14.075 8.66603 15.3338C9.92476 16.5925 11.4243 17.5846 13.0751 18.2507L14.0039 16.3931C14.1185 16.1633 14.3038 15.9764 14.5326 15.8598C14.7613 15.7431 15.0214 15.7029 15.2747 15.7451L20.5967 16.6331C20.8769 16.6797 21.1315 16.8242 21.3152 17.0408C21.4989 17.2575 21.5998 17.5323 21.5999 17.8163V20.3999C21.5999 20.7182 21.4735 21.0234 21.2484 21.2484C21.0234 21.4735 20.7182 21.5999 20.3999 21.5999H17.9999C9.3839 21.5999 2.3999 14.6159 2.3999 5.9999V3.5999Z" fill="black" />
                  </svg>
                  <Text className='w-80 text-gray-900'>{event.contact}</Text>
                </div>
              </CardBody>

            </Card>)) : <div>loading...</div>}
        </div>
      </div>




    </div>
  )
}