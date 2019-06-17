import * as React from "react";
import {create} from "react-test-renderer";

// Components
import {FilmsCatalog} from "./films-catalog";

jest.mock(`react-router-dom`, () => ({
  BrowserRouter: ({children}) => <div>{children}</div>,
  Route: ({children}) => <div>{children}</div>,
  Link: ({children}) => <a>{children}</a>
}));

describe(`Components/FilmCardTabReviewsContent`, () => {
  it(`Correct renderer the component`, () => {
    const tree = create(
        <FilmsCatalog
          films={[
            {
              backgroundColor: `#D8E3E5`,
              backgroundImage:
              `https://es31-server.appspot.com/wtw/static/film/background/Moonrise_Kingdom.jpg`,
              description:
              `A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.`,
              director: `Wes Anderson`,
              genre: `Adventure`,
              id: 1,
              isFavorite: false,
              name: `Moonrise Kingdom`,
              posterImage:
              `https://es31-server.appspot.com/wtw/static/film/poster/Moonrise_Kingdom.jpg`,
              previewImage:
              `https://es31-server.appspot.com/wtw/static/film/preview/moonrise-kingdom.jpg`,
              previewVideoLink:
              `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
              rating: 3.9,
              released: 2012,
              runTime: 94,
              scoresCount: 291183,
              starring: [`Jared Gilman`, `Kara Hayward`, `Bruce Willis`],
              videoLink:
              `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
            }
          ]}
          genres={[`genre1`, `genre2`, `genre3`]}
          onChangeGenre={jest.fn()}
          onClickShowMore={jest.fn()}
          canShowMore={false}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
