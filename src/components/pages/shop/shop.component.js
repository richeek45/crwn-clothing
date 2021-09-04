import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../collections-overview/collections-overview.container";
import CollectionsPageContainer from "../collection/collection.container";

import { fetchCollectionsStart } from "../../../redux/shop/shop.actions";


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db/databases/(default)/documents/collections/')
    // .then(response => console.log(response))
    // .then(collections => console.log(collections))
  }

  render() {
    const { match } = this.props;

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
  }
}


const mapDispatchToProps = (dispatch) => ({ 
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);