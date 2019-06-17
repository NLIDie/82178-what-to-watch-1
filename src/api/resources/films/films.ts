import { AxiosResponse } from 'axios';
import Api from '_Api/api';

// Types
import { TFilm } from '_Types/film';

export function getFilms(): Promise<AxiosResponse<TFilm[]>> {
  return Api.get<TFilm[]>('/films');
}

export function getFilmPromo(): Promise<AxiosResponse<TFilm>> {
  return Api.get<TFilm>('/films/promo');
}

export function getFavoriteFilms(): Promise<AxiosResponse<TFilm[]>> {
  return Api.get<TFilm[]>('/favorite');
}

export function addFilmInFavorite(filmId: number): Promise<AxiosResponse<TFilm>> {
  return Api.post<TFilm>(`/favorite/${filmId}/1`);
}

export function deleteFilmFromFavorite(filmId: number): Promise<AxiosResponse<TFilm>> {
  return Api.post<TFilm>(`/favorite/${filmId}/0`);
}
