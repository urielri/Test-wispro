import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowDown } from '@/components/SVG';
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';
import { gql } from '@apollo/client';
import { GetProductsBySearch } from '@/api/queries';

// Styles
import styles from './style.module.scss';

const queryGetProducts = gql`
  query getProductsSearch($search: String) {
    getProductsSearch(search: $search) {
      id
      slug
      name
      images
    }
  }
`;

function Search() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const { visible, setVisible, ref } = useOutsideAlerter(false);
  const { getProducts, data, loading, error } = GetProductsBySearch({
    query: queryGetProducts,
  });

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value !== '') {
      setVisible(true);
      getProducts({
        variables: {
          search: e.target.value,
        },
      });
    } else {
      setVisible(false);
    }
  };
  if (error) {
    console.log(error);
  }

  return (
    <div ref={ref} className={styles.searchLayout}>
      <input
        className={styles.input}
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Buscar productos"
      />
      {!loading && console.log(data)}
      {visible && (
        <div className={styles.searchContainer}>
          {data && data.getProductsSearch ? (
            data.getProductsSearch.map((product) => {
              return (
                <div
                  onClick={() => {
                    router.push(`/producto/${product.slug}`);
                    setVisible(false);
                    setValue('');
                  }}
                  key={product.id}
                  className={styles.searchItem}
                >
                  <Link href={`/producto/${product.slug}`}>
                    <a>
                      <img src={product.images[0]} alt={product.name} />
                    </a>
                  </Link>
                  <div className={styles.searchItemTitle}>
                    <Link href={`/producto/${product.slug}`}>
                      <a>{product.name}</a>
                    </Link>
                  </div>
                  <div className={styles.searchItemArrow}>
                    <Link href={`/producto/${product.slug}`}>
                      <a>
                        <ArrowDown />
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ color: 'black' }}>Loading...</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
