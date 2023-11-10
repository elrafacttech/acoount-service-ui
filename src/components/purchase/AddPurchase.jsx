import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../Pages/Layout'
import "./Purchase.css"
import { useNavigate } from 'react-router-dom';

const AddPurchase = () => {

    return (
        <Layout>
            <label for="fname">Product Name:</label>
            <input type="text" id="fname" name="fname"></input><br/><br/>
            <label for="fname">Product Catogery:</label>
            <input type="text" id="fname" name="fname"></input><br/><br/>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"></input><br/><br/>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"></input><br/><br/>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"></input><br/><br/>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"></input>
        </Layout>

    )
}
export default AddPurchase
