// Define the item type
type Order = {
    id: number;
    date: string; 
    client: string;
    owner: string;
    package: string;
    receiver: string;
    dropOff: string; 
    status: string;
  };
  
  // Create an array of items manually
  const orders: Order[] = [
    { 
      id: 1, 
      date: "2024-03-10", // Proper date format
      client: "John Doe", 
      owner: "Jane Smith", 
      package: "Electronics", 
      receiver: "Alice Brown", 
      dropOff: "yes", 
      status: "pending" 
    },
    { 
      id: 2, 
      date: "2024-03-11", 
      client: "Mark Johnson", 
      owner: "David Lee", 
      package: "Books", 
      receiver: "Emily Davis", 
      dropOff: "no", 
      status: "delivered" 
    }
  ];
  
  export default orders; // Optional: Export if needed
  