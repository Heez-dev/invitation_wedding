import classNames from 'classnames/bind'
import styles from './Section.module.scss'
import type { ReactNode } from 'react'

const cx = classNames.bind(styles)

type Props = {
  title?: string
  children?: ReactNode
  className?: string
}

function Section({ title, children, className }: Props) {
  return (
    <section className={cx(['container', className])}>
      {title && <div className={cx('txt-title')}>{title}</div>}
      {children}
    </section>
  )
}

export default Section
