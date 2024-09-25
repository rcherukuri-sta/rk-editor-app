import React from 'react';
import PropTypes from 'prop-types';
import { CKEditorBase } from 'cke-8201'

function Container({data}) {

    console.log(data, 'data')

    return (
        <>
            {data && data?.length > 0 &&
                data?.map((element, index) => {
                    return (
                        <div key={index} style={{ margin: '10px' }} >
                            {`${index}`}
                            <CKEditorBase
                                data={`This item index is : ${index} and text is ${element}`}
                            />
                        </div>
                    )
                })
            }
        </>
    );
}

export default Container;

Container.propTypes = {
    data: PropTypes.array,
}