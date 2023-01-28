import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

type Props = {
  title: string
}

const bla = 'var'

export default function Home({ title = 'React Avançado' }: Props) {
  return <h1>{title}</h1>
}