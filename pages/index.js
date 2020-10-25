import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import loginSchema from '../validators/login'

export default function Home() {
  const router = useRouter()
  const [alert, setAlert] = useState(null)
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema)
  });
  const onSubmit = data => {
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then((json) => {
        const { data } = json
        if (data.length > 0) {
          const { id } = data[0]
          router.push(`/dashboard?id=${id}`)
        } else {
          setAlert('Mohon maaf email anda belum terdaftar')
        }
      })
  }
  const favicon = '/images/logo.svg '
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel='icon' href={favicon} sizes='16x16' type='image/svg' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Selamat Datang <br /><a href="https://nextjs.org">Insan Nindya!</a>
        </h1>
        <p>Silahkan login</p>
        {(alert) && <p style={{ color: 'yellow' }}>{alert}!</p>}<br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" name="email" ref={register} placeholder='E-mail' />
          {(errors.email) && <p style={{ color: 'red' }}>{errors.email?.message}</p>}<br />
          <input type="password" name="password" ref={register} placeholder='Password' />
          {(errors.password) && <p style={{ color: 'red' }}>{errors.password?.message}</p>}<br />
          <button type="submit" >Login</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
