import jwtDecode from 'jwt-decode';
import { Link, useLocation } from 'wouter';
import { Form } from '../../components/form/Form';
import { Card } from '../../components/card/Card';
import { Input } from '../../components/input/Input';
import { CreateAccountContainerElement } from './SignUp.sty';
import { GridLarge } from '../../components/grid/Grid.remix';
import { SiteLogo } from '../../components/site-logo/SiteLogo';
import { PageTitle } from '../../components/page-title/PageTitle';
import { ButtonBrand } from '../../components/button/Button.remix';
import React, { SyntheticEvent, useContext, useState } from 'react';
import { SiteFooter } from '../../components/site-footer/SiteFooter';
import { SiteCaption } from '../../components/site-caption/SiteCaption';
import { LOCAL_STORAGE_SESSION_TOKEN, SessionContents, UserCreateInput, sessionContext, useProfileCreateRandomized, useProfileFetchOne, useSessionCreate, useSessionFetchOne, useUserCreate } from '@simpd/lib-web';

export function SignUpScreen() {
  const [userDTO, setUserDTO] = useState<UserCreateInput>({
    email: '',
    password: '',
  })
  const userCreate = useUserCreate();
  const profileFetch = useProfileFetchOne();
  const [, setLocation] = useLocation();
  const sessionCreate = useSessionCreate();
  const sessionFetchOne = useSessionFetchOne();
  const { session, setSession } = useContext(sessionContext);
  const profileCreateRandomized = useProfileCreateRandomized();

  const isLoading = userCreate.loading || profileCreateRandomized.loading;

  const onChanges = (changes: Partial<UserCreateInput>) => {
    setUserDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    if (!userDTO.email || !userDTO.password) {
      return;
    }

    await userCreate.execute({ email: userDTO.email, password: userDTO.password });
    const bearerToken = await sessionCreate.execute({ email: userDTO.email, password: userDTO.password });
    localStorage.setItem(LOCAL_STORAGE_SESSION_TOKEN, bearerToken);
    const sessionContents: SessionContents = jwtDecode(bearerToken);
    const matchingSession = await sessionFetchOne.fetch({ id: sessionContents.sessionID })
    const matchingProfile = await profileFetch.fetch({ id: sessionContents.profileID })
    setSession({ ...matchingSession, profile: matchingProfile });
    const newProfile = await profileCreateRandomized.execute();
    setLocation(`/profiles/${newProfile.username}`);
  }

  return (
    <>
      <PageTitle title="Create account" />
      <GridLarge>
        <CreateAccountContainerElement>
          <SiteLogo style={{ height: '7em' }} />
          <SiteCaption />
          <Card>
            <Form onSubmit={onSubmit}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email Address"
                value={userDTO.email}
                onChange={e => onChanges({ email: e.currentTarget.value ?? '' })}
              />
              <br />
              <br />
              <label>Password</label>
              <Input
                type="password"
                placeholder="Password"
                value={userDTO.password}
                onChange={e => onChanges({ password: e.currentTarget.value ?? '' })}
              />
              <br />
              <br />
              <div>
                <ButtonBrand disabled={isLoading} type="submit">
                  {
                    isLoading ? <i className="fa fa-spinner fa-spin" /> : <>Create account</>
                  }
                </ButtonBrand>
                <Link to="/sign-in">
                  Already have an account? <b>Log in</b>
                </Link>
              </div>
            </Form>
          </Card>
        </CreateAccountContainerElement>
        <img src="https://static.wixstatic.com/media/502135_e27572d936094e359f829ddcd2ab387d~mv2.jpg/v1/fill/w_429,h_604,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/alex-azabache--Hm_xIcYbUY-unsplash.jpg" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
      </GridLarge>
      <SiteFooter />
    </>
  )
}