import classNames from 'classnames/bind'
import styles from '@components/ImageViewer/ImageViewer.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '@components/ImageViewer/swiper.css'
import Close from '@shared/Icon/Close'

const cx = classNames.bind(styles)

type Props = {
  images: string[]
  selectedIdx: number
  onClose: () => void
}

function ImageViewer({ images, selectedIdx = -1, onClose }: Props) {
  const open = selectedIdx > -1

  if (!open) return null

  return (
    <div className={cx('dimmed')}>
      <button onClick={onClose} className={cx('btn-close')}>
        <Close />
      </button>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop
        initialSlide={selectedIdx}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={`/assets/images/${src}.jpg`} alt="사진첩 이미지" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageViewer
