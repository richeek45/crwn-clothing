import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CollectionsOverviewContainer from "../../collections-overview/collections-overview.container";
import CollectionsPageContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../../redux/shop/shop.actions";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch]);
  // fetch('https://firestore.googleapis.com/v1/projects/crwn-db/databases/(default)/documents/collections/')
  // .then(response => console.log(response))
  // .then(collections => console.log(collections))

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  );
};


export default ShopPage;
