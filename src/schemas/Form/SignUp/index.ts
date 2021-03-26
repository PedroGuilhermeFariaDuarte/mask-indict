import * as Yup from "yup"

export default Yup.object().shape({
    username: Yup.string().required("your username is required"),
    password: Yup.string().required("your password is required"),
    name: Yup.string().required("your name is required"),
    email: Yup.string().email("your e-mail is incorrect").required("youre-mail is required"),
    age: Yup.number().required("your age is requried")
})
