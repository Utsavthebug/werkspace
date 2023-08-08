import { InputValidator } from 'helpers/inputValidators'
import React from 'react'
import { isEmpty } from 'utils'

const useForm = (
  initialState: any,
  validate?: Function | undefined,
  onSubmitCallback?: Function | undefined
) => {
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState<typeof initialState>({})
  const [isSubmitting, setSubmitting] = React.useState(false)
  const [isSubmitted, setSubmitted] = React.useState(false)

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        setSubmitting(false)
      } else {
        setSubmitting(true)
      }
    }
  }, [errors])

  const onChange = async (name: string, value: any) => {
    const inputValue = Array.isArray(value)
      ? [...values[name], ...value]
      : typeof values[name] === 'object' && values[name]
      ? { ...values[name], value }
      : value
    const newValues = {
      ...values,
      [name]: inputValue,
    }
    setValues(newValues)
    if (isSubmitted) {
      let validationErrors = {}
      if (isEmpty(validate)) {
        validationErrors = await InputValidator(getFieldsToValidateValues(newValues))
      } else {
        validationErrors =
          validate &&
          validate({
            ...values,
            [name]: value,
          })
      }
      setErrors(validationErrors)
    }
  }
  const clearValues = () => {
    setValues(initialState)
    setSubmitting(false)
  }

  const onBlur = async () => {
    let validationErrors = {}
    if (isEmpty(validate)) {
      validationErrors = await InputValidator(getFieldsToValidateValues())
    } else {
      validationErrors = validate && validate(values)
    }

    setErrors(validationErrors)
  }

  async function onSubmit() {
    let validationErrors = {}
    if (isEmpty(validate)) {
      validationErrors = await InputValidator(getFieldsToValidateValues(values))
    } else {
      validationErrors = validate && validate(values)
    }
    setErrors(validationErrors)
    setSubmitting(true)
    setSubmitted(true)
    if (isEmpty(validationErrors)) onSubmitCallback && onSubmitCallback()
  }

  const getFieldsToValidateValues = (formValues?: any) => {
    const requiredFields = Object.keys(formValues).filter((item) => formValues[item]?.isRequired)
    const fieldsToValidate = {
      ...requiredFields.reduce(
        (acc, current) => ({ ...acc, [current]: formValues[current]?.value }),
        {}
      ),
    }
    return fieldsToValidate
  }
  return {
    onSubmit,
    onChange,
    onBlur,
    clearValues,
    values,
    errors,
    isSubmitting,
  }
}

export default useForm
