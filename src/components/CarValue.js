import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCards = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return filteredCards.reduce((acc, car)=>{
      return acc+ car.cost;
    },0)
    // let cost= 0;
    // for(let car of filteredCards){
    //   cost +=car.cost
    // }
    // return cost;
  });
  return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;
