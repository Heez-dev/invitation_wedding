import classNames from 'classnames/bind'
import styles from '@/components/sections/Video.module.scss'

import Section from '@/components/shared/Section'

const cx = classNames.bind(styles)

function Video() {
  return (
    <Section className={cx('container')}>
      <video autoPlay muted loop poster="/assets/poster.jpg">
        {/* 
          video 태그와 source 태그를 같이 사용할 때,
          autoPlay 와 muted 를 같이 true 로 설정해야 자동 재생이 됨
        */}
        <source src="/assets/main.webm" type="video/webm" />
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
