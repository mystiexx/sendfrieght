import React from 'react'
import Aux from '../hoc/Ax'
import  './Layout.css'
import Header from '../Header/Header'

const Layout = ( props ) => (
    <Aux className='Content'>
        <Header/>
        <main className='Content'>{props.children}</main>
    </Aux>
)

export default Layout