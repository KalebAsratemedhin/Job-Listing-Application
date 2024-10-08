import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
        <h1 className="font-heading font-medium text-4xl mb-6">Welcome to the JobListing Application</h1>
        <Link className="text-blue-800 underline flex justify-center" href="/joblist">job list</Link>
     </div>
    </main>
  );
}
