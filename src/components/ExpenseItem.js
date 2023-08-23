import './ExpenseItem.css';

function ExpenseItem(){
return(
    <div className="expense-item">
        <div> march 12 2023</div>
        <div className='expense-item__description'> <h2>Car insurance</h2></div>
        <div className='expense-item__price'> $200</div>
    </div>
);

}

export default ExpenseItem;