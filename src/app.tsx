import * as React from "react";
import {Provider as ProviderRedux} from "react-redux";
import {Router, Route, Switch, Redirect} from "react-router-dom";

// Layouts
import {MainLayout} from "_Layouts/main-layout/main-layout";

// Pages
import MainPage from "_Pages/main-page/main-page";
import {SignInPage} from "_Pages/sign-in-page/sign-in-page";
import {MyListPage} from "_Pages/my-list-page/my-list-page";
import FilmPage from "_Pages/film-page/film-page";
import {AddReviewPage} from "_Pages/add-review-page/add-review-page";

// Components
import {Header} from "_Components/header/header";
import {Footer} from "_Components/footer/footer";

// Utils
import {history} from "_Utils/history";

// Store
import {store} from "_Store/store";

// Styles
import "./style.css";

export function App(): JSX.Element {
  return (
    <ProviderRedux store={store}>
      <Router history={history}>
        <MainLayout header={<Header />} footer={<Footer />}>
          <Switch>
            <Route path="/" exact component={MainPage} />

            <Route path="/login" component={SignInPage} />

            <Route path="/my-list" component={MyListPage} />

            <Route path="/film/:id/review" component={AddReviewPage} />

            <Route
              path="/film/:id"
              render={(props) => {
                const {match} = props;
                const filmId = parseInt(match.params.id, 10);

                return <FilmPage filmId={filmId} />;
              }}
            />

            <Redirect to="/login" />
          </Switch>
        </MainLayout>
      </Router>
    </ProviderRedux>
  );
}
