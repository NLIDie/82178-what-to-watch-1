export const ReduxNamespaces = {
  FILMS: 'films',
  COMMENTS: 'comments',
  USER: 'user',
  SELECTED_GENRE: 'selectedGenre'
} as const;

export const RequestStatuses = {
  INACTIVE: 'inactive',
  REQUEST: 'request',
  SUCCESS: 'success',
  FAILURE: 'failure'
} as const

export const HttpStatuses = {
  FORBIDDEN_403: 403
} as const;

export const HttpMethods = {
  GET: `get`,
  POST: `post`
} as const;

export const FilmCardTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
} as const;

export type TFilmCardTab = typeof FilmCardTabs[keyof typeof FilmCardTabs];

export const FILM_CARD_TABS: TFilmCardTab[] = [`Overview`, `Details`, `Reviews`];
