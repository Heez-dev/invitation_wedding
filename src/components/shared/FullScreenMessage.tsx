import classNames from 'classnames/bind'
import styles from '@shared/FullScreenMessage.module.scss'
import Heart from '@shared/Icon/Heart'
import Error from '@shared/Icon/Error'

const cx = classNames.bind(styles)

type FullScreenMessageProps = {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Heart className={cx('icon-heart')} />
      ) : (
        <>
          <Error className={cx('icon-error')} />
          <div className={cx('description')}>
            <span>에러가 발생했어요!</span>
            <span>잠시 후 다시 시도해주세요.</span>
          </div>
        </>
      )}
    </div>
  )
}

export default FullScreenMessage
