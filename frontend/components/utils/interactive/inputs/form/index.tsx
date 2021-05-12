import React from 'react'
function Form(props) {
  const { children, onSubmit,className } = props;

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} className={className}>
        {children}
        <input style={{ display: 'none' }} type="submit" />
      </form>
    </>
  );
}
export default React.memo(Form);
