import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const List = () => {
  const URl = 'http://localhost:3000/api';

  const [list, setlist] = useState([])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/food/list');
    console.log(response);
    if (response.data.success) {
      setlist(response.data.data)
    }
    else {
      toast.error("error")
    }
    useEffect(() => {
      fetchData();
    }, [])
  }
  return (

    <div>

    </div>
  );
}

export default List;
