/**
*
* TranslatedValidationField
*
*/

import React, { PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { TextField } from 'redux-form-material-ui';
import messages, { ERRORS } from './messages';
export { ERRORS } from './messages';

function TranslatedValidationField(props) {
  const {
    intl,
    meta,
    ...rest
  } = props;

  const error = meta.error ? intl.formatMessage(messages[meta.error] || messages[ERRORS.DEFAULT]) : meta.error;
  const newMeta = Object.assign({}, meta, { error });
  return (
    <TextField
      {...rest}
      meta={newMeta}
    />

  );
}

TranslatedValidationField.propTypes = {
  meta: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(TranslatedValidationField);
