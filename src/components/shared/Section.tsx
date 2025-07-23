import classNames from 'classnames/bind'
import styles from './Section.module.scss'
import type { ReactNode } from 'react'

const cx = classNames.bind(styles)

type Props = {
  children?: ReactNode
}

function Section({ children }: Props) {
  return <section className={cx('container')}>{children}</section>
}

export default Section
