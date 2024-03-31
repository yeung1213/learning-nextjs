"use client"

import './login-form.css';
import { Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material"
import React from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRouter } from 'next/navigation';

function GoogleIcon() {
  return (
    <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', width: '20px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
    </div>
  )
}


export default function LoginForm() {
  const router = useRouter();

  const loginWithGoogle = () => {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT_ID);
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_REDIRECT_URL;
    router.push(`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=openid profile email`);
  };

  return (
    <Card sx={{ width: '65%' }}>
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 28 }} gutterBottom>
            Login to your account
          </Typography>
          <Button variant="outlined" onClick={loginWithGoogle} startIcon={<GoogleIcon />} sx={{ width: '100%', color: '#3c3c3c', border: '#3c3c3c 1px solid', lineHeight: '30px', fontSize: '15px', marginBottom: '10px' }}>Login with Google</Button>
          <Button variant="outlined" startIcon={<GitHubIcon />} sx={{ width: '100%', color: '#3c3c3c', border: '#3c3c3c 1px solid', lineHeight: '30px', fontSize: '15px', marginBottom: '10px' }}>Login with Github</Button>
          <div className="row">
            <TextField
              sx={{ width: '100%' }}
              label="Email"
            />
          </div>
          <div className="row">
            <TextField
              sx={{ width: '100%' }}
              type="password"
              label="Password"
            />
          </div>
          <Button variant="contained" sx={{ width: '100%', lineHeight: '30px', fontSize: '15px' }}>Login</Button>
        </CardContent>
      </React.Fragment>
    </Card>
  )
}