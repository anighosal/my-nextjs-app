const dynamicPage = ({ params, searchParamas }) => {
  console.log(searchParamas);
  return (
    <div>
      <h1>dynamic product page {params.productId}</h1>
    </div>
  );
};

export default dynamicPage;
