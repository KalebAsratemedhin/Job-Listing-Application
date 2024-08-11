
"use client";
import Link from "next/link"
import JobPost from "../models/JobPost"
import { useRouter } from "next/navigation"
import image from "../assets/image_2.svg"
import Image from "next/image";
import Tag from "./Tag";

const JobCard = ({jobPost, pic, jobId}: {jobPost: JobPost, pic: string, jobId: number}) => {
    const titleTokens = jobPost.title.split(" ")
    const title = titleTokens.map(token => {

        return token[0].toUpperCase() + token.substring(1)
    
    }).join(" ")

    const router = useRouter()
    const handleClick = () => {
        router.push(`/dashboard/${jobId}`);
        
    }   

    

  return (
    <div className="p-6 mt-7 border rounded-3xl bg-white grid grid-cols-10 gap-2 hover:bg-gray-300" onClick={handleClick}>
        <div className="rounded-full col-span-1">
            <Image src={pic} alt="" width={60} height={60} /> 
        </div>
        <div className="col-span-9">
           
            <div className="mb-2">
                <h1 className="fon-body text-dark-blue">{ title}</h1>
                <h2 className="text-grey-subtitle font-body">{jobPost.company} <span className="text-gray-500 text-2xl relative bottom-1 ">.</span> {jobPost.about.location}</h2>
            </div>
            <div>
                <p className="font-body text-dark-blue"> 
                    {jobPost.description}
                </p>
            </div>
            <div className="mt-4 flex gap-2">
                <Tag text="text-green-tag" background="bg-green-tag" name="In Person" />
                <button className="font-heading rounded-full border px-4 border-my-yellow  hover:bg-my-yellow hover:text-white text-my-yellow ">Education</button>
                <button className="font-heading text-purple-tag border pr-4 pl-4   rounded-xl border-purple-tag hover:bg-purple-tag hover:text-white ">IT</button>

            </div>
        </div>
        
        
    </div>
  )
}

export default JobCard