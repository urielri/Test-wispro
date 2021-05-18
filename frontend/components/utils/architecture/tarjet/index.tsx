function Tarjet(props: { children: JSX.Element }): JSX.Element {
  const { children } = props;
  return (
    <>
      <div className="tarjet">{children}</div>
      <style jsx>{`
        .tarjet {
          width: fit-content;
          height: auto;
          display: flex;
          background-color: #ffffff;
          border-radius: 20px;
          flex-direction: column;
          row-gap: 24px;
          padding: 48px;
          box-shadow: 0px 0px 40px rgba(186, 185, 185, 0.25);
        }
      `}</style>
    </>
  );
}
export default Tarjet;
