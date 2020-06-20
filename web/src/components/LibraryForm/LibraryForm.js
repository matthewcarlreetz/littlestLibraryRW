import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  NumberField,
} from '@redwoodjs/web'

const LibraryForm = (props) => {
  const onSubmit = (data) => {
    const castType = {
      ...data,
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
    }
    props.onSave(castType, props?.library?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>
        <TextField
          name="address"
          defaultValue={props.library?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="address" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>
        <TextField
          name="city"
          defaultValue={props.library?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="city" className="rw-field-error" />

        <Label
          name="state"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          State
        </Label>
        <TextField
          name="state"
          defaultValue={props.library?.state}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="state" className="rw-field-error" />

        <Label
          name="zip"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Zip
        </Label>
        <TextField
          name="zip"
          defaultValue={props.library?.zip}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="zip" className="rw-field-error" />

        <Label
          name="latitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Latitude
        </Label>
        <NumberField
          name="latitude"
          step={0.000001}
          defaultValue={props.library?.latitude}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="latitude" className="rw-field-error" />

        <Label
          name="longitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Longitude
        </Label>
        <NumberField
          name="longitude"
          defaultValue={props.library?.longitude}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          step={0.000001}
          validation={{ required: true }}
        />
        <FieldError name="longitude" className="rw-field-error" />

        <Label
          name="avatar"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Avatar
        </Label>
        <TextField
          name="avatar"
          defaultValue={props.library?.avatar}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="avatar" className="rw-field-error" />

        <Label
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>
        <TextField
          name="status"
          defaultValue={props.library?.status}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="status" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default LibraryForm
