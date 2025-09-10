import { getUserAccounts } from '@/actions/dashboard'
import React from 'react'
import { AddTransactionForm } from './_component/transaction-form';
import { defaultCategories } from '@/data/categories';

const AddTransactionPage = async() => {
  const accounts=await getUserAccounts();
  return (
    <div >
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
      />
    </div>
  )
}

export default AddTransactionPage
