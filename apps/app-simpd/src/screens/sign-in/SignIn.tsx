import jwtDecode from 'jwt-decode';
import { Link, useLocation } from 'wouter';
import { Form } from '../../components/form/Form';
import { Card } from '../../components/card/Card';
import { Input } from '../../components/input/Input';
import { SignInContainerElement } from './SignIn.sty';
import { GridLarge } from '../../components/grid/Grid.remix';
import { SiteLogo } from '../../components/site-logo/SiteLogo';
import { PageTitle } from '../../components/page-title/PageTitle';
import { ButtonBrand } from '../../components/button/Button.remix';
import React, { SyntheticEvent, useContext, useState } from 'react';
import { SiteFooter } from '../../components/site-footer/SiteFooter';
import { SiteCaption } from '../../components/site-caption/SiteCaption';
import { SessionContents, sessionContext, useProfileFetchOne, useSessionCreate, useSessionFetchOne } from '@simpd/lib-web';

export function SignInScreen() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const sessionCreate = useSessionCreate();
  const profileFetch = useProfileFetchOne();
  const sessionFetchOne = useSessionFetchOne();
  const [password, setPassword] = useState('');
  const { setSession } = useContext(sessionContext);

  const isDisabled = !email || !password;

  const onSessionCreate = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (isDisabled || sessionCreate.loading || !email || !password) {
      return;
    }

    try {
      const newSession = await sessionCreate.execute({ email, password });
      const sessionContents: SessionContents = jwtDecode(newSession);
      const matchingProfile = await profileFetch.fetch({ id: sessionContents.profileID })
      const matchingSession = await sessionFetchOne.fetch({ id: sessionContents.sessionID });
      setSession({ ...matchingSession, profile: matchingProfile });
      setLocation('/settings/profile');
    } catch (e) {
      alert('Something went wrong')
    }
  }

  return (
    <>
      <PageTitle title="Sign In" />
      <GridLarge>
        <SignInContainerElement>
          <SiteLogo style={{ height: '7em' }} />
          <SiteCaption />
          <Card>
            <Form onSubmit={onSessionCreate}>
              <label className="landing-page-text1">Email</label>
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
              />
              <label className="landing-page-text2">Password</label>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
              />
              <div>
                <ButtonBrand disabled={isDisabled} type="submit">
                  {
                    sessionCreate.loading ? <i className="fa fa-spinner fa-spin" /> : <>Sign in</>
                  }
                </ButtonBrand>
                <Link to="/sign-up">
                  Want to make an account? <b>Sign up</b>
                </Link>
              </div>
            </Form>
          </Card>
        </SignInContainerElement>
        <img src="https://static.wixstatic.com/media/502135_e27572d936094e359f829ddcd2ab387d~mv2.jpg/v1/fill/w_429,h_604,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/alex-azabache--Hm_xIcYbUY-unsplash.jpg" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
      </GridLarge>
      <SiteFooter />
    </>
  )
}