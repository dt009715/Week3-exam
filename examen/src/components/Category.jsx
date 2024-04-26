import {dataLabel, categoryList} from "../data"


const Category = ({register,errors}) => {
   
    return (
        <div>
            <p>{dataLabel.category}</p>
            <select name="category" {...register('category', {require:true})} >
                <option value="">{categoryList.Groceries}</option>
                <option value="">{categoryList.Uitilities}</option>
                <option value="">{categoryList.Entertainment}</option>
            </select>
            {errors.name && <p style={{ color: 'red' }}>Name is mandatory</p>}
        </div>
    )
}

export default Category