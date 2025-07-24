import classNames from 'classnames/bind'
import styles from '@components/sections/ImageGallery.module.scss'
import Section from '@shared/Section'
import ImageViewer from '@/components/ImageViewer'
import { useState } from 'react'

const cx = classNames.bind(styles)

type Props = {
  images: string[]
}

function ImageGallery({ images }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => handleSelectedImage(idx)}
            >
              <img src={`/assets/images/${src}.jpg`} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
