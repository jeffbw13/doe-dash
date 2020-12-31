import star from "../assets/icons/star.svg";

const Store2Prods = ({ store, handleStoreClick }) => {
  //  this should display images of 'featured products,' but for now
  //    we'll display the first two products
  let dollars = "";
  for (let x = 1; x <= store.cost; x++) {
    dollars += "$";
  }
  return (
    <>
      <div className="store-2-prods" onClick={() => handleStoreClick(store)}>
        <div className="store-2-prods-img">
          <img src={store.products[0].photo} />
          <img src={store.products[1].photo} />
        </div>
        <div className="store-2-prods-text">
          <div className="store-2-prods-name">{store.name}</div>
          <div className="store-2-prods-line">
            <div>
              {dollars} • {store.categories.join(", ")}
            </div>
            <div>Ready in ?? min</div>
          </div>
          <div className="store-2-prods-line">
            <div>
              {store.stars}
              <img
                style={{ width: "15px", height: "15px", fill: "#191919" }}
                src={star}
              />
              {store.ratings} ratings
            </div>
            <div>
              {store.distance}
              &nbsp;miles
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store2Prods;

/*

*/
