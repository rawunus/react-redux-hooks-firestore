import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./withspinner.styles";

const WithSpinner =
    (WrapedComponent) =>
    ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrapedComponent {...otherProps} />
        );
    };

export default WithSpinner;
