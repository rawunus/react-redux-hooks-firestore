import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsFeching } from "../../redux/shop/shopSelector";

import WithSpinner from "../with-spinner/withSpinner";
import CollectionOverview from "./collectionOverview";

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionsFeching,
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

// Equvalent to above syntax
//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionOverview))
export default CollectionOverviewContainer;
