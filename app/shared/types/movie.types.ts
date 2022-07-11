export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: string
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	description: string
	slug: string
	parameters?: IParameters
	rating?: number
	videoUrl: string
	countOpened?: number
	genres: IGenre[]
	actors: IActor[]
	isSendTelegram?: boolean
}
