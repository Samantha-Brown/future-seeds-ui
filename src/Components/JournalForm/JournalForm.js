import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_JOURNAL_MUTATION } from "../../GraphQL/Mutations";
import './JournalForm.css'

const JournalForm = ({ userId, handleChange }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [createJournalEntry, { error }] = useMutation(CREATE_JOURNAL_MUTATION)



  const onSubmit = (data, e) => {
    createJournalEntry({
      variables: {
        userId: userId,
        date: data.date,
        description: data.description
      }
    })
    handleChange(data)
    e.target.reset();
  }

  if (error) {
    console.log(error)
  }

  return (
    <div className='journal-form-container'>
      <h1 className='form-header'>New Journal Form</h1>
      <form className='journal-form' onSubmit={ handleSubmit(onSubmit) }>
        <input type="date" className='input-date' { ...register('date') } required/>
        <input placeholder='Description' className='input-description' { ...register('description') } required/>
        <input type='submit' className='new-entry-btn' />
      </form>
    </div>
  )
}

export default JournalForm;
