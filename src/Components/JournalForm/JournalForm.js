import { useForm } from "react-hook-form";
import './JournalForm.css'

const JournalForm = () => {
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data => console.log(data)

  return (
    <div className='journal-form-container'>
      <h1 className='form-header'>New Journal Form</h1>
      <form className='journal-form' onSubmit={ handleSubmit(onSubmit) }>
        <input placeholder='Date' className='input-date' { ...register('date') } />
        <input placeholder='Description' className='input-description' { ...register('description') } />
        <input type='submit' className='new-entry-btn' />
      </form>
    </div>
  )
}

export default JournalForm;
