import moment from 'moment'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Row, Col, Form, FormGroup, Label, Input, Button, Alert, FormText, Card, CardBody } from 'reactstrap'
import loginSchema from '../validators/login'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const [alert, setAlert] = useState(null)
  const [visible, setVisible] = useState(true)
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema)
  })

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
          setVisible(true)
        }
      })
  }

  const onDismiss = () => setVisible(false)

  return (
    <>
      <Layout title='Login | PT Nindya Karya (Persero)'>
        <div className={styles.nindyaSidenav}>
          <div className={styles.nindyaLoginMainText}>
            <h2>Selamat Datang <br /><a href='https://www.instagram.com/explore/tags/insannindya/' target='_blank' style={{ color: '#e75e25' }}>#InsanNindya</a></h2>
            <p>Silakan login untuk melihat Laporan Produksi tahun {moment().format('YYYY')}.</p>
          </div>
        </div>
        <div className={styles.nindyaMain}>
          <div className="col-md-6 col-sm-12">
            <div>
              <Form onSubmit={handleSubmit(onSubmit)} className={styles.nindyaLoginForm}>
                {alert && (
                  <>
                    <Alert color="warning" isOpen={visible} toggle={onDismiss}>{alert}</Alert>
                  </>
                )}
                <FormGroup>
                  <Label for='inputEmail'>Email</Label>
                  <Input type='email' name='email' id='inputEmail' placeholder='Alamat E-mail' innerRef={register} invalid={errors.email ? true : false} />
                  {errors.email && (<FormText><p className='text-danger'>{errors.email?.message}</p></FormText>)}
                </FormGroup>
                <FormGroup>
                  <Label for='input'>Password</Label>
                  <Input type='password' name='password' id='exampleEmail' placeholder='Password' innerRef={register} invalid={errors.password ? true : false} />
                  {errors.password && (<FormText><p className='text-danger'>{errors.password?.message}</p></FormText>)}
                </FormGroup>
                <Button type='submit' className='mb-3' color='primary' style={{ backgroundColor: '#10613c', border: 'none' }} block>Login</Button>
                <div className='clearfix'>
                  <div className='text-left'>
                    <a href='#'>Lupa Password?</a>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
