import { FC } from 'react'

import AuthButton from '@/ui/video-player/AuthPlaceholder/AuthButton'
import styles from '@/ui/video-player/AuthPlaceholder/AuthPlaceholder.module.scss'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>Вы должны войти в систему чтобы смотреть фильм</div>
				<AuthButton slug={slug} />
			</div>
		</div>
	)
}

export default AuthPlaceholder
