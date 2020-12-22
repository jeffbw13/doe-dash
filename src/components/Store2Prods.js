const Store2Prods = ({ store, handleStoreClick }) => {
  //  this should display images of 'featured products,' but for now
  //    we'll display the first two products
  return (
    <>
      <div className="store-2-prods" onClick={() => handleStoreClick(store)}>
        <div className="store-2-prods-img">
          <img src={store.products[0].photo} />
          <img src={store.products[1].photo} />
        </div>
        <div className="store-2-prods-text">
          <p className="card-name">{store.name}</p>
          <p className="card-text">{store.description}</p>
        </div>
      </div>
    </>
  );
};

export default Store2Prods;
