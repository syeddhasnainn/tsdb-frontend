import { Streamers, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Streamers[]> {
  
  const response = await fetch('https://tsdb-backend.vercel.app/data',{ cache: 'no-store' })
  const streamers = await response.json()

  const updatedStreamers :Streamers[] =[];
  
  streamers.forEach((element:any) => {
    const { twitch, twitter, follower, instagram, discord, username } = element;
    const newObject = {
      username,
      twitch,
      twitter,
      followers: follower,
      instagram,
      discord,
    };
    
    updatedStreamers.push(newObject);
  });
  
  return updatedStreamers
}

export default async function DemoPage() {
  
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
