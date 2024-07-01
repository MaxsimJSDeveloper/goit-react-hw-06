import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsSlice";
import { addContactSchema } from "../../js/validation";
import { handleKeyPress } from "../../js/handleKeyPress";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  const id = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      validationSchema={addContactSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(),
          name: values.username,
          number: values.number,
        };
        dispatch(addContact(newContact));
        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <label htmlFor={`${id}-n`} className={css.label}>
          Username
        </label>
        <div className={css.wrap}>
          <Field
            type="text"
            name="username"
            id={`${id}-n`}
            className={css.inputField}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.errorMessage}
          />
        </div>

        <label htmlFor={`${id}-p`} className={css.label}>
          Phone
        </label>
        <div className={css.wrap}>
          <Field
            type="text"
            name="number"
            pattern="\d*"
            onKeyPress={handleKeyPress}
            id={`${id}-p`}
            className={css.inputField}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </div>

        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
