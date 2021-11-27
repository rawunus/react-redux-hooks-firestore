import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shopSelector";

import CollectionItem from "../../components/collection-item/CollectionItem";

import {
    CollectionPageContainer,
    TitleContainer,
    ItemsContainer,
} from "./collectionpage.styles";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <TitleContainer>{title}</TitleContainer>
            <ItemsContainer>
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </ItemsContainer>
        </CollectionPageContainer>
    );
};
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
