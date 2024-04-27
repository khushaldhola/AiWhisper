// import PassGen from './_components/PassGen'
import { Button } from '../../../components/ui/button';
import Link from 'next/link'

function page() {
  return (
    <div>
        <Link href="/tools/passGen">
            <Button className=' gap-2 cursor-pointer mt-10 ml-5'> Password Gen </Button>
        </Link>

        <Link href="/tools/todo">
            <Button className=' gap-2 cursor-pointer mt-10 ml-5'> Todos </Button>
        </Link>

        <Link href="/tools/meme">
            <Button className=' gap-2 cursor-pointer mt-10 ml-5'> memes Section </Button>
        </Link>
    </div>
  )
}

export default page