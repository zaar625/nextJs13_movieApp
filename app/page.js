import Image from 'next/image'
import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {

  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' 
    : 'trending/all/week'}?api_key=${API_KEY}&language=ko&page=1`,{next:{revalidate:1000}});

  const data = await res.json();
  const result = data.results;

  console.log(result)


  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  return (
    <div>
      <Results results={result}/>
    </div>
  )
}
