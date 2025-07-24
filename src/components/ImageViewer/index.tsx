import classNames from 'classnames/bind'
import styles from '@components/ImageViewer/ImageViewer.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '@components/ImageViewer/swiper.css'

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

function Close() {
  return (
    <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
      <path d="M16.707,7.293a1,1,0,0,0-1.414,0L12,10.586,8.707,7.293A1,1,0,1,0,7.293,8.707L10.586,12,7.293,15.293a1,1,0,1,0,1.414,1.414L12,13.414l3.293,3.293a1,1,0,0,0,1.414-1.414L13.414,12l3.293-3.293A1,1,0,0,0,16.707,7.293Z" />
    </svg>
  )
}

export default ImageViewer
