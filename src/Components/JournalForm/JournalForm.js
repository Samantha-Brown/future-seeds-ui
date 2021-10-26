import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_JOURNAL_MUTATION } from "../../GraphQL/Mutations";
import './JournalForm.css'

const JournalForm = ({ userId }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [createJournalEntry, { error }] = useMutation(CREATE_JOURNAL_MUTATION)

  console.log(userId)

  const onSubmit = (data) => {
    createJournalEntry({
      variables: {
        userId: userId,
        date: data.date,
        description: data.description
      }
    })
  }

  if (error) {
    console.log(error)
  }

  return (
    <div className='journal-form-container'>
      <form className='journal-form' onSubmit={ handleSubmit(onSubmit) }>
        <input type="date" className='input-date' { ...register('date') } />
        <input placeholder='Description' className='input-description' { ...register('description') } />
        <input type='submit' className='entry-btn' />
      </form>
    </div>
  )
}

export default JournalForm;
