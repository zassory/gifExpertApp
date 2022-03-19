import React, { useState } from 'react'
import { AddCategory } from '../src/components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  
  //Mi estado inicial es un arreglo        
  const [ categories , setCategories ] = useState(['Dragon Ball Z']);

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories= { setCategories }/>
        <hr />        
        <ol>
            { 
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />
                ))
            }
        </ol>
    </>
  )
}

