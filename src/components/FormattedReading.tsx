import * as React from 'react';
import { FunctionComponent } from 'react';

import GeneratedLink from '../common/GeneratedLink';

import Reading from '../types/Reading';

/**
 * A Reading to be formatted.
 */
interface FormattedReadingProps {
    reading: Reading;
}

/**
 * Render a Reading as a <span /> to be displayed.
 */
export const FormattedReading: FunctionComponent<FormattedReadingProps> = (props) => {
    return(
        <React.Fragment>
            <span>
                {
                    // Optionally an author and then pad.
                    props.reading.authorText &&
                    <React.Fragment>
                        { props.reading.authorText }.
                        <span> </span>
                    </React.Fragment>
                }
                {
                    // Always include a title, optionally with a link.
                }
                {
                    !props.reading.link &&
                    <React.Fragment>
                        { props.reading.title }
                    </React.Fragment>
                }
                {
                    props.reading.link &&
                    <React.Fragment>
                        <GeneratedLink href={ props.reading.link }>
                            { props.reading.title }
                        </GeneratedLink>.
                    </React.Fragment>
                }
                {
                    // Optionally pad and then a publicationText.
                    props.reading.publicationText &&
                    <React.Fragment>
                        <span> </span>
                        { props.reading.publicationText }.
                    </React.Fragment>
                }
            </span>
        </React.Fragment>
    );
}

export default FormattedReading;
