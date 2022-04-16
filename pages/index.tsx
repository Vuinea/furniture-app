import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BaseApp from '../components/BaseApp';

const Home: NextPage = () => {
  return (
    <BaseApp>
      <h1>Hello App</h1>
    </BaseApp>
  )
}

export default Home
