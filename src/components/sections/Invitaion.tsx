import classNames from 'classnames/bind'
import styles from '@components/sections/Invitaion.module.scss'
import Section from '@shared/Section'
import Text from '@shared/Text'
import Post from '@shared/Icon/Post'

const cx = classNames.bind(styles)

type Props = {
  message: string
}

function Invitaion({ message }: Props) {
  return (
    <Section className={cx('container')}>
      <Post className={cx('icon-post')} />
      <Text className={cx('wrap-message')}>{message}</Text>
    </Section>
  )
}

export default Invitaion
