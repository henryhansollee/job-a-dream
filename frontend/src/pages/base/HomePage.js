import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginForm from '../../containers/auth/LoginForm';

const HomeSection1 = styled.div`
  background: ${palette.gray[0]};
`;

const HomeSection2 = styled.div`
  background: ${palette.gray[1]};
`;

const HomeSection3 = styled.div`
  background: ${palette.gray[2]};
`;

const HomePage = () => {
  return (
    <>
      <ReactFullpage
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <HomeSection1 className="section">
                <AuthTemplate>
                <LoginForm />
              </AuthTemplate>
              </HomeSection1>
              <HomeSection2 className="section">
              </HomeSection2>
              <HomeSection3 className="section">
              </HomeSection3>
        </ReactFullpage.Wrapper>
      );
    }}
    />
  </>
  )
};

export default HomePage;