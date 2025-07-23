import classNames from 'classnames/bind'
import styles from '@/components/sections/Heading.module.scss'

import Section from '@/components/shared/Section'
import { format, getDay, parseISO } from 'date-fns'

const cx = classNames.bind(styles)

type Props = {
  date: string
}

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function Heading({ date }: Props) {
  const weddingDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  )
}

export default Heading
