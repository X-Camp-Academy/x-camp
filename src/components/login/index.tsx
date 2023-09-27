'use client';
import { apiConfig } from '@/config/index';
import React from 'react';

const Login: React.FC = () => {
  const no_login_data = localStorage.getItem('no_login_data');
  const { idApi, server, clientId } = apiConfig;
  const from = document.referrer || no_login_data || '/';
  location.replace(`${idApi}/login?response_type=code&state=${from}&redirect_uri=${server}/v1/login&client_id=${clientId}`);
  return <></>;
};

export default Login;
