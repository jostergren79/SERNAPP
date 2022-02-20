import { useState } from 'react'

export const Checkbox = () => {
    const [productOne, setProductOneChecked] = useState(false);
    const [productTwo, setProductTwoChecked] = useState(false);
  
    const handleChangeOne = () => {
        setProductOneChecked(!productOne);
    };
  
    const handleChangeTwo = () => {
        setProductTwoChecked(!productTwo);
    };
  
    return (

      <div>
          <h2>Product</h2>

        <Checkbox
          label="Product 1"
          value={productOne}
          onChange={handleChangeOne}
        />
        <Checkbox
          label="Product 2"
          value={productTwo}
          onChange={handleChangeTwo}
        />
      </div>

    );
  };