import * as Yup from 'yup'
import localeID from './locale-id'

Yup.setLocale(localeID)

export default Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
    .label('E-mail'),
  password: Yup.string()
    .required()
    .label('Password')
})
