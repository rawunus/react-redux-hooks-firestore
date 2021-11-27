import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.action";

import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    AddButton,
    NameContainer,
    PriceContainer,
} from "./colliectionitem.styles";

const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                ADD TO CART
            </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
