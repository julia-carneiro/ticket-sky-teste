import type { NextApiRequest, NextApiResponse } from 'next'
import mysql, { RowDataPacket } from 'mysql2/promise'

// constroi o "tipo" pq typescript É CHATO PRA CARALHO
type User = {
  success: boolean,
  id: number
  name: string
  email: string
  password: string
}
type Data ={
  success: boolean
  user: RowDataPacket[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {

  // Conexão com o banco
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'user',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  })

  try {
    // executa sql no banco
    const [result] = await pool.query<RowDataPacket[]>('SELECT * FROM users')

    if ((result as RowDataPacket[]).length > 0) {

      const user = result[0] as User;
      res.status(200).json(user);

    } else {
      res.status(404).json({
        success: true,
        id: 0,
        name: '',
        email: '',
        password: ''
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: true,
      id: 0,
      name: '',
      email: '',
      password: '' });
  }
}