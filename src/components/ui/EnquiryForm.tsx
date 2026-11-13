import { useState, type FormEvent } from 'react'
import { AlertCircle, Info } from 'lucide-react'
import { enquiryTopics, type EnquiryTopic } from '../../data/site'
import { Button } from './Button'

interface Values {
  name: string
  phone: string
  email: string
  topic: '' | EnquiryTopic
  message: string
  consent: boolean
}
type Errors = Partial<Record<keyof Values, string>>

const validate = (v: Values): Errors => {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  const digits = v.phone.replace(/[\s\-()]/g, '')
  if (!/^(\+?91)?[6-9]\d{9}$/.test(digits) && !/^\+?\d{8,15}$/.test(digits))
    e.phone = 'Please enter a valid phone number, for example +91 98765 43210.'
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = 'Please enter a valid email address, or leave this field empty.'
  if (!v.topic) e.topic = 'Please choose the nature of your enquiry.'
  if (v.message.trim().length < 10) e.message = 'Please tell us a little more (at least 10 characters).'
  if (!v.consent) e.consent = 'Please confirm your consent so the centre may contact you.'
  return e
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p className="field__error" id={`e-${id}`}>
      <AlertCircle size={15} aria-hidden="true" /> {message}
    </p>
  )
}

export function EnquiryForm({ initialTopic }: { initialTopic: '' | EnquiryTopic }) {
  const [values, setValues] = useState<Values>({ name: '', phone: '', email: '', topic: initialTopic, message: '', consent: false })
  const [errors, setErrors] = useState<Errors>({})
  const [preview, setPreview] = useState(false)

  const set = <K extends keyof Values>(k: K, v: Values[K]) => {
    setValues((s) => ({ ...s, [k]: v }))
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }))
  }

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    const found = validate(values)
    setErrors(found)
    setPreview(false)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    setPreview(true)
  }

  const err = (k: keyof Values) => (errors[k] ? { 'aria-invalid': true, 'aria-describedby': `e-${k}` } : {})

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <p className="form__req">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="field">
        <label htmlFor="f-name">Full Name <span className="req" aria-hidden="true">*</span></label>
        <input id="f-name" type="text" autoComplete="name" required value={values.name} onChange={(e) => set('name', e.target.value)} {...err('name')} />
        <FieldError id="name" message={errors.name} />
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="f-phone">Phone Number <span className="req" aria-hidden="true">*</span></label>
          <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" required value={values.phone} onChange={(e) => set('phone', e.target.value)} {...err('phone')} />
          <FieldError id="phone" message={errors.phone} />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email Address <span className="opt">(optional)</span></label>
          <input id="f-email" type="email" autoComplete="email" value={values.email} onChange={(e) => set('email', e.target.value)} {...err('email')} />
          <FieldError id="email" message={errors.email} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-topic">Nature of Enquiry <span className="req" aria-hidden="true">*</span></label>
        <select id="f-topic" required value={values.topic} onChange={(e) => set('topic', e.target.value as EnquiryTopic)} {...err('topic')}>
          <option value="" disabled>Select the nature of your enquiry</option>
          {enquiryTopics.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
        <FieldError id="topic" message={errors.topic} />
      </div>

      <div className="field">
        <label htmlFor="f-message">Message <span className="req" aria-hidden="true">*</span></label>
        <textarea id="f-message" rows={5} required value={values.message} onChange={(e) => set('message', e.target.value)} {...err('message')} />
        <FieldError id="message" message={errors.message} />
      </div>

      <div className="field field--check">
        <label className="check" htmlFor="f-consent">
          <input id="f-consent" type="checkbox" checked={values.consent} onChange={(e) => set('consent', e.target.checked)} {...err('consent')} />
          <span>
            I agree to be contacted regarding this enquiry and acknowledge the website's Privacy Policy.{' '}
            <span className="req" aria-hidden="true">*</span>
          </span>
        </label>
        <FieldError id="consent" message={errors.consent} />
      </div>

      <Button type="submit" arrow>SUBMIT ENQUIRY</Button>

      {preview && (
        <div className="form__preview" role="status">
          <Info size={20} aria-hidden="true" />
          <div>
            <strong>Frontend preview only.</strong>
            <p>
              Your details are valid, but this website is not yet connected to a system for receiving enquiries, so
              nothing has been sent. Please call the centre on the numbers shown on this page to make your enquiry.
            </p>
          </div>
        </div>
      )}
    </form>
  )
}
