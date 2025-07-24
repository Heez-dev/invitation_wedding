import classNames from 'classnames/bind'
import styles from '@components/sections/Intro.module.scss'
import Section from '@shared/Section'
import Heart from '@shared/Icon/Heart'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import Text from '@shared/Text'
import Couple from '@shared/Icon/Couple'

const cx = classNames.bind(styles)

type Props = {
  groomName: string
  brideName: string
  locationName: string
  date: string
  message: string
}

function Intro({ groomName, brideName, locationName, date, message }: Props) {
  return (
    <Section className={cx('container')}>
      <div className={cx('wrap-persons')}>
        <span>{groomName}</span>
        <Heart className={cx('icon-heart')} />
        <span>{brideName}</span>
      </div>

      <div className={cx('wrap-location')}>
        <span>
          {format(parseISO(date), 'yyyy년 MM월 d일 eeee', { locale: ko })}
        </span>
        <span>{locationName}</span>
      </div>

      <Couple className={cx('icon-couple')} />

      <Text className={cx('wrap-message')}>{message}</Text>
    </Section>
  )
}

export default Intro
