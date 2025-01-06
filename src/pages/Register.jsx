import { useState } from "react";

export default function Register() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] = useState({
        nameError: null,
        emailError: null,
        passwordError: null,
        usernameError: null,
        confirmPasswordError: null,
    });

    const [submitted, setSubmitted] = useState(false); // To track if the form is submitted

    const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@%*$#])[A-Za-z\\d@%*$#]{8,}$");
    const usernameRegex = new RegExp("^[^\\s]+$");

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setForm({
                ...form,
                name: e.target.value,
            });
            setFormErrors({
                ...formErrors,
                nameError: e.target.value.length === 0 ? "Required!" : null,
            });
        }
        if (e.target.name === "email") {
            setForm({
                ...form,
                email: e.target.value,
            });
            setFormErrors({
                ...formErrors,
                emailError:
                    e.target.value.length === 0
                        ? "Required!"
                        : !emailRegex.test(e.target.value)
                        ? "Wrong email format!"
                        : null,
            });
        }
        if (e.target.name === "username") {
            setForm({
                ...form,
                username: e.target.value,
            });
            setFormErrors({
                ...formErrors,
                usernameError:
                    e.target.value.length === 0
                        ? "Required!"
                        : !usernameRegex.test(e.target.value)
                        ? "Wrong username format!"
                        : null,
            });
        }
        if (e.target.name === "password") {
            setForm({
                ...form,
                password: e.target.value,
            });
            setFormErrors({
                ...formErrors,
                passwordError:
                    e.target.value.length === 0
                        ? "Required!"
                        : !passwordRegex.test(e.target.value)
                        ? "Invalid password!"
                        : null,
            });
        }
        if (e.target.name === "confirmpassword") {
            setForm({
                ...form,
                confirmPassword: e.target.value,
            });
            setFormErrors({
                ...formErrors,
                confirmPasswordError:
                    e.target.value.length === 0
                        ? "Required"
                        : form.password !== e.target.value
                        ? "Passwords don't match!"
                        : null,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // Trigger to show all errors

        // If there are no errors, alert the form data
        if (
            !formErrors.nameError &&
            !formErrors.emailError &&
            !formErrors.passwordError &&
            !formErrors.usernameError &&
            !formErrors.confirmPasswordError
        ) {
            alert(JSON.stringify(form));
        }
    };

    return (
        <>
            <form className="mx-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        onChange={handleChange}
                        name="name"
                    />
                    {submitted && formErrors.nameError && (
                        <div id="nameHelp" className="form-text text-danger">
                            {formErrors.nameError}
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={handleChange}
                        name="email"
                    />
                    {submitted && formErrors.emailError && (
                        <div id="emailHelp" className="form-text text-danger">
                            {formErrors.emailError}
                        </div>
                    )}
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputUserName" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputUserName"
                        onChange={handleChange}
                        name="username"
                    />
                    {submitted && formErrors.usernameError && (
                        <div id="usernameHelp" className="form-text text-danger">
                            {formErrors.usernameError}
                        </div>
                    )}
                    <div id="usernameHelp" className="form-text">
                        Username contains no spaces.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={handleChange}
                        name="password"
                    />
                    {submitted && formErrors.passwordError && (
                        <div id="passwordHelp" className="form-text text-danger">
                            {formErrors.passwordError}
                        </div>
                    )}
                    <div id="passwordHelp" className="form-text">
                        Password should be at least 8 characters, contain one lowercase letter, one uppercase letter, one digit, and a special character [e.g. *@%$#].
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputConfirmPassword1" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputConfirmPassword1"
                        onChange={handleChange}
                        name="confirmpassword"
                    />
                    {submitted && formErrors.confirmPasswordError && (
                        <div id="confirmPasswordHelp" className="form-text text-danger">
                            {formErrors.confirmPasswordError}
                        </div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary bg-white">
                    Submit
                </button>
            </form>
        </>
    );
}
