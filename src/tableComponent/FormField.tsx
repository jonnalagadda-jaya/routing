import AppFormInput from './AppFormInput';
import { EMAIL_FVM, ID_FVM, NAME_FVM, PHONE_FVM, SUBMIT, CLOSE, ID_PLACEHOLDER, NAME_PLACEHOLDER, EMAIL_PLACEHOLDER, PHONENUMBER_PLACEHOLDER } from '../utils/appConstants';
import { Button } from '../components/ui/button';
import { useForm } from 'react-hook-form';
import { IconInput } from '../components/ui/input';
import { Student } from '../typescomponents/types';
import { useNavigate } from 'react-router-dom';

interface FormFieldProps{
  saveStudent: (student: Student) =>void
}
function FormField({saveStudent}:FormFieldProps) {

    const navigate = useNavigate()
    const { register, handleSubmit, formState, reset } = useForm<Student>();
    const { errors } = formState;

    function onSubmit(vals: Student) {
      console.log("Submitting student data:", vals);
      saveStudent(vals)
      reset()
    }

    function handleCancle() {
      navigate('/')
    }

    return (
      <div className='flex justify-center items-center h-screen bg-slate-100'>
        <div className='bg-white pl-10 rounded w-[35vw] h-[70vh]'>
        <form className='h-[70vh] mt-20' onSubmit={handleSubmit(onSubmit)}>
          <AppFormInput error={errors?.id?.message}>
            <IconInput {...register("id", { required: ID_FVM })} placeholder={ID_PLACEHOLDER} iconType="id" />
          </AppFormInput>    
          <AppFormInput error={errors?.name?.message}>
            <IconInput {...register("name", { required: NAME_FVM })} iconType="name" placeholder={NAME_PLACEHOLDER} />
          </AppFormInput>   
          <AppFormInput error={errors?.email?.message}>
            <IconInput {...register("email", { required: EMAIL_FVM })} iconType="email" placeholder={EMAIL_PLACEHOLDER} />
          </AppFormInput>   
          {/* <AppFormInput error={errors?.image?.message}>
            <IconInput {...register("image")} iconType="image" inputType= "file"/>
          </AppFormInput>   */}
          <AppFormInput error={errors?.phNo?.message}>
            <IconInput {...register("phNo", { required: PHONE_FVM })} iconType="mbNo" placeholder={PHONENUMBER_PLACEHOLDER} />
          </AppFormInput> 
          <div className='flex justify-evenly'> 
          <Button className='text-2xl ' type="submit">{SUBMIT}</Button>  
          <Button className='text-2xl' type="button" onClick={handleCancle}>{CLOSE}</Button>
          </div> 
        </form>
      </div>
      </div>
    );
}

export default FormField;
