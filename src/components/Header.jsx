import { useNavigate } from 'react-router-dom';
import DarkModeButton from './DarkModeButton'

export default function Header() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <header className="items-center p-4 md:p-8 bg-white border-b border-gray-200 shadow-custom-light">
      <div className="px-4 md:px-24 flex justify-between">
        <h1 onClick={handleClick} className="text-lg md:text-xl font-bold cursor-pointer">
          Where in the world?
        </h1>
        <DarkModeButton />
      </div>
    </header>
  )
}
