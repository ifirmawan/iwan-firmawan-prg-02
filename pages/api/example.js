const data = [{ angle: 1, label: 'Wilayah I' }, { angle: 5, label: 'Wilayah II' }, { angle: 2, label: 'Wilayah' }]

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case 'POST':
    case 'GET':
      res.status(200).json({ data: data })
      break
  }
}
