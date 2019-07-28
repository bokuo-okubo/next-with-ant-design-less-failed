import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/Nav'

import ButtonSize from '../components/Buttons'
import Typographies from '../components/Typographies'



import { DatePicker } from 'antd';

const Home = () => (
  <div style={{padding: 50, width: '100%' }}>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />
    <Link href='/'><a>home</a></Link>
    <div className='hero' style={{ backgroundColor: '#eeeeee', padding: 20 }}>
      <h1 className='title'>This is a repro sample of nextjs 9 and antd bug🐛.</h1>


      <DatePicker />
      <div style={{ marginTop: 60 }}>
        <ButtonSize />
      </div>
      <div style={{ marginTop: 60 }}>
        <Typographies />
        {/*
        If it's not loaded typography(antd) module, building process is being success.
         */}
      </div>
    </div>
  </div>
)

export default Home
