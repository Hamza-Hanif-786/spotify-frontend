import React from 'react'
import { Button } from "@/components/ui/button"
import { CirclePlus } from 'lucide-react'


const page = () => {
  return (
    <div className='p-6 grid grid-cols-8'>
        <div className='space-y-10 col-span-7'>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Songs Management
            </h2>
            <div className='col-span-7'>
                <div className='shadow-md rounded-lg border p-4 flex items-center justify-between gap-5'>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Songs List
                    </h3>
                    <Button variant="default"><CirclePlus className="mr-1 h-4 w-4" /> Add New Song</Button>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default page
