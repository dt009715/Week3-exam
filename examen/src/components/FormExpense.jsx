import { useForm } from 'react-hook-form';
import {dataLabel,categoryList} from "../data"
import InputButton from './input';
import ExpenseList from './ExpenseList';
import { useState } from 'react';


const FormExpense = () =>{
    const [expenses, setExpenses] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      

      const onSubmit = (data) => {
        const { description, amount, category } = data;
        const newExpense = { description, amount, category };
        setExpenses(newExpense);
        console.log(expenses.description)
    };
        
      
      

    return(
        <>
    <div><form onSubmit={handleSubmit(onSubmit)}  >
        <div>
            <label>{dataLabel.description} </label>
            <input type="text" {...register('description', {require:true})}  />
            
        </div>
        {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
       
        <div>
            <label>{dataLabel.amount}</label>
            <input type="number" {...register('amount', {require:true})} />
           
        </div>
        {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
    
    
        <div>
            <p>{dataLabel.category}</p>
            <select  {...register('category', {require:true})} >
                <option >{categoryList.Groceries}</option>
                <option >{categoryList.Utilities}</option>
                <option >{categoryList.Entertainment}</option>
            </select>
            {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
        </div>
       
        <InputButton/>
    </form> </div>

        <div>
            <ExpenseList  expenses={expenses} />
        </div>
   
    
    </>
    )
}

export default FormExpense