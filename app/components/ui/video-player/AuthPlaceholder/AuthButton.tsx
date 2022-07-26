import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '@/config/url.config'

import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
			<a className={styles.btn}>Войдите в систему</a>
		</Link>
	)
}

export default AuthButton
