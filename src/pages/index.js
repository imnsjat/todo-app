import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <form>
  <div className="mb-3">
    <label for="title" className="form-label">title</label>
    <input type="text" className="form-control" id="title" />
  </div>
  <div className="mb-3">
    <label for="todo" className="form-label">todo</label>
    <input type="text" className="form-control" id="todo" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form></>
  )
}
