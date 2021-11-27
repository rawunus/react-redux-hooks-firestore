import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/shop/shopSelector";

import CollectionPreview from "../collections-preview/CollectionPreview";
import "./collectionoverview.styles.scss";

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherProps }) => {
                return <CollectionPreview key={id} {...otherProps} />;
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
