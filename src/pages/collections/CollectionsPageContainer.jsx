import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsLoaded } from "../../redux/shop/shopSelector";

import WithSpinner from "../../components/with-spinner/withSpinner";
import CollectionPage from "./CollectionPage";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectCollectionsLoaded(state),
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

// Equvalent to above syntax
// const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage))

export default CollectionsPageContainer;
