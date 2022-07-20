import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideArrow from '@/ui/slider/SlideArrow/SlideArrow'
import SlideItem from '@/ui/slider/SlideItem'
import { ISlide } from '@/ui/slider/slider.interface'
import { useSlider } from '@/ui/slider/useSlider'

import styles from './Slider.module.scss'

interface ISlider {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { handleClick, index, slideIn, isNext, isPrev } = useSlider(
		slides.length
	)

	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				classNames="slide-animation"
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isPrev && (
				<SlideArrow variant="left" clickHandler={() => handleClick('prev')} />
			)}

			{isNext && (
				<SlideArrow variant="right" clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
