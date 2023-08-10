import { Streamers, columns } from "./columns";
import { DataTable } from "./data-table";

interface Props {
  streamers: Streamers[];
}

export const getServerSideProps = async () => {
  const response = await fetch('https://tsdb-backend.vercel.app/data')
  const streamers: Streamers[] = await response.json();

  return {
    props: {
      streamers 
    }
  }
}

export default function DemoPage({ streamers }: Props) {

  const updatedStreamers = streamers.map((element:any) => {
    const { twitch, twitter, follower, instagram, discord, username } = element;

    return { 
      username, 
      twitch, 
      twitter,
      followers: follower,
      instagram,
      discord
    }
  })

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={updatedStreamers} />
    </div>
  )
}