import * as React from "react";

// Components
import {FilmsGenresNavList} from "_Components/films-genres-nav-list/films-genres-nav-list";
import {FilmCardList} from "_Components/film-card-list/film-card-list";

// Hooks
import {useGenresOfFilms} from "_Hooks/useGenresOfFilms";
import {useRequestFilms} from "_Hooks/useRequestFilms";
import {useHandleSelectedGenreChange} from "_Hooks/useHandleSelectedGenreChange";
import {useFilteredFilmsByGenre} from "_Hooks/useFilteredFilmsByGenre";
import {useSelectedGenre} from "_Hooks/useSelectedGenre";

// Types
import {TProps} from "./main-page.type";

export function MainPage(props: TProps): JSX.Element {
  const {films, genres, onChangeGenre} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div style={{paddingTop: `147px`}}>
          <div className="movie-card__bg">
            <img
              src="../src/assets/img/bg-the-grand-budapest-hotel.jpg"
              alt="The Grand Budapest Hotel"
            />
          </div>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img
                  src="../src/assets/img/the-grand-budapest-hotel-poster.jpg"
                  alt="The Grand Budapest Hotel poster"
                  width="218"
                  height="327"
                />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">Drama</span>
                  <span className="movie-card__year">2014</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use href="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>

                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use href="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsGenresNavList genres={genres} onChange={onChangeGenre} />

        <FilmCardList films={films} />

        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

function MainPageContainer(): JSX.Element {
  useRequestFilms();

  const selectedGenre = useSelectedGenre();
  const genresOfFilms = useGenresOfFilms();
  const filteredFilmsByGenre = useFilteredFilmsByGenre(selectedGenre);

  const handleGenreChange = useHandleSelectedGenreChange();

  return (
    <MainPage
      films={filteredFilmsByGenre}
      genres={genresOfFilms}
      onChangeGenre={handleGenreChange}
    />
  );
}

export default MainPageContainer;