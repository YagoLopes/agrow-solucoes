import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

import Nav from "../../components/nav";

export default function DemandsList() {
  const [demands, setDemands] = useState([])

  useEffect(() => {
    

    loadDemands()
  }, []);

  async function loadDemands() {
    const response = await api.get('/demands');

    setDemands(response.data);
  }

  async function destroy(id) {
    await api.delete(`/demands/${id}`);
    loadDemands();
  }

  return (
    <>
    <Nav/>
    <Container>
    <div>
        {demands.map((demand) => {
          return <article key={demand._id}>
<strong>{demand.title}</strong>
<time>{demand.limit}</time>
<p>{demand.description}</p>
<Link to={`/demands/edit/${demand._id}`}>Editar</Link>
<a className="destroy" onClick={()=>{destroy(demand._id)}} >Excluir</a>
          </article>
                 
        })}
        </div>
    </Container>
    </>
  );
}