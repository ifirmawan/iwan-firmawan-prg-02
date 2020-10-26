const data = [
  {
    id: 1,
    date: '20/Okt/2020',
    dateNumber: 20,
    area: 'I',
    amount: 100000
  },
  {
    id: 2,
    date: '21/Okt/2020',
    dateNumber: 21,
    area: 'II',
    amount: 150000
  },
  {
    id: 3,
    date: '22/Okt/2020',
    dateNumber: 22,
    area: 'III',
    amount: 200000
  },
  {
    id: 4,
    date: '21/Okt/2020',
    dateNumber: 21,
    area: 'IV',
    amount: 300000
  },
  {
    id: 5,
    date: '22/Okt/2020',
    dateNumber: 22,
    area: 'V',
    amount: 300000
  }
]

/**
 * Dashboard chart
 * Pie : jumlah produk tiap wilayah
 * Line:  x tgl Y jumlah produksi garis tiap wilayah
 */

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case 'POST':
    case 'GET':
      res.status(200).json({ data })
      break
  }
}
