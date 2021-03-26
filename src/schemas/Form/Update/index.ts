import * as Yup from "yup"

export default Yup.object().shape({
    username: Yup.string().required("your username is required"),
    password: Yup.string().min(6).required("your password is required")
})

export const SchemaAllDataUser = Yup.object().shape({
    name: Yup.string().required("your name is required"),
    email: Yup.string().email("your e-mail is incorrect").required("your e-mail is required"),
    age: Yup.number().required("your age is required"),
    localization: Yup.string()
})
