import { useNavigate } from "react-router-dom";
import { Layout } from "../../template";
import { Intro, LeftSocials, RightSocials } from './components';

import './Home.css';

export function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <LeftSocials />
      <RightSocials />

      <Intro />

    </Layout>
  );
}