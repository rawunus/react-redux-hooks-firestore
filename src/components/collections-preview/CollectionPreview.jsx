import React from "react";

import CollectionItem from "../collection-item/CollectionItem";

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer,
} from "./collectionPreview.styles";

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => {
                        return <CollectionItem key={item.id} item={item} />;
                    })}
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
};

export default CollectionPreview;
