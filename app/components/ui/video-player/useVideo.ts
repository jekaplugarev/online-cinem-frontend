import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IVideoElement } from '@/ui/video-player/video.interface'

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const originalDuration = videoRef.current?.duration

		if (originalDuration) setVideoTime(originalDuration)
	}, [videoRef.current?.duration])

	/* play */

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	/* forward */

	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 10
	}

	/* revert */

	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 10
	}

	/* fullscreen */

	const fullScreen = () => {
		const video = videoRef.current

		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if (video.mozRequestFullscreen) {
			video.mozRequestFullscreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		}
	}

	/* progress bar */

	useEffect(() => {
		const video = videoRef.current

		if (!video) return

		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((video.currentTime / videoTime) * 100)
		}

		video.addEventListener('timeupdate', updateProgress)

		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoTime])

	/* hotkey */

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					revert()
					break
				case ' ': {
					e.preventDefault()
					toggleVideo()
					break
				}
				case 'f':
					fullScreen()
					break
				default:
					return
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleVideo])

	return useMemo(
		() => ({
			videoRef,
			actions: {
				fullScreen,
				revert,
				forward,
				toggleVideo,
			},
			video: {
				isPlaying,
				currentTime,
				progress,
				videoTime,
			},
		}),
		[currentTime, progress, isPlaying, videoTime, toggleVideo]
	)
}
