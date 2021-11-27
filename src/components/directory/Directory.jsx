import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directorySelector";

import { DirectoryContainer } from "./directory.styles";
import MenuItem from "../menu-item/MenuItem";

const Directory = ({ sections }) => {
    return (
        <DirectoryContainer>
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </DirectoryContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
