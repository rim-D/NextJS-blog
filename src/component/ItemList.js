import Link from 'next/link'

import { Grid, Image } from 'semantic-ui-react';
import styles from './ItemList.module.css';

export default function ItemList({ list }) {
    return (
        <div>
            <Grid columns={3}>
            <Grid.Row>
                {list.map((item) => (
                    
                    <Grid.Column key={item.id}>
                        <Link href={`/view/${item.id}`}>
                            <a>
                                <div className={styles.list_wrap}>
                                    <img 
                                        src={item.image_link} 
                                        alt={item.name}
                                        className={styles.img_item}
                                    />
                                    <strong className={styles.title_item}>{item.name}</strong>
                                    <span className={styles.text_info}>
                                        {item.category}{item.product_type}
                                    </span>
                                    <strong className={styles.num_price}>${item.price}</strong>
                                </div>
                            </a>
                        </Link>
                    </Grid.Column>
                    
                ))}
                </Grid.Row>
            </Grid>
        </div>
    );
}