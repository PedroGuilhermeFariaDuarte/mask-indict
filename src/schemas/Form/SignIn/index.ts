import * as Yup from "yup"

export default Yup.object().shape({
    username: Yup.string().required("your username is required"),
    password: Yup.string().min(6).required("your password is required")
})
