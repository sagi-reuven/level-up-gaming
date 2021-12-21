import React from "react";
import Input from "./input";
import Joi from "joi";
class Form extends React.Component {
  /*  validate  input field */
  validateInput = ({ name, value }) => {
    /* rearrange data as object taking in the input name dynamically  */
    const data = {
      [name]: value,
    };
    /* creating a JOI schema dynamically */
    const schema = Joi.object({
      [name]: this.schema[name],
    });

    // checking the input via our schema object and return error if there is one or null if all is good
    const { error } = schema.validate(data);
    return error ? error.details[0].message : null;
  };

  // validate full form
  validateForm = () => {
    const {
      schema,
      state: { form },
    } = this;
    // check the full form schema -  return all errors from JOI if all good return null
    const { error } = Joi.object(schema).validate(form, { abortEarly: false });
    if (!error) {
      return null;
    }
    // create an empty object for errors
    const errors = {};
    // loop over error.ditales(JOI returns) and set them to error object
    for (const detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }
    return errors;
  };

  // handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    // create error variable and set it ti validateForm that returns errors if there is any
    const errors = this.validateForm();
    //set errors to state
    this.setState({
      errors,
    });
    // if there is error stop here
    if (errors) {
      return;
    }
    // if there is NO errors do somthing changes for each component
    this.doSubmit();
  };

  // handle any changes in input
  handleChange = ({ target }) => {
    const { form, errors } = this.state;

    this.setState({
      form: {
        ...form,
        // take a copy of form from the state and dynamically check each input name and value
        [target.name]: target.value,
      },
      errors: {
        ...errors,
        // take a copy of errors from the state and check dynamically that changes made in the input match the JOI schema via validateInput(target)
        [target.name]: this.validateInput(target),
      },
    });
  };
  // a function that renders an input component that display an input with all parameters and two way binding
  renderInput(name, label, type = "text", required) {
    const { form, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        onChange={this.handleChange}
        value={form[name]}
        error={errors && errors[name]}
        type={type}
        required={required}
      />
    );
  }
  // a function that renders a button that will be enabled only if validatForm conditions are met
  renderButton(label) {
    return (
      <button className="btn btn-outline-light btn-lg" disabled={this.validateForm()}>
        {label}
      </button>
    );
  }
}

export default Form;
