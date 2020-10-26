const users = [
  {
    id: 111,
    email: 'admin@nindya.co.id',
    password: 'Nindya123'
  },
  {
    id: 222,
    email: 'iwan@nindya.co.id',
    password: 'Secret123'
  },
]

export default function handler(req, res) {
  // Get data from your database
  const { method, body } = req
  if (method === 'POST') {
    const findUser = users.filter(user => {
      const { email: emailPost, password: passwordPost } = body
      return (user.email === emailPost && user.password === passwordPost)
    })
    res.status(200).json({ data: findUser })
  } else {
    res.status(403).json({ errors: 'not allowed' })
  }
}
