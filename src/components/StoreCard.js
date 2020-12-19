const StoreCard = ({ store, handleStoreClick }) => {
  return (
    <>
      <div className="store-card" onClick={() => handleStoreClick(store)}>
        <div className="store-card-img">
          <img src={store.photo} />
        </div>
        <h4>{store.name}</h4>
        <p>{store.description}</p>
      </div>
    </>
  );
};

export default StoreCard;
