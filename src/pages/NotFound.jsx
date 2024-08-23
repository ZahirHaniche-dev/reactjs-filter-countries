import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <p className='text-4xl font-semibold text-center pt-10'>
            Page not found...
        </p>
        <div className='text-center'>
            <a href="/"> Back to homepage</a>
            <Link
                to="/"
            >
                Back to homepage
            </Link>
        </div>
    </div>
  )
}
