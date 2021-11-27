import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shopSelector";

import CollectionItem from "../../components/collection-item/CollectionItem";

import {
    CollectionPageContainer,
    TitleContainer,
    ItemsContainer,
} from "./collectionpage.styles";

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));
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
// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state),
// });
export default CollectionPage;
