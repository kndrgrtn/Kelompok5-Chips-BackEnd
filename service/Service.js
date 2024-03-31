import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SafeAreaView, Text } from 'react-native';

const api = "https://05b6-2001-448a-40a1-17f8-d053-1ade-a560-edbd.ngrok-free.app/";

const useGetBarang = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${api}api/products`, {headers:{'ngrok-skip-browser-warning':'true'}})
        .then((response) =>{
            setData(response.data);
            console.log(response.data);
        })
        .catch((error) =>{
            console.log(error);
        });
    }, []);

    return data;
};

const useGetCart = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get(`${api}api/cart/my-cart`, {headers:{'ngrok-skip-browser-warning':'true'}})
        .then((response) =>{
            setData(response.data);
            console.log(response.data);
        })
        .catch((error) =>{
            console.log(error);
        });
    }, []);

    return data;
};

const useGetUser = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        // Lakukan sesuatu di sini
    }, []);

    return data;
};

export { useGetBarang, useGetCart, useGetUser };