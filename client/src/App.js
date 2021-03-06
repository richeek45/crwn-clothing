import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import HomePage from "./components/pages/homepage/homepage";
import ShopPage from "./components/pages/shop/shop.component";
import CheckoutPage from "./components/pages/checkout/checkout";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up";

import Header from "./components/header/header";

import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from './redux/user/user.actions';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch]);

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     return userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //     });
    //   } else { 
    //     setCurrentUser(userAuth);
    //   }
    // });

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
}


export default App;
