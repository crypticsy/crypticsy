import './Home.css';
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components";

function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='justify-center w-[80%] mx-auto'>
        <p className="sfmono-reg pb-6">Hi, my name is</p>
        
        <h1>Animesh Singh Basnet</h1>
        <h2 className='text-gray-500  pb-6'>I help convert data into insights.</h2>
        
        <p className="calibre-reg text-xl text-gray-500  pb-10">
          I’m a programmer specializing in building (and occasionally designing).
          Currently, I’m focused on implementing data driven decisions at &nbsp;
          <a 
            className='cursor-pointer text-white hover:text-white'
            href="https://www.bhoos.com/about/"
            target="_blank"
          >
            Bhoos
          </a>.
        </p>
        <button 
          className='text-md px-4 py-3'
          onClick={() => window.open("https://github.com/crypticsy/")}
        >
          Check out my projects !
        </button>
      </div>
    </Layout>
  );
}

export default Home;