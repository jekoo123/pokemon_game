import React, { useState, useEffect, useCallback} from "react";
import "./PokewikiDetails.css";
import axios from 'axios';
import { useLocation } from "react-router-dom";

export const PokewikiDetails = () => {
    const location = useLocation();
	const index = location.state.index;

    const [data, setData] = useState({results:[],forms:[{name:""}],types: [{"type":{"name":""}}] });

    const Getapi = async() => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`+String(location.state.index)+'/');
      setData(response.data);
    }
    useEffect(() => {Getapi()}, []);

    return(
        <div class="body">
            <div class="box">
                <div>
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+String(index)+".png"}></img>
                </div>
                <div>
                    <p>{data.forms[0].name}</p>
                    <p>No.{index}</p>
                    <p>타입 : {JSON.stringify(data.types.map(item => item.type.name))}</p>
                    <p>{JSON.stringify(data.abilities)}</p>
                    <p>{JSON.stringify(data.stats)}</p>
                </div>
            </div>
        </div>
    );
};