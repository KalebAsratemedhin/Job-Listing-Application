

interface JobPost{
    title: string;
    description: string;
    responsibilities: string[];
    ideal_candidate: {
        age: string;
        gender: string;
        traits: string[];
    },
    when_where: string;
    about: {
        posted_on: string;
        deadline: string;
        location: string;
        start_date: string;
        end_date: string;
        categories: string[];
        required_skills: string[];
    },
    company: string;
    image: string;

}
const JobCard = ({jobPost}: {jobPost: JobPost}) => {
  return (
    <div className="p-6 m-8 border rounded-3xl bg-white grid grid-cols-10">
        <div className="rounded-full col-span-1">
            <img src={`${jobPost.image}`} alt="" width={60} height={60} /> 
        </div>
        <div className="col-span-9">
           
            <div className="mb-2">
                <h1 className="font-bold">{jobPost.title}</h1>
                <h2 className="text-gray-400">{jobPost.company} | {jobPost.when_where}</h2>
            </div>
            <div>
                <p>
                    {jobPost.description}
                </p>
            </div>
            <div className="mt-4 flex gap-4">
                <button className="text-blue-500  pr-4 pl-4  bg-blue-100  rounded-xl">In Person</button> |
                <button className="text-yellow-500 border pr-4 pl-4    rounded-xl border-yellow-600 ">Education</button>
                <button className="text-blue-800 border pr-4 pl-4    rounded-xl border-blue-800 ">IT</button>

            </div>
        </div>
        
        
    </div>
  )
}

export default JobCard