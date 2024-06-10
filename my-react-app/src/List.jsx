function List() {
    const fruits =[{name:"apple",calories:95},{name:'orange',calories:45},{name:'coconut',calories: 105},{name:'banana',calories:199}];
    const listItem = fruits.map(fruits=> <li>{fruits.name}</li>)
    return <ol>{listItem}</ol>;
}
export default List