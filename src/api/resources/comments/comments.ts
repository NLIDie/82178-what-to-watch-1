import {AxiosResponse} from "axios";

// Api
import Api from "_Api/api";

// Types
import {TComment} from "_Types/comment";
import {TDataCreateComment} from "./comments.types";

export function getCommentsForFilm(
    filmId: number
): Promise<AxiosResponse<TComment[]>> {
  return Api.get<TComment[]>(`/comments/${filmId}`);
}

export function createCommentForFilm(
    filmId: number,
    data: TDataCreateComment
): Promise<AxiosResponse<TComment[]>> {
  return Api.post<TComment[], TDataCreateComment>(`/comments/${filmId}`, data);
}
