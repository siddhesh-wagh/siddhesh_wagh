import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-700">Siddhesh</h1>
      <div className="space-x-6">
        <Link to="/" className="text-gray-600 hover:text-purple-700">Home</Link>
        <Link to="/projects" className="text-gray-600 hover:text-purple-700">Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar;
