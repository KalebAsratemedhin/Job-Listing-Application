import { url } from "inspector";
import AboutTile from "../components/AboutTile";
import JobCard from "../components/JobCard";

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

const jobPost: JobPost = JSON.parse(
    `{"title": "Social media manager",
    "description": "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers. Your primary goal will be to enhance brand visibility, foster positive relationships with the audience, and drive engagement and conversions.",
    "responsibilities": [
      "Community engagement to ensure that is supported and actively represented online",
      "Focus on social media content development and publication",
      "Marketing and strategy support",
      "Stay on top of trends on social media platforms, and suggest content ideas to the team",
      "Engage with online communities"
    ],
    "ideal_candidate": {
      "age": "18-24",
      "gender": "Female",
      "traits": [
        "Passionate & Reliable: Genuine interest in our mission and a strong desire to make a positive impact, responsible, and committed to fulfilling volunteer commitments.",
        "Adaptable, Team Player & Strong Communication Skills: Able to work effectively in diverse teams; and contributes positively. Flexible and open to embracing new challenges and shifting priorities; Clear verbal and written communication, active listening, and constructive feedback.",
        "Respectful: Embraces diversity, inclusive, and treats others with respect. Abides with all our rules and regulations."
      ]
    },
    "when_where": "The onboarding event for this event will take place on Jan 18th, 2023 in AAU Auditorium.",
    "about": {
      "posted_on": "Jul 1, 2023",
      "deadline": "Jul 31, 2023",
      "location": "Addis Ababa",
      "start_date": "Aug 02, 2023",
      "end_date": "Sep 02, 2023",
      "categories": ["Marketing", "Design"],
      "required_skills": ["Social Media Marketing", "English", "Copywriting"]
    },
    "company": "ABC Media",
    "image": "/job1.png" }
  `
);



const page = () => {

  return (
    <main className="grid grid-cols-6">
        <section className="col-span-5 pr-12 pt-8">
            <div className="mb-8">
                <h1 className="font-bold pl-4">Description</h1>
                <div className="pl-6">{jobPost.description}</div>
            </div>
            <div className="mb-8">
                <h1 className="font-bold pl-4">Responsibilities</h1>
                {
                    jobPost.responsibilities.map((responsibility) => {
                        return <li className="pl-6">{responsibility}</li>
                    })
                }
            </div>
            <div className="mb-8">
                <h1 className="font-bold pl-4">Ideal Candidate we want</h1>

                {/* <ul> */}
                    <li className="pl-6 font-bold">Young({jobPost.ideal_candidate.age}) {jobPost.ideal_candidate.gender} {jobPost.title}</li>
                    { jobPost.ideal_candidate.traits.map((trait) => {
                        const trait_title = trait.split(":")
                        return <li className="pl-6"><span className="font-bold">{trait_title[0]}</span>: {trait_title[1]}</li>
                    })}
                {/* </ul> */}

                <div>

                </div>
            </div>
            <div className="mb-8">
                <h1 className="font-bold pl-4">When & where</h1>
                <p className="pl-6">{jobPost.when_where}</p>
            </div>
            <JobCard jobPost={jobPost} />
        </section>

        <aside className="col-span-1 pt-3 pr-6">
            <div className="border-b-2 mb-3">
                <h2 className="font-bold mb-4 ">About</h2>
                

                <AboutTile title="Posted On" value={jobPost.about.posted_on} icon={'http://www.w3.org/2000/svg'}  />
                <AboutTile title="Deadline" value={jobPost.about.deadline} icon={'http://placeholder'}  />
                <AboutTile title="Location" value={jobPost.about.location} icon={'http://placeholder'}  />
                <AboutTile title="Start Date" value={jobPost.about.start_date} icon={'http://placeholder'}  />
                <AboutTile title="End Date" value={jobPost.about.end_date} icon={'http://placeholder'}  />
                
            </div>
            <div className="border-b-2 mb-3 pb-4">
                <h2 className="font-bold ">Categories</h2>
                <div className="flex gap-2">
                    {jobPost.about.categories.map((category) => {
                        return <div>{category}</div>
                    })}
                </div>
            </div>
            <div>
                <h2 className="font-bold ">Required Skills</h2>
                <div className="flex gap-4 flex-wrap">
                    {jobPost.about.required_skills.map((skill) => {
                        return <div>{skill}</div>
                    })}
                </div>
            </div>
            
        </aside>
    </main>
  )
}

export default page