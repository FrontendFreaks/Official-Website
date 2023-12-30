import * as React from "react"
 
import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const testimonials = [
    {
   
        name: "Hariharan Reddy",
        title: "Fullstack Intern",
quote:"Your guidance did helped me prioritize what I needed to do for getting my first internship. Your videos on resume building, cover letter templates and tips and tricks helped immensely in getting my resume shortlisted."  ,
 img:"https://media.licdn.com/dms/image/D4D03AQForZe5Npk8Qw/profile-displayphoto-shrink_800_800/0/1689487033085?e=1709164800&v=beta&t=2s6gpZpvRr1UQAwD8iw159nAhH-lE8UHwgnRNqPhTps"
},
    {

        title: "Frontend Engineer",
        name: "SAurav (Kumar Avishek)", img:"https://media.licdn.com/dms/image/C5603AQHp3_SXyYHZFQ/profile-displayphoto-shrink_400_400/0/1600053166501?e=1709164800&v=beta&t=ZZM3Bg4EXsfNLaxC9GDrEgA5LhOQCj1nixhuNFw9pqM"
        ,
quote:"Before joining, I was isolated with no connections, and my progress was slow. However, being a member of Frontend Freaks propelled me to my current position. Without this group, I might not be where I am today. My heartfelt thanks to Vishal for creating and managing this group. The impact on my professional growth is immeasurable, and I am truly appreciative."    },
    {
        name: " KEEGAN COLACO ",
        title: "Student", img:"https://media.licdn.com/dms/image/D4D03AQENueFehAtxAQ/profile-displayphoto-shrink_800_800/0/1685429356858?e=1709164800&v=beta&t=lmrMRs7MGi0Nry9SbG-MTiFz99saQY8yFgCwpa61RRs"
,
        quote: "Vishal is very helpful and will make sure that all your doubts are clear. Along with that the awesome community is very helpful and they will be very supportive. "
    },
    {
        name: "Jyoti Pal",
        title: "Full Stack Engineer",
        img:"https://pbs.twimg.com/profile_images/1732254187218694144/synyPvoD_400x400.jpg"
,
        quote: "Vishal's guidance was pivotal in my decision to join my current company. Their support during tough times and the experienced community's assistance were invaluable. I'm truly grateful for your motivation and impactful work. Thank you immensely!"
    },
    {
      name: "Sujit Memane",
      title: "Student",
      img:"https://media.licdn.com/dms/image/D4D03AQH9NENenfDMYg/profile-displayphoto-shrink_800_800/0/1681362877178?e=1709164800&v=beta&t=gepBZZSswzDuLlSfrK041zZKavAd9O5VvmgIznG4su0"
,
      quote: "Vishal Bhaiya helped me from the start of my tech journey. His community is so helpful and supportive. His JavaScript DSA video series is very useful.Thank you immensely!"
  },
  
   
]


export function Review() {
  return (
    <div className="text-center container">
           <h4 className="md:text-3xl text-xl  my-1 text-black font-bold dark:text-white">
               Reviews
            </h4>
            <p>What Our Student Says?</p>

<div className="flex  items-center my-8  justify-center   ">
<Carousel opts={{ align: "start" }} className="w-full   ">
  <CarouselContent className="">
    {testimonials.map((item, idx) => (
      <CarouselItem key={idx} className="md:basis-1/2 shadow-lg gap-4 lg:basis-1/3">
        <li className="flex flex-col h-full items-start mr-6 justify-center  max-w-sm  ">
          <figure>
            <blockquote className="text-justify text-md font-italics sm:text-sm min-h-[100px]">
              “{item.quote}“
            </blockquote> 
            <div className="flex justify-between items-center">
            <div className="flex flex-row md:flex-col items-center justify-between mt-4 space-x-2">
              <img src={item.img} className="w-12 h-12 rounded-full" alt={item.name} />
              <div>
                <span className="block text-center font-semibold">{item.name}</span>
                <span className="block text-center text-sm">{item.title}</span>
              </div>
            </div>
            <p className="md:flex space-x-2 mt-2 hidden ">
              <FaStar size={15} color="orange" />
              <FaStar size={15} color="orange" />
              <FaStar size={15} color="orange" />
              <FaStar size={15} color="orange" />
              <FaStar size={15} color="orange" />
            </p>
            </div>
      
          </figure>
        </li>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious  className="hidden md:flex"/>
  <CarouselNext   className="hidden md:flex"/>
</Carousel>
</div>



    </div>
  
  )
}
