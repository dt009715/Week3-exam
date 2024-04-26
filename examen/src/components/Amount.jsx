import {dataLabel} from "../data"




const Amount = ({register,errors}) => {
    
    return (
        <div>
            <label >{dataLabel.amount} </label>
            <input type="number" {...register('amount', {require:true})}  name="amount" />
            {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
        </div>
    )
}

export default Amount