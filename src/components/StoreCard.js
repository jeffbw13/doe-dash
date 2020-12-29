const StoreCard = ({ store, handleStoreClick }) => {
  const blackOwned = store.blackOwned ? "Black owned" : "";
  return (
    <>
      <div className="store-card" onClick={() => handleStoreClick(store)}>
        <div className="store-card-img">
          <img src={store.photo} />
        </div>
        <div className="store-card-text">
          <p className="card-name">{store.name}</p>
          <p className="card-text">{store.description}</p>
          {`${store.stars} stars     ${blackOwned}`}
        </div>
      </div>
    </>
  );
};

export default StoreCard;
