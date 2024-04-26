import { useForm } from 'react-hook-form';
import {dataLabel,categoryList} from "../data"
import InputButton from './input';


const FormExpense = () =>{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      

      const onSubmit = (data) => {
        console.log(data); 
    };
      
      

    return(
    <form onSubmit={handleSubmit(onSubmit)}  >
        <div>
            <label>{dataLabel.description} </label>
            <input type="text" {...register('description', {require:true})}  name="decription"/>
            
        </div>
        {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
       
        <div>
            <label>{dataLabel.amount}</label>
            <input type="number" {...register('amount', {require:true})}  name="amount" />
           
        </div>
        {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
    
    
        <div>
            <p>{dataLabel.category}</p>
            <select name="category" {...register('category', {require:true})} >
                <option >{categoryList.Groceries}</option>
                <option >{categoryList.Utilities}</option>
                <option >{categoryList.Entertainment}</option>
            </select>
            {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
        </div>
       
        <InputButton/>
    </form>
    )
}

export default FormExpense