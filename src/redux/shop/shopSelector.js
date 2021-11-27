import { createSelector } from "reselect";
import memoize from "lodash.memoize";
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    (collections) =>
        collections
            ? Object.keys(collections).map((key) => collections[key])
            : []
);

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        (collections) => (collections ? collections[collectionUrlParam] : null)

        // (collections) =>
        // collections.find(
        //     (collection) =>
        //         collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        // )
    )
);

export const selectCollectionsFeching = createSelector(
    [selectShop],
    (shop) => shop.isFatching
);

export const selectCollectionsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
);
