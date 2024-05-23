import React from 'react'
import { Label, TextInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import { Button } from 'flowbite-react';
export default function Contact() {
  return (
    <div className=' self-center'>
      <h1 className=" text-4xl text-center mb-12">CONTACT US</h1>
      <div className='flex flex-wrap justify-around w-2/4  m-auto'>
        <div className=" w-full">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea className='mb-6' id="comment" placeholder="Leave a comment..." required rows={4} />
        </div>

        <div className='flex flex-wrap justify-around  w-full'>
          <div className=" w-2/5">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Your email" />
            </div>
            <TextInput id="email4" type="email" placeholder="name@flowbite.com" required />
          </div>

          <div className="w-2/5 gap-4 mb-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username3" color="success" value="Your name" />
              </div>
              <TextInput className='mb-2'
                id="username"
                placeholder="Your Name"
                required
              />
            </div>
          </div>
          
        </div>
        <Button color="dark" className='w-full' onClick={()=>alert("Your message has been sent successfully.")}>Submit</Button>

      </div>


    </div>
  )
}
