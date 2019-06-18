import * as React from "react";
import {Provider as ProviderRedux} from "react-redux";
import {Router, Route, Switch, Redirect} from "react-router-dom";

// Layouts
import {MainLayout} from "_Layouts/main-layout/main-layout";

// Pages
import MainPageContainer from "_Pages/main-page/main-page";
import FilmPageContainer from "_Pages/film-page/film-page";
import SignInPageContainer from "_Pages/sign-in-page/sign-in-page";
import {MyListPage} from "_Pages/my-list-page/my-list-page";
import {AddReviewPage} from "_Pages/add-review-page/add-review-page";

// Components
import HeaderContainer from "_Components/header/header";
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
        <MainLayout header={<HeaderContainer />} footer={<Footer />}>
          <Switch>
            <Route path="/" exact component={MainPageContainer} />

            <Route path="/login" component={SignInPageContainer} />

            <Route path="/my-list" component={MyListPage} />

            <Route path="/film/:id/review" component={AddReviewPage} />

            <Route
              path="/film/:id"
              render={(props) => {
                const {match} = props;
                const filmId = parseInt(match.params.id, 10);

                return <FilmPageContainer filmId={filmId} />;
              }}
            />

            <Redirect to="/" />
          </Switch>
        </MainLayout>
      </Router>
    </ProviderRedux>
  );
}
