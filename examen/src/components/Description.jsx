import {dataLabel} from "../data"


const Description = ({register,errors}) =>{
    
    return(
        <div>
            <label>{dataLabel.description} </label>
            <input type="text" {...register('description', {require:true})}  name="decription"/>
            {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
        </div>
    )
}

export default Description