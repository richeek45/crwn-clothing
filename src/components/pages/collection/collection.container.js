import { connect } from "react-redux";
import { createStructuredSelector  } from "reselect";
import {compose} from "redux";

import WithSpinner from "../../with-spinner/with-spinner.component";
import CollectionsPage from "../collection/collection.component";
import { selectIsCollectionLoading } from "../../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoading(state),
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage);

export default CollectionsPageContainer;
