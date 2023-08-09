import { useNavigate } from "react-router-dom";
import { Layout } from "../../template";
import { About, LeftSocials, RightSocials } from './components';

import './Home.css';

export function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <LeftSocials />
      <RightSocials />

      <About />
      
    </Layout>
  );
}