import Axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Item from '../../src/component/Item';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
      Axios.get(API_URL)
      .then((res) => {
          console.log('products_data====',res.data);
          setItem(res.data);
      })
  }

  useEffect(() => {
      if(id && id > 0) {
        getData();
      }
  }, [id]);

  return <Item item={item}/>
}

export default Post;


/**
 * [id].js로파일 설정 시,
 * [id]값으로 라우터가 됨
 * [pid].js로 했을 시 {pid}로 설정하면 됨
 */