import classNames from 'classnames/bind'
import styles from './Section.module.scss'
import type { ReactNode } from 'react'

const cx = classNames.bind(styles)

type Props = {
  children?: ReactNode
  className?: string
}

function Section({ children, className }: Props) {
  return <section className={cx(['container', className])}>{children}</section>
}

export default Section
