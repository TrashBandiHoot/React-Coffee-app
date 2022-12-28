import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseCream, chooseAddedFlavor } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface CoffeeFormProps {
  id?: string;
  data?: {};
};

interface ContactState {
  name: string;
  cream: string;
  added_flavor: string;
};

export const CoffeeForm = (props:CoffeeFormProps) => {

  const dispatch = useDispatch();
  const store = useStore();
  const name = useSelector<ContactState>(state => state.name)
  const {register, handleSubmit} = useForm({ })

  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    if(props.id!){
      server_calls.update(props.id!, data);
      console.log(`Updated : ${data} ${props.id}`);
      console.log(data);
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseCream(data.cream));
      dispatch(chooseAddedFlavor(data.added_flavor));
      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000)
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='name'>Coffee Name</label>
            <input {...register('name')} name="name" placeholder='Name' />
          </div>
          <div>
            <label htmlFor='cream'>Cream</label>
            <input {...register('cream')} name="cream" placeholder='Cream' />
          </div>
          <div>
            <label htmlFor='added_flavor'>Extra Ingredients</label>
            <input {...register('added_flavor')} name="added_flavor" placeholder='Added Flavor' />
          </div>
          <Button type='submit'>Submit</Button>
        </form>
    </div>
  )
}
